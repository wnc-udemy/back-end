const httpStatus = require('http-status');
const request = require('request');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const config = require('../config/config');
const logger = require('../config/logger');

// Sends response messages via the Send API
function callSendAPI(senderPSID, response) {
  // Construct the message body
  const requestBody = {
    recipient: {
      id: senderPSID,
    },
    message: { text: response },
  };

  // Send the HTTP request to the Messenger Platform
  request(
    {
      uri: 'https://graph.facebook.com/v7.0/me/messages',
      qs: { access_token: config.chatbot.facebookToken },
      method: 'POST',
      json: requestBody,
    },
    (err) => {
      if (!err) {
        logger.info('message sent!');
      } else {
        logger.error(`Unable to send message:${err}`);
      }
    }
  );
}

function handlePostback(senderPSID, receivedPostback) {
  let response;

  // Get the payload for the postback
  const { payload } = receivedPostback;

  // Set the response based on the postback payload
  if (payload === 'yes') {
    response = { text: 'Thanks!' };
  } else if (payload === 'no') {
    response = { text: 'Oops, try sending another image.' };
  }
  // Send the message to acknowledge the postback
  callSendAPI(senderPSID, response);
}

// function firstTrait(nlp, name) {
//     return nlp && nlp.entities && nlp.entities[name] && nlp.entities[name][0];
// }

function firstTrait(nlp, name) {
  return nlp && nlp.entities && nlp.traits[name] && nlp.traits[name][0];
}

const callSendAPIWithTemplate = (senderPSID) => {
  // document fb message template
  // https://developers.facebook.com/docs/messenger-platform/send-messages/templates
  const body = {
    recipient: {
      id: senderPSID,
    },
    message: {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'generic',
          elements: [
            {
              title: 'Want to build sth awesome?',
              image_url: 'https://www.nexmo.com/wp-content/uploads/2018/10/build-bot-messages-api-768x384.png',
              subtitle: 'Watch more videos on my youtube channel ^^',
              buttons: [
                {
                  type: 'web_url',
                  url: 'https://bit.ly/subscribe-haryphamdev',
                  title: 'Watch now',
                },
              ],
            },
          ],
        },
      },
    },
  };

  request(
    {
      uri: 'https://graph.facebook.com/v6.0/me/messages',
      qs: { access_token: config.chatbot.facebookToken },
      method: 'POST',
      json: body,
    },
    (err) => {
      if (!err) {
        logger.info('message sent!');
      } else {
        logger.error(`Unable to send message:${err}`);
      }
    }
  );
};

function handleMessage(senderPSID, message) {
  // handle message for react, like press like button
  // id like button: sticker_id 369239263222822

  if (message && message.attachments && message.attachments[0].payload) {
    callSendAPI(senderPSID, 'Thank you for watching my video !!!');
    callSendAPIWithTemplate(senderPSID);
    return;
  }

  const entitiesArr = ['wit$greetings', 'wit$thanks', 'wit$bye'];
  let entityChosen = '';
  entitiesArr.forEach((name) => {
    const entity = firstTrait(message.nlp, name);
    if (entity && entity.confidence > 0.8) {
      entityChosen = name;
    }
  });

  if (entityChosen === '') {
    // default
    callSendAPI(senderPSID, `The bot is needed more training, try to say "thanks a lot" or "hi" to the bot`);
  } else {
    if (entityChosen === 'wit$greetings') {
      // send greetings message
      callSendAPI(senderPSID, 'Hi there! This bot is created by Farmdemy. Learn more on @farmdemy page!');
    }
    if (entityChosen === 'wit$thanks') {
      // send thanks message
      callSendAPI(senderPSID, `You 're welcome!`);
    }
    if (entityChosen === 'wit$bye') {
      // send bye message
      callSendAPI(senderPSID, 'bye-bye!');
    }
  }
}

const postWebhook = catchAsync(async (req, res) => {
  // Parse the request body from the POST
  const { body } = req;

  // Check the webhook event is from a Page subscription
  if (body.object === 'page') {
    // Iterate over each entry - there may be multiple if batched
    body.entry.forEach(function (entry) {
      // Gets the body of the webhook event
      const webhookEvent = entry.messaging[0];
      logger.info(webhookEvent);

      // Get the sender PSID
      const senderPSID = webhookEvent.sender.id;
      logger.info(`Sender PSID: ${senderPSID}`);

      // Check if the event is a message or postback and
      // pass the event to the appropriate handler function
      if (webhookEvent.message) {
        handleMessage(senderPSID, webhookEvent.message);
      } else if (webhookEvent.postback) {
        handlePostback(senderPSID, webhookEvent.postback);
      }
    });

    // Return a '200 OK' response to all events
    res.status(200).send('EVENT_RECEIVED');
  } else {
    // Return a '404 Not Found' if event is not from a page subscription
    throw new ApiError(httpStatus.NOT_FOUND, 'Chatbot not found');
  }
});

const getWebhook = catchAsync(async (req, res) => {
  // Your verify token. Should be a random string.
  const VERIFY_TOKEN = config.chatbot.verifyToken;

  // Parse the query params
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  // Checks if a token and mode is in the query string of the request
  if (mode && token) {
    // Checks the mode and token sent is correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      // Responds with the challenge token from the request
      logger.info('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
    }
  } else {
    // Responds with '400 Bad request' if mode, token, challenge undefined
    throw new ApiError(httpStatus.BAD_REQUEST, 'Bad request');
  }
});

module.exports = {
  getWebhook,
  postWebhook,
};

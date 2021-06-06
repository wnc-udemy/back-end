const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const historyValidation = require('../../validations/history.validation');
const historyController = require('../../controllers/history.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('history.create'), validate(historyValidation.createHistory), historyController.createHistory)
  .get(auth('history.gets'), validate(historyValidation.getHistories), historyController.getHistories);

router
  .route('/:historyId')
  .get(auth('history.get'), validate(historyValidation.getHistory), historyController.getHistory)
  .patch(auth('history.update'), validate(historyValidation.updateHistory), historyController.updateHistory)
  .delete(auth('history.delete'), validate(historyValidation.deleteHistory), historyController.deleteHistory);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Histories
 *   description: History management and retrieval
 */

/**
 * @swagger
 * /histories:
 *   post:
 *     summary: Create a history
 *     description: Only user can create owner histories.
 *     tags: [Histories]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - lecture
 *               - course
 *               - atTime
 *             properties:
 *               name:
 *                 type: string
 *               url:
 *                 type: string
 *               atTime:
 *                 type: number
 *               lengthTime:
 *                 type: number
 *               status:
 *                 type: number
 *               type:
 *                 type: number
 *               lecture:
 *                 type: string
 *               section:
 *                 type: string
 *               course:
 *                 type: string
 *             example:
 *               section: 609b9838b28d283ef805f15d
 *               course: 609b9838b28d283ef805f15d
 *               lecture: 609b9838b28d283ef805f35d
 *               atTime: 60
 *               lengthTime: 3600
 *               url: 'https://www.facebook.com/'
 *               type: 0
 *               status: 0
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/History'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all histories
 *     description: All user can retrieve all histories.
 *     tags: [Histories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name:asc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of histories
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/History'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /histories/{id}:
 *   get:
 *     summary: Get a history
 *     description: Only users can fetch owner histories.
 *     tags: [Histories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: History id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/History'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a history
 *     description: Only user can update owner histories.
 *     tags: [Histories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: History id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               atTime:
 *                 type: number
 *               status:
 *                 type: number
 *             example:
 *               status: 1
 *               atTime: 60
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/History'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a history
 *     description: Only admins can delete other histories.
 *     tags: [Histories]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: History id
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

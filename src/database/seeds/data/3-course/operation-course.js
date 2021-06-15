const moment = require('moment');
const { getObjectId, getObjectIds } = require('../../helpers/index');

const operationCourses = [
  {
    _id: getObjectId('Operations 1'),
    name: 'Robotic Process Automation - RPA Overview',
    url:
      'https://img-c.udemycdn.com/course/240x135/1340842_f36d_7.jpg?Expires=1622020088&Signature=FQkUyEi-M~q~GIxpLyvaXpgLsmil58dZpDna2oSo~m6CFgtqOEy~Tyg~dDcN0Wr6TLsve9~pw7ryvki4h15560ktP5y8N0M3TsmKVjSClk5K0aPm6l1hB868aQB~gY3Z6Nnzy2RoqApRGSzUoG1jUMbP4WIRpjZuZMQUe8pkckhhYpvImGoCNY1L2SxoOlq-i43XGigG4DegXch6ISnoo0zejk5aegk-aDlj3yaygeJrpV5WXcNftK0pz3bSC90dgbhLH2SkS5lHpShV9tGK9POVIkf2NojM5sPtoeYbZmbw~2-WlIkCc5RZ8UCafJllVTXzZ5xTooXtBTX77e9G1w__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    urlThumb:
      'https://img-c.udemycdn.com/course/240x135/1340842_f36d_7.jpg?Expires=1622020088&Signature=FQkUyEi-M~q~GIxpLyvaXpgLsmil58dZpDna2oSo~m6CFgtqOEy~Tyg~dDcN0Wr6TLsve9~pw7ryvki4h15560ktP5y8N0M3TsmKVjSClk5K0aPm6l1hB868aQB~gY3Z6Nnzy2RoqApRGSzUoG1jUMbP4WIRpjZuZMQUe8pkckhhYpvImGoCNY1L2SxoOlq-i43XGigG4DegXch6ISnoo0zejk5aegk-aDlj3yaygeJrpV5WXcNftK0pz3bSC90dgbhLH2SkS5lHpShV9tGK9POVIkf2NojM5sPtoeYbZmbw~2-WlIkCc5RZ8UCafJllVTXzZ5xTooXtBTX77e9G1w__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    fee: 80.99,
    discount: 0.59,
    averageRating: 3.7,
    totalTime: 4340,
    totalLecture: 25,
    targets: [
      'The ins and outs of HTML5, CSS3, and Modern JavaScript for 2021',
      'Create responsive, accessible, and beautiful layouts',
      'Continue to learn and grow as a developer, long after the course ends',
      'Create a complicated yelp-like application from scratch',
      'Create static HTML and CSS portfolio sites and landing pages',
      'Make REAL web applications using cutting-edge technologies',
      'Recognize and prevent common security exploits like SQL-Injection & XSS',
      'Create a blog application from scratch using Node, Express, and MongoDB.',
      'Deploy your applications and work with cloud databases',
      'Create static HTML and CSS portfolio sites and landing pages',
      'Think like a developer. Become an expert at Googling code questions!',
    ],
    introDescription: `
    COMPLETELY REDONE - The only course you need to learn web development - HTML, CSS, JS, Node, and More!
    `,
    detailDescription: `Become a Python Programmer and learn one of employer's most requested skills of 2021!

    This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.
    
    With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!
    
    Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!
    
    This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!
    
    We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we've got you covered.`,
    updatedAt: moment().toISOString(),
    createdAt: moment().toISOString(),
    status: 2,
    instructor: getObjectId('Nguyen Thien Ly'),
    students: getObjectIds(['Hoang Dan An', 'Nguyen Van Linh', 'Vo Cong Kiet', 'Trinh Nhat Sinh']),
    introLectures: [],
    comments: [],
    sections: getObjectIds([
      'Operation 1 - Section 1',
      'Operation 1 - Section 2',
      'Operation 1 - Section 3',
      'Operation 1 - Section 4',
      'Operation 1 - Section 5',
    ]),
    viewers: getObjectIds([
      'Hoang Thi Ngoc Hanh',
      'Hoang Dan An',
      'Nguyen Van Linh',
      'Vo Kong Kiet',
      'Trinh Nhat Sinh',
      'Doan Khue',
      'Ngo Quoc Si Linh',
      'Dao Thi Tu Anh',
      'Nguyen Hong Xuan Trang',
      'Nguyen Hoang Luu',
      'Dao Tu Trinh',
      'Nguyen Hong Xua Mai',
      'Tran Huynh Phat',
      'Ho Trung Nguyen',
      'Ca Le Nhat Nguyen',
      'Tran Thi Bich Van',
      'Tran Hau Hung',
    ]),
  },
  {
    _id: getObjectId('Operations 2'),
    name: 'Certified Six Sigma White Belt',
    url:
      'https://img-c.udemycdn.com/course/240x135/687720_abb3_4.jpg?Expires=1622001760&Signature=FD1IExwFaIn3Y1K4q-y9ClmfaewdjaUqpphEssskZDIaakRz0loAHz461fIdhwB7phPecWscM~92qJ32W0AyVOQ8qaaYRYYEdKoKRNuptjn9VZ8XAm8fwnzDNWS2iWDGrktAScj4fFtJEio0fwcg9UzUKULwbG02mQPj2lYuOdQqzgT758985XgcM2WZxA74EO267ypPd0fXk8XgoG3FCvlk71mZXJ7~9Ru6~J-M3qiu905epMfaQ5xFqpLqvDaIDykyrEoR-dz947wLoWc74gJtYRV99KiQzJ28cA-2Ns1c0VC5quUsB2MDbhEJkaNRoHPpCBpgtg73vVG-hEsXyw__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    urlThumb:
      'https://img-c.udemycdn.com/course/240x135/687720_abb3_4.jpg?Expires=1622001760&Signature=FD1IExwFaIn3Y1K4q-y9ClmfaewdjaUqpphEssskZDIaakRz0loAHz461fIdhwB7phPecWscM~92qJ32W0AyVOQ8qaaYRYYEdKoKRNuptjn9VZ8XAm8fwnzDNWS2iWDGrktAScj4fFtJEio0fwcg9UzUKULwbG02mQPj2lYuOdQqzgT758985XgcM2WZxA74EO267ypPd0fXk8XgoG3FCvlk71mZXJ7~9Ru6~J-M3qiu905epMfaQ5xFqpLqvDaIDykyrEoR-dz947wLoWc74gJtYRV99KiQzJ28cA-2Ns1c0VC5quUsB2MDbhEJkaNRoHPpCBpgtg73vVG-hEsXyw__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    fee: 94.99,
    discount: 0.8,
    averageRating: 4.1,
    totalTime: 4340,
    totalLecture: 28,
    targets: [
      'Develop modern, complex, responsive and scalable web applications with Angular 12',
      'Use the gained, deep understanding of the Angular fundamentals to quickly establish yourself as a frontend developer',
      'Fully understand the architecture behind an Angular application and how to use it',
      'Create single-page applications with one of the most modern JavaScript frameworks out there',
    ],
    introDescription: `
    Master Angular 12 (formerly "Angular 2") and build awesome, reactive web apps with the successor of Angular.js
    `,
    detailDescription: `
    Become a Python Programmer and learn one of employer's most requested skills of 2021!

    This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.
    
    With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!
    
    Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!
    
    This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!
    
    We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we've got you covered.
    `,
    updatedAt: moment().toISOString(),
    createdAt: moment().toISOString(),
    status: 2,
    instructor: getObjectId('Nguyen Van Phuoc'),
    students: getObjectIds(['Hoang Thi Ngoc Hanh', 'Hoang Dan An', 'Nguyen Van Linh', 'Vo Kong Kiet', 'Trinh Nhat Sinh']),
    introLectures: [],
    comments: [],
    sections: [],
    viewers: [],
  },
  {
    _id: getObjectId('Operations 3'),
    name: 'UiPath - Level 1 Robotic Process Automation',
    url:
      'https://img-c.udemycdn.com/course/240x135/1346444_7555_7.jpg?Expires=1622001560&Signature=Wkhn2PBNf2FL0nB~0gLYLrw2qs0CGYSFfhguZ5YkpRCug1trSRXJSj3HjLCvpvFugbagyMYnwJM5xx5lXXG-VgYFKw0ld0syKYUmCn~Oz5HaeRPN6Ny9ev1LygpbIxi7EHrktZcMYGmP2mTY2YOGZn0PW6jKbz4BRfzUQxqpF~XIkcCn8DFzuUOFczobP59lADI1-2yt~3wRmN3Wt~gigmyveOXp2yo6My7SGI0LesVRIp2FvwYms-lIkOCQH9eSxZJkoQ3nTORb197wl2~vhbs35Ui-yhEA5R5ZMj1jzmHSJ270NUET38viUdb4RdnUHuDfWWXHujGmu2d71toQ6w__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    urlThumb:
      'https://img-c.udemycdn.com/course/240x135/1346444_7555_7.jpg?Expires=1622001560&Signature=Wkhn2PBNf2FL0nB~0gLYLrw2qs0CGYSFfhguZ5YkpRCug1trSRXJSj3HjLCvpvFugbagyMYnwJM5xx5lXXG-VgYFKw0ld0syKYUmCn~Oz5HaeRPN6Ny9ev1LygpbIxi7EHrktZcMYGmP2mTY2YOGZn0PW6jKbz4BRfzUQxqpF~XIkcCn8DFzuUOFczobP59lADI1-2yt~3wRmN3Wt~gigmyveOXp2yo6My7SGI0LesVRIp2FvwYms-lIkOCQH9eSxZJkoQ3nTORb197wl2~vhbs35Ui-yhEA5R5ZMj1jzmHSJ270NUET38viUdb4RdnUHuDfWWXHujGmu2d71toQ6w__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    fee: 80.99,
    discount: 0.6,
    averageRating: 3.2,
    totalTime: 4340,
    totalLecture: 24,
    targets: [
      'Be able to build ANY website you want.',
      'Build fully-fledged websites and web apps for your startup or business.',
      'Master backend development with Node',
      'Learn the latest frameworks and technologies, including Javascript ES6, Bootstrap 4, MongoDB.',
      'Craft a portfolio of websites to apply for junior developer jobs.',
      'Work as a freelance web developer.',
      'Master frontend development with React',
      'Learn professional developer best practices.',
    ],
    introDescription: `
    Become a full-stack web developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB and more!
    `,
    detailDescription: `
    Become a Python Programmer and learn one of employer's most requested skills of 2021!

    This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.
    
    With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!
    
    Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!
    
    This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!
    
    We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we've got you covered.
    `,
    updatedAt: moment().toISOString(),
    createdAt: moment().toISOString(),
    status: 2,
    instructor: getObjectId('Tran Van Chau'),
    students: getObjectIds([
      'Hoang Thi Ngoc Hanh',
      'Hoang Dan An',
      'Nguyen Van Linh',
      'Vo Kong Kiet',
      'Trinh Nhat Sinh',
      'Doan Khue',
      'Ngo Quoc Si Linh',
    ]),
    introLectures: [],
    comments: [],
    sections: [],
    viewers: [],
  },
  {
    _id: getObjectId('Operations 4'),
    name: 'Certified Six Sigma Green Belt (+ Excel Application)',
    url:
      'https://img-c.udemycdn.com/course/240x135/1399954_9e5b_14.jpg?Expires=1622018434&Signature=BdY~Wxti6iFe~btnGx9LL3mH7x7F4qm36oksJvgk4cJmIPeKbTynBFXe5EwgNgSsx5Z7HLIdb1GfJubFqmzpwQDrFnaPl~FWN4m~Gm3QdDZUj6waYQoMQ2XD0~8ipwlZGKdW2PhVMDbEoNbUeIjq5LZUaaPUVnkcs7l5nIIeJ0T3bxLTuJ4DKiLoQSMe6diZwbr9ehWUluc~6ceLcMRuhPSz5dtd43zXXs2ufX6GfitgRj~vZGEJLUWy7Q4o2vU9lQSAgP~hOvYUorfjlNkuYe5SANU4F-X7IJmxA9PGg4nvX27plW68Lm7DjsxbWpP9B~fSe-khNWJxxhaoUHMTtw__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    urlThumb:
      'https://img-c.udemycdn.com/course/240x135/1399954_9e5b_14.jpg?Expires=1622018434&Signature=BdY~Wxti6iFe~btnGx9LL3mH7x7F4qm36oksJvgk4cJmIPeKbTynBFXe5EwgNgSsx5Z7HLIdb1GfJubFqmzpwQDrFnaPl~FWN4m~Gm3QdDZUj6waYQoMQ2XD0~8ipwlZGKdW2PhVMDbEoNbUeIjq5LZUaaPUVnkcs7l5nIIeJ0T3bxLTuJ4DKiLoQSMe6diZwbr9ehWUluc~6ceLcMRuhPSz5dtd43zXXs2ufX6GfitgRj~vZGEJLUWy7Q4o2vU9lQSAgP~hOvYUorfjlNkuYe5SANU4F-X7IJmxA9PGg4nvX27plW68Lm7DjsxbWpP9B~fSe-khNWJxxhaoUHMTtw__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    fee: 94.99,
    discount: 0.69,
    averageRating: 4.2,
    totalTime: 4340,
    totalLecture: 28,
    targets: [
      'Become an advanced, confident, and modern JavaScript developer from scratch',
      'Become job-ready by understanding how JavaScript really works behind the scenes',
      'JavaScript fundamentals: variables, if/else, operators, boolean logic, functions, arrays, objects, loops, strings, etc.',
      'Modern OOP: Classes, constructors, prototypal inheritance, encapsulation, etc.',
      'Build 6 beautiful real-world projects for your portfolio (not boring toy apps)',
      'How to think and work like a developer: problem-solving, researching, workflows',
      'Modern ES6+ from the beginning: arrow functions, destructuring, spread operator, optional chaining (ES2020), etc.',
      'How to architect your code using flowcharts and common patterns',
    ],
    introDescription: `
    The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!
    `,
    detailDescription: `
    Become a Python Programmer and learn one of employer's most requested skills of 2021!

    This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.
    
    With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!
    
    Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!
    
    This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!
    
    We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we've got you covered.
    `,
    updatedAt: moment().toISOString(),
    createdAt: moment().toISOString(),
    status: 2,
    instructor: getObjectId('Trinh Quang Nghia'),
    students: getObjectIds([
      'Hoang Thi Ngoc Hanh',
      'Hoang Dan An',
      'Nguyen Van Linh',
      'Vo Kong Kiet',
      'Trinh Nhat Sinh',
      'Doan Khue',
      'Ngo Quoc Si Linh',
      'Dao Thi Tu Anh',
      'Nguyen Hong Xuan Trang',
    ]),
    introLectures: [],
    comments: [],
    sections: [],
    viewers: [],
  },
  {
    _id: getObjectId('Operations 5'),
    name: 'Supply Chain Fundamentals:  Understanding the Basics',
    url: 'https://img-b.udemycdn.com/course/240x135/677348_01bb_2.jpg?secure=shipMShsNooja8uo8xZbvQ%3D%3D%2C1622004761',
    urlThumb: 'https://img-b.udemycdn.com/course/240x135/677348_01bb_2.jpg?secure=shipMShsNooja8uo8xZbvQ%3D%3D%2C1622004761',
    fee: 94.99,
    discount: 0.5,
    averageRating: 4.3,
    totalTime: 4340,
    totalLecture: 28,
    targets: [
      'Build amazing single page applications with React JS and Redux',
      'Realize the power of building composable components',
      'Become fluent in the toolchain supporting React, including NPM, Webpack, Babel, and ES6/ES2015 Javascript syntax',
      'Master fundamental concepts behind structuring Redux applications',
      'Be the engineer who explains how Redux works to everyone else, because you know the fundamentals so well',
    ],
    introDescription: `
    Master React and Redux with React Router, Webpack, and Create-React-App. Includes Hooks!
    `,
    detailDescription: `
    Become a Python Programmer and learn one of employer's most requested skills of 2021!

    This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.
    
    With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!
    
    Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!
    
    This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!
    
    We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we've got you covered.
    `,
    updatedAt: moment().toISOString(),
    createdAt: moment().toISOString(),
    status: 2,
    instructor: getObjectId('Nguyen Van Hau'),
    students: getObjectIds([
      'Hoang Thi Ngoc Hanh',
      'Hoang Dan An',
      'Nguyen Van Linh',
      'Vo Kong Kiet',
      'Trinh Nhat Sinh',
      'Doan Khue',
      'Ngo Quoc Si Linh',
      'Dao Thi Tu Anh',
      'Nguyen Hong Xuan Trang',
      'Nguyen Hoang Luu',
      'Dao Tu Trinh',
    ]),
    introLectures: [],
    comments: [],
    sections: [],
    viewers: [],
  },
  {
    _id: getObjectId('Operations 6'),
    name: 'Lean Management Certification Course (BKO accredited) + Case',
    url:
      'https://img-c.udemycdn.com/course/240x135/1039210_5146_16.jpg?Expires=1621984635&Signature=c4smnlhxJiS1QlZfNR66iIl2j9Jg5BrhJIvmdwwvSeglTK32Nzxl30mS6i3MTe-kTRJI2GoJYeL1Z4DXfTekEOZifpFfg7~R-t2f3AJoG~ZrE7IhhoP9xXrur7CP0XI956gjqG2hZ6vHmFFBWDIWZyEyEf1zGYuET00C5avP6sxH7ZrdiyfNk0kGSD1JSIJD2BbPU0vtMkjVPCSctVuFIv0YVLjRoqf3Li-1N5jAmUUQa5O1IqaVPnvR37ltZUaG-b~3dJviFp9bMWRzqUCbeTyv~YXkWoA5azyCumWjiSZ50GDzPtPT5S6EXmkdZFMQXvxVFRWYKXCwoMfK49AYXQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    urlThumb:
      'https://img-c.udemycdn.com/course/240x135/1039210_5146_16.jpg?Expires=1621984635&Signature=c4smnlhxJiS1QlZfNR66iIl2j9Jg5BrhJIvmdwwvSeglTK32Nzxl30mS6i3MTe-kTRJI2GoJYeL1Z4DXfTekEOZifpFfg7~R-t2f3AJoG~ZrE7IhhoP9xXrur7CP0XI956gjqG2hZ6vHmFFBWDIWZyEyEf1zGYuET00C5avP6sxH7ZrdiyfNk0kGSD1JSIJD2BbPU0vtMkjVPCSctVuFIv0YVLjRoqf3Li-1N5jAmUUQa5O1IqaVPnvR37ltZUaG-b~3dJviFp9bMWRzqUCbeTyv~YXkWoA5azyCumWjiSZ50GDzPtPT5S6EXmkdZFMQXvxVFRWYKXCwoMfK49AYXQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    fee: 34.99,
    discount: 0.89,
    averageRating: 4.8,
    totalTime: 4340,
    totalLecture: 55,
    targets: [
      'Build websites and webapps',
      'Get a job as a junior web developer',
      'Start their own online business',
      'Be proficient with databases and server-side languages',
      'Build HTML-based mobile apps',
      'Bid for projects on freelance websites',
      'Be a comfortable front-end developer',
    ],
    introDescription: `
    Learn Web Development by building 25 websites and mobile apps using HTML, CSS, Javascript, PHP, Python, MySQL & more!
    `,
    detailDescription: `
    Become a Python Programmer and learn one of employer's most requested skills of 2021!

    This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.
    
    With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!
    
    Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!
    
    This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!
    
    We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we've got you covered.
    `,
    updatedAt: moment().toISOString(),
    createdAt: moment().toISOString(),
    status: 2,
    instructor: getObjectId('Nguyen Thien Ly'),
    students: getObjectIds([
      'Hoang Thi Ngoc Hanh',
      'Hoang Dan An',
      'Nguyen Van Linh',
      'Vo Kong Kiet',
      'Trinh Nhat Sinh',
      'Doan Khue',
      'Ngo Quoc Si Linh',
      'Dao Thi Tu Anh',
      'Nguyen Hong Xuan Trang',
      'Nguyen Hoang Luu',
      'Dao Tu Trinh',
      'Nguyen Hong Xua Mai',
    ]),
    introLectures: [],
    comments: [],
    sections: [],
    viewers: [],
  },
  {
    _id: getObjectId('Operations 7'),
    name: 'Certified Six Sigma Yellow Belt Training',
    url:
      'https://img-c.udemycdn.com/course/240x135/301456_ff8f_8.jpg?Expires=1622002231&Signature=BIuSy5N9RsYcszvfkHLLsCAIOnlyzDZ8vsFB-m~Fyit2oCsNOcxLsRXwUkAgdAKRJTYv3mmpAvSaSuwuWcnGu-G-86YvncPrvuYXgu1CC5J-AIAcgPQFqvwM6jq9M2kcFy4ganjkAB-5LM-CpFWqAHjDgqeHPrZp9VXDPrsF27LzelW6hZYGYWXoo2KqnLqAn1dHmLn9Dho78yRu5z5MBtz1D-b4CRzT~JX3eqY5B3HOiJIUk-ixJDMfWqSVQ~26uzz9~0jlskykyJeP0RqFlJRC8pznRpE-p3eug6bQOD9Q139srUz8232YcwTXe5ZUWdv4~P~Vd5XOCnj3OzKfYA__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    urlThumb:
      'https://img-c.udemycdn.com/course/240x135/301456_ff8f_8.jpg?Expires=1622002231&Signature=BIuSy5N9RsYcszvfkHLLsCAIOnlyzDZ8vsFB-m~Fyit2oCsNOcxLsRXwUkAgdAKRJTYv3mmpAvSaSuwuWcnGu-G-86YvncPrvuYXgu1CC5J-AIAcgPQFqvwM6jq9M2kcFy4ganjkAB-5LM-CpFWqAHjDgqeHPrZp9VXDPrsF27LzelW6hZYGYWXoo2KqnLqAn1dHmLn9Dho78yRu5z5MBtz1D-b4CRzT~JX3eqY5B3HOiJIUk-ixJDMfWqSVQ~26uzz9~0jlskykyJeP0RqFlJRC8pznRpE-p3eug6bQOD9Q139srUz8232YcwTXe5ZUWdv4~P~Vd5XOCnj3OzKfYA__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    fee: 8.99,
    discount: 0.79,
    averageRating: 4.5,
    totalTime: 4340,
    totalLecture: 26,
    targets: [
      'Real-world skills to build real-world websites: professional, beautiful and truly responsive websites',
      'The proven 7 real-world steps from complete scratch to a fully functional and optimized website',
      'Learn super cool jQuery effects like animations, scroll effects and "sticky" navigation',
      'Get helpful support in the course Q&A',
      'A huge project that will teach you everything you need to know to get started with HTML5 and CSS3',
      'Simple-to-use web design guidelines and tips to make your website stand out from the crowd',
      'Downloadable lectures, code and design assets for the entire project',
      'Get access to my "Best Resources for Web Design and Development with HTML & CSS"',
    ],
    introDescription: `
    The easiest way to learn modern web design, HTML5 and CSS3 step-by-step from scratch. Design AND code a huge project.
    `,
    detailDescription: `
    Become a Python Programmer and learn one of employer's most requested skills of 2021!

    This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.
    
    With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!
    
    Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!
    
    This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!
    
    We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we've got you covered.
    `,
    updatedAt: moment().toISOString(),
    createdAt: moment().toISOString(),
    status: 2,
    instructor: getObjectId('Nguyen Van Hau'),
    students: getObjectIds([
      'Hoang Thi Ngoc Hanh',
      'Hoang Dan An',
      'Nguyen Van Linh',
      'Vo Kong Kiet',
      'Trinh Nhat Sinh',
      'Doan Khue',
      'Ngo Quoc Si Linh',
      'Dao Thi Tu Anh',
      'Nguyen Hong Xuan Trang',
      'Nguyen Hoang Luu',
      'Dao Tu Trinh',
      'Nguyen Hong Xua Mai',
      'Tran Huynh Phat',
      'Ho Trung Nguyen',
    ]),
    introLectures: [],
    comments: [],
    sections: [],
    viewers: [],
  },
  {
    _id: getObjectId('Operations 8'),
    name: 'UIPath RPA - Tech Primer',
    url:
      'https://img-c.udemycdn.com/course/240x135/1346422_0376_4.jpg?Expires=1621996263&Signature=EeM-su0w32pnv~pcyCmt0NWyIy1~s7SSiQuvsoGhkl-mG0eOKSJNUOAL3i7WDSYtbT8ix8zBosuvx37zMyf0Krf20gayUNtRJqElwXZscRKFy5D7gHaPk5R6X3Ywp305RngrQqKZN0hUsbabqCn2eZw77dXXdttLnVoOOHCXS-IibPEzxmyubfEmiqC-e2JjRJfNR1JHFqGlu001b31w~fQdXf5qsOVbxY01gAk48h9QMmEAwdDe3iXokoRgA5cOJ7deOTBI1zU7dloiVgV45tTs7h~mDTEJ~w90QdSQkT-mxWqf5NZNWWN-JH2qQ2CyXwBVdE3~McDWHgr9xrE1sQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    urlThumb:
      'https://img-c.udemycdn.com/course/240x135/1346422_0376_4.jpg?Expires=1621996263&Signature=EeM-su0w32pnv~pcyCmt0NWyIy1~s7SSiQuvsoGhkl-mG0eOKSJNUOAL3i7WDSYtbT8ix8zBosuvx37zMyf0Krf20gayUNtRJqElwXZscRKFy5D7gHaPk5R6X3Ywp305RngrQqKZN0hUsbabqCn2eZw77dXXdttLnVoOOHCXS-IibPEzxmyubfEmiqC-e2JjRJfNR1JHFqGlu001b31w~fQdXf5qsOVbxY01gAk48h9QMmEAwdDe3iXokoRgA5cOJ7deOTBI1zU7dloiVgV45tTs7h~mDTEJ~w90QdSQkT-mxWqf5NZNWWN-JH2qQ2CyXwBVdE3~McDWHgr9xrE1sQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    fee: 64.99,
    discount: 0.89,
    averageRating: 4.7,
    totalTime: 4340,
    totalLecture: 76,
    targets: [
      'Build amazing Vue.js Applications - all the Way from Small and Simple Ones up to Large Enterprise-level Ones',
      'Leverage Vue.js in both Multi- and Single-Page-Applications (MPAs and SPAs)',
      'Understand the Theory behind Vue.js and use it in Real Projects',
      'Learn the latest version of Vue (Vue 3), including the brand-new Composition API',
    ],
    introDescription: `
    Vue.js is an awesome JavaScript Framework for building Frontend Applications! VueJS mixes the Best of Angular + React!
    `,
    detailDescription: `
    Become a Python Programmer and learn one of employer's most requested skills of 2021!

    This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.
    
    With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!
    
    Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!
    
    This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!
    
    We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we've got you covered.
    `,
    updatedAt: moment().toISOString(),
    createdAt: moment().toISOString(),
    status: 2,
    instructor: getObjectId('Nguyen Thien Ly'),
    students: getObjectIds([
      'Hoang Thi Ngoc Hanh',
      'Hoang Dan An',
      'Nguyen Van Linh',
      'Vo Kong Kiet',
      'Trinh Nhat Sinh',
      'Doan Khue',
      'Ngo Quoc Si Linh',
      'Dao Thi Tu Anh',
      'Nguyen Hong Xuan Trang',
      'Nguyen Hoang Luu',
      'Dao Tu Trinh',
      'Nguyen Hong Xua Mai',
      'Tran Huynh Phat',
      'Ho Trung Nguyen',
      'Ca Le Nhat Nguyen',
    ]),
    introLectures: [],
    comments: [],
    sections: [],
    viewers: [],
  },
  {
    _id: getObjectId('Operations 9'),
    name: 'Lean Six Sigma Green Belt Online Course (2020)',
    url: 'https://img-b.udemycdn.com/course/240x135/314744_8347.jpg?secure=MZ9A7CRmg8X-NVedLnGGpg%3D%3D%2C1621993406',
    urlThumb: 'https://img-b.udemycdn.com/course/240x135/314744_8347.jpg?secure=MZ9A7CRmg8X-NVedLnGGpg%3D%3D%2C1621993406',
    fee: 64.99,
    discount: 0.89,
    averageRating: 4.7,
    totalTime: 4340,
    totalLecture: 24,
    targets: [
      'Skills that will allow you to apply for jobs like: Web Developer, Software Developer, Front End Developer, Javascript Developer, and Full Stack Developer',
      'Build 10+ real world Web Development projects you can show off',
      'Learn modern technologies that are ACTUALLY being used behind tech companies in 2021',
      'Learn best practices to write clean, performant, and bug free code',
      'Build a professional Portfolio Website',
      'Master modern Web Development fundamentals as well as advanced topics',
      'Work as a freelance Web Developer',
      'Master beginner and advanced JavaScript topics',
    ],
    introDescription: `
    Learn to code and become a Web Developer in 2021 with HTML, CSS, Javascript, React, Node.js, Machine Learning & more!
    `,
    detailDescription: `
    Become a Python Programmer and learn one of employer's most requested skills of 2021!

    This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.
    
    With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!
    
    Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!
    
    This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!
    
    We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we've got you covered.
    `,
    updatedAt: moment().toISOString(),
    createdAt: moment().toISOString(),
    status: 2,
    instructor: getObjectId('Nguyen Van Hau'),
    students: getObjectIds([
      'Hoang Thi Ngoc Hanh',
      'Hoang Dan An',
      'Nguyen Van Linh',
      'Vo Kong Kiet',
      'Trinh Nhat Sinh',
      'Doan Khue',
      'Ngo Quoc Si Linh',
      'Dao Thi Tu Anh',
      'Nguyen Hong Xuan Trang',
      'Nguyen Hoang Luu',
      'Dao Tu Trinh',
      'Nguyen Hong Xua Mai',
      'Tran Huynh Phat',
      'Ho Trung Nguyen',
      'Ca Le Nhat Nguyen',
      'Tran Thi Bich Van',
      'Tran Hau Hung',
    ]),
    introLectures: [],
    comments: [],
    sections: [],
    viewers: [],
  },
  {
    _id: getObjectId('Operations 10'),
    name: 'Certified Six Sigma White Belt + Real Case (BKO Accredited)',
    url:
      'https://img-c.udemycdn.com/course/240x135/1517800_1190_18.jpg?Expires=1621994332&Signature=WbVlBMIIaA85rBRzx4Ya3HXJHhqruzjexbxNvsNi97o1pB~MZmu2IeXldJOf0QyX5Cxy~3Nd7qqVsdgfP3-WgOPuEdDbVugdd-yFgDJ3Rlu5HajbyQJEqaRtaczA0rROc5Mqw8-98Bw8XNzBTVih9oDQUEHe814LEcESZiE44IZwo0dCOq0OjEkTvdebbATQqJDusEwynV-x-rBogUQPXrYI0XaS9quFEXpA5vs7MRnfgtO2Fe7rRwam0FQcarCzkWS3VIAfKlQ8XTWJaB9JTlfBL~fAuOdrzK6V0iZI7k3vM892tBzvFDf4Fi0pQaQxmMY~Iny-CKT08IaCeAFHLw__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    urlThumb:
      'https://img-c.udemycdn.com/course/240x135/1517800_1190_18.jpg?Expires=1621994332&Signature=WbVlBMIIaA85rBRzx4Ya3HXJHhqruzjexbxNvsNi97o1pB~MZmu2IeXldJOf0QyX5Cxy~3Nd7qqVsdgfP3-WgOPuEdDbVugdd-yFgDJ3Rlu5HajbyQJEqaRtaczA0rROc5Mqw8-98Bw8XNzBTVih9oDQUEHe814LEcESZiE44IZwo0dCOq0OjEkTvdebbATQqJDusEwynV-x-rBogUQPXrYI0XaS9quFEXpA5vs7MRnfgtO2Fe7rRwam0FQcarCzkWS3VIAfKlQ8XTWJaB9JTlfBL~fAuOdrzK6V0iZI7k3vM892tBzvFDf4Fi0pQaQxmMY~Iny-CKT08IaCeAFHLw__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    fee: 54.99,
    discount: 0.49,
    averageRating: 4.7,
    totalTime: 4340,
    totalLecture: 67,
    targets: [
      `Grasp how Javascript works and it's fundamental concepts`,
      'Understand advanced concepts such as closures, prototypal inheritance, IIFEs, and much more.',
      'Avoid common pitfalls and mistakes other Javascript coders make',
      'Build your own Javascript framework or library',
      'Write solid, good Javascript code',
      'Drastically improve your ability to debug problems in Javascript.',
      'Understand the source code of popular Javascript frameworks',
    ],
    introDescription: `
    Learn to code and become a Web Developer in 2021 with HTML, CSS, Javascript, React, Node.js, Machine Learning & more!
    `,
    detailDescription: `
    Become a Python Programmer and learn one of employer's most requested skills of 2021!

    This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.
    
    With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!
    
    Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!
    
    This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!
    
    We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we've got you covered.
    `,
    updatedAt: moment().toISOString(),
    createdAt: moment().toISOString(),
    status: 2,
    instructor: getObjectId('Ngo Ngoc Dang Khoa'),
    students: getObjectIds([
      'Hoang Thi Ngoc Hanh',
      'Hoang Dan An',
      'Nguyen Van Linh',
      'Vo Kong Kiet',
      'Trinh Nhat Sinh',
      'Doan Khue',
      'Ngo Quoc Si Linh',
      'Dao Thi Tu Anh',
      'Nguyen Hong Xuan Trang',
      'Nguyen Hoang Luu',
      'Dao Tu Trinh',
      'Nguyen Hong Xua Mai',
      'Tran Huynh Phat',
      'Ho Trung Nguyen',
      'Ca Le Nhat Nguyen',
      'Tran Thi Bich Van',
      'Tran Hau Hung',
    ]),
    introLectures: [],
    comments: [],
    sections: [],
    viewers: [],
  },
];

module.exports = operationCourses;

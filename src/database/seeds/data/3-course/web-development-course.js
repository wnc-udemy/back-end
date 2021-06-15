const moment = require('moment');
const { getObjectId, getObjectIds } = require('../../helpers/index');

const webDevelopmentCourses = [
  {
    _id: getObjectId('Web development 1'),
    name: 'The Web Developer Bootcamp 2021',
    url:
      'https://img-c.udemycdn.com/course/240x135/625204_436a_3.jpg?Expires=1622002346&Signature=UBxJ7ORZECwkY7mzc7oK3ZF1G7hQ253jUHCnyIlRrIBqSIs~rm-cTYfdVnXjC4V0SpVMIYu8XtNzA5L2Y~MYI2tlLCkBmwuLkQ9MoB6-pnRTgE7Vly5MPXmt8LLk0-vM0SUKARVepw9Z3b5XKmMOIotT2SBrpdAkM40aSfkwvlB5vLGDi4OLSTE5~fjnXaGBsiokktwqbbn3-jygDUnE6fxBCGETkEgw7yZN2Vl~Vc0OsT6BxoTV-PrGT-J3qSNM2qW-ixNUNbIJ~9yomVbVBUgTNn779BIAZDjryFGYhMYuY1lHYrPTmwSnWPcMCJIeO760dNbo~E1hA8Y2TRVXlA__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    urlThumb:
      'https://img-c.udemycdn.com/course/240x135/756150_c033_2.jpg?Expires=1622002347&Signature=EfN9xLg2zO8cjGKuM6qlLEvURYSfjQB4h1IAJZApmT-yq39zlwEv0OtTUxnFUzPDDd9b9GZ6bHBoyPDPdrKvK4~YL5Y4ueEKvgpLiJu32e7GXoOJ9tJKKR87vazyJgbAgSJPX9AzLHuWE92qlZpqP1XpiTTPLiH1FIc56DcDQ4pfSO9z~Qwup8ZjF6mlsK84xH8u5rwpxBjgFLEiC~WZc64Iom1nqh2eogb-w7bupxeMhMb~5SB7XjCOpXy757D9rytyPyClbz2v2EaG6~oMPCQWJz53PumslFI9FJYOFJ1s6Ohk403gP8tyAxZDfKOzA1uBHUgjtpmeThm7XC9TTQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    fee: 64.99,
    discount: 0.89,
    averageRating: 4.1,
    totalTime: 4340,
    totalLecture: 31,
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
    detailDescription: `
    Become a Python Programmer and learn one of employer's most requested skills of 2021!

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
    introLectures: getObjectIds([
      'Web development 1 - Section 1 - Lecture 1',
      'Web development 1 - Section 1 - Lecture 2',
      'Web development 1 - Section 1 - Lecture 3',
      'Web development 1 - Section 1 - Lecture 4',
      'Web development 1 - Section 2 - Lecture 1',
    ]),
    comments: getObjectIds([
      'Web development 1 - Comment 1',
      'Web development 1 - Comment 2',
      'Web development 1 - Comment 3',
      'Web development 1 - Comment 4',
    ]),
    sections: getObjectIds([
      'Web development 1 - Section 1',
      'Web development 1 - Section 2',
      'Web development 1 - Section 3',
      'Web development 1 - Section 4',
      'Web development 1 - Section 5',
      'Web development 1 - Section 6',
      'Web development 1 - Section 7',
      'Web development 1 - Section 8',
      'Web development 1 - Section 9',
      'Web development 1 - Section 10',
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
      'Nguyen Thi Nguyen Anh',
      'Nguyen Viet Hung',
      'Nguyen Thi Lien',
    ]),
  },
  {
    _id: getObjectId('Web development 2'),
    name: 'Angular - The Complete Guide (2021 Edition)',
    url:
      'https://img-c.udemycdn.com/course/240x135/756150_c033_2.jpg?Expires=1622002347&Signature=EfN9xLg2zO8cjGKuM6qlLEvURYSfjQB4h1IAJZApmT-yq39zlwEv0OtTUxnFUzPDDd9b9GZ6bHBoyPDPdrKvK4~YL5Y4ueEKvgpLiJu32e7GXoOJ9tJKKR87vazyJgbAgSJPX9AzLHuWE92qlZpqP1XpiTTPLiH1FIc56DcDQ4pfSO9z~Qwup8ZjF6mlsK84xH8u5rwpxBjgFLEiC~WZc64Iom1nqh2eogb-w7bupxeMhMb~5SB7XjCOpXy757D9rytyPyClbz2v2EaG6~oMPCQWJz53PumslFI9FJYOFJ1s6Ohk403gP8tyAxZDfKOzA1uBHUgjtpmeThm7XC9TTQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    urlThumb:
      'https://img-c.udemycdn.com/course/240x135/756150_c033_2.jpg?Expires=1622002347&Signature=EfN9xLg2zO8cjGKuM6qlLEvURYSfjQB4h1IAJZApmT-yq39zlwEv0OtTUxnFUzPDDd9b9GZ6bHBoyPDPdrKvK4~YL5Y4ueEKvgpLiJu32e7GXoOJ9tJKKR87vazyJgbAgSJPX9AzLHuWE92qlZpqP1XpiTTPLiH1FIc56DcDQ4pfSO9z~Qwup8ZjF6mlsK84xH8u5rwpxBjgFLEiC~WZc64Iom1nqh2eogb-w7bupxeMhMb~5SB7XjCOpXy757D9rytyPyClbz2v2EaG6~oMPCQWJz53PumslFI9FJYOFJ1s6Ohk403gP8tyAxZDfKOzA1uBHUgjtpmeThm7XC9TTQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    fee: 91.99,
    discount: 0.69,
    averageRating: 4.2,
    totalTime: 4340,
    totalLecture: 36,
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
    comments: getObjectIds([
      'Web development 2 - Comment 1',
      'Web development 2 - Comment 2',
      'Web development 2 - Comment 3',
      'Web development 2 - Comment 4',
    ]),
    sections: getObjectIds([
      'Web development 2 - Section 1',
      'Web development 2 - Section 2',
      'Web development 2 - Section 3',
      'Web development 2 - Section 4',
      'Web development 2 - Section 5',
      'Web development 2 - Section 6',
      'Web development 2 - Section 7',
      'Web development 2 - Section 8',
      'Web development 2 - Section 9',
      'Web development 2 - Section 10',
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
      'Nguyen Thi Nguyen Anh',
      'Nguyen Viet Hung',
      'Nguyen Thi Lien',
      'Le Thi Trung Anh',
    ]),
  },
  {
    _id: getObjectId('Web development 3'),
    name: 'The Complete 2021 Web Development Bootcamp',
    url:
      'https://img-c.udemycdn.com/course/240x135/1565838_e54e_12.jpg?Expires=1622002347&Signature=TgtUdj5EkOtgxcsfetOKgVjKcgCvjKt50NzaGtU0HwxG2AkR2sXdoxaNACYXVdzRiAGw8A~GfmJGhVDo5YQAEirSllbcWO-1TyzrmLXyFLITOvAqxIrd1904uRjrC8YAVE1kJwAG6OsGBnnG2ztcG3jEEPdOw2IwrdBGWFPLHjW9NL4VSnf32DwlhIraxwdDr~cN3Q-tiYuxpeokmF-QJcW2tL7NO4Aq4OjcuH8Pz1iAjInlsLZ8f419WIF4lFVorZ7RYbQAnnAB9B~DqyoC770VQayc6HXNKJ-LFQR-cprN2zINSu4jeUgW92TbPFJL0Bjrb7~0-QYKZdK0v~EP1w__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    urlThumb:
      'https://img-c.udemycdn.com/course/240x135/1565838_e54e_12.jpg?Expires=1622002347&Signature=TgtUdj5EkOtgxcsfetOKgVjKcgCvjKt50NzaGtU0HwxG2AkR2sXdoxaNACYXVdzRiAGw8A~GfmJGhVDo5YQAEirSllbcWO-1TyzrmLXyFLITOvAqxIrd1904uRjrC8YAVE1kJwAG6OsGBnnG2ztcG3jEEPdOw2IwrdBGWFPLHjW9NL4VSnf32DwlhIraxwdDr~cN3Q-tiYuxpeokmF-QJcW2tL7NO4Aq4OjcuH8Pz1iAjInlsLZ8f419WIF4lFVorZ7RYbQAnnAB9B~DqyoC770VQayc6HXNKJ-LFQR-cprN2zINSu4jeUgW92TbPFJL0Bjrb7~0-QYKZdK0v~EP1w__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    fee: 78.99,
    discount: 0.89,
    averageRating: 4.5,
    totalTime: 4340,
    totalLecture: 25,
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
    comments: getObjectIds([
      'Web development 3 - Comment 1',
      'Web development 3 - Comment 2',
      'Web development 3 - Comment 3',
      'Web development 3 - Comment 4',
    ]),
    sections: [],
    viewers: getObjectIds([
      'Nguyen Thien Ly',
      'Vo Kong Kiet',
      'Nguyen Van Linh',
      'Hoang Dan An',
      'Trinh Nhat Sinh',
      'Dao Thi Tu Anh',
      'Nguyen Hong Xuan Trang',
    ]),
  },
  {
    _id: getObjectId('Web development 4'),
    name: 'The Complete JavaScript Course 2021: From Zero to Expert!',
    url:
      'https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg?Expires=1622018818&Signature=R5v5cLBUly-mCBnDjz9mQll-Gcp4WZB54NKnbtfl46ZL95UQzx6kDPoQ2r1~jCACRVzwle-~gsqHJHZvN2QM~7QsBcO7TKMddmsai1eHBJwOSCSrvKoUNNht-KaThTSVda2FwkK9VXuMKDeeC32cU9nW0ivZx55hw8rvzUKUZ0aRsUB~W64Pe1JVjXUj8jutmEpth5pFWwR0Tl3CqTOSbBZVNRU7PVwTsnDESjb0XqaktW7mQYidaxIBgpYV~o~q3Lt4LkzBEge0-Jejk1cXFfhEADQRhx3W870OE3qKcSLANSMnxzUFrJKowjZOdtqMlX1IG-eScXzmW0Uvsi0RQQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    urlThumb:
      'https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg?Expires=1622018818&Signature=R5v5cLBUly-mCBnDjz9mQll-Gcp4WZB54NKnbtfl46ZL95UQzx6kDPoQ2r1~jCACRVzwle-~gsqHJHZvN2QM~7QsBcO7TKMddmsai1eHBJwOSCSrvKoUNNht-KaThTSVda2FwkK9VXuMKDeeC32cU9nW0ivZx55hw8rvzUKUZ0aRsUB~W64Pe1JVjXUj8jutmEpth5pFWwR0Tl3CqTOSbBZVNRU7PVwTsnDESjb0XqaktW7mQYidaxIBgpYV~o~q3Lt4LkzBEge0-Jejk1cXFfhEADQRhx3W870OE3qKcSLANSMnxzUFrJKowjZOdtqMlX1IG-eScXzmW0Uvsi0RQQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    fee: 66.99,
    discount: 0.89,
    averageRating: 3.2,
    totalTime: 4340,
    totalLecture: 31,
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
    viewers: getObjectIds(['Hoang Dan An', 'Trinh Nhat Sinh', 'Dao Thi Tu Anh', 'Nguyen Hong Xuan Trang']),
  },
  {
    _id: getObjectId('Web development 5'),
    name: 'Modern React with Redux',
    url:
      'https://img-c.udemycdn.com/course/240x135/705264_caa9_11.jpg?Expires=1622018655&Signature=Vid4Xna~i5FcrgKLHCry4H7Khe6ZA2XBRbUpoWucV4qj5KLQaGsGCKco5p2Hx8xbO-vSOLcXYogf45tEe-2UgWzvRUNcLo87H9OZJkXoIeuSp8okkBtOs5UnTTyABVbLhyIHWQYeJW2FMpHrCj28Pt6Dn-sQlSqElowX3XXt9zyRt6JRoVFKtR8SFSN6lDqfiDVsOswcamVk03FKsi86rV7oQr18Lv~GiHifGIOwyu4CIaauyVBgaCgU8hZKHcpU7pyvB1pw70fllUPubaqhqMAoBkISBXXIklzhyRFQKy0SSn~iCiqyPhLIjpua8VhaAfoWjm2x7mzrkuP03ptX5A__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    urlThumb:
      'https://img-c.udemycdn.com/course/240x135/705264_caa9_11.jpg?Expires=1622018655&Signature=Vid4Xna~i5FcrgKLHCry4H7Khe6ZA2XBRbUpoWucV4qj5KLQaGsGCKco5p2Hx8xbO-vSOLcXYogf45tEe-2UgWzvRUNcLo87H9OZJkXoIeuSp8okkBtOs5UnTTyABVbLhyIHWQYeJW2FMpHrCj28Pt6Dn-sQlSqElowX3XXt9zyRt6JRoVFKtR8SFSN6lDqfiDVsOswcamVk03FKsi86rV7oQr18Lv~GiHifGIOwyu4CIaauyVBgaCgU8hZKHcpU7pyvB1pw70fllUPubaqhqMAoBkISBXXIklzhyRFQKy0SSn~iCiqyPhLIjpua8VhaAfoWjm2x7mzrkuP03ptX5A__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    fee: 23.99,
    discount: 0.89,
    averageRating: 4.2,
    totalTime: 4340,
    totalLecture: 16,
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
    viewers: getObjectIds(['Nguyen Thien Ly']),
  },
  {
    _id: getObjectId('Web development 6'),
    name: 'The Complete Web Developer Course 2.0',
    url:
      'https://img-c.udemycdn.com/course/240x135/764164_de03_2.jpg?Expires=1622018755&Signature=F3hDacG-YZwNxJJjqhRo6tV5iP7mTXjlLr0oib5JwjV45WmGhsrxqlg7Azb-DCOfM1FbbeQLPdpBUFLsU77a5h30ktYUuF0VCSlUfugd3Mj9Xg-iLXwANR05s1Hzh3XBRa3AWhU5pc4OtZK56FTGgYIa1FRWun2w4ksmKMWyJ5xbvl8i1emkboHW1RU-Vxw~tiHuIOeAOIO362N83QgEyEuExmxbRqogb-zUYXbpvSDjz6iMHs2lpQt-m2ZnjsZ~4PQwEAMOQu9cyYs0HfmM3yBzKGh9SoZ~IMF8Jw0WeaTDeliCXhU3x17jTji~Uobgf25L8SjHxOIGd9vZwYUOfA__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    urlThumb:
      'https://img-c.udemycdn.com/course/240x135/764164_de03_2.jpg?Expires=1622018755&Signature=F3hDacG-YZwNxJJjqhRo6tV5iP7mTXjlLr0oib5JwjV45WmGhsrxqlg7Azb-DCOfM1FbbeQLPdpBUFLsU77a5h30ktYUuF0VCSlUfugd3Mj9Xg-iLXwANR05s1Hzh3XBRa3AWhU5pc4OtZK56FTGgYIa1FRWun2w4ksmKMWyJ5xbvl8i1emkboHW1RU-Vxw~tiHuIOeAOIO362N83QgEyEuExmxbRqogb-zUYXbpvSDjz6iMHs2lpQt-m2ZnjsZ~4PQwEAMOQu9cyYs0HfmM3yBzKGh9SoZ~IMF8Jw0WeaTDeliCXhU3x17jTji~Uobgf25L8SjHxOIGd9vZwYUOfA__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    fee: 64.99,
    discount: 0.59,
    averageRating: 4.5,
    totalTime: 4340,
    totalLecture: 30,
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
    _id: getObjectId('Web development 7'),
    name: 'Build Responsive Real World Websites with HTML5 and CSS3',
    url:
      'https://img-c.udemycdn.com/course/240x135/437398_46c3_9.jpg?Expires=1622020583&Signature=PWSHGL~HjTwovxefa1YCWKTQZ0wqlQMF26RSDrBdabpY6PdKHHMKLKz9mCHJY74sZ4rPchCRSuT7ziBelHiiuGoqO-wDs9bKV-SSTpgWISDV99SWMPpU~MIbiXVqUvTD3yi43LXZN7mCGyLkYmbxCUOPWJo-6Azmmr2s8OkeT8Gyj1Rwg6Tnyj5dCAyacnfAe8mZRMKMNXDUF87l07LM8-630X9MZ7sBF4JbCQtdp1fyYi9JQRk1VVeFxXY9l7brV49m9v4ZCFsbwdRYatv93LeCaF-SM8yOxp-bPCpW6vPdLguDpUSopcfReb02wOxYVsacq0XDs5elq0dI-nE2WA__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    urlThumb:
      'https://img-c.udemycdn.com/course/240x135/437398_46c3_9.jpg?Expires=1622020583&Signature=PWSHGL~HjTwovxefa1YCWKTQZ0wqlQMF26RSDrBdabpY6PdKHHMKLKz9mCHJY74sZ4rPchCRSuT7ziBelHiiuGoqO-wDs9bKV-SSTpgWISDV99SWMPpU~MIbiXVqUvTD3yi43LXZN7mCGyLkYmbxCUOPWJo-6Azmmr2s8OkeT8Gyj1Rwg6Tnyj5dCAyacnfAe8mZRMKMNXDUF87l07LM8-630X9MZ7sBF4JbCQtdp1fyYi9JQRk1VVeFxXY9l7brV49m9v4ZCFsbwdRYatv93LeCaF-SM8yOxp-bPCpW6vPdLguDpUSopcfReb02wOxYVsacq0XDs5elq0dI-nE2WA__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    fee: 33.99,
    discount: 0.49,
    averageRating: 4.5,
    totalTime: 4340,
    totalLecture: 44,
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
    viewers: getObjectIds([
      'Nguyen Thien Ly',
      'Vo Kong Kiet',
      'Nguyen Van Linh',
      'Hoang Dan An',
      'Trinh Nhat Sinh',
      'Dao Thi Tu Anh',
      'Nguyen Hong Xuan Trang',
    ]),
  },
  {
    _id: getObjectId('Web development 8'),
    name: 'Vue - The Complete Guide (w/ Router, Vuex, Composition API)',
    url:
      'https://img-c.udemycdn.com/course/240x135/995016_ebf4_3.jpg?Expires=1622006445&Signature=jFg3pYugjEFadINSTJh04JBgpF81g2gy2~lBmuwRdKly5hvTawAQ~bn25f9eYB3tTtvbDseEbIHbR6ycLcvzGGyv4tORl36M~PcaT2L4K4XQfc0lNIGltD47gQ8g2K681t3boWoA-H2hbtGrguufbI3qitHwN09Lu9XionneD-vZKeyW9Ea4g~HiaaZtxpI24gfNFOI-~Q6VrIzzYrL5X4UtnVCLrf2SZIIfzseHASnpwevG3lpI5pxjnUJMgA1FCJK-BRghFR5AbYNXkObTB5qPjqyGfKMj1UCutb66YqdKwfTZSE2ZP9YLuiJGwZ5J0kP-3WeaDPdQgx1m7VOySQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    urlThumb:
      'https://img-c.udemycdn.com/course/240x135/995016_ebf4_3.jpg?Expires=1622006445&Signature=jFg3pYugjEFadINSTJh04JBgpF81g2gy2~lBmuwRdKly5hvTawAQ~bn25f9eYB3tTtvbDseEbIHbR6ycLcvzGGyv4tORl36M~PcaT2L4K4XQfc0lNIGltD47gQ8g2K681t3boWoA-H2hbtGrguufbI3qitHwN09Lu9XionneD-vZKeyW9Ea4g~HiaaZtxpI24gfNFOI-~Q6VrIzzYrL5X4UtnVCLrf2SZIIfzseHASnpwevG3lpI5pxjnUJMgA1FCJK-BRghFR5AbYNXkObTB5qPjqyGfKMj1UCutb66YqdKwfTZSE2ZP9YLuiJGwZ5J0kP-3WeaDPdQgx1m7VOySQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    fee: 94.99,
    discount: 0.69,
    averageRating: 3.4,
    totalTime: 4340,
    totalLecture: 25,
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
    viewers: getObjectIds(['Nguyen Thien Ly', 'Vo Kong Kiet', 'Dao Thi Tu Anh', 'Nguyen Hong Xuan Trang']),
  },
  {
    _id: getObjectId('Web development 9'),
    name: 'The Complete Web Developer in 2021: Zero to Mastery',
    url: 'https://img-b.udemycdn.com/course/240x135/1430746_2f43_10.jpg?secure=Moyi23xn5Pwg7xFa_SuVlg%3D%3D%2C1622018754',
    urlThumb:
      'https://img-b.udemycdn.com/course/240x135/1430746_2f43_10.jpg?secure=Moyi23xn5Pwg7xFa_SuVlg%3D%3D%2C1622018754',
    fee: 56.99,
    discount: 0.89,
    averageRating: 4.4,
    totalTime: 4340,
    totalLecture: 37,
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
    viewers: getObjectIds(['Nguyen Thien Ly', 'Vo Kong Kiet', 'Nguyen Van Linh']),
  },
  {
    _id: getObjectId('Web development 10'),
    name: 'JavaScript-Dummy: Understanding the Weird Parts',
    url:
      'https://img-c.udemycdn.com/course/240x135/364426_2991_6.jpg?Expires=1622017291&Signature=goM00BezbJQKZC9OyKi8nbOEuEmaKRhzTY8kSdH6feTVX~WAm6YWos6sEVGTs5MjCCEauKkKwUKpa3c1docs4Z4hjoJBjbmC2e7X4emYMVOqpWCZixPFLo8PPIuPSbTeWK8VKsyAzMyu7E5XOG2HG8a2Xx0w9JqeUfouG2WEfZQ4Wc8UBlZLc~UYHE5kbMPcLAderOY5TzVNfQNOJRva72kxQ6VuyrmVM1D81ZJ8XodE8udpnzFFZ99NgaCp9p0E0HKE0kWG-409R128otCSiy3XKeH184Zr75jpYR8seTV-d9nnskIsKVUMuiX~pbvveHD3oQyoyEYxemHxCUOL~A__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    urlThumb:
      'https://img-c.udemycdn.com/course/240x135/364426_2991_6.jpg?Expires=1622017291&Signature=goM00BezbJQKZC9OyKi8nbOEuEmaKRhzTY8kSdH6feTVX~WAm6YWos6sEVGTs5MjCCEauKkKwUKpa3c1docs4Z4hjoJBjbmC2e7X4emYMVOqpWCZixPFLo8PPIuPSbTeWK8VKsyAzMyu7E5XOG2HG8a2Xx0w9JqeUfouG2WEfZQ4Wc8UBlZLc~UYHE5kbMPcLAderOY5TzVNfQNOJRva72kxQ6VuyrmVM1D81ZJ8XodE8udpnzFFZ99NgaCp9p0E0HKE0kWG-409R128otCSiy3XKeH184Zr75jpYR8seTV-d9nnskIsKVUMuiX~pbvveHD3oQyoyEYxemHxCUOL~A__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    fee: 94.99,
    discount: 0.89,
    averageRating: 4.7,
    totalTime: 4340,
    totalLecture: 35,
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

module.exports = webDevelopmentCourses;

const moment = require('moment');
const { getObjectId, getObjectIds } = require('../../helpers/index');

const mobileDevelopmentCourses = [
  {
    _id: getObjectId('Mobile development 1'),
    name: 'iOS & Swift - The Complete iOS App Development Bootcamp',
    url:
      'https://img-c.udemycdn.com/course/240x135/1778502_f4b9_12.jpg?Expires=1622022542&Signature=iyG6uCfAoNaDLd7xnPBrjqHHfRGd4Wc0OAzaXhMjwElLKccSflnmQH8PkH6JoPGYVZhhF8tCcxVQWaPH~JRF~LotLDqte-jfrsxrZmKPLupo12kMJAJVB6sVaXgZF7gZXrO5s2v3R~V0mh79dcv-sE35srdFp~Z2EqnCbdPIDYszXXJZJaC51jBR9VJi~BYhrvoFHn6Ny28ZRC2Gnk2E5hyjp3waGM32BQL3x4GZaXldn-vpLKhNAJgmjpUd8I~EApVSAi-gWirOqKK1ZAwfGj2D7Fw5ZddEWxkcwzh8UGWUKfbJ4dTDRrYhoRVFWnSYM94rydn7VmtRWhA7HUE~dg__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    urlThumb:
      'https://img-c.udemycdn.com/course/240x135/1778502_f4b9_12.jpg?Expires=1622022542&Signature=iyG6uCfAoNaDLd7xnPBrjqHHfRGd4Wc0OAzaXhMjwElLKccSflnmQH8PkH6JoPGYVZhhF8tCcxVQWaPH~JRF~LotLDqte-jfrsxrZmKPLupo12kMJAJVB6sVaXgZF7gZXrO5s2v3R~V0mh79dcv-sE35srdFp~Z2EqnCbdPIDYszXXJZJaC51jBR9VJi~BYhrvoFHn6Ny28ZRC2Gnk2E5hyjp3waGM32BQL3x4GZaXldn-vpLKhNAJgmjpUd8I~EApVSAi-gWirOqKK1ZAwfGj2D7Fw5ZddEWxkcwzh8UGWUKfbJ4dTDRrYhoRVFWnSYM94rydn7VmtRWhA7HUE~dg__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    fee: 94.99,
    discount: 0.7,
    averageRating: 4.9,
    totalTime: 7340,
    totalLecture: 32,
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
      'Mobile development 1 - Section 1',
      'Mobile development 1 - Section 2',
      'Mobile development 1 - Section 3',
      'Mobile development 1 - Section 4',
      'Mobile development 1 - Section 5',
      'Mobile development 1 - Section 6',
      'Mobile development 1 - Section 7',
      'Mobile development 1 - Section 8',
      'Mobile development 1 - Section 9',
      'Mobile development 1 - Section 10',
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
    _id: getObjectId('Mobile development 2'),
    name: 'The Complete React Native + Hooks Course',
    url: 'https://img-b.udemycdn.com/course/240x135/959700_8bd2_11.jpg?secure=DEStNr7madlmsum47Pz1DQ%3D%3D%2C1622023992',
    urlThumb:
      'https://img-b.udemycdn.com/course/240x135/959700_8bd2_11.jpg?secure=DEStNr7madlmsum47Pz1DQ%3D%3D%2C1622023992',
    fee: 94.99,
    discount: 0.82,
    averageRating: 4.3,
    totalTime: 8340,
    totalLecture: 34,
    targets: [
      'Develop modern, complex, responsive and scalable web applications with Angular 12',
      'Use the gained, deep understanding of the Angular fundamentals to quickly establish yourself as a frontend developer',
      'Fully understand the architecture behind an Angular application and how to use it',
      'Create single-page applications with one of the most modern JavaScript frameworks out there',
    ],
    introDescription: `Master Angular 12 (formerly "Angular 2") and build awesome, reactive web apps with the successor of Angular.js`,
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
    sections: getObjectIds([
      'Mobile development 2 - Section 1',
      'Mobile development 2 - Section 2',
      'Mobile development 2 - Section 3',
      'Mobile development 2 - Section 4',
      'Mobile development 2 - Section 5',
      'Mobile development 2 - Section 6',
      'Mobile development 2 - Section 7',
      'Mobile development 2 - Section 8',
      'Mobile development 2 - Section 9',
      'Mobile development 2 - Section 10',
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
    _id: getObjectId('Mobile development 3'),
    name: 'Flutter & Dart - The Complete Guide [2021 Edition]',
    url:
      'https://img-c.udemycdn.com/course/240x135/1708340_7108_5.jpg?Expires=1622021735&Signature=fREAgmDlorq2qPLbXyKE0wEERWXNBcIjwkVYYybWFd7aw2PDRaPJEenY0Y8-IiB-9wl~loWf~bcaFUnoKiw4otcvKJ5XT0~DXWQkdPn0fj5Y6KYDMRR450zJG8pvigOtwq~h51M8blD4or1J8e44xsKGYvAbVUnzCyoSj2fSBXM3~WpYwChqiidProPA8-dxvXHF3w5Xw4yott62WdPiAOHhh2WdQUeRgsLQ8kOMsaa6emTtVlaDTm5lQkfXQv9mQGqFHwMoUTCGB1vtBP-VZtijXFtQqrKIcqZMeUcPMOv7-Y2qYhOGf0j~ykT7AGY0D77nsBgI3eXTaLbnPnoWuw__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    urlThumb:
      'https://img-c.udemycdn.com/course/240x135/1708340_7108_5.jpg?Expires=1622021735&Signature=fREAgmDlorq2qPLbXyKE0wEERWXNBcIjwkVYYybWFd7aw2PDRaPJEenY0Y8-IiB-9wl~loWf~bcaFUnoKiw4otcvKJ5XT0~DXWQkdPn0fj5Y6KYDMRR450zJG8pvigOtwq~h51M8blD4or1J8e44xsKGYvAbVUnzCyoSj2fSBXM3~WpYwChqiidProPA8-dxvXHF3w5Xw4yott62WdPiAOHhh2WdQUeRgsLQ8kOMsaa6emTtVlaDTm5lQkfXQv9mQGqFHwMoUTCGB1vtBP-VZtijXFtQqrKIcqZMeUcPMOv7-Y2qYhOGf0j~ykT7AGY0D77nsBgI3eXTaLbnPnoWuw__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    fee: 93.99,
    discount: 0.85,
    averageRating: 4.4,
    totalTime: 4340,
    totalLecture: 32,
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
    viewers: getObjectIds([
      'Hoang Thi Ngoc Hanh',
      'Tran Huynh Phat',
      'Ho Trung Nguyen',
      'Ca Le Nhat Nguyen',
      'Tran Thi Bich Van',
      'Tran Hau Hung',
    ]),
  },
  {
    _id: getObjectId('Mobile development 4'),
    name: 'The Complete 2021 Flutter Development Bootcamp with Dart',
    url:
      'https://img-c.udemycdn.com/course/240x135/2259120_305f_6.jpg?Expires=1621989445&Signature=S~eghlZ7y4-YuxZNbWiQ~-~l6f1XjBOYYX8fgPtrBcEXLUbBNrsHTy5xYVlQe-dsECF2KhKKBBuL2FfHKaYy4SilNRYAXTBMkIeZBJcHknwCWKZMKjDKteP-Zf1QSf4V7fnYzDbbP9tb47tgeWzm5SE6NVkONY~cjWSxdAnAbTmypisGXEufcbopr-aXM~7KhtJaxRrOOyW5HRoFSBli1J25v00ZDD1xF4y9AI4Lik7PhiHkaghhqdnZ0DSbPSC~du1zbL3LKWtDLU65v5~vYaadXzDwo6T9TOc8Vy7-koMIXqo~XwE6oVc2QDJVSiTCc5v8FqAj~P62eDSN6tlWxQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    urlThumb:
      'https://img-c.udemycdn.com/course/240x135/2259120_305f_6.jpg?Expires=1621989445&Signature=S~eghlZ7y4-YuxZNbWiQ~-~l6f1XjBOYYX8fgPtrBcEXLUbBNrsHTy5xYVlQe-dsECF2KhKKBBuL2FfHKaYy4SilNRYAXTBMkIeZBJcHknwCWKZMKjDKteP-Zf1QSf4V7fnYzDbbP9tb47tgeWzm5SE6NVkONY~cjWSxdAnAbTmypisGXEufcbopr-aXM~7KhtJaxRrOOyW5HRoFSBli1J25v00ZDD1xF4y9AI4Lik7PhiHkaghhqdnZ0DSbPSC~du1zbL3LKWtDLU65v5~vYaadXzDwo6T9TOc8Vy7-koMIXqo~XwE6oVc2QDJVSiTCc5v8FqAj~P62eDSN6tlWxQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    fee: 74.99,
    discount: 0.89,
    averageRating: 4.9,
    totalTime: 4340,
    totalLecture: 32,
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
    viewers: getObjectIds(['Hoang Thi Ngoc Hanh']),
  },
  {
    _id: getObjectId('Mobile development 5'),
    name: 'iOS 11 & Swift 4 - The Complete iOS App Development Bootcamp',
    url: 'https://img-b.udemycdn.com/course/240x135/1289478_5831_10.jpg?secure=2ePWglDW5A9fS3bFsgH2OQ%3D%3D%2C1621985555',
    urlThumb:
      'https://img-b.udemycdn.com/course/240x135/1289478_5831_10.jpg?secure=2ePWglDW5A9fS3bFsgH2OQ%3D%3D%2C1621985555',
    fee: 93.99,
    discount: 0.8,
    averageRating: 4.6,
    totalTime: 4340,
    totalLecture: 34,
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
    viewers: getObjectIds(['Tran Hau Hung']),
  },
  {
    _id: getObjectId('Mobile development 6'),
    name: 'The Complete Android N Developer Course',
    url:
      'https://img-c.udemycdn.com/course/240x135/951618_0839_2.jpg?Expires=1622009419&Signature=CJQuZ4hPPMBf8NdEEBPBKJlowP4uWUpO4WHmBJO9tXIaHsIgPWFfdo0gpvxZu8D~ekjw4BV~q1MH1BiDKwAazdT7n0Z2V9yc3qrnrEGuq1c0XJDh9nkJcGMNToyCQD6C7o5~rOdgppEJ2KDlBaLTDxv4aYfsHH~6o-p7ByJrMHO3bXMF5UPf-HpdwrzS5DJtz9rKgpkHU7n7jSk5~3UB0wUgRb1t9c2QbZz7Np9yrs37DVXB6HNxQ9Ydk82jCL34gGhevqUL4GQ5pzJ9lMxlILPaZIz38yUGUVIApaK~YujkuGhgKetr4nDaouLVuJ~Gahtqvu4bKcdgGUWzcB2pkw__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    urlThumb:
      'https://img-c.udemycdn.com/course/240x135/951618_0839_2.jpg?Expires=1622009419&Signature=CJQuZ4hPPMBf8NdEEBPBKJlowP4uWUpO4WHmBJO9tXIaHsIgPWFfdo0gpvxZu8D~ekjw4BV~q1MH1BiDKwAazdT7n0Z2V9yc3qrnrEGuq1c0XJDh9nkJcGMNToyCQD6C7o5~rOdgppEJ2KDlBaLTDxv4aYfsHH~6o-p7ByJrMHO3bXMF5UPf-HpdwrzS5DJtz9rKgpkHU7n7jSk5~3UB0wUgRb1t9c2QbZz7Np9yrs37DVXB6HNxQ9Ydk82jCL34gGhevqUL4GQ5pzJ9lMxlILPaZIz38yUGUVIApaK~YujkuGhgKetr4nDaouLVuJ~Gahtqvu4bKcdgGUWzcB2pkw__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    fee: 70.99,
    discount: 0.69,
    averageRating: 3.9,
    totalTime: 4340,
    totalLecture: 29,
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
    _id: getObjectId('Mobile development 7'),
    name: 'React Native - The Practical Guide [2021 Edition]',
    url:
      'https://img-c.udemycdn.com/course/240x135/1436092_2024_4.jpg?Expires=1622002347&Signature=C-QbZDOQ0kMU7w~6loO2oUba10ZujEpGLZI0k2zsEwu8U6gtlZZnhL5jG6e9rCbPq118HakvTHLeKQBDa00BQDYcCoAzvFrNkMCe2gTuNIlgGTN4lnvXm3AFypTOw9l59amQnnx8B986yS1FZtPNXLw~OmianMd1RGjxNjbSKzwHJBmEmByGDzetRU4MvfMZF2xh5ldQ6OWs7VH0wk6Nw2u4MmCvIerYh47Oc8hV2FdXQF5edymHCw9sp2W4gOhikfmbswEHj6NrVk7r9uA8qp7oPbBHIh-Fkq0NOkP7t2w-9oTrbIsZXHcaSWIbwOY0NSa54GKeXRhSDSdinUfmuA__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    urlThumb:
      'https://img-c.udemycdn.com/course/240x135/1436092_2024_4.jpg?Expires=1622002347&Signature=C-QbZDOQ0kMU7w~6loO2oUba10ZujEpGLZI0k2zsEwu8U6gtlZZnhL5jG6e9rCbPq118HakvTHLeKQBDa00BQDYcCoAzvFrNkMCe2gTuNIlgGTN4lnvXm3AFypTOw9l59amQnnx8B986yS1FZtPNXLw~OmianMd1RGjxNjbSKzwHJBmEmByGDzetRU4MvfMZF2xh5ldQ6OWs7VH0wk6Nw2u4MmCvIerYh47Oc8hV2FdXQF5edymHCw9sp2W4gOhikfmbswEHj6NrVk7r9uA8qp7oPbBHIh-Fkq0NOkP7t2w-9oTrbIsZXHcaSWIbwOY0NSa54GKeXRhSDSdinUfmuA__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    fee: 87.99,
    discount: 0.76,
    averageRating: 4.3,
    totalTime: 4340,
    totalLecture: 34,
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
    _id: getObjectId('Mobile development 8'),
    name: 'The Complete Android Oreo Developer Course - Build 23 Apps!',
    url: 'https://img-b.udemycdn.com/course/240x135/1405812_931d_2.jpg?secure=f-WrysCljD351fOrw2AOYg%3D%3D%2C1621989518',
    urlThumb:
      'https://img-b.udemycdn.com/course/240x135/1405812_931d_2.jpg?secure=f-WrysCljD351fOrw2AOYg%3D%3D%2C1621989518',
    fee: 95.99,
    discount: 0.69,
    averageRating: 4.4,
    totalTime: 4340,
    totalLecture: 33,
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
    _id: getObjectId('Mobile development 9'),
    name: 'Ionic - Build iOS, Android & Web Apps with Ionic & Angular',
    url: 'https://img-b.udemycdn.com/course/240x135/1070124_3a0f_4.jpg?secure=KDOrkw1PXWHr4iFLX8npUQ%3D%3D%2C1621997263',
    urlThumb:
      'https://img-b.udemycdn.com/course/240x135/1070124_3a0f_4.jpg?secure=KDOrkw1PXWHr4iFLX8npUQ%3D%3D%2C1621997263',
    fee: 44.99,
    discount: 0.69,
    averageRating: 4.4,
    totalTime: 4340,
    totalLecture: 36,
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
    _id: getObjectId('Mobile development 10'),
    name: 'iOS 10 & Swift 3: From Beginner to Paid Professional™',
    url:
      'https://img-c.udemycdn.com/course/240x135/892102_963b.jpg?Expires=1622008452&Signature=BC5xSzneDU4-yxtFUD8kIvT0NNFyL8j0moisoqFduAaDixxYjf6X4IaaFRzZpT2KZammCXBCn-2-ley1wL5gGynvLKwSbaLKvDYSdddliXOh3hjrRI5OmdOcmmsd-j3I~SVTmpJOS7TEXyWsjKrJyymf9a1raglNY-wRb7axt65KcWtBLLI50M4f4loSCvaiik44kxD7xNsc0NNDjJMXkuR~p-byn-1e4tmIwCg7~C~GS4mr1WKMp0u~aqMLlb0XDtqixSaEdzWzdeoKIZylIEeEWwg94AMk~Ab3q1YiDTJqM9IahKU1eioI5rPcmLCGcMFQ9xlByKTqlWaqNROuvw__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    urlThumb:
      'https://img-c.udemycdn.com/course/240x135/892102_963b.jpg?Expires=1622008452&Signature=BC5xSzneDU4-yxtFUD8kIvT0NNFyL8j0moisoqFduAaDixxYjf6X4IaaFRzZpT2KZammCXBCn-2-ley1wL5gGynvLKwSbaLKvDYSdddliXOh3hjrRI5OmdOcmmsd-j3I~SVTmpJOS7TEXyWsjKrJyymf9a1raglNY-wRb7axt65KcWtBLLI50M4f4loSCvaiik44kxD7xNsc0NNDjJMXkuR~p-byn-1e4tmIwCg7~C~GS4mr1WKMp0u~aqMLlb0XDtqixSaEdzWzdeoKIZylIEeEWwg94AMk~Ab3q1YiDTJqM9IahKU1eioI5rPcmLCGcMFQ9xlByKTqlWaqNROuvw__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    fee: 80.99,
    discount: 0.89,
    averageRating: 4.5,
    totalTime: 4340,
    totalLecture: 36,
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

module.exports = mobileDevelopmentCourses;

const moment = require('moment');
const { getObjectId, getObjectIds } = require('../../helpers/index');

const saleCourses = [
  {
    _id: getObjectId('Sales 1'),
    name: 'Sales Training: Practical Sales Techniques',
    url: 'https://img-b.udemycdn.com/course/240x135/563478_2c35.jpg?secure=LSkG9zUfCSzZpisWtVbbSw%3D%3D%2C1622023226',
    urlThumb: 'https://img-b.udemycdn.com/course/240x135/563478_2c35.jpg?secure=LSkG9zUfCSzZpisWtVbbSw%3D%3D%2C1622023226',
    fee: 64.99,
    discount: 0.59,
    averageRating: 4.7,
    totalTime: 4340,
    totalLecture: 65,
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
      'Sale 1 - Section 1',
      'Sale 1 - Section 2',
      'Sale 1 - Section 3',
      'Sale 1 - Section 4',
      'Sale 1 - Section 5',
      'Sale 1 - Section 6',
      'Sale 1 - Section 7',
      'Sale 1 - Section 8',
      'Sale 1 - Section 9',
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
    _id: getObjectId('Sales 2'),
    name: 'Customer Service Mastery: Delight Every Customer',
    url:
      'https://img-c.udemycdn.com/course/240x135/1919728_cf04_6.jpg?Expires=1621990441&Signature=mGDERAEbuSbBwlGl1N~UsE3Dzoaq8sjXYVFCbNtqDHZzjvlnJS9dqerSPAfkIdYQR3tbRua2FsNqIzFjlYiqpm9KtgpSVBiobre5mY1uwMBAoMMauS8CfB2cBOKi~7pr8wLClq~2-0FY1TxVq2MvmlRgA7wZDwRJgdiK~262Eh2ynRxoZNhUmwjTtSdJkrUXL7ZXqHOQfKVso8yZt4s2eE3hxOASsKDzM1fFUrtj-tKGzW6aicVn0FXHjpOz6x2ePjLHt~dfuZNOqYmeYJtbFJYVlURBwEG1YeVa4QprFPV3D5pHRMzztERMFxq2yb8iDGw34ZnCXMXo3ASKyjHiVw__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    urlThumb:
      'https://img-c.udemycdn.com/course/240x135/1919728_cf04_6.jpg?Expires=1621990441&Signature=mGDERAEbuSbBwlGl1N~UsE3Dzoaq8sjXYVFCbNtqDHZzjvlnJS9dqerSPAfkIdYQR3tbRua2FsNqIzFjlYiqpm9KtgpSVBiobre5mY1uwMBAoMMauS8CfB2cBOKi~7pr8wLClq~2-0FY1TxVq2MvmlRgA7wZDwRJgdiK~262Eh2ynRxoZNhUmwjTtSdJkrUXL7ZXqHOQfKVso8yZt4s2eE3hxOASsKDzM1fFUrtj-tKGzW6aicVn0FXHjpOz6x2ePjLHt~dfuZNOqYmeYJtbFJYVlURBwEG1YeVa4QprFPV3D5pHRMzztERMFxq2yb8iDGw34ZnCXMXo3ASKyjHiVw__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    fee: 54.99,
    discount: 0.39,
    averageRating: 4.6,
    totalTime: 4340,
    totalLecture: 24,
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
    sections: getObjectIds(['Sale 2 - Section 1', 'Sale 2 - Section 2', 'Sale 2 - Section 3', 'Sale 2 - Section 4']),
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
    _id: getObjectId('Sales 3'),
    name: 'Business Development & B2B Sales for Startups- Sales Valley',
    url:
      'https://img-c.udemycdn.com/course/240x135/1449746_ca17_2.jpg?Expires=1622014045&Signature=TKtWyWQDlkX8Pdw~0oqgnWogSGkSWh95GyLINT5MLnBzNCLEz05QN1ru1vx47KxtYIBY3Zq0557-z-6LkDRc7VfFr9~m9oQf~Dku28aKYep1MFSDC0aG3ZjTtViYW3ZHB7sXrfdDfyBgf0FY2gKHbT7VPU-N6X4wpwpr14D-5EQcdszUUzKSNXHg7tAWSgKa7kumDR3zh0ZDAZaO8Eq9ameg7Cl4XdaLSJdk4vuipylnU2mhHx2vRG9XjzwKomMagu1Dww8TUNN1~HkCflU2cP10DjCniPoroLa38b~fbJviC~avmd55xjWCt7eZ8VW7QTChQUANtTFeXgfR9PXr2Q__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    urlThumb:
      'https://img-c.udemycdn.com/course/240x135/1449746_ca17_2.jpg?Expires=1622014045&Signature=TKtWyWQDlkX8Pdw~0oqgnWogSGkSWh95GyLINT5MLnBzNCLEz05QN1ru1vx47KxtYIBY3Zq0557-z-6LkDRc7VfFr9~m9oQf~Dku28aKYep1MFSDC0aG3ZjTtViYW3ZHB7sXrfdDfyBgf0FY2gKHbT7VPU-N6X4wpwpr14D-5EQcdszUUzKSNXHg7tAWSgKa7kumDR3zh0ZDAZaO8Eq9ameg7Cl4XdaLSJdk4vuipylnU2mhHx2vRG9XjzwKomMagu1Dww8TUNN1~HkCflU2cP10DjCniPoroLa38b~fbJviC~avmd55xjWCt7eZ8VW7QTChQUANtTFeXgfR9PXr2Q__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    fee: 55.99,
    discount: 0.89,
    averageRating: 4.7,
    totalTime: 4340,
    totalLecture: 37,
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
    _id: getObjectId('Sales 4'),
    name: 'LinkedIn Marketing, Lead Generation & B2B Sales for LinkedIn',
    url: 'https://img-b.udemycdn.com/course/240x135/1794901_d8ac_2.jpg?secure=bFVHH4AwOnyKWa8f5YcZ0Q%3D%3D%2C1622008142',
    urlThumb:
      'https://img-b.udemycdn.com/course/240x135/1794901_d8ac_2.jpg?secure=bFVHH4AwOnyKWa8f5YcZ0Q%3D%3D%2C1622008142',
    fee: 56.99,
    discount: 0.89,
    averageRating: 4.7,
    totalTime: 4340,
    totalLecture: 47,
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
    _id: getObjectId('Sales 5'),
    name: 'Learn to Sell Anything by Grant Cardone',
    url:
      'https://img-c.udemycdn.com/course/240x135/619692_72d1_5.jpg?Expires=1622023456&Signature=F-5ZlEIWauuiptQDBpuXHKw-TQsEmdQXSCgU2iB-nWw8dcegWI1YExblkiQ0FVWDi6pzxSHv-lMoYWdr8RG4LiS4Lm2lQ9B8G44VW3099Z8PfN1J7clX3asfQpdN9EqlphoA6XOGF7YsuSmx0fXtJVdIepcV0M5usEsDXBu3pWTzrWVCvXffKiCzcZVoCQ5H44PTdOHdD5zGZdyyP-~47nEEkVTJfa14Z5-eNWx4SaNEReSnpXa-ZgQzubx5Y15LvvT9h2ExRoZ21KMQRGqx04Mk8sRdKA7fuLEqNjTIy31rr-qrV-Fo2vZ8gFddaggmTqmw34Ao~F0zNWvs44y4Lw__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    urlThumb:
      'https://img-c.udemycdn.com/course/240x135/619692_72d1_5.jpg?Expires=1622023456&Signature=F-5ZlEIWauuiptQDBpuXHKw-TQsEmdQXSCgU2iB-nWw8dcegWI1YExblkiQ0FVWDi6pzxSHv-lMoYWdr8RG4LiS4Lm2lQ9B8G44VW3099Z8PfN1J7clX3asfQpdN9EqlphoA6XOGF7YsuSmx0fXtJVdIepcV0M5usEsDXBu3pWTzrWVCvXffKiCzcZVoCQ5H44PTdOHdD5zGZdyyP-~47nEEkVTJfa14Z5-eNWx4SaNEReSnpXa-ZgQzubx5Y15LvvT9h2ExRoZ21KMQRGqx04Mk8sRdKA7fuLEqNjTIy31rr-qrV-Fo2vZ8gFddaggmTqmw34Ao~F0zNWvs44y4Lw__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    fee: 55.99,
    discount: 0.89,
    averageRating: 4.7,
    totalTime: 4340,
    totalLecture: 36,
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
    _id: getObjectId('Sales 6'),
    name: 'Lead Generation Machine: Cold Email B2B Sales Master Course',
    url:
      'https://img-c.udemycdn.com/course/240x135/1393266_e5de.jpg?Expires=1622011884&Signature=MeRDiipP4OSAtvbIMosvlSWzFgX7HnGK4bTS8QCm6FdO6Uw~vJMmStBp20N~jz1T3mn9SSATMeDBmeqQbIqPsYtYKHeLnSyn17nbMhIQjGd7HN-NiwnT2rXRFzkG~vi~CRF3vrBFxl4s0snanXD4C0iHQi9WjR8Fu3VNSyj4LJnaYBvfswx1oK0EbDPKX3Wmzm1wUK0HdY9A6Vh2R4hzDGrq-T73on06Qbw04FuoYyGuyLNRMv-F1qj0UHiM2-On9ZcKYzNg74KSHlWCLgLLpmZy4yO7Ie2thgFdLB~RYm77nZOXFH8S40NEuUA06zw6S9ROJaE-6AXx6yUFKdnzsg__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    urlThumb:
      'https://img-c.udemycdn.com/course/240x135/1393266_e5de.jpg?Expires=1622011884&Signature=MeRDiipP4OSAtvbIMosvlSWzFgX7HnGK4bTS8QCm6FdO6Uw~vJMmStBp20N~jz1T3mn9SSATMeDBmeqQbIqPsYtYKHeLnSyn17nbMhIQjGd7HN-NiwnT2rXRFzkG~vi~CRF3vrBFxl4s0snanXD4C0iHQi9WjR8Fu3VNSyj4LJnaYBvfswx1oK0EbDPKX3Wmzm1wUK0HdY9A6Vh2R4hzDGrq-T73on06Qbw04FuoYyGuyLNRMv-F1qj0UHiM2-On9ZcKYzNg74KSHlWCLgLLpmZy4yO7Ie2thgFdLB~RYm77nZOXFH8S40NEuUA06zw6S9ROJaE-6AXx6yUFKdnzsg__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    fee: 55.99,
    discount: 0.89,
    averageRating: 1.8,
    totalTime: 4340,
    totalLecture: 32,
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
    _id: getObjectId('Sales 7'),
    name: 'Sales Machine: The Sales Training B2B Master Course',
    url: 'https://img-b.udemycdn.com/course/240x135/1426364_6764_2.jpg?secure=JujQxax1gI6kUdmPSzVu3Q%3D%3D%2C1621992716',
    urlThumb:
      'https://img-b.udemycdn.com/course/240x135/1426364_6764_2.jpg?secure=JujQxax1gI6kUdmPSzVu3Q%3D%3D%2C1621992716',
    fee: 33.99,
    discount: 0.89,
    averageRating: 3.5,
    totalTime: 4340,
    totalLecture: 37,
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
    _id: getObjectId('Sales 8'),
    name: 'Customer Success Manager: Fundamentals to your CSM career',
    url:
      'https://img-c.udemycdn.com/course/240x135/703316_a5ff_5.jpg?Expires=1622022906&Signature=RrbG65Z60IjDxdrYysrebc-IftRcKNohERfN1D1xlXQElQNxXh3b8WKpj2OES6lPZBgSuHLZeMfCaWhw-dorqT59FnnmN5QxILHwW7mIpY60f2W2QtLWYly3FHsi9g-ZzsrHrxahDtoUPWN5r7WoakVHWlAXAtS78B838FrmcgA-9wLVOpAftW7a5aFv1p0kC7SefPPdiax4FRcrzx4pSu-YeVVzKI6N4wKJnWnfk0IhEoPEXxaBR~F2KPFCH6YBvOQWrj56Er0qFc2053djynUNC5sJXr0xRe1HTotYeOKXTRCcFuTNe96q5Jh2a--xHL5poqKnpVAoEEof2Hktzw__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    urlThumb:
      'https://img-c.udemycdn.com/course/240x135/703316_a5ff_5.jpg?Expires=1622022906&Signature=RrbG65Z60IjDxdrYysrebc-IftRcKNohERfN1D1xlXQElQNxXh3b8WKpj2OES6lPZBgSuHLZeMfCaWhw-dorqT59FnnmN5QxILHwW7mIpY60f2W2QtLWYly3FHsi9g-ZzsrHrxahDtoUPWN5r7WoakVHWlAXAtS78B838FrmcgA-9wLVOpAftW7a5aFv1p0kC7SefPPdiax4FRcrzx4pSu-YeVVzKI6N4wKJnWnfk0IhEoPEXxaBR~F2KPFCH6YBvOQWrj56Er0qFc2053djynUNC5sJXr0xRe1HTotYeOKXTRCcFuTNe96q5Jh2a--xHL5poqKnpVAoEEof2Hktzw__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    fee: 44.99,
    discount: 0.89,
    averageRating: 4.0,
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
    viewers: [],
  },
  {
    _id: getObjectId('Sales 9'),
    name: 'Business Development For Startups and Tech Companies',
    url:
      'https://img-c.udemycdn.com/course/240x135/200994_5de4_2.jpg?Expires=1621999545&Signature=EipmByHAWMwDTj73yOt1pK7zbTI9VkqSaReyHYdJpXvCcsR2AvUTMw2dMFAO98mHTBBnUxJaKCamERd3SjZ1jsuWVukPEM9i6j0ENTFyOHovuoBbnTD8oHG9DkcQLv2npyyAC63We3zN9D~c5m9852bDet7~LMmd3awrxG7Fw~ZHSuDU2w9L6poAuq2C7LzFbsfga0KPFoyA6aumokc0LJ87vlVhxDE5uiLtUi8tpx0Hx80s5tPz5VedgO0H7roLq7rXmtTL6NhVZIXDzC9eunquVopEyBBcSkX5-HcjuGO1g8YuTgmdMxNyQ8BIiz1BkFOupaHnsrJ6wqJSsXG2Ug__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    urlThumb:
      'https://img-c.udemycdn.com/course/240x135/200994_5de4_2.jpg?Expires=1621999545&Signature=EipmByHAWMwDTj73yOt1pK7zbTI9VkqSaReyHYdJpXvCcsR2AvUTMw2dMFAO98mHTBBnUxJaKCamERd3SjZ1jsuWVukPEM9i6j0ENTFyOHovuoBbnTD8oHG9DkcQLv2npyyAC63We3zN9D~c5m9852bDet7~LMmd3awrxG7Fw~ZHSuDU2w9L6poAuq2C7LzFbsfga0KPFoyA6aumokc0LJ87vlVhxDE5uiLtUi8tpx0Hx80s5tPz5VedgO0H7roLq7rXmtTL6NhVZIXDzC9eunquVopEyBBcSkX5-HcjuGO1g8YuTgmdMxNyQ8BIiz1BkFOupaHnsrJ6wqJSsXG2Ug__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    fee: 23.99,
    discount: 0.89,
    averageRating: 4.7,
    totalTime: 4340,
    totalLecture: 45,
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
    _id: getObjectId('Sales 10'),
    name: 'Cold Calling for B2B Sales: How to Prospect over the Phone',
    url: 'https://img-b.udemycdn.com/course/240x135/1397390_b181_3.jpg?secure=WRavZtCGtirvqRNakUKUSg%3D%3D%2C1622023776',
    urlThumb:
      'https://img-b.udemycdn.com/course/240x135/1397390_b181_3.jpg?secure=WRavZtCGtirvqRNakUKUSg%3D%3D%2C1622023776',
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

module.exports = saleCourses;

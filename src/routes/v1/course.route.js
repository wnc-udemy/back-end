const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const courseValidation = require('../../validations/course.validation');
const courseController = require('../../controllers/course.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageCourses'), validate(courseValidation.createCourse), courseController.createCourse)
  .get(validate(courseValidation.getCourses), courseController.getCourses);

router.route('/:courseId/comment').get(validate(courseValidation.getCourse), courseController.getCourseComment);
router.route('/:courseId/section').get(validate(courseValidation.getCourse), courseController.getCourseSection);
router.route('/:courseId/similar').get(validate(courseValidation.getCourse), courseController.getCourseSimilar);

router
  .route('/:courseId')
  .get(validate(courseValidation.getCourse), courseController.getCourse)
  .patch(auth('manageCourses'), validate(courseValidation.updateCourse), courseController.updateCourse)
  .delete(auth('manageCourses'), validate(courseValidation.deleteCourse), courseController.deleteCourse);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Courses
 *   description: Course management and retrieval
 */

/**
 * @swagger
 * /courses:
 *   post:
 *     summary: Create a course
 *     description: Only Instructor can create owner courses.
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - url
 *               - urlThumb
 *               - fee
 *               - introDescription
 *               - detailDescription
 *               - instructor
 *             properties:
 *               name:
 *                 type: string
 *               url:
 *                 type: string
 *               url_thumb:
 *                 type: string
 *               fee:
 *                 type: number
 *               discount:
 *                 type: number
 *               averageRating:
 *                 type: number
 *               introDescription:
 *                 type: string
 *               detailDescription:
 *                 type: string
 *               introLectures:
 *                 type: array
 *               comments:
 *                 type: array
 *               instructor:
 *                 type: string
 *               students:
 *                 type: string
 *               updatedAt:
 *                 type: string
 *               status:
 *                 type: number
 *             example:
 *               name: fake name
 *               url: https://www.facebook.com/
 *               urlThumb: https://www.facebook.com/
 *               fee: 100
 *               discount: 0.3
 *               averageRating: 4.5
 *               introDescription: fake intro description
 *               detailDescription: fake detail description
 *               instructor: 609b9838b28d283ef805f15d
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Course'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all courses
 *     description: Only admins can retrieve all users. All user can retrieve all course status active.
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: type
 *         schema:
 *           enum:
 *            - 0
 *            - 1
 *            - 2
 *            - 3
 *           default: 0
 *         description: 'Type get courses 0: default list, 1: most view, 2: latest, 3: highlight'
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Course name
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
 *         description: Maximum number of courses
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
 *                     $ref: '#/components/schemas/Course'
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
 * /courses/{id}/comment:
 *   get:
 *     summary: Get a course comment
 *     description: all users can fetch all courses comment status active.
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Course id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Course'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /courses/{id}/section:
 *   get:
 *     summary: Get a course section
 *     description: all users can fetch all courses section status active.
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Course id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Course'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /courses/{id}/similar:
 *   get:
 *     summary: Get a course similar
 *     description: all users can fetch all courses similar status active.
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Course id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Course'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /courses/{id}:
 *   get:
 *     summary: Get a course
 *     description: all users can fetch all courses status active.
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Course id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Course'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a course
 *     description: Only instructor can update owner courses.
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Course id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               url:
 *                 type: string
 *               url_thumb:
 *                 type: string
 *               fee:
 *                 type: number
 *               discount:
 *                 type: number
 *               averageRating:
 *                 type: number
 *               introDescription:
 *                 type: string
 *               detailDescription:
 *                 type: string
 *               introLectures:
 *                 type: array
 *               comments:
 *                 type: array
 *               instructor:
 *                 type: string
 *               students:
 *                 type: string
 *               updatedAt:
 *                 type: string
 *               status:
 *                 type: number
 *             example:
 *               name: fake name
 *               url: https://www.facebook.com/
 *               urlThumb: https://www.facebook.com/
 *               fee: 100
 *               discount: 0.3
 *               averageRating: 4.5
 *               introDescription: fake intro description
 *               detailDescription: fake detail description
 *               instructor: 609b9838b28d283ef805f15d
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Course'
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
 *     summary: Delete a course
 *     description: Only admins can delete other courses.
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Course id
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

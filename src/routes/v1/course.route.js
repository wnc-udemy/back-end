const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const courseValidation = require('../../validations/course.validation');
const courseController = require('../../controllers/course.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('course.create'), validate(courseValidation.createCourse), courseController.createCourse)
  .get(auth('optional.get'), validate(courseValidation.getCourses), courseController.getCourses);

router
  .route('/:courseId')
  .get(auth('optional.get'), validate(courseValidation.getCourse), courseController.getCourse)
  .patch(auth('course.update'), validate(courseValidation.updateCourse), courseController.updateCourse)
  .delete(auth('course.delete'), validate(courseValidation.deleteCourse), courseController.deleteCourse);

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
 *               subCategory: 041c7252af945b797e1012a2
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
 *            - 4
 *            - 5
 *           default: 0
 *         description: 'Type get courses 0: default list, 1: most view, 2: latest, 3: highlight, 4: advance filter, 5: admin censorship'
 *       - in: query
 *         name: status
 *         schema:
 *           type: number
 *           enum:
 *              - 0
 *              - 1
 *              - 2
 *              - 3
 *           default: 0
 *         description: 'Status of courses 0: Not complete, 1: Complete, 2: published, 3: Blocked'
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Course name
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Category id
 *       - in: query
 *         name: subCategory
 *         schema:
 *           type: string
 *         description: Sub category id
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
 *       - in: query
 *         name: type
 *         schema:
 *           type: number
 *           enum:
 *             - 0
 *             - 1
 *             - 2
 *             - 3
 *             - 4
 *             - 5
 *           default: 0
 *         description: 'Type get course 0: default mode info, 1: comment, 2: section, 3: similar, 4: instructor mode info, 5: instructor mode section'
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
 *               urlThumb:
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
 *               status: 0
 *               introDescription: fake intro description
 *               detailDescription: fake detail description
 *               targets: ["fake target 1", "fake target 2", "fake target 3"]
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

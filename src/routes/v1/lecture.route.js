const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const lectureValidation = require('../../validations/lecture.validation');
const lectureController = require('../../controllers/lecture.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('lecture.create'), validate(lectureValidation.createLecture), lectureController.createLecture)
  .get(auth('getLectures'), validate(lectureValidation.getLectures), lectureController.getLectures);

router
  .route('/:lectureId')
  .get(auth('getLectures'), validate(lectureValidation.getLecture), lectureController.getLecture)
  .patch(auth('lecture.update'), validate(lectureValidation.updateLecture), lectureController.updateLecture)
  .delete(auth('lecture.delete'), validate(lectureValidation.deleteLecture), lectureController.deleteLecture);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Lectures
 *   description: Lecture management and retrieval
 */

/**
 * @swagger
 * /lectures:
 *   post:
 *     summary: Create a lecture
 *     description: Only instructor can create owner lectures.
 *     tags: [Lectures]
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
 *               - type
 *               - lengthTime
 *               - isPreview
 *             properties:
 *               name:
 *                 type: string
 *               url:
 *                 type: string
 *               type:
 *                 type: number
 *               lengthTime:
 *                 type: number
 *               isPreview:
 *                 type: bool
 *             example:
 *               name: fake name
 *               url: https://www.facebook.com/
 *               type: 0
 *               lengthTime: 60
 *               isPreview: true
 *               course: ff355ca6777e6293190c1627
 *               section: ff355ca6777e6293190c1627
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Lecture'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all lectures
 *     description: All user can retrieve all lectures.
 *     tags: [Lectures]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Lecture name
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
 *         description: Maximum number of lectures
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
 *                     $ref: '#/components/schemas/Lecture'
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
 * /lectures/{id}:
 *   get:
 *     summary: Get a lecture
 *     description: all users can fetch other lectures.
 *     tags: [Lectures]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Lecture id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Lecture'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a lecture
 *     description: Only instructor can update owner lectures.
 *     tags: [Lectures]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Lecture id
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
 *               type:
 *                 type: number
 *               lengthTime:
 *                 type: number
 *               isPreview:
 *                 type: bool
 *             example:
 *               name: fake name
 *               url: https://www.facebook.com/
 *               type: 0
 *               lengthTime: 60
 *               isPreview: true
 *               lengthTimeOld: 30
 *               course: ff355ca6777e6293190c1627
 *               section: ff355ca6777e6293190c1627
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Lecture'
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
 *     summary: Delete a lecture
 *     description: Only admins can delete other lectures.
 *     tags: [Lectures]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Lecture id
 *       - in: query
 *         name: course
 *         required: true
 *         schema:
 *           type: string
 *         description: Course id
 *       - in: query
 *         name: section
 *         required: true
 *         schema:
 *           type: string
 *         description: Section id
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

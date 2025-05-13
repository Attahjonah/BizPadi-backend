const express = require('express');
const router = express.Router();
const { parser } = require('../configs/cloudinary');
const { uploadImage } = require('../controllers/upload.controller')

/**
 * @swagger
 * /api/upload:
 *   post:
 *     summary: Upload an image to Cloudinary
 *     tags: [Upload]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Image uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 imageUrl:
 *                   type: string
 *       400:
 *         description: No file uploaded
 */

router.post("/", parser.single('image'), uploadImage);

module.exports = router;

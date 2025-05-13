const uploadImage = (req, res) => {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }
  
    return res.status(200).json({
      success: true,
      message: 'Image uploaded successfully',
      imageUrl: req.file.path, // This will be the Cloudinary URL
    });
  };
  
  module.exports = { uploadImage };
  
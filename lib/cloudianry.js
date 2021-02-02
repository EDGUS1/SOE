import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: "dakmhau2b",
  api_key: "454546242278427",
  api_secret: "fuL10wVrAoHo716JlCOWunX6L48",
});

module.exports = async (file) => {
  try {
    const res = await cloudinary.uploader.upload(file);
    return res.secure_url;
  } catch (error) {
    return error;
  }
};
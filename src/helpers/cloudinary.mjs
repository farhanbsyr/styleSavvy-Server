import cloudinary from "cloudinary";
import multer from "multer";

cloudinary.config({
  cloud_name: "dwopxxwu4",
  api_key: "662784169187862",
  api_secret: "CVHMUAg5cS2MEmED3ZoX2LmuQzQ",
});

const storage = new multer.memoryStorage();

export const imageUploadUtil = async (file) => {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
};

export const upload = multer({ storage });

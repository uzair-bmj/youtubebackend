import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadfiletocloudinary = async (localfilepath) => {
    try {
        if(!localfilepath) return null
        const response =  await cloudinary.uploader.upload(localfilepath , {
            resource_type : "auto"
        })
        console.log("file is uploaded on cloudinary ", response.url)
        return response;
    } catch (error) {
        fs.unlinkSync(localfilepath) // it removes the locally saved temporary file from server because operation is failed
        return null
    }
}

export {uploadfiletocloudinary};
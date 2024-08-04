import app from "./app.js";
import cloudinary from "cloudinary";


cloudinary.v2.config({
    cloud_name: process.env.CLOUDINERY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINERY_API_SECRET,
})

const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`server listen on port ${port}`);
});
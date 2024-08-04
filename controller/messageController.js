import {Message} from  "../models/messagesSchema.js"
import { catchAsyncError } from "../middleware/catchAsyncError.js";

export const sendMessage = catchAsyncError(async(req,res,next)=>{
  
        const {firstName,lastName,email,phone,message}= req.body;
        console.log('data fatch')
        if(!firstName|| !lastName|| !phone || !email || !message){
            console.log('no require data')

            return res.status(400).json({
                success:false,
                message:"Please fill all the fields33"});
        }
        await Message.create({ firstName, lastName, phone, email, message });
        res.status(200).json({
            success:true,
            message:"message send "
        });
        console.log('complete')
    })
//     } catch (error) {
//         console.log(`message error:${error}`);
//     }
// }
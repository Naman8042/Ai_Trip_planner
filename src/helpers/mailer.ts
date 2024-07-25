import nodemailer from 'nodemailer'
import User from '@/models/User'
import bcrypt from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid';

interface Mail{
    email:string,
    emailType:string,
    userId:string
}

export const sendEmail = async({email,emailType,userId}:Mail)=>{
    try{
        const hashToken = uuidv4(); 
        if(emailType==='Verify'){
            await User.findByIdAndUpdate(userId,{
                $set:{
                    VerifyToken:hashToken,
                    VerifyTokenExpiry: Date.now()+360000
                }
            })
        }
        else if(emailType==='Reset'){
            await User.findByIdAndUpdate(userId,{
              $set:{
                forgotPasswordToken : hashToken,
              forgotPasswordTokenExpiry: Date.now()+3600000
              }          
            })
        }
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "d24f6f1ea70ffd",
              pass: "411933e34d5071"
            }
          });
            
            const mailOptions = {
              from: 'namansharma8042@gmail.com', 
              to: email, 
              subject: emailType==='Verify'? "Verify Your Passowrd":"Reset Your Password", // Subject line
              text: "Trip Planner", // plain text body
              html: `Verify your email on ${process.env.DOMAIN}/verify/${hashToken}`, // html body
            }
          const mailResponse = await transport.sendMail(mailOptions)
          console.log(mailResponse)
          return mailResponse;
    }
    catch(err:any){
        console.log(err)
    }
}
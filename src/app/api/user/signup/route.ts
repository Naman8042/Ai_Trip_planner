import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/User";
import { NextRequest,NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import { sendEmail } from "@/helpers/mailer";

connect()

export async function POST(request:NextRequest){
    try{
        const reqBody = await request.json()
        const {Name,email,password} = reqBody;
        console.log(Name,email,password)

        const user = await User.findOne({email:email})
       if(user){
        return NextResponse.json({
            message:"User already exits"
        })
       }

       const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(password,salt)

       const newUser = new User({
        Name,email,
        password:hashedPassword
       })
       const savedUser = await newUser.save()
       console.log(savedUser)

       await sendEmail({email,emailType:'Verify',userId:savedUser._id})
      
       return NextResponse.json({
        message:"User registed Successfully",
        success:true,
        savedUser
       })
    }
    catch(err:any){
        console.log(err)
        return NextResponse.json({success:false,error:err.message})
    }
}
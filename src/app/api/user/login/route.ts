import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/User";
import { NextRequest,NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

connect()

export async function POST(request : NextRequest){
    try{
        const {email,password} = await request.json()

        const user = await User.findOne({email})
       
        if(!user){
            return NextResponse.json({
                message:"User does not exists"
            })
        }

        const validPassword = await bcrypt.compare(password,user.password);

        if(!validPassword){
            return NextResponse.json({
                message:"invalid Password"
            })
        }

        const tokenData = {
            id:user._id,
        }
        const token = jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:'1d'})

        const response = NextResponse.json({
            message : "Logged In Success",
            success:true
        })
    
        response.cookies.set("token",token,{
            httpOnly : true
        })
    
        return response;
    }
    catch(err:any){
        console.log(err.message)
        return NextResponse.json({message:err.message})
    }
}
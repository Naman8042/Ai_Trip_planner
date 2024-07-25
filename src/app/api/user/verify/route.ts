import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/User";
import { NextRequest,NextResponse } from "next/server";

connect()

export async function POST(request:NextRequest){
    try{
        const {token} = await request.json()
        console.log(token)

        const user = await User.findOne({
            VerifyToken:token,
            VerifyTokenExpiry:{$gt:Date.now()}
        })

        console.log(user)
        if(!user){
            return NextResponse.json({message:"invalid token"})
        }

        user.isVerified = true;
        user.VerifyToken = undefined; 
        user.VerifyTokenExpiry = undefined; 

        await user.save()

        return NextResponse.json({
            message:"email Verified Sucessfully"
        })
    }
    catch(err){
        console.log(err)
    }
}
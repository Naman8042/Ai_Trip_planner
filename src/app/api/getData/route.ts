import Data from '@/models/Data'
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest,NextResponse } from 'next/server'

connect()

export async function POST(request:NextRequest){
    try{
        const {id} = await request.json()

        const findData = await Data.findById(id).select('-_id');;

        // console.log(findData)

        return NextResponse.json({
            message:"Got Successfully",
            success:true,
            findData
        })
    
    }
    catch(err){
        console.log(err)
    }
}
import Data from '@/models/Data'
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest,NextResponse } from 'next/server'

connect()

export async function POST(request:NextRequest){
    try{
        const {data} = await request.json()
        // console.log(data)

      const newData = new Data(data);
      await newData.save();

      return NextResponse.json({
        message:"Entry Created  Successfully",
        success:true,
        data : newData._id
       })

    }
    catch(err){
        console.log(err)
    }
}
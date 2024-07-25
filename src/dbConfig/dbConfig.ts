import mongoose from "mongoose";


export async function connect() {
    try{
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection

        connection.on('connected',()=>{
            console.log('MongoDb Connected')
        })

        connection.on('error',()=>{
            console.log('Mongo Db connection error')
            process.exit()
        })
    }
    catch(err){
        console.log(err)
    }

}
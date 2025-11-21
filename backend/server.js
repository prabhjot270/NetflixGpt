import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import  OpenAI from 'openai';

dotenv.config();

const app=express() ;
app.use(cors());
app.use(express.json()) ;

const client= new OpenAI({
    apiKey: process.env.OPENAI_KEY,
})

app.post("/api/gpt", async(req,res)=>{
    try{
        const {prompt}=req.body ;

        const response=await client.chat.completions.create({
            model:'gpt-3.5-turbo',
            messages:[
                {role:'user', content: prompt}
            ]
        });
        res.json(response);
    }
    catch(err){
        console.error(err);
        res.status(500).json({error: err.message})
    }
})

const PORT=5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT} ✅`);
})
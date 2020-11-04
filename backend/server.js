//importing
import mongoose from "mongoose"
import express from "express"
import cors from 'cors'
import multer from "multer"
import GridFsStorage from "multer-gridfs-storage"
import Grid from "gridfs-stream"
import bodyParser from "body-parser"
import path from "path"
import Pusher from "pusher"

Grid.mongo = mongoose.mongo

//app_config
const app = express()
const port = process.env.PORT || 9000

//middlewares
app.use(bodyParser.json())
app.use(cors())

//db config


//api_routes
app.get("/", (req, res)=> res.status(200).send("hello worlds"))

//listen
app.listen(port, ()=> console.log(`listening to : ${port}`))
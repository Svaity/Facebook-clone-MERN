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
const mongoURI = "mongodb+srv://admin:z0CgO5srFEZjqA6f@cluster0.ocfvv.mongodb.net/fbdb?retryWrites=true&w=majority"

const conn = mongoose.createConnection(mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connect(mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', ()=>{
    console.log("DB connected")
})

let gfs

conn.once('open', ()=>{
    console.log("DB connected")

    gfs = Grid(conn.db, mongoose.mongo)
    gfs.collection('images')
})

const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file)=>{
        return new Promise((resolve, reject)=>{
            const filename = `image-${Date.now()}${path.extname(file.originalname)}`

            const fileInfo = {
                filename: filename,
                bucketname: 'images'
            }

            resolve(fileInfo)
        })
    }
})

const upload = multer({ storage })

//api_routes
app.get("/", (req, res)=> res.status(200).send("hello worlds"))
app.post('/upload/image', upload.single('file'), (req, res)=>{
    res.status(201).send(req.file)
})



//listen
app.listen(port, ()=> console.log(`listening to : ${port}`))

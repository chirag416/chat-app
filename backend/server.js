import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/users.routes.js'
import connectToMongoDB from './db/connectToDB.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { app, server } from './socket/socket.js'
import path from 'path'


app.use(cors());
app.use(cors({
  origin: '*'
}));

const PORT = process.env.PORT || 5000

const __dirname = path.resolve();

dotenv.config()

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

app.use(express.static(path.join(__dirname,"/frontend/dist")))
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});


server.listen(PORT,()=> {
    connectToMongoDB()  
    console.log(`server running on port: ${PORT}`)
})
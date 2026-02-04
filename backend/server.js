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


import User from './models/users.model.js'
import Message from './models/messages.model.js'
import Conversation from './models/conversations.model.js'


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


app.get('/api/export/all', async (req, res) => {
	try{
		const users = await User.find({}).lean();
		const messages = await Measage.find({}).lean();
		const conversations = await Conversation.find({}).lean();
		res.json({users, messages, conversations});
	} catch (err) {
		res.status(500).json({ error: 'failed to fetch data', details: err.message});
	}
});

server.listen(PORT,()=> {
    connectToMongoDB()  
    console.log(`server running on port: ${PORT}`)
})

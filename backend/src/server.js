import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config(); // load .env before using process.env

const app = express();
const PORT = process.env.PORT || 5001


//middleware 
app.use(
  cors({
    origin:"*",
  }
));
app.use(express.json());// this middleware will parse JSON bodies : req.body
app.use(rateLimiter)


app.use("/api/notes", notesRoutes);

connectDB().then(()=>{
app.listen(PORT, () => {
  console.log("Server started on port:",PORT);
})
});

//mongodb+srv://ipshita754:6lKVugxVOSg8Lfkr@cluster0.uqd5vy6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
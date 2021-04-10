import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import postsRouter from "./routes/posts.js";

const app = express();
app.use("/posts", postsRouter)

// https://www.youtube.com/watch?v=ngc9gnGgUdA

app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());



const CONNECTION_URL = "mongodb+srv://arif:4040005067@cluster0.w0jvl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server listening at port ${PORT}`)))
.catch(err => console.log(err.message));

mongoose.set("useFindAndModify", false);
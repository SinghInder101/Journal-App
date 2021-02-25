import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'
import dotenv from 'dotenv';


const app = express();
dotenv.config({path:'./.env'});


app.use(bodyParser.json({limit: "30mb",extended:true})); //For images
app.use(bodyParser.json({limit: "30mb",extended:true}));
app.use(cors());
app.use('/posts',postRoutes);



const PORT = process.env.PORT || 4101 ;
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
});
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true , useUnifiedTopology:true})
.then(() => app.listen(PORT))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify',false);
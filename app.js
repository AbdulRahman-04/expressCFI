import express from "express";
import { log } from "node:console";
import { url } from "node:inspector";

const app = express();

const PORT = 5005;

app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).send("Hello world!");
  } catch (error) {
    console.log(error.name);
  }
});

app.post("/register", (req, res) => {
  try {
    let userInput = req.body;
    res.status(200).json(userInput);
    // console.log(userInput)
    // let person = {

    //     name: userInput.name,
    //     rollno: userInput.rollno

    // }

    // res.status(200).json(person)
  } catch (error) {
    console.log(error.name);
  }
});

// Request.params
app.get("/link/:url", (req, res)=>{
  try {

    let userURl = req.params.url;
    console.log(url);

    res.status(200).redirect(`https://${userURl}`)
    

    
  } catch (error) {
    console.log(error);
    
  }
})


//  Request.query



app.get("/search", (req, res)=>{
  try {
        
    let userData = req.query;
    console.log(userData);
  
    
  } catch (error) {
    console.log(error);
    
  }
})









app.listen(PORT, () => {
  console.log(`your server is running at ${PORT}`);
});


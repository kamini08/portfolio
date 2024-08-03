import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());




const MONGO_URI = process.env.REACT_APP_MONGO_URI;
var client = null;

export default async function connectToDatabase() {
    if (client) return client;
    console.log(client);
  
    if (!MONGO_URI) {
      
      console.log("MONGO_URI is not found!");
    }
  
    try {
   
      client = new MongoClient(MONGO_URI)  
      await client.connect();  
      console.log("Connected to MongoDB");
      return client;
      
    } catch (error) {
      console.log("Error connecting to MongoDB");
    }
  }
  

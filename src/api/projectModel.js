import mongoose from "mongoose";


const projectSchema = new mongoose.Schema({
  title: String,
  tags: Array,
  link: String,
  backgroundImage: String,
});

export default projectSchema;

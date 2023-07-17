import mongoose, { Schema, model, Document } from "mongoose";

let userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String }
})
const UserModel = mongoose.model<Document>('User', userSchema);

export default UserModel;
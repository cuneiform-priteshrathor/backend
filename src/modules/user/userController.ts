import UserModel from './userModel';
import bcrypt from 'bcryptjs';
async function addUser(req: any, res: any) {
    let data = req.body;
    let authCheck = await UserModel.findOne({ email: data.email })
    if (authCheck === null) {
        const hashedPassword = await bcrypt.hash(data.password, 10); // Hash the password
        req.body.password = hashedPassword;
        let userAdd = await UserModel.create(data)
        if (userAdd) {
            return res.status(200).json({ message: "done", Data: userAdd });

        } else {
            return res.status(400).json({ message: "false" });
        }
    } else {
        return res.status(400).json({ message: "User all ready have" });
    }
}
async function getUser(req: any, res: any) {
    let getUser = await UserModel.find();
    if (getUser) {
        return res.status(200).json({ message: "Get Successfully", getUser });
    } else {
        return res.status(400).json({ message: "false" });
    }
}
async function getUserId(req: any, res: any) {
    let getId = req.params.id;
    let getUser = await UserModel.find({ _id: getId });
    if (getUser) {
        return res.status(200).json({ message: "Get Successfully", data: getUser });
    } else {
        return res.status(400).json({ message: "false" });
    }
}
async function deleteUserId(req: any, res: any) {
    let getId = req.params.id;
    let getUser = await UserModel.findOneAndDelete({ _id: getId });
    if (getUser) {
        return res.status(200).json({ message: "Delete Successfully", data: getUser });
    } else {
        return res.status(400).json({ message: "false" });
    }
}
async function updateUser(req: any, res: any) {
    let getId = req.params.id;
    let getData = req.body;

    let getUser = await UserModel.findOneAndUpdate({ _id: getId }, { $set: getData }, { new: true });
    if (getUser) {
        return res.status(200).json({ message: "Update Successfully", data: getUser });
    } else {
        return res.status(400).json({ message: "false" });
    }
}
export default {
    addUser,
    getUser,
    getUserId,
    updateUser,
    deleteUserId
}

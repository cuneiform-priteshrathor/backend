import { match } from 'assert';
import bcrypt from 'bcryptjs';
import UserModel from '../user/userModel';
async function authLogin(req: any, res: any) {
    const { email, password } = req.body;
    try {
        const authCheck = await UserModel.findOne({ email });
        if (authCheck) {
            const passwordMatch = await bcrypt.compare(password, authCheck.password);
            if (passwordMatch) {
                return res.json({ message: 'Authentication successful' });
            } else {
                return res.json({ message: 'Incorrect password' });
            }
        } else {
            return res.json({ message: 'User not found. Register first.' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

async function authRegister(req: any, res: any) {
    let data = req.body;

    let authCheck = await UserModel.findOne({ email: data.email })
    if (authCheck === null) {
        const hashedPassword = await bcrypt.hash(data.password, 10); // Hash the password
        console.log('hashedPassword: ', hashedPassword);
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
export default {
    authRegister,
    authLogin
}
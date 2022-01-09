import jwt from "jsonwebtoken"
import Dotenv from "dotenv";
import User from "../../models/User.js";
Dotenv.config();
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD

const generateToken =(user) => {
    return jwt.sign(
    {
        id: user.id,
        email: user.email
    },
    "SECRET_KEY",
    { expiresIn: '1h' })
}

const userResolvers = {
    Mutation: {
        login: async(root, {email,password}) => {
            // Admin validation
            if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
                const user = {id:"ADMIN",email};
                const token = generateToken(user);
                return {
                    userLevel: "ADMIN",
                    login: true,
                    token
                }
            }
            else {
                const token = false; 
                return {
                    userLevel: "USER",
                    login: true,
                    token
                }
            }
        }
    }
}

export default userResolvers
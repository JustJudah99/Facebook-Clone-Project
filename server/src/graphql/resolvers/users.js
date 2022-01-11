import jwt from "jsonwebtoken"
import bcrypt from 'bcryptjs';
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
        },
        addUser: async(root, args)=> {
            let {name,lastname,email,password} = args.registerInput;
            let {day, month, year} = args.registerInput.birth;
            const UserDoc=await User.find({email})
            console.log(args.registerInput);
            if (UserDoc.length !== 0) {
                return {
                    msg: "USER_ALREADY_EXISTS"
                }
            } else {
                password = await bcrypt.hash(password,12);
                let levelUser;
                UserDoc.length == 0 ? levelUser = "ADMIN" : levelUser = "USER";
                const newUser = new User({
                    name,
                    lastname,
                    email,
                    password,
                    birth: {
                        day,
                        month,
                        year
                    },
                    sex: {
                        sexId,
                        sexType
                    },
                    levelUser
                })
                console.log(newUser);
                return {
                    msg: "USER_REGISTRED_SUCCESS"
                }
            }
        }
    }
}

export default userResolvers
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
            let token;
            if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
                const user = {id:"ADMIN",email};
                token = generateToken(user);
                return {
                    userLevel: "ADMIN",
                    login: true,
                    token
                }
            }
            else {
                const findUser = await User.find({email})
                if (findUser.length >= 1) {
                    let comparePassword = await bcrypt.compare(password, findUser[0].password)
                    if (comparePassword) {
                        const user = {id:findUser[0].levelUser,email: findUser[0].email};
                        token = generateToken(user);
                        return {
                            userLevel: "",
                            login: true,
                            token
                        }
                    } else {
                        return {
                            userLevel: "",
                            login: false,
                            token
                        }    
                    }
                } else {
                    let token = false; 
                    return {
                        userLevel: false,
                        login: true,
                        token
                    }
                }
            }
        },
        addUser: async(root, args)=> {
            let {name,lastname,email,password} = args.registerInput;
            let {day, month, year} = args.registerInput.birth[0];
            let { sexId, sexType } = args.registerInput.sex[0];
            const UserDoc=await User.find({email})
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
                await newUser.save();
                return {
                    msg: "USER_REGISTRED_SUCCESS"
                }
            }
        }
    }
}

export default userResolvers
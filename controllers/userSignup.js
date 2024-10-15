import User from "../models/user.js";
import { compare, hash } from "bcrypt";
import  createToken  from "../middleware/token.js";
export const signup = async(req,res,next)=>{    
    let {name,email,password} = req.body;    
    // lets check weather its a existing user or not
    let existingUser = await User.findOne({email});    
    if (!existingUser) {
        //  before storing user into db we need to hash password
        let hashPassword = await hash(password,12);
        console.log(hashPassword);
        
        password = hashPassword;
        const newUser = await User.create({name,email,password})
        console.log(newUser);

        // Generate token for the new user
        const token = createToken(newUser._id, newUser.email);

        res.status(201).json({
            "message": "User created successfully",
            "user": newUser,
            "token": token
        });
    } else {
        res.status(400).json({"message": "User already exists"});
    }
}

export const login = async(req,res,next)=>{
    let {email,password} = req.body;
    // check wheather user already present or not
    let user = await User.findOne({email});
    if (!user) {
        console.log('user is not registered');
    } else {
        const isPasswordMatched = await compare(password,user.password);
        console.log(isPasswordMatched);
        
        if (!isPasswordMatched) {
            res.status(400).json({"message":"Invalid password"})
        } else {
            let token = createToken(user._id,user.email);
            res.status(200).json({
                "message":"logedin",
                "user":user,
                "token":token
            })
        }
    }
}

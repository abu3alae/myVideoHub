import {Request, RequestHandler} from 'express';
import User from "../../model/userSchema";
import {sendResponse} from "../../utils/sendResponse";
import crypto from "crypto";
import {compareHashedPassword, hashPassword} from "../../utils/passwordHelper";
import {generateJwtToken} from "../../utils/generateJwtToken";

interface RegisterReq extends Request {
    body: {
        email: string;
        password: string;
    }
}

export const signUpUser : RequestHandler = async (req: RegisterReq, res) => {
    try {
        const {email, password} = req.body
        const existingUser = await User.findOne({email: email})

        if (existingUser) {
            // do nothing
            return sendResponse(res, 400, false, 'User already exist')
        }

        const hashedPassword = await hashPassword(password)

        await User.create({
            email: email,
            password: hashedPassword,
            token: crypto.randomBytes(16).toString('hex'),
        })

        //send response of successfully
        return sendResponse(res, 200, true, 'User successfully registered')

    } catch (error) {
        console.log(`Error in signing up the user ${error}`)
        // Send failure response
        return sendResponse(res, 500, false, 'Internal Server Error')
    }

}

export const signInUser : RequestHandler = async (req: RegisterReq, res) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({email: email})

        if(!user) {
            return sendResponse(res, 400, false, 'User does not exist')
        }

        const matchPassword = await compareHashedPassword(password, user.password)

        if (!matchPassword) {
            return sendResponse(res, 400, false, 'Invalid password')
        }

        const jwtToken = await generateJwtToken(user)

        sendResponse(res, 200, true, 'User successfully Logged in', {user: jwtToken})

    } catch (error) {
        console.log(`Error in signing in the user ${error}`);
        // Send failure response
        return sendResponse(res, 500, false, 'Internal Server Error')
    }
}
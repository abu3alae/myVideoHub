import bcrypt from 'bcrypt'

export const hashPassword = async(originalPassword: string):Promise<string> => {
    return await bcrypt.hash(originalPassword, 16);
}

export const compareHashedPassword = async(originalPassword: string, dbPassword: string):Promise<boolean> => {
    const result = await bcrypt.compare(originalPassword, dbPassword);
    return result
}
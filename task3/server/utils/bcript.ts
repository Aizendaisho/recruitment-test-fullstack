import bcrypt from "bcrypt"


const passwordHash = async (password: string) => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    return hash
}

const passwordCompare = async (password: string, hash: string) => {
    const compare = await bcrypt.compare(password, hash)
    return compare
}


export { passwordHash, passwordCompare }
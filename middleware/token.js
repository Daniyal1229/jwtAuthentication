import jwt from 'jsonwebtoken';

const createToken = (id,email)=>{
    const payload = {id,email};
    const token = jwt.sign(payload, 'jwt_secret')
    return token;
}

export default createToken;
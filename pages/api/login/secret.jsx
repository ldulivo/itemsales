import jwt from 'jsonwebtoken';

const KEY = 'lsdkfsldkfhslkdfsldkfjsldkfjsldkfj'

export default async function handler (req, res) {
    const {token} = req.body;

    console.log('token mi', req.body);

    const {admin} = jwt.verify(token, KEY)

    if(admin) {
        res.status(200).json({
            secretAdminCode: 12345
        })
    } else {
        res.status(200).json({
            admin: false
        })
    }
}
import jwt from 'jsonwebtoken';

function authCheck(req: any, res: any, next: any) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, 'your-secret-key');
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Forbidden. Invalid token.' });
    }
}
export default authCheck
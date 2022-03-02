export default {
    mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/app',
    jwtSecret: process.env.JWT_SECRET || 'testeJH12GALO!DOIDO',
    // mongoUrl: process.env.MONGO_URL || 'mongodb://admin:password@localhost:27017/app',
}
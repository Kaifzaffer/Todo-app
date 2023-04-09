import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
    const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-pivl7tv-shard-00-00.jlbftrd.mongodb.net:27017,ac-pivl7tv-shard-00-01.jlbftrd.mongodb.net:27017,ac-pivl7tv-shard-00-02.jlbftrd.mongodb.net:27017/?ssl=true&replicaSet=atlas-y3rz7r-shard-0&authSource=admin&retryWrites=true&w=majority`

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
        .then(() => console.log('Database connected successfully'))
        .catch((error) => console.log('Error while connecting to the database:', error.message));

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    });
};


export default Connection;
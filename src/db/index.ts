import mongoose from 'mongoose';

const connectDB = async (dbUrl: any) => {
    try {
        await mongoose.connect(`${dbUrl}`);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
};

export default connectDB;

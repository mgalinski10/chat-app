import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error('Missing MONGO_URI in environment');
}

async function connectMongoose() {
  try {
    await mongoose.connect(MONGO_URI!);
    console.log('✅ Connected to MongoDB via Mongoose');
  } catch (err) {
    console.error('❌ Mongoose connection error:', err);
    throw err;
  }
}

export default connectMongoose;

import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema(
  {
    fromUserId: { type: Number, required: true },
    toUserId: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    read: { type: Boolean, default: false },
  },
  { collection: 'notifications' },
);

export const Notification = mongoose.model('Notification', notificationSchema);

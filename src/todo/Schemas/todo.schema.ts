import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

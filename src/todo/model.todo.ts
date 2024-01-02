import { Document } from 'mongoose';

export interface Todo extends Document {
  id: string;
  desc: string;
  isCompleted: boolean;
}

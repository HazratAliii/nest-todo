import { Injectable, Res } from '@nestjs/common';
import { Todo } from './model.todo';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

  async getAllTodos(): Promise<Todo[]> {
    return await this.todoModel.find();
  }

  async getSingleTodo(id): Promise<Todo> {
    return await this.todoModel.findById({ id });
  }

  async deleteTodo(id): Promise<string> {
    try {
      await this.todoModel.deleteOne({ _id: id });
    } catch (e) {
      console.log(e);
    }
    return 'deleted';
  }

  async updateTodo(id, body): Promise<String> {
    try {
      console.log('Body1', body, 'id ', id);
      await this.todoModel.findByIdAndUpdate(id, { $set: body }, { new: true });
    } catch (e) {
      console.log('Something went wrong');
    }
    return `Updated`;
  }
  async addTodo(todo): Promise<string> {
    try {
      await this.todoModel.create(todo);
    } catch (e) {
      console.log('Something went wrong');
    }
    return 'Todo added';
  }
}

import { Injectable } from '@nestjs/common';
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
    await this.todoModel.deleteOne({ _id: id });
    return 'deleted';
  }

  updateTodo(id): string {
    return `Update ${id}`;
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

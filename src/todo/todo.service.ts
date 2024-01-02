import { Injectable } from '@nestjs/common';
import { Todo } from './model.todo';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

  getAllTodos(): Promise<Todo[]> {
    return this.todoModel.find();
  }

  getSingleTodo(id): string {
    return `Todo id ${id}`;
  }

  deleteTodo(id): string {
    return `${id}`;
  }

  updateTodo(id): string {
    return `Update ${id}`;
  }
  addTodo(): string {
    return 'Hello';
  }
}

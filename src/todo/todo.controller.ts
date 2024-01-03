import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  HttpCode,
  Body,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './model.todo';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post('addTodo')
  addTodo(@Body() body: any): Promise<string> {
    console.log(body);
    return this.todoService.addTodo(body);
  }

  @Get()
  getAllTodos(): Promise<Todo[]> {
    return this.todoService.getAllTodos();
  }

  @Get(':id')
  getSingleTodo(@Param() params: any): Promise<Todo> {
    return this.todoService.getSingleTodo(params.id);
  }

  @Delete(':id')
  deleteTodo(@Param() params): Promise<String> {
    return this.todoService.deleteTodo(params.id);
  }

  @Put(':id')
  updateTodo(@Param() params): string {
    return this.todoService.updateTodo(params.id);
  }
}

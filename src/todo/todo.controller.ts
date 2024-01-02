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

  @Get()
  getAllTodos(): Promise<Todo[]> {
    return this.todoService.getAllTodos();
  }

  @Get(':id')
  getSingleTodo(@Param() params: any): string {
    return this.todoService.getSingleTodo(params.id);
  }

  @Delete(':id')
  deleteTodo(@Param() params): string {
    return this.todoService.deleteTodo(params.id);
  }

  @Put(':id')
  updateTodo(@Param() params): string {
    return this.todoService.updateTodo(params.id);
  }

  @Post('addTodo')
  addTodo(@Body() body: any): string {
    console.log(body);
    return this.todoService.addTodo();
  }
}

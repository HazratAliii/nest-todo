import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://hazratali:mongodbatlas@cluster0.bpoue.mongodb.net/?retryWrites=true&w=majority/nest-todo',
    ),
    TodoModule,
  ],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService],
})
export class AppModule {}

import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { JwtAuthGuard } from 'src/auth/auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Post()
  create(@Req() req, @Body() createTaskDto: CreateTaskDto) {
    const userId = req.user.userId
    return this.taskService.create(userId, createTaskDto);
  }

  @Get()
  findAll(@Req() req) {
    const userId = req.user.userId
    return this.taskService.findAll(userId);
  }

  @Get(':id')
  findOne(@Req() req, @Param('id') id: string) {
    const userId = req.user.userId
    return this.taskService.findOne(userId, id);
  }

  @Patch(':id')
  update(@Req() req, @Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    const userId = req.user.userId
    return this.taskService.update(userId, id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Req() req, @Param('id') id: string) {
    const userId = req.user.userId
    return this.taskService.remove(userId, id);
  }
}

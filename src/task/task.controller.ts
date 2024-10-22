import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@UseGuards(JwtAuthGuard)
@ApiTags('Tasks')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @ApiOperation({ summary: 'Create a task' })
  @Post()
  create(@Req() req, @Body() createTaskDto: CreateTaskDto) {
    const userId = req.user.userId
    return this.taskService.create(userId, createTaskDto);
  }

  @ApiOperation({ summary: 'List all user tasks' })
  @Get()
  findAll(@Req() req) {
    const userId = req.user.userId
    return this.taskService.findAll(userId);
  }

  @ApiOperation({ summary: 'Get a task by ID' })
  @Get(':id')
  findOne(@Req() req, @Param('id') id: string) {
    const userId = req.user.userId
    return this.taskService.findOne(userId, id);
  }

  @ApiOperation({ summary: 'Update a task by ID' })
  @Patch(':id')
  update(@Req() req, @Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    const userId = req.user.userId
    return this.taskService.update(userId, id, updateTaskDto);
  }

  @ApiOperation({ summary: 'Delete a task by ID' })
  @Delete(':id')
  remove(@Req() req, @Param('id') id: string) {
    const userId = req.user.userId
    return this.taskService.remove(userId, id);
  }
}

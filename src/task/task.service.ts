import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {

  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) { }

  async create(userId: string, createTaskDto: CreateTaskDto) {

    const task = this.taskRepository.create({
      ...createTaskDto,
      user: {
        id: userId,
      }
    })

    await this.taskRepository.save(task)

    return task;
  }

  async findAll(userId: string) {

    const tasks = await this.taskRepository.find({ where: { user: { id: userId } } })

    return tasks;
  }

  async findOne(userId: string, id: string) {

    const task = await this.taskRepository.findOne({ where: { user: { id: userId }, id: id } })

    if (!task) throw new NotFoundException('Tarefa não encontrada!');

    return task;
  }

  async update(userId: string, id: string, updateTaskDto: UpdateTaskDto) {

    const task = await this.taskRepository.findOne({ where: { user: { id: userId }, id: id } })

    if (!task) throw new NotFoundException('Tarefa não encontrada!');

    Object.assign(task, updateTaskDto)

    await this.taskRepository.save(task)

    return task;
  }

  async remove(userId: string, id: string) {

    const task = await this.taskRepository.findOne({ where: { user: { id: userId }, id: id } })

    if (!task) throw new NotFoundException('Tarefa não encontrada!');

    await this.taskRepository.delete(task?.id)


    return `Tarefa deletada com sucesso!`;
  }
}

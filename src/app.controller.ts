import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { AppService } from './app.service';
import { Project } from "./app.model";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getProject(): Promise<any> {
    return this.appService.getAllProjects();
  }

  @Post()
  addProject(@Body() projectDto: Project) {
    return this.appService.addProject(projectDto);
  }

  @Patch(':name')
  editProject(
    @Body() projectDto: Project,
    @Param() project: Project,
    ) {
    return this.appService.editProject(project.name, projectDto);
  }

  @Delete(':name')
  deleteProject(@Param() project: Project) {
    return this.appService.deleteProject(project.name);
  }
}
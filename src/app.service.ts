import { Injectable, NotFoundException } from "@nestjs/common";
import {Project} from "./app.model";
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel('Project') private readonly projectModel: Model<Project>) {}

  async getAllProjects(): Promise<any> {
    return this.projectModel.find().exec();
  }

  async addProject(projectDto: Project) {
    const newProject = new this.projectModel(projectDto);
    await newProject.save();
  }

  async editProject(projectName: string, projectDto: Project) {
    await this.projectModel
      .updateOne({ name: projectName }, projectDto)
      .exec();
  }

  async deleteProject(projectName: string) {
    const project = await this.findProject(projectName);
    if (project) {
      await this.projectModel.deleteOne({name: project.name});
    } else {
      throw new NotFoundException('This project does not exist.');
    }
  }

  private async findProject(projectName: string): Promise<Project> {
    return await this.projectModel.findOne({ name: projectName }).exec();
  }

}

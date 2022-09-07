import * as mongoose from 'mongoose';

export const ProjectSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        skills: { type: Array, required: true },
        links: { type: Array, required: true },
    }
);

export interface Project extends mongoose.Document {
    name: string;
    description: string;
    skills: string[];
    links: Object[];
}
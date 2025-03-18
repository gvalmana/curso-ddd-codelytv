import { deserialize, serialize } from 'bson';
import fs from 'fs';

import { Course } from '../../domain/Course';
import { CourseRepository } from '../../domain/CourseRepository';

export class FileCourseRepository implements CourseRepository {
  private readonly FILE_PATH = `${__dirname}/courses`;

  async save(course: Course): Promise<void> {
    await fs.promises.writeFile(this.filePath(course.id), serialize(course));
  }

  private filePath(id: string): string {
    return `${this.FILE_PATH}.${id}.repo`;
  }

  async search(courseId: string): Promise<Course | null> {
    const courseData = await fs.promises.readFile(this.filePath(courseId));
    const { id, name, duration } = deserialize(courseData);
    return new Course({ id, name, duration });
  }
}

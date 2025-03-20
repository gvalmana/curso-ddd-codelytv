import { deserialize, serialize } from 'bson';
import fs from 'fs';

import { Course } from '../../domain/Course';
import { CourseRepository } from '../../domain/CourseRepository';
import { CourseDuration } from '../../../Shared/domain/Courses/CourseDuration';
import { CourseName } from '../../../Shared/domain/Courses/CourseName';
import { CourseId } from '../../../Shared/domain/Courses/CourseId';

export class FileCourseRepository implements CourseRepository {
  private readonly FILE_PATH = `${__dirname}/courses`;

  async save(course: Course): Promise<void> {
    const id = course.id.value;
    await fs.promises.writeFile(this.filePath(id), serialize(course));
  }

  async search(courseId: string): Promise<Course | null> {
    const courseData = await fs.promises.readFile(this.filePath(courseId));
    const { id, name, duration } = deserialize(courseData);

    return new Course(id as CourseId, name as CourseName, duration as CourseDuration);
  }

  private filePath(id: string): string {
    return `${this.FILE_PATH}.${id}.repo`;
  }
}

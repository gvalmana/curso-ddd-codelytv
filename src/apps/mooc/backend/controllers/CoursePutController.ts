import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from './Controller';
import { CourseCreator } from '../../../../Contexts/Mooc/Courses/application/CourseCreator';

type CoursePutRequest = Request & {
  id: string;
  name: string;
  duration: string;
};

export class CoursePutController implements Controller {
  constructor(private readonly courseCreator: CourseCreator) {}

  async run(req: Request, res: Response): Promise<void> {
    const { id, name, duration } = req.body as CoursePutRequest;

    await this.courseCreator.run({ id, name, duration });

    res.status(httpStatus.CREATED).send();
  }
}

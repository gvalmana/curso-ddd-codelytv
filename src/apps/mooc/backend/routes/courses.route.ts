import { Request, Response, Router } from 'express';
import { body } from 'express-validator';

import { CoursePutController } from '../controllers/CoursePutController';
import container from '../dependency-injection';
import { validateReqSchema } from '.';

export const register = (router: Router): void => {
  const reqSchema = [
    body('id').exists().isString(),
    body('name').exists().isString(),
    body('duration').exists().isString()
  ];

  const coursePutController: CoursePutController = container.get('Apps.mooc.controllers.CoursePutController');
  router.put('/courses/:id', reqSchema, validateReqSchema, (req: Request, res: Response) =>
    coursePutController.run(req, res)
  );
};

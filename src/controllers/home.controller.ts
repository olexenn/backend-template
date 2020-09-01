import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
  res.render('home', { message: req.params.message });
};

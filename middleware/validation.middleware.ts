import { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";
import { INote } from "../noteModel";

export function validateNote(
  req: Request ,
  res: Response,
  next: NextFunction
): void {
  const { title, content, category } = req.body;  

  if (!title || typeof title !== "string") {
   res.status(400).send("Title is required and must be a string");
   return
  }
  if (!content || typeof content !== "string") {
 res.status(400).send("Content is required and must be a string");
 return
  }

  if (category !== undefined && !Types.ObjectId.isValid(category)) {
    res.status(400).send("Category must be a valid ObjectId");
    return
  }
  next();
}
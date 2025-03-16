import { Router, Request, Response } from "express";
import Controller from "../controller";
import { validateNote } from "../middleware/validation.middleware";

const router = Router();

router.get("/", Controller.fetch);
router.get("/notes", Controller.fetchMany);
router.post("/notes", Controller.create);
router.get("/notes/:id", Controller.fetchOne);
router.patch("/notes/:id", Controller.update);
router.delete("/notes/:id", Controller.delete);
router.post("/notes/categories", Controller.createCategory)
router.get("/notes/categories/:categoryId", Controller.getNotesByCategory);
router.put("/notes/:id", validateNote, Controller.updateNote);


export default router; 



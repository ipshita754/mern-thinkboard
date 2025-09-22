import express from "express"
import { createNote, deleteNote, getAllNotes, updateNote, getNoteById } from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/",getAllNotes)
router.post("/",createNote);
router.get("/:id", getNoteById);
router.put("/:id",updateNote);//With PUT, we update the value in the DB. So which value should be updated? We have to provide the ID for that.
router.delete("/:id",deleteNote);//we need id for delete data

export default router;
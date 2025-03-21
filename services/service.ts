import { INote } from "../interfaces/note.interface";
import Note from "../models/noteModel";

class NoteServices {
    async getAllNotes() {
        return await Note.find({}, "-__v");
    }

    async addNote(data: any) {
        return await Note.create(data);
    }

    async getNoteById(id: string) {
        return await Note.findOne({ _id: id });
    }

    async editNoteById(id: string, data: any) {
        return await Note.findOneAndUpdate(
            { _id: id }, 
            data, 
            { new: true, runValidators: true }
        );
    }

    async deleteNoteById(id:string) {
       
        return await Note.findOneAndDelete({ _id: id });
    }


    async getNotesByCategory(categoryId: string): Promise<INote[]> {
        try {
          const notes = await Note.find({ category: categoryId })
                                 .populate('category')
                                 .exec();
          return notes;
        } catch (error) {
          throw error;
        }
      }
    
      async updateNote(id: string, updateData: Partial<INote>): Promise<INote | null> {
        try {
          const note = await Note.findByIdAndUpdate(
            id,
            { $set: updateData },
            { new: true, runValidators: true }
          ).populate('category');
          
          return note;
        } catch (error) {
          throw error;
        }
      }
}

export default new NoteServices();
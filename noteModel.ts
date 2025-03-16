import {model, Schema, Document,Types }  from "mongoose";
import constants from "./constants";
// import { NOTE_TYPES, DATABASES} from constants;


export interface ICategory extends Document{
    name:string,
    description?: string,
    createdAt: Date,
    updatedAt:Date,
}

const CategorySchema = new Schema<ICategory>({
    name:{
        type:String,
        required:true,
        unique: true,
    },
    description:{
        type:String,
        required:false
    }
},
{
    timestamps: true,
},
)

export const Category = model<ICategory>('Category', CategorySchema);

export interface INote extends Document {
     title: String;
     content: String;
     type: String;
     category: Types.ObjectId | ICategory;
     createdAt: Date;
     updatedAt: Date;
}

const NoteSchema = new Schema <INote> (
    {
        title:{
            type:String,
            required:true,
        },
        content:{
            type:String,
            required:true,
            unique:true,
        },
         type:{
            type: String,
            enum:[constants.NOTE_TYPES.USER, constants.NOTE_TYPES.AGENT],
            default: constants.NOTE_TYPES.USER,
        },
        category:{
            type:Schema.Types.ObjectId,
            ref: 'category',
            required:true,
        }
    },
    {
        timestamps: true,
    }
);

const Note = model<INote>(constants.DATABASES.NOTE, NoteSchema);

export default Note;
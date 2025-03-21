export interface IUser extends Document{
    name:string,
    password: string,
    email: string,
    phone: number,
    createdAt: Date,
    updatedAt:Date,
}
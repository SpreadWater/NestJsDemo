// user.interface.ts
import { Document } from 'mongoose';
 
export interface User extends Document {
  readonly _id: string;
  readonly user_name: string;
  readonly nick_name: string;
  readonly avatar: string;
  readonly email: string;
  readonly role: string;
  readonly password: string;
  readonly create_time: Date;
  readonly update_time: Date;
}
// user.schema.ts
import { Schema } from 'mongoose';
import { RoleType } from '../enum/role-type.enum';
let bcrypt = require('bcryptjs');
export const userSchema = new Schema(
  {
    _id: { type: String, required: true }, // 覆盖 Mongoose 生成的默认 _id
    user_name: { type: String, required: true },
    nick_name: { type: String },
    avatar: { type: String },
    email: { type: String },
    role: {
      type: String,
      enum: RoleType,
      default: 'visitor',
    },
    password: { type: String, required: true },
    create_time: { type: Date, default: Date.now },
    update_time: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'create_time', updatedAt: 'update_time' },
  },
);
// 密码加密处理
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hashSync(this.password);
});

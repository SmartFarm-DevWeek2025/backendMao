import mongoose, { Schema, model, Document, Model, HydratedDocument } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export interface IUserProfile {
    firstName: string;
    lastName: string;
    age?: number;
    address?: {
        street?: string;
        city?: string;
        state?: string;
        zip?: string;
    };
}

export interface IUserPoints {
    totalPoints: number;
    earned: number;
    redeemed: number;
}

export interface IUserMembership {
    type: "Basic" | "Premium" | "VIP";
    startDate: Date;
    expiryDate?: Date;
    isActive: boolean;
}


export interface IUser extends Document {
    _id: mongoose.Types.ObjectId;
    name: string;
    email: string;
    password: string;
    tokens: { token: string }[];
    profile: IUserProfile;
    points: IUserPoints;
    membership: IUserMembership
}


export interface IUserMethods {
    generateAuthToken(): Promise<string>
    toJSON(): IUser
}

interface UserModel extends Model<IUser, Record<string, never>, IUserMethods> {
    findByCredentials(email: string, password: string): Promise<HydratedDocument<IUser, IUserMethods>>
}

const UserProfileSchema = new Schema<IUserProfile>({
    firstName: { type: String, required: true, default: "firstName" },
    lastName: { type: String, required: true, default: "lastName" },
    age: { type: Number },
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        zip: { type: String }
    }
});

const UserPointsSchema = new Schema<IUserPoints>({
    totalPoints: { type: Number, default: 0 },
    earned: { type: Number, default: 0 },
    redeemed: { type: Number, default: 0 }
});

const UserMembershipSchema = new Schema<IUserMembership>({
    type: { type: String, enum: ["Basic", "Premium", "VIP"], default: "Basic" },
    startDate: { type: Date, default: Date.now },
    expiryDate: { type: Date },
    isActive: { type: Boolean, default: true }
});


const userSchema = new Schema<IUser, UserModel, IUserMethods>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    tokens: [{ token: { type: String, required: true } }],
    profile: { type: UserProfileSchema, required: true, default: {} },
    points: { type: UserPointsSchema, required: true, default: {} },
    membership: { type: UserMembershipSchema, required: true, default: {} }
});

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 8);
    }
    next();
});

userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_KEY as string);
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
};

userSchema.methods.toJSON = function () {
    const user = this as IUser;
    const userObject = user.toObject();
    delete userObject.password;
    delete userObject.tokens;
    return userObject;
};

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        return null;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return null;
    }
    return user;
};

const User = model<IUser, UserModel>("User", userSchema);

export default User;

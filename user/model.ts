import type {Types} from 'mongoose';
import {Schema, model} from 'mongoose';

/**
 * This file defines the properties stored in a User
 * DO NOT implement operations here ---> use collection file
 */

// Type definition for User on the backend
export type User = {
  _id: Types.ObjectId; // MongoDB assigns each object this ID on creation
  username: string;
  password: string;
  totalUpvotes: number;
  totalDownvotes: number;
  reputationScore: number;
  dateJoined: Date;
};

// Mongoose schema definition for interfacing with a MongoDB table
// Users stored in this table will have these fields, with the
// type given by the type property, inside MongoDB
const UserSchema = new Schema({
  // The user's username
  username: {
    type: String,
    required: true
  },
  // The user's password
  password: {
    type: String,
    required: true
  },
  // The reputation score associated with the user
  reputationScore: {
    type: Number,
    required: true
  },
  // The total amount of upvotes a user has ever had
  totalUpvotes: {
    type: Number,
    required: true
  },
  // The total amount of downvotes a user has ever had 
  totalDownvotes: {
    type: Number,
    required: true
  },
  // The date the user joined
  dateJoined: {
    type: Date,
    required: true
  }
});

const UserModel = model<User>('User', UserSchema);
export default UserModel;

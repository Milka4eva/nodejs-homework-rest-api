const { Schema } = require("mongoose");
const { handleMongooseError } = require("../../helpers");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
      trim: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "professional", "business"],
      default: "starter",
    },
    token: {
      type: String,
    },
    avatarURL: {
      type: String,
      required: true,
    }
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

module.exports = userSchema;
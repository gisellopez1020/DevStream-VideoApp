import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["Frontend", "Backend", "DevOps"],
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    thumbnail: {
      type: String,
    },
  },
  { timestamps: true },
);

const Video = mongoose.model("Video", videoSchema);

export default Video;

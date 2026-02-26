import Video from "../models/Video.js";

export const getVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json(videos);
  } catch (error) {
    console.error("Error al obtener videos:", error.message);
    res.status(500).json({ message: "Error al obtener videos" });
  }
};

export const likeVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await Video.findByIdAndUpdate(
      id,
      { $inc: { likes: 1 } },
      { new: true },
    );
    if (!video) {
      return res.status(404).json({ message: "Video no encontrado" });
    }
    res.status(200).json(video);
  } catch (error) {
    console.error("Error al dar like al video:", error.message);
    res.status(500).json({ message: "Error al dar like al video" });
  }
};

export const createVideo = async (req, res) => {
  try {
    const newVideo = new Video(req.body);
    const savedVideo = await newVideo.save();
    res.status(201).json(savedVideo);
  } catch (error) {
    console.error("Error al crear video:", error.message);
    res.status(500).json({ message: "Error al crear video" });
  }
};

import { useState } from "react";
import { createVideo } from "../services/videoService";

export const useVideoForm = (onVideoCreated) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    url: "",
    category: "Frontend",
  });
  const [creatingVideo, setCreatingVideo] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      url: "",
      category: "Frontend",
    });
  };

  const handleCreateVideo = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description || !formData.url) {
      alert("Por favor completa todos los campos");
      return;
    }

    setCreatingVideo(true);
    try {
      const youtubeUrl = formData.url.startsWith("http")
        ? formData.url
        : `https://youtube.com/watch?v=${formData.url}`;

      const videoData = {
        ...formData,
        url: youtubeUrl,
        likes: 0,
        thumbnail: `https://img.youtube.com/vi/${extractYoutubeId(youtubeUrl)}/hqdefault.jpg`,
      };

      const newVideo = await createVideo(videoData);

      onVideoCreated(newVideo);
      resetForm();
      setShowModal(false);
    } catch (err) {
      alert(`Error al crear video: ${err.message}`);
    } finally {
      setCreatingVideo(false);
    }
  };

  const extractYoutubeId = (url) => {
    const shortUrlMatch = url.match(/youtu\.be\/([^?]+)/);
    if (shortUrlMatch) return shortUrlMatch[1];

    const standardUrlMatch = url.match(/v=([^&]+)/);
    if (standardUrlMatch) return standardUrlMatch[1];

    return url;
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    resetForm();
  };

  return {
    showModal,
    formData,
    creatingVideo,
    openModal,
    closeModal,
    handleFormChange,
    handleCreateVideo,
  };
};

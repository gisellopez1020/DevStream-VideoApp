import { useState, useEffect } from "react";
import { getVideos, likeVideo } from "../services/videoService";

export const useVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getVideos();
        setVideos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const handleLike = async (id) => {
    setVideos((prev) =>
      prev.map((v) => (v._id === id ? { ...v, likes: v.likes + 1 } : v)),
    );

    try {
      await likeVideo(id);
    } catch (err) {
      setVideos((prev) =>
        prev.map((v) => (v._id === id ? { ...v, likes: v.likes - 1 } : v)),
      );
    }
  };

  const filteredVideos = videos.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || video.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const addVideoToList = (newVideo) => {
    setVideos((prev) => [newVideo, ...prev]);
  };

  return {
    videos,
    filteredVideos,
    loading,
    error,
    searchTerm,
    activeCategory,
    handleLike,
    setSearchTerm,
    setActiveCategory,
    addVideoToList,
  };
};

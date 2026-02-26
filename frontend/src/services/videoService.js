const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const getVideos = async () => {
  try {
    const res = await fetch(`${API_URL}/api/videos`);
    if (!res.ok) {
      throw new Error(`Error ${res.status}: No se pudieron obtener los videos`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error al obtener videos:", error);
    throw error;
  }
};

export const createVideo = async (videoData) => {
  try {
    const res = await fetch(`${API_URL}/api/videos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(videoData),
    });
    if (!res.ok) {
      throw new Error(`Error ${res.status}: No se pudo crear el video`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error al crear video:", error);
    throw error;
  }
};

export const likeVideo = async (id) => {
  try {
    const res = await fetch(`${API_URL}/api/videos/${id}/like`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(`Error ${res.status}: No se pudo dar like al video`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error al dar like al video:", error);
    throw error;
  }
};

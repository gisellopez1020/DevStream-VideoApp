import { useState } from "react";
import "../styles/VideoCard.css";

const CATEGORY_META = {
  Frontend: { color: "green", label: "Frontend" },
  Backend: { color: "cyan", label: "Backend" },
  DevOps: { color: "orange", label: "DevOps" },
};

export default function VideoCard({ video, onLike }) {
  const [liked, setLiked] = useState(false);
  const [imgError, setImgError] = useState(false);

  const meta = CATEGORY_META[video.category] || {
    color: "cyan",
    label: video.category,
  };

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      onLike(video._id);
    }
  };

  const thumbnailSrc =
    !imgError && video.thumbnail
      ? video.thumbnail
      : `https://img.youtube.com/vi/${video.url}/hqdefault.jpg`;

  const videoUrl = video.url.startsWith("http")
    ? video.url
    : `https://www.youtube.com/watch?v=${video.url}`;

  return (
    <article className={`video-card video-card--${meta.color}`}>
      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="video-thumb-link"
        aria-label={`Ver ${video.title}`}
      >
        <div className="video-thumb">
          <img
            src={thumbnailSrc}
            alt={video.title}
            className="video-thumb-img"
            onError={() => setImgError(true)}
            loading="lazy"
          />
          <div className="video-play-overlay">
            <span className="video-play-icon">▶</span>
          </div>
          <span className={`video-category-badge badge--${meta.color}`}>
            {meta.label}
          </span>
        </div>
      </a>

      <div className="video-body">
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="video-title-link"
        >
          <h3 className="video-title">{video.title}</h3>
        </a>
        <p className="video-desc">{video.description}</p>

        <div className="video-footer">
          <button
            className={`like-btn ${liked ? "like-btn--active" : ""}`}
            onClick={handleLike}
            aria-label={liked ? "Ya le diste like" : "Dar like"}
            title={liked ? "Ya marcaste este video" : "Marcar como útil"}
          >
            <span className="like-icon">{liked ? "♥" : "♡"}</span>
            <span className="like-count">{video.likes}</span>
          </button>
          <span className="video-url-mono">
            {video.url.length > 20 ? `${video.url.slice(0, 20)}…` : video.url}
          </span>
        </div>
      </div>
    </article>
  );
}

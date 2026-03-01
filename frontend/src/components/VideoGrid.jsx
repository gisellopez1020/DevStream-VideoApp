import VideoCard from "./VideoCard";
import "../styles/VideoGrid.css";

function SkeletonCard() {
  return (
    <div className="skeleton-card" aria-hidden="true">
      <div className="skeleton-thumb"></div>
      <div className="skeleton-body">
        <div className="skeleton-line skeleton-line--title"></div>
        <div className="skeleton-line skeleton-line--short"></div>
        <div className="skeleton-line skeleton-line--long"></div>
        <div className="skeleton-footer">
          <div className="skeleton-line skeleton-line--btn"></div>
          <div className="skeleton-line skeleton-line--url"></div>
        </div>
      </div>
    </div>
  );
}

export default function VideoGrid({
  videos,
  loading,
  onLike,
  searchTerm,
  activeCategory,
}) {
  if (loading) {
    return (
      <div className="video-grid" aria-label="Cargando videos">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (videos.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-icon">
          <img src="/src/assets/empty-state.svg" alt="Sin resultados" />
        </span>
        <p className="empty-title">Sin resultados</p>
        <p className="empty-sub">
          No hay videos
          {searchTerm && (
            <>
              {" "}
              para <strong>"{searchTerm}"</strong>
            </>
          )}
          {activeCategory !== "All" && (
            <>
              {" "}
              en <strong>{activeCategory}</strong>
            </>
          )}
        </p>
      </div>
    );
  }

  return (
    <>
      <p className="grid-count">
        <span className="grid-count-num">{videos.length}</span> video
        {videos.length !== 1 ? "s" : ""} encontrado
        {videos.length !== 1 ? "s" : ""}
      </p>
      <div className="video-grid" role="list">
        {videos.map((video, index) => (
          <div
            key={video._id}
            role="listitem"
            style={{ animationDelay: `${index * 60}ms` }}
            className="grid-item-wrapper"
          >
            <VideoCard video={video} onLike={onLike} />
          </div>
        ))}
      </div>
    </>
  );
}

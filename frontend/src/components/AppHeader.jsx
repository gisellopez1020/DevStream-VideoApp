import "../styles/AppHeader.css";

export default function AppHeader({ videosCount, onAddVideoClick }) {
  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="brand">
          <span className="brand-icon">▶</span>
          <div className="brand-text">
            <span className="brand-name">DevStream</span>
            <span className="brand-tagline">// academia de código</span>
          </div>
        </div>
        <div className="header-stats">
          <span className="stat-chip">
            <span className="stat-dot"></span>
            {videosCount} videos
          </span>
          <button
            className="btn-add-video"
            onClick={onAddVideoClick}
            title="Agregar nuevo video"
          >
            Agregar Video
          </button>
        </div>
      </div>
    </header>
  );
}

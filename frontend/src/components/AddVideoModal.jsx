import "../styles/AddVideoModal.css";

export default function AddVideoModal({
  showModal,
  formData,
  creatingVideo,
  onClose,
  onFormChange,
  onSubmit,
}) {
  if (!showModal) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Agregar Nuevo Video</h2>
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <form onSubmit={onSubmit} className="video-form">
          <div className="form-group">
            <label htmlFor="title">Título *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={onFormChange}
              placeholder="Ej: React Hooks en Profundidad"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Descripción *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={onFormChange}
              placeholder="Ej: Domina useState, useEffect y hooks personalizados..."
              rows="4"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="url">URL o ID de YouTube *</label>
            <input
              type="text"
              id="url"
              name="url"
              value={formData.url}
              onChange={onFormChange}
              placeholder="Ej: dGcsHMXbSOA o https://youtube.com/watch?v=dGcsHMXbSOA"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Categoría *</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={onFormChange}
            >
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="DevOps">DevOps</option>
            </select>
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancelar
            </button>
            <button
              type="submit"
              className="btn-submit"
              disabled={creatingVideo}
            >
              {creatingVideo ? "Creando..." : "Crear Video"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

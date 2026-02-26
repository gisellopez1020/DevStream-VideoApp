export default function ErrorBanner({ error, onRetry }) {
  if (!error) return null;

  return (
    <div className="error-banner">
      <span>No se pudo conectar con el servidor: {error}</span>
      <button className="error-retry" onClick={onRetry}>
        Reintentar
      </button>
    </div>
  );
}

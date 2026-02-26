/**
 * Componente Banner de Error
 * Responsabilidad: Mostrar mensajes de error y botón para reintentar
 */
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

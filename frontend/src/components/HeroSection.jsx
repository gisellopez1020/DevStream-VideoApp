import "../styles/HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <p className="hero-label">[ BIBLIOTECA TÉCNICA ]</p>
      <h1 className="hero-title">
        Aprende.
        <br />
        <span className="hero-accent">Construye.</span>
      </h1>
      <p className="hero-sub">
        Filtra por tecnología, descubre tutoriales y marca los que más te
        gusten.
      </p>
    </section>
  );
}

import "./Hero.css";

export default function Hero() {
  const caracteristicas = [
    { id: 1, texto: 'Ingredientes naturales', icono: '🍃' },
    { id: 2, texto: 'Producción artesanal', icono: '🧪' },
    { id: 3, texto: 'Proceso cuidado / añejamiento', icono: '🕰️' },
    { id: 4, texto: 'Presentación premium', icono: '🎁' },
    { id: 5, texto: 'Identidad local', icono: '🌎' },
  ];

  return (
    <section className="hero">
      <div className="bloque-texto sombra-texto">
        <h2>Cada botella cuenta una historia</h2>

        <p>
          Somos un emprendimiento familiar que hace licores artesanales con dedicación y mucho cariño.<br />
          Cuidamos cada detalle, desde la elección de los ingredientes hasta el producto final.<br />
          Nos gusta compartir lo que hacemos, porque creemos en los sabores simples y en los momentos que se disfrutan en buena compañía.<br />
          Cada botella lleva un poco de nuestra historia.
        </p>

        <div className="features">
          {caracteristicas.map((item) => (
            <span key={item.id}>
              {item.icono} {item.texto}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
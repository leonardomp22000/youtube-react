// Los componentes de react solo reciben un solo parametro
export default function Video(props) {
  return (
    <article className="video-card">
      <img src={props.image} alt="Imagen random" />

      <footer>
        <img
          src={`https://api.dicebear.com/8.x/notionists-neutral/svg?seed=${props.chanel}`}
          alt="Imagen FOTEER"
        />
        <p className="video-card-title">{props.title}</p>
        <p className="video-card-chanel">{props.chanel}</p>
      </footer>
    </article>
  );
}

/*
export default function Video(props) {
  const { image, title, chanel } = props;
  return (
    <article className="video-card">
      <footer>
        <img src={image} alt="Imagen random" />
        <p>{title}</p>
        <p>{chanel}</p>
      </footer>
    </article>
  );
}


export default function Video({ image, title, chanel }) {
    return (
      <article className="video-card">
        <footer>
          <img src={image} alt="Imagen random" />
          <p>{title}</p>
          <p>{chanel}</p>
        </footer>
      </article>
    );
}
*/

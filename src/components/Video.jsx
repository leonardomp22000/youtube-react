import clsx from "clsx";
// Los componentes de react solo reciben un solo parametro
export default function Video(props) {
  /*
    Renderizado condicional
    Se puede usar para ponerlo en estado de carga cuando se pide informacion a un API
      if(!props.chanel){
    return(
      <article>
        <p>Incompleto</p>
      </article>
    )
  }
  */
  // La variable articleClassnames condiciona si el canal es de un youtuber especial para que se agregue una nueva clase y hacer que se
  // vea de forma distinata a las demas
 // const articleClassnames ="video-card" + (props.chanel === "Marques Brownlee" ? " special": "");

  let articleClassnames = ['video-card']

  if(props.chanel === "Marques Brownlee"){
    articleClassnames.push('special')
  }


  return (
 //   <article className={articleClassnames.join (" ")}>
    <article className={clsx('video-card', { 'special': props.chanel })}>
      <img src={props.image} alt="Imagen random" />

      <footer>
        {
          /*Esta condicion dice  Si hay canal entonces renderizalo, si no, saltalo y no renderiza*/
          props.chanel && (
            <img
              src={`https://api.dicebear.com/8.x/notionists-neutral/svg?seed=${props.chanel}`}
              alt="Imagen FOTEER"
            />
          )
        }
        {!props.chanel && <span> 🤷🏿‍♂️ </span>}

        {/** 
        // Es la segunda forma de expresar una condicion con un ternario
          props.chanel ? (
            <img
            src={`https://api.dicebear.com/8.x/notionists-neutral/svg?seed=${props.chanel}`}
            alt="Imagen FOTEER"
          />
          ) : <span> 🤷🏿‍♂️ </span>
        */}

        <p className="video-card-title">{props.title}</p>
        <p className="video-card-chanel">{props.chanel || "UNKNOWN"}</p>
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

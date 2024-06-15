import Categories from "./Categories";
import Video from "./Video";
export default function Content() {
  const videos = [
    {
      image:
        "https://i.ytimg.com/vi/qkYoBNdcXBU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D&rs=AOn4CLBMqLZTrZGyOfAutjm8zbjaIUdwtA",
      title: "WWDC 2024 Recap: Is Apple Intelligence Legit?",
      chanel: "Marques Brownlee",
    },
    {
      image:
        "https://i.ytimg.com/vi/6PrURUM4ng0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D&rs=AOn4CLDwGnSCzCzuBRo4DC-i8PJI14VJCg",
      title: "Como crea una web con HTML, CSS y JavaScript",
      chanel: "Canal 1",
    },
    {
      image:
        "https://i.ytimg.com/vi/dLw1ao4-Akk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCD9H130iyuyAa3ysZJtOkzfExemw",
      title: "Apple lanza lo mismo que android tenia hace 20 años",
      chanel: "Canal 2",
    },
    {
      image:
        "https://i.ytimg.com/vi/F07sHa6Z7EI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJ_GHVKSpQACfsMGvmuD7ggTodvQ",
      title: "Como instalar linux",
      chanel: "Canal 3",
    },
  ];
  return (
    <section id="content">
      <Categories />
      <section id="videos">
        {videos.map((video) => {
          return (
            <Video
              key={`video-${video.title}`}
              image={video.image}
              title={video.title}
              chanel={video.chanel}
            />
          );
        })}
      </section>
    </section>
  );
}

import React, { useEffect, useState } from "react";
import "./Home.css";
import Services from "../../Services/AnimeServices";
import AnimeCard from "../Common/AnimeCard";

function Home() {

  const [topAnime, setTopAnime] = useState<any[]>([]);

  const services = new Services();

  useEffect(() => {
    services.getTopAnime().then((data) => {
      setTopAnime(data.data);
      console.log(data);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="anime-container">
      {
        topAnime.map((anime) => {
          return (
            // <h3 key={anime.mal_id}>{anime.title}</h3>
            <AnimeCard anime={anime} key={anime.mal_id}/>
          )
        })
      }
    </div>
  )
}

export default Home;

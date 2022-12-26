
import React from "react";
import "../Home/Home.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material'; 

function AnimeCard({ anime }: any) {
  return (
    // <div style={{backgroundImage: `url(${anime.images.jpg.image_url})`, width: "250px", height: "250px", backgroundRepeat: "round"}}>
    //   <h5>{anime.title}</h5>
    // </div>
    <Card>
      <CardContent sx={{width: "250px"}}>
        <div style={{backgroundImage: `url(${anime.images.jpg.image_url})`, height: "250px", backgroundRepeat: "round"}}></div>
        <div>
          <h4 style={{marginBottom: "0"}}>{anime.title_english}</h4>
          <p className="description">{anime.synopsis}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default AnimeCard;

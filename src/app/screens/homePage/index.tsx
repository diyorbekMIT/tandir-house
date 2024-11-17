import { Container } from "@mui/material";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import Events from "./Events";
import "../../../css/home.css";
import GoogleMap from "./GoogleMap";

export function HomePage() {
    return (<div className="homepage">
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <Events />
      <GoogleMap />
      
      
    </div>)
  }
  
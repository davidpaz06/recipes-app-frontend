import React from "react";
import Header from "../components/Header";
import Background from "../components/Background";
import RecipeCard from "../components/RecipeCard";
import Scroll from "../components/Scroll";

export default function Index() {
  const image = require("../../assets/images/react-logo.png");

  return (
    <Background>
      <Header title="Cooked" />
      <Scroll>
        <RecipeCard
          image={
            "https://plus.unsplash.com/premium_photo-1670740967011-86730910a2e5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8fDA%3D"
          }
          title="Camarones Rebosados"
          preparationTime="15 mins"
        />
      </Scroll>
    </Background>
  );
}

import { Card, Image } from "@chakra-ui/react";
import React from "react";
import dividerDesktop from "../assets/pattern-divider-desktop.svg";
import dice from "../assets/icon-dice.svg";

const AdviceCard = () => {
  return (
    <Card>
      <p>ADVICE # 1</p>
      <h1>"Random advice quotes"</h1>
      <Image src={dividerDesktop} />
      <div>
        <Image src={dice} />
      </div>
    </Card>
  );
};

export default AdviceCard;

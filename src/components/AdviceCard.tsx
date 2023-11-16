import { Card, Image, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import dividerDesktop from "../assets/pattern-divider-desktop.svg";
import dividerMobile from "../assets/pattern-divider-mobile.svg";
import dice from "../assets/icon-dice.svg";
import useAdvice from "../hooks/useAdvice";
import "./AdviceCard.css";

const AdviceCard = () => {
  const { data, error, refetch, isLoading, isRefetching } = useAdvice();
  console.log(error);
  const handleClick = () => refetch();
  if (isLoading || isRefetching) return <Spinner />;
  return (
    <Card
      padding="50px 70px"
      maxW="md"
      align="center"
      marginX="20px"
      minW={{ sm: "0", md: "550px" }}
      borderRadius="15px"
      bgColor="hsl(217, 19%, 24%)"
    >
      {error ? (
        <Text>{error.message}</Text>
      ) : (
        <>
          <Text fontSize="sm" color="hsl(150, 100%, 66%)" letterSpacing="5px">
            ADVICE #{data?.slip.id}
          </Text>
          <Text
            fontSize="2xl"
            fontWeight="600"
            textAlign="center"
            margin="18px 0"
          >
            "{data?.slip.advice}"
          </Text>
        </>
      )}
      <Image src={dividerDesktop} marginY="20px" />
      <div className="dice">
        <Image src={dice} onClick={handleClick} />
      </div>
    </Card>
  );
};

export default AdviceCard;

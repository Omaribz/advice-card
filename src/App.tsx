import {
  Center,
  Square,
  Circle,
  AbsoluteCenter,
  Box,
  Flex,
} from "@chakra-ui/react";
import AdviceCard from "./components/AdviceCard";

function App() {
  return (
    // <Box position="relative" h="100px">
    //   <AbsoluteCenter axis="both">

    //   </AbsoluteCenter>
    // </Box>
    <Flex
      width={"100vw"}
      height={"100vh"}
      alignContent={"center"}
      justifyContent={"center"}
    >
      <Center>
        <AdviceCard />
      </Center>
    </Flex>
  );
}

export default App;

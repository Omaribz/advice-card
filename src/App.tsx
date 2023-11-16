import { Center, Flex } from "@chakra-ui/react";
import AdviceCard from "./components/AdviceCard";

function App() {
  return (
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

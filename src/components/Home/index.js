import { Box, Flex, Image, Container, Spacer, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex color="white" bg={"#D9753B"} height={"100vh"}>
      <Flex align={"center"} justify="center">
        <Box>
          <Image
            src="https://images.pexels.com/photos/750896/pexels-photo-750896.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            objectFit={"cover"}
            alt="Cover photo"
            boxSize={"500px"}
            m={"2rem 4rem"}
          ></Image>
        </Box>
      </Flex>
      <Spacer />
      <Flex align={"center"} justify="center" marginInlineEnd={"4rem"}>
        <Container>
          <Text fontSize="xl">
            Welcome to your own meditation space. <br /> Customize it for your
            need. <br /> Begginer, habit tracker, select a meditation session.{" "}
            <br /> Your space, your choice
          </Text>
        </Container>
      </Flex>
    </Flex>
  );
}

// TODO: Refactor home, add more content and refactor design

/**
 * Paleta de colores
 * #021F59
 * #0455BF
 * #027333
 * #D9753B
 * #BF4E24
 */

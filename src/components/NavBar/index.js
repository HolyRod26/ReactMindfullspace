import { Box, Flex, Spacer, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

export default function NavBar() {
  const navItems = [
    { path: "/", content: "Home" },
    { path: "/posts", content: "Posts" },
  ];

  const createNavItems = React.Children.toArray(
    navItems.map((item) => {
      return (
        <Button marginInline={2} colorScheme={"blackAlpha"}>
          <Link to={item.path}>{item.content}</Link>
        </Button>
      );
    })
  );

  return (
    <Box bg="#BF4E24" p={4}>
      <Flex>
        <Flex>{createNavItems}</Flex>
        <Spacer />
        <Box>
          <Heading as={"h1"} size="lg" color={"white"}>
            Mindfullspace
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
}

/**
 * {navItems.map((item) => {
            <Link to={item.path}>{item.content}</Link>;
          })}
 */
/**
 * <Button>
            <Link to={"/"}>Home</Link>
          </Button>
          <Button>
            <Link to={"/courses"}>Cursos</Link>
          </Button>

          
 */

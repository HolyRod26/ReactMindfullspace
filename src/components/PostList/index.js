import { Box } from "@chakra-ui/react";
import React from "react";

export default function PostList({ posts }) {
  return (
    <Box marginInline={"auto"}>
      {React.Children.toArray(
        posts.map((post) => {
          return (
            <Box maxW={"sm"} bg={"lightgray"} m={2} p={4}>
              <h1>{post.heading}</h1>
              <p>{post.content}</p>
              <p>{post.mood}</p>
            </Box>
          );
        })
      )}
    </Box>
  );
}

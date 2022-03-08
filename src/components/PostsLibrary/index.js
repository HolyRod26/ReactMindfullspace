import { Flex } from "@chakra-ui/react";
import PostForm from "../PostForm";
import { db } from "../../firebase";
import { collection, addDoc, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import PostList from "../PostList";

export default function PostsLibrary() {
  // Add a new personal post
  const [posts, setPosts] = useState([]);

  const addOrEditPost = async (linkObject) => {
    try {
      await addDoc(collection(db, "posts"), linkObject);
      console.log("new task added");
    } catch (error) {
      console.error(error);
    }
  };

  let stopPostListener;

  const getPosts = async () => {
    const postsQuery = query(collection(db, "posts"));
    stopPostListener = onSnapshot(postsQuery, (querySnapshot) => {
      const allPosts = [];
      querySnapshot.forEach((snap) => {
        allPosts.push({ ...snap.data(), id: snap.id });
      });
      setPosts(allPosts);
    });
  };

  useEffect(() => {
    getPosts();
    return stopPostListener;
  }, []);

  return (
    <Flex>
      <PostForm addOrEditPost={addOrEditPost} />
      <PostList posts={posts} />
    </Flex>
  );
}

/*
  useEffect(() => {
    value.docs.map((doc) =>
      console.log(`doc id: ${doc.id} data: ${doc.data()}`)
    );
  });
*/

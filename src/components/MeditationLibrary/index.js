import { Box } from "@chakra-ui/react";
// import { useEffect } from "react";
import PostForm from "../PostForm";
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  query,
  getDocs,
  onSnapshot,
  doc,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export default function MeditationLibrary() {
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

  const getPosts = async () => {
    const postsRef = collection(db, "posts");
    onSnapshot(postsRef, (snap) => {
      snap.docs.map((doc) => {
        let post = doc.data();
        setPosts([...posts, post]);
        // console.log(doc.data());
      });
    });

    // querySnapshot.forEach((doc) => console.log(doc.id, "=>", doc.data()));
  };

  useEffect(() => {
    getPosts();
    console.log(posts);
  }, []);

  return (
    <Box>
      <PostForm addOrEditPost={addOrEditPost} />
    </Box>
  );
}

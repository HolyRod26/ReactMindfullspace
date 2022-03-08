import {
  Input,
  Box,
  Textarea,
  Radio,
  RadioGroup,
  Icon,
  Stack,
  Button,
} from "@chakra-ui/react";
import { BiWinkSmile } from "react-icons/bi";
import { CgSmileMouthOpen } from "react-icons/cg";
import { MdOutlineSentimentNeutral } from "react-icons/md";
import { RiEmotionSadLine } from "react-icons/ri";
import { FaRegSadCry } from "react-icons/fa";

import { useState } from "react";

export default function PostForm({ addOrEditPost }) {
  const initialStateValues = {
    heading: "",
    content: "",
    mood: "great",
  };

  const [values, setValues] = useState(initialStateValues);

  // const { heading, content, mood } = values;

  const iconSize = "1.5rem";

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const setMood = (mood) => setValues({ ...values, mood });

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrEditPost(values);
    setValues({ ...initialStateValues });
  };
  return (
    <Box bg={"white"} p={4} w={"50%"} marginRight={"auto"}>
      <Input
        placeholder="How are you feeling today"
        size={"md"}
        marginBlock={2}
        onChange={handleInputChange}
        name="heading"
        value={values.heading}
      />
      <Textarea
        placeholder="Add more details of your day... "
        marginBlock={2}
        onChange={handleInputChange}
        name="content"
        value={values.content}
      />
      <RadioGroup
        p={4}
        marginBlock={2}
        onChange={setMood}
        name="mood"
        value={values.mood}
      >
        <Stack direction={"row"}>
          <Radio value={"great"} size={"md"}>
            <Icon as={BiWinkSmile} boxSize={iconSize} />
          </Radio>
          <Radio value={"good"}>
            <Icon as={CgSmileMouthOpen} boxSize={iconSize} />
          </Radio>
          <Radio value={"calm"}>
            <Icon as={MdOutlineSentimentNeutral} boxSize={iconSize} />
          </Radio>
          <Radio value={"bad"}>
            <Icon as={RiEmotionSadLine} boxSize={iconSize} />
          </Radio>
          <Radio value={"worse"}>
            <Icon as={FaRegSadCry} boxSize={iconSize} />
          </Radio>
        </Stack>
      </RadioGroup>
      <Button onClick={handleSubmit} colorScheme={"blackAlpha"}>
        Submit
      </Button>
    </Box>
  );
}

// TODO: Refactor radio icons with constant of objects / Ponerle a los inputs y hacer un input controlado value={content} value={heading}

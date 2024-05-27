import { useState, useContext } from "react";
import EditorContext from "@/context/editor/EditorContext";
import Button from "../button";
import axios from "axios";

function CompileButton() {
  const { language, code, stdIn, setOutput } = useContext(EditorContext);

  const [isSubmitting, setIsSubmitting] = useState(false);

  // useEffect(() => {
  //   console.log("The code is: ", code);
  // }, [code]);

  // Submit code to server
  const handleSubmission = async () => {
    setIsSubmitting(true);

    const body = JSON.stringify({
      script: code,
      stdin: stdIn,
      language,
    });
    const config = { headers: { "Content-type": "application/json" } };

    const res = await axios.post(
      "https://connect-snippet.onrender.com/api/submission",
      body,
      config
    );

    const data = res.data;
    setOutput(data);
    console.log(data);

    setIsSubmitting(false);
  };

  return (
    <Button onClick={handleSubmission}>
      {isSubmitting ? "Compiling..." : "Run"}
    </Button>
  );
}

export default CompileButton;

import { useState, useContext } from "react";
import EditorContext from "@/context/editor/EditorContext";
import Button from "../button";
import axios from "axios";
import { FaPlay } from "react-icons/fa";
import toast from "react-hot-toast";

function CompileButton() {
  const { language, code, stdIn, setOutput } = useContext(EditorContext);

  const [isSubmitting, setIsSubmitting] = useState(false);

  // useEffect(() => {
  //   //console.log("The code is: ", code);
  // }, [code]);

  // Submit code to server
  const handleSubmission = async () => {
    try {
      setIsSubmitting(true);

      const body = JSON.stringify({
        script: code,
        stdin: stdIn,
        language,
      });
      const config = { headers: { "Content-type": "application/json" } };

      const res = await axios.post(
        import.meta.env.VITE_SERVER_URL + "/api/submission",
        body,
        config
      );

      const data = res.data;
      setOutput(data);
      //console.log(data);

      setIsSubmitting(false);
    } catch (error: any) {
      setIsSubmitting(false);
      // //console.log("Cannot submit :", error.message);
      toast.error(error.message);
    }
  };

  return (
    <Button
      onClick={isSubmitting ? () => {} : handleSubmission}
      styles="w-[150px] h-[40px]"
    >
      <div className="flex gap-3 items-center justify-center">
        <div>{isSubmitting ? "Compiling..." : "Run"}</div>
        <FaPlay />
      </div>
    </Button>
  );
}

export default CompileButton;

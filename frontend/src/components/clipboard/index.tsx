import { CopyToClipboard } from "react-copy-to-clipboard";
import { useParams } from "react-router-dom";
import Button from "../button";
import toast from "react-hot-toast";

export default function ShareRoom() {
  const params = useParams<{ roomId: string }>();

  return (
    <CopyToClipboard
      text={params.roomId as string}
      onCopy={() => toast.success("Room Id copied to clipboard!")}
    >
      <Button onClick={() => {}}>Share</Button>
    </CopyToClipboard>
  );
}

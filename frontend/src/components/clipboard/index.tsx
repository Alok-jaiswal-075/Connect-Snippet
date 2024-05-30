import { CopyToClipboard } from "react-copy-to-clipboard";
import { useParams } from "react-router-dom";
import Button from "../button";
import toast from "react-hot-toast";
import { FaShareAlt } from "react-icons/fa";

export default function ShareRoom() {
  const params = useParams<{ roomId: string }>();

  return (
    <CopyToClipboard
      text={params.roomId as string}
      onCopy={() => toast.success("Room Id copied to clipboard!")}
    >
      <Button onClick={() => {}}>
        <div className="flex gap-2 items-center justify-center">
          <div>Share</div>
          <span>
            <FaShareAlt />
          </span>
        </div>
      </Button>
    </CopyToClipboard>
  );
}

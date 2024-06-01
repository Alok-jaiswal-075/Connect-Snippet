import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import EditorContext from "@/context/editor/EditorContext";
import { useContext } from "react";

export default function GroupAvatars() {
  const { users,setIsUserPanelOpen,isUserPanelOpen } = useContext(EditorContext);
  return (
    <div onClick={()=>setIsUserPanelOpen(!isUserPanelOpen)} className="cursor-pointer">
      <AvatarGroup max={5}>
      {users.map((user: User, index: number) => {
        const username = user.name.toUpperCase();

        return (
          <Avatar
            key={index}
            alt={username}
            src="/static/images/avatar/2.jpg"
            sx={{
              bgcolor: user.color,
              color: "#25213a",
              border: "1px solid #25213a",
            }}
          />
        );
      })}
    </AvatarGroup>
    </div>
  );
}

import EditorContext from "@/context/editor/EditorContext";
import { useContext } from "react";
import Avatar from "react-avatar";

export default function Members() {
  const { users } = useContext(EditorContext);

  //console.log(users);

  return (
    <div className="flex gap-3">
      {users.map((user: { name: string; color: string }, index: number) => {
        return (
          <Avatar
            name={user.name}
            size="50"
            textSizeRatio={1.75}
            round={true}
            key={index}
            color={user.color}
          />
        );
      })}
    </div>
  );
}

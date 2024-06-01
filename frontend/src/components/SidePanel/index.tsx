
import { IoIosCloseCircle } from "react-icons/io";
import { useContext } from "react";
import EditorContext from "@/context/editor/EditorContext";
import Avatar from "@mui/material/Avatar";
import SubHeading from "../fonts/SubHeading";


export default function SlidePanel() {

  const { users,setIsUserPanelOpen,isUserPanelOpen } = useContext(EditorContext);

  return (
    <div
      className={`absolute border-t-2 border-background z-10 top-0 right-0 w-[300px] h-full bg-card ${
        !isUserPanelOpen && "translate-x-[100%]"
      } pl-5 pt-5 duration-200 rounded-l-lg`}
    >
      <div onClick={()=>setIsUserPanelOpen(false)} className="cursor-pointer mb-2">
        <IoIosCloseCircle size={30} color="#25213a" />
       <div className="flex flex-col gap-2 my-4 mx-2">
       {users.map((user: User, index: number) => {
        const username = user.name.toUpperCase();

        return (
          <div className="flex gap-2 items-center">
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
          <SubHeading><span style={{color:user.color}}>{user.name}</span></SubHeading>
          </div>
        );
      })}
       </div>
      </div>
    </div>
  );
}

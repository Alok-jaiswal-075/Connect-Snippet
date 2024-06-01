import Card from "@/components/card";
import Button from "@/components/button";
import Input from "@/components/input";
import Heading from "@/components/fonts/Heading";
import TextMedium from "@/components/fonts/TextMedium";
import TextNormal from "@/components/fonts/TextNormal";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  const [username, setUserName] = useState("");

  const createNewRoom = () => {
    const uniqueId = uuidv4();
    setRoomId(uniqueId);
    toast.success("Created a new room");
  };

  const joinRoom = () => {
    if (!username || !roomId) {
      toast.error("Room Id and Username is required");
      return;
    }

    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };

  useEffect(() => {
    return () => {
      setUserName("");
    };
  }, []);

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center px-6">
      <Card styles="items-start">
        <div className="flex gap-4 md:gap-6 items-center justify-center">
          <div className="w-10 md:w-14">
            <img src="./logo.png" alt="logo" />
          </div>
          <div className="flex flex-col gap-1">
            <Heading>Connect Snippet</Heading>
            <TextMedium styles="text-button2 font-bold">
              Realtime Collaboration
            </TextMedium>
          </div>
        </div>
        <TextMedium styles="mt-4 font-semibold">
          Paste invitation ROOM ID
        </TextMedium>
        <div className="flex flex-col gap-1 w-full">
          <Input
            name="roomId"
            placeholder="ROOM ID"
            value={roomId}
            setValue={setRoomId}
            onKeyUp={handleKeyUp}
            type="text"
          />
          <Input
            name="username"
            placeholder="USERNAME"
            value={username}
            setValue={setUserName}
            onKeyUp={handleKeyUp}
            type="text"
          />
        </div>
        <Button styles="self-end " onClick={joinRoom}>
          Join
        </Button>
        <div className="flex flex-wrap items-center justify-start">
          <TextNormal styles="text-sm text-wrap">
            If you don't have an invite then create &nbsp;
          </TextNormal>
          <h4
            className="underline text-button2 hover:text-button2-dark duration-300 cursor-pointer"
            onClick={createNewRoom}
          >
            new room
          </h4>
        </div>
      </Card>
    </div>
  );
}

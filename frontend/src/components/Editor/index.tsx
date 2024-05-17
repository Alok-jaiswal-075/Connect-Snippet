import { useState, useRef } from "react";
import { Editor } from "@monaco-editor/react";
import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";
import { MonacoBinding } from "y-monaco";
import { editor } from "monaco-editor";
import randomColor from "randomcolor";

const serverWsUrl = "ws://localhost:5000";

export default function CodeRoom({
  name,
  roomId,
}: {
  name: string;
  roomId: string;
}) {
  const editorRef = useRef<editor.IStandaloneCodeEditor>();
  const randomUserColor = randomColor();
  const [users, setUsers] = useState<any>([]);

  function handleEditorDidMount(editor: editor.IStandaloneCodeEditor) {
    editorRef.current = editor;

    // Initialize yjs
    const doc = new Y.Doc(); // collection of shared objects

    // Connect to peers with WebSocket
    const provider: WebsocketProvider = new WebsocketProvider(
      serverWsUrl,
      roomId,
      doc
    );
    const type = doc.getText("monaco");

    const undoManager = new Y.UndoManager(type);

    var person = name;

    if (!person || person.trim() === "" || person.trim() === "\u200B") {
      person = Math.floor(Math.random() * 10) + "User";
    } else {
      person = person.trim().slice(0, 10);
    }

    const awareness = provider.awareness;

    awareness.setLocalStateField("user", {
      name: person,
      color: randomUserColor,
    });

    // Bind yjs doc to Manaco editor
    const binding = new MonacoBinding(
      type,
      editorRef.current!.getModel()!,
      new Set([editorRef.current!]),
      awareness
    );

    awareness.on("update", () => {
      var jsonData = Array.from(awareness.getStates());
      if (jsonData.length > 1) {
        setUsers(
          jsonData?.map((item: any) => ({
            clientId: item[0],
            name: item[1].user.name,
            color: item[1].user.color,
          }))
        );
      }

      var jsonData = Array.from(awareness.getStates());

      var clientsArr = jsonData?.map((item: any) => ({
        clientId: item[0],
        name: item[1].user.name,
        color: item[1].user.color,
      }));

      clientsArr.forEach((client) => {
        const selectionClass = `yRemoteSelection-${client.clientId}`;
        const selectionHeadClass = `yRemoteSelectionHead-${client.clientId}`;

        // const red = parseInt(client.color.substring(1, 3), 16);
        // const green = parseInt(client.color.substring(3, 5), 16);
        // const blue = parseInt(client.color.substring(5, 7), 16);

        const selectionStyle = document.createElement("style");
        selectionStyle.innerHTML = `
                    .${selectionClass} {
                      opacity: 0.5;
                      background-color: ${client.color};
                      margin-right: -1px;
                    }

                    .${selectionHeadClass} {
                      position: absolute;
                      box-sizing: border-box;
                      height: 100%;
                      border-left: 2px solid ${client.color};
                    }

                    .${selectionHeadClass}::after {
                      position: absolute;
                      top: -1.4em;
                      left: -2px;
                      padding: 2px 6px;
                      background: ${client.color};
                      color: #fff;
                      border: 0;
                      border-radius: 6px;
                      border-bottom-left-radius: 0;
                      line-height: normal;
                      white-space: nowrap;
                      font-size: 14px;
                      font-style: normal;
                      font-weight: 600;
                      pointer-events: none;
                      user-select: none;
                      z-index: 1000;
                      content: "${client.name}"; /* Updated to include client's name */
                    }

                    .${selectionHeadClass}:hover::before {
                      content: '${client.name}';
                      position: absolute;
                      background-color: ${client.color};
                      color: black;
                      padding-right: 3px;
                      padding-left: 3px;
                      margin-top: -2px;
                      font-size: 12px;
                      border-top-right-radius: 4px;
                      border-bottom-right-radius: 4px;
                    }
                `;
        document.head.appendChild(selectionStyle);
      });
    });

    provider.connect();
  }

  return (
    <>
      <Editor
        aria-labelledby="Code Editor"
        className="justify-center"
        language={"javascript"}
        height="100vh"
        theme="vs-dark"
        onMount={handleEditorDidMount}
        options={{
          cursorBlinking: "smooth",
        }}
      />
    </>
  );
}

declare interface EditorContextValue {
  provider: any | null;
  setProvider: (provider: any) => void;
  users: User[] | null;
  setUsers: (users: User[]) => void;
  language: string;
  setLanguage: (language: string) => void;
  code: string;
  setCode: (code: string) => void;
  stdIn: string;
  setStdIn: (stdIn: string) => void;
  output: string;
  setOutput: (output: string) => void;
}

declare interface User {
  clientId: string;
  name: string;
  color: string;
}

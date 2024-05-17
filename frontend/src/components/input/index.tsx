export interface Props {
  name: string;
  value: string;
  type: string;
  placeholder: string;
  setValue: (value: string) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function Input({
  name,
  value,
  type,
  placeholder,
  setValue,
  onKeyUp,
}: Props) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      className="rounded-lg px-4 py-1 bg-text text-background font-bold border border-background-2 outline-none "
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
      autoComplete="off"
      onKeyUp={onKeyUp}
    />
  );
}

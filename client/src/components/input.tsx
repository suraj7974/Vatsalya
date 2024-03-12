interface InputProps{
    label: string;
};

export const Input = ({label}: InputProps) => {
  return (
    <div className="flex flex-col w-1/2">
        <label htmlFor={label}>{label}</label>
        <input type="text" className="p-2 px-3 focus:outline-none rounded-lg bg-[#CDDEFF]" />
    </div>
  )
}

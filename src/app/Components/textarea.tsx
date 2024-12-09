import React from "react";
interface Text{
    text:string
    placeholder:string
}
const InputBox = (props:Text) => {
  return (
    <div>
        <h3 className="my-7">{props.text}</h3>
        <div className="border border-slate-500 w-full h-[75px] flex items-center px-4 rounded-xl">
      <input
        type="text"
        placeholder={props.placeholder}
        className="bg-transparent outline-none placeholder-slate-400 text-sm"
      />
    </div>
    </div>
    
  );
};

export default InputBox;

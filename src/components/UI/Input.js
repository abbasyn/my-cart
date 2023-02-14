import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex justify-center items-center gap-3 mb-2 font-bold">
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        className="pl-1 rounded border border-r-4  w-10"
        {...props.input}
        ref={ref}
      />
    </div>
  );
});

export default Input;

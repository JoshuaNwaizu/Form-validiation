import React, { forwardRef } from "react";

const Inputs = forwardRef(function Inputs({ label, ...props }, ref) {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="uppercase tracking-widest text-sm">
          {label}
        </label>
        <input type="text" autoComplete="off" required {...props} ref={ref} />
      </div>
    </div>
  );
});
export default Inputs;

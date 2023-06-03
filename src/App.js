import React from "react";
import { Input, Button } from "@material-tailwind/react";

export default function App() {
  const [webaddr, setWebAddr] = React.useState("");
  const onChange = ({ target }) => setWebAddr(target.value);
  const buttonRef = React.useRef();

  return (
    <div className="flex flex-col justify-center items-center h-screen    ">
      <div className="relative flex w-full max-w-[24rem] ">
        <Input
          type="webaddr"
          label="Web Addr"
          value={webaddr}
          onChange={onChange}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              buttonRef.current.click();
            }
          }}
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
        />


        <Button
          ref={(buttonRef)}
          size="sm"
          color={webaddr ? "blue" : "blue-gray"}
          disabled={!webaddr}
          className="!absolute right-1 top-1 rounded"
          onClick={() => window.open(`/-----${webaddr}`, "_blank")}
        >
          Go
        </Button>

      </div>
    </div>
  );
}
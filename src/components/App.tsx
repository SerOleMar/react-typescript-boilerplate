import { useState } from "react";
import cls from "./App.module.scss";
import imagePng from "@/assets/timeLine.png";
import ImageSvg from "@/assets/ship.svg";
import "./main.global.scss";

export const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment} className={cls.button}>
        increment
      </button>
      <br />
      <br />
      <ImageSvg
        color={"red"}
        style={{ width: "400px", height: "auto", stroke: "purple" }}
      />
      <br />
      <br />
      <img width={400} src={imagePng} alt={""} />
    </div>
  );
};

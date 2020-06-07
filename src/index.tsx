import * as React from "react";
import ReactDom from "react-dom";
import Hello from "./components/Hello";

const root = document.getElementById("root");

ReactDom.render(
    <Hello name="TypeScript" enthusiasmLevel={10} />,
    root as HTMLElement
);

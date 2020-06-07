// src/components/Hello.tsx

import * as React from "react";
import { isArray, isPlainObject } from "lodash";
import "./Hello.less";

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

function Hello({ name, enthusiasmLevel = 1 }: Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error("You could be a little more enthusiastic. :D");
    }
    if (isArray([])) {
        console.log("引用了lodash");
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
        </div>
    );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join("!");
}

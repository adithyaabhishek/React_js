import React from "react";
import ReactDom from "react-dom"


function Hello(){
    return(
        <h1>Hello</h1>
    )
}

ReactDom.render(<Hello />, document.getElementById("root"))
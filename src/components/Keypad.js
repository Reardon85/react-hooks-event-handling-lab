import React from "react";
// Code Keypad Component Here

function Keypad (){
    return (
        <div>
            <form>
            <input type="password" onChange={(e) => console.log("Entering password...")}>
                
            </input>
            </form>
        </div>
    )
}

export default Keypad;
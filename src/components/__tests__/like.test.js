import Like from "../like";
import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";


let container;

beforeEach(()=>{
    container = document.createElement("div");
    document.body.appendChild(container);
    act(()=>{
        ReactDOM.render(<Like/>, container)
    });
});

afterEach(()=>{
    document.body.removeChild(container);
    container = null;
});

describe("Test for like", ()=>{
    it("Text by default likes:0", ()=> {        
        const likesText = container.getElementsByTagName("p")[0];
        expect(likesText.innerHTML).toBe("Likes: 0");
    });

    it("Increment likes on click", ()=>{
        const btnlike = document.getElementById("increment");    
        const likesText = container.getElementsByTagName("p")[0];
        act(() => {
            btnlike.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        })
        expect(likesText.innerHTML).toBe("Likes: 1");
    });

    it("Decrement likes on click", () => {
        const btndislike = document.getElementById("decrement");
        const likesText = container.getElementsByTagName("p")[0];
        act(() => {
            btndislike.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        })
        expect(likesText.innerHTML).toBe("Likes: -1");
    });
});

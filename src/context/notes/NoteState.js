import { useState } from "react";
import NotesContext from "./noteContex";

const NoteState =(props)=>{
    // const s1 = {
    //     "name":"dheeraj",
    //     "class":"6cs2"
    // }
    // const[state,setState] = useState(s1);
    // const update=()=>{
    //     setTimeout(() => {
    //         setState ({
    //             "name":"heeraj",
    //             "class":"7cs2"
    //         })
    //     }, 1000);
    // }

    return (
        <NotesContext.Provider value={{}}>
           { props.children}
        </NotesContext.Provider>
    )
}

export default NoteState;
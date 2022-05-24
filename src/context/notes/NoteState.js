// import { useState } from "react";
import { useState } from "react";
import NotesContext from "./noteContex";

const NoteState = (props) => {
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
    const initialNotes = [
        {
            "_id": "6287af4f51ad6abbf362e34b1",
            "user": "62866f04da6a1811c07ce310",
            "title": "mytitle",
            "description": "hellow world",
            "tag": "hellow",
            "date": "2022-05-20T15:10:07.401Z",
            "__v": 0
        } ,
        {
            "_id": "628b900ff7c1bee1154614af2",
            "user": "62866f04da6a1811c07ce310",
            "title": "mytitle kjajf",
            "description": "hellow  ih world",
            "tag": "hellow",
            "date": "2022-05-23T13:45:51.172Z",
            "__v": 0
        },
        {
            "_id": "628b900ff7c1bee1154614af3",
            "user": "62866f04da6a1811c07ce310",
            "title": "mytitle kjajf",
            "description": "hellow  ih world",
            "tag": "hellow",
            "date": "2022-05-23T13:45:51.172Z",
            "__v": 0
        },
        {
            "_id": "628b900ff7c1bee1154614af4",
            "user": "62866f04da6a1811c07ce310",
            "title": "mytitle kjajf",
            "description": "hellow  ih world",
            "tag": "hellow",
            "date": "2022-05-23T13:45:51.172Z",
            "__v": 0
        },
        {
            "_id": "628b900ff7c1bee1154614af5",
            "user": "62866f04da6a1811c07ce310",
            "title": "mytitle kjajf",
            "description": "hellow  ih world",
            "tag": "hellow",
            "date": "2022-05-23T13:45:51.172Z",
            "__v": 0

        },
        {
            "_id": "628b900ff7c1bee1154614af6",
            "user": "62866f04da6a1811c07ce310",
            "title": "mytitle kjajf",
            "description": "hellow  ih world",
            "tag": "hellow",
            "date": "2022-05-23T13:45:51.172Z",
            "__v": 0
        },
        {
            "_id": "628b900ff7c1bee1154614af7",
            "user": "62866f04da6a1811c07ce310",
            "title": "mytitle kjajf",
            "description": "hellow  ih world",
            "tag": "hellow",
            "date": "2022-05-23T13:45:51.172Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(initialNotes)
    return (
        <NotesContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NotesContext.Provider>
    )
}

export default NoteState;
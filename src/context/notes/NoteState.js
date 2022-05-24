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
            "_id": "6287ijkaf4f51ad6abbf362e34b1",
            "user": "62866f04da6a1811c07ce310",
            "title": "mytitle",
            "description": "hellow world",
            "tag": "hellow",
            "date": "2022-05-20T15:10:07.401Z",
            "__v": 0
        } ,
        {
            "_id": "628b900ff7c1bnj7ee1154614af2",
            "user": "62866f04da6a1811c07ce310",
            "title": "mytitle kjajf",
            "description": "hellow  ih world",
            "tag": "hellow",
            "date": "2022-05-23T13:45:51.172Z",
            "__v": 0
        },
        {
            "_id": "628b900fg5ff7c1bee1154614af3",
            "user": "62866f04da6a1811c07ce310",
            "title": "mytitle kjajf",
            "description": "hellow  ih world",
            "tag": "hellow",
            "date": "2022-05-23T13:45:51.172Z",
            "__v": 0
        },
        {
            "_id": "628b900ff7c1bee113v54614af4",
            "user": "62866f04da6a1811c07ce310",
            "title": "mytitle kjajf",
            "description": "hellow  ih world",
            "tag": "hellow",
            "date": "2022-05-23T13:45:51.172Z",
            "__v": 0
        },
        {
            "_id": "628b90ccc0ff7c1bee1154614af5",
            "user": "62866f04da6a1811c07ce310",
            "title": "mytitle kjajf",
            "description": "hellow  ih world",
            "tag": "hellow",
            "date": "2022-05-23T13:45:51.172Z",
            "__v": 0

        },
        {
            "_id": "628b900ff7c1bee11e454614af6",
            "user": "62866f04da6a1811c07ce310",
            "title": "mytitle kjajf",
            "description": "hellow  ih world",
            "tag": "hellow",
            "date": "2022-05-23T13:45:51.172Z",
            "__v": 0
        },
        {
            "_id": "628b900erff7c1bee1154614af7",
            "user": "62866f04da6a1811c07ce310",
            "title": "mytitle kjajf",
            "description": "hellow  ih world",
            "tag": "hellow",
            "date": "2022-05-23T13:45:51.172Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(initialNotes)

    // Add a note
    const addNote =(title,description,tag)=>{
        console.log("Adding a new Object");
        const note = {
            "_id": "628b900ff7c1bee115sd4614af7",
            "user": "62866f04da6a1811c07ce310",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-05-23T13:45:51.172Z",
            "__v": 0
        }
        setNotes(notes.concat(note));
    } 

    // Delete a note
    const deleteNote =(id)=>{
        console.log("Deleting the note with id"+id);
        const newNote = notes.filter((note)=>{return note._id!==id})
        setNotes(newNote);
    }
    // Edit a note
    const editNote =()=>{

    }

    return (
        <NotesContext.Provider value={{ notes, addNote, deleteNote,editNote}}>
            {props.children}
        </NotesContext.Provider>
    )
}

export default NoteState;
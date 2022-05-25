// import { useState } from "react";
import { useState } from "react";
import NotesContext from "./noteContex";

const NoteState = (props) => {
    const host = 'http://localhost:5000'
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
    const initialNotes = []


    const [notes, setNotes] = useState(initialNotes)

    const getNotes = async ()=>{
        const response = await fetch(`${host}/api/notes/fetchallnotes`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4NjZmMDRkYTZhMTgxMWMwN2NlMzEwIn0sImlhdCI6MTY1MzA1MjkxN30.54uUDjdkHwb4flS4OlIkptt5NdtdXbnuZRaE4xtk2ZQ'
            }
        });
        const json  = await response.json();
        console.log(json[0]);
        setNotes(json[0]);
    } 
    // Add a note
    const addNote = async (title,description,tag)=>{
        const response = await fetch(`${host}/api/notes/addnote`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4NjZmMDRkYTZhMTgxMWMwN2NlMzEwIn0sImlhdCI6MTY1MzA1MjkxN30.54uUDjdkHwb4flS4OlIkptt5NdtdXbnuZRaE4xtk2ZQ'
            },
            body:JSON.stringify({title,description,tag})
        });
        const json =  await response.json();
        console.log(json)
        console.log("Adding a new Object");
        const note = {
            "_id": json._id,
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
    const deleteNote = async (id)=>{
        const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4NjZmMDRkYTZhMTgxMWMwN2NlMzEwIn0sImlhdCI6MTY1MzA1MjkxN30.54uUDjdkHwb4flS4OlIkptt5NdtdXbnuZRaE4xtk2ZQ'
            }
        });
        const json = await response.json();
        console.log(json);
        console.log("Deleting the note with id"+id);
        const newNote = notes.filter((note)=>{return note._id!==id})
        setNotes(newNote);
    }
    // Edit a note
    const editNote = async (id,title,description,tag)=>{
        const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4NjZmMDRkYTZhMTgxMWMwN2NlMzEwIn0sImlhdCI6MTY1MzA1MjkxN30.54uUDjdkHwb4flS4OlIkptt5NdtdXbnuZRaE4xtk2ZQ'
            },
            body:JSON.stringify({title,description,tag})
        });
        const json =  response.json();
        console.log(json)
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if(element._id === id){
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }

    return (
        <NotesContext.Provider value={{ notes, addNote, deleteNote,editNote,getNotes}}>
            {props.children}
        </NotesContext.Provider>
    )
}

export default NoteState;
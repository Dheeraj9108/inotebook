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
                'auth-token':localStorage.getItem('token')
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
                'auth-token':localStorage.getItem('token')
            },
            body:JSON.stringify({title,description,tag})
        });
        const note =  await response.json();
        setNotes(notes.concat(note));
        console.log("Adding a new Object");
     
       
    } 

    // Delete a note
    const deleteNote = async (id)=>{
        const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'auth-token':localStorage.getItem('token')
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
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
                'auth-token':localStorage.getItem('token')
            },
            body:JSON.stringify({title,description,tag})
        });
        const json = await response.json();
        console.log(json)
        let newNotes = JSON.parse(JSON.stringify(notes));
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if(element._id === id){
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }

    return (
        <NotesContext.Provider value={{ notes, addNote, deleteNote,editNote,getNotes}}>
            {props.children}
        </NotesContext.Provider>
    )
}

export default NoteState;
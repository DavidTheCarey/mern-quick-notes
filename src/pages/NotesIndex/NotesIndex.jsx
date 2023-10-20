import { useState, useEffect } from "react";
import * as notesAPI from "../../utilities/notes-api";
import NoteForm from "../../components/NoteForm/NoteForm";
import NoteItem from "../../components/NoteItem/NoteItem";

export default function NotesIndex({ user }){
    const [notes, setNotes] = useState([]);
    // const [newNote, setNewNote] = useState("");

    useEffect(function() {
        async function getNotes() {
          const notes = await notesAPI.getAll();
          setNotes(notes);
        }
        getNotes();
      }, []);

    const allNotes = notes.map((note, idx) => {
        if (note.user.name === user.name){
            return <NoteItem note={note} idx={idx} key={idx} user={user} /> 
        }
    });

    const userNotes = allNotes.filter(function( element ) {
        return element !== undefined;
     });
    

    return (
        <main>
            <h1>Your Notes</h1>
            <NoteForm notes={notes} setNotes={setNotes} user={user} />
            {userNotes.length > 0 ? <ul>{allNotes}</ul> : <h1>"No Notes Yet!"</h1>}
        </main>
    );
}
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes(prevNotes => {
      return [...prevNotes,newNote];
    })
  }

  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
      
    });
  }
  return (
    <>
      <Header />
      <CreateArea onAdd={addNote}/>
     
      {notes.map((note, index) => (
      <Note 
        key={index}
        id={index}
        onDelete={deleteNote}
        title={note.title}
        content={note.content} />
    ))}
     <Footer />
      
    </>
  );
};

export default App;

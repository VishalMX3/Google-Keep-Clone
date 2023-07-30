import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isClicked, setIsClicked] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event){
      props.onAdd(note);
      event.preventDefault();
      setNote({
        title: "",
        content: ""
      })  
  }

  return (
    <div>
      <form className="create-note"> 
      { isClicked && <input
          value={note.title}
          onChange={handleChange}
          name="title"
          placeholder="Title"
        />}
        <textarea onClick={() => setIsClicked(true)}
          value={note.content}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows= {isClicked? "3" : "1"}
        />
        <Zoom in={isClicked}>
        <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

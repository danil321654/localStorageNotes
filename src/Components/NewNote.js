import React from "react";
import {TextareaAutosize} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
  newNote: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "50px"
  },
  textArea: {
    borderRadius: "10px",
    minHeight: "50px",
    maxHeight: "100%",
    maxWidth: "300px",
    minWidth: "100px",
    padding: "10px",
    boxShadow: "10px",
    color: "gray"
  }
});

const NewNote = props => {
  const classes = useStyles();
  const add = (e) => {
    let noteText = e.currentTarget.previousSibling.value;
    if (noteText) props.addNote(noteText);
  };
  return (
    <div className={classes.newNote}>
      <textarea className={classes.textArea} />
      <Button onClick={add}> ADD </Button>
    </div>
  );
};

export default NewNote;

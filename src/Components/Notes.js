import React from "react";
import {Button} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import {faTrash, faHeart} from "@fortawesome/free-solid-svg-icons";
import {faHeart as farHeart} from "@fortawesome/free-regular-svg-icons";
import Note from "./Note.js";
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
  notes: {
    display: "flex",
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

fontawesome.library.add(faTrash, faHeart, farHeart);

function Notes(props) {
  console.log("notesss", props);
  const classes = useStyles();
  let notesList = props.notes.map((el, idx) =>
    el.noteStatus != "DELETED" ? (
      <Note
        key={idx}
        noteId={idx}
        noteStatus={el.noteStatus}
        text={el.text}
        deleteNote={props.deleteNote}
        last={idx == props.notes.length - 1 ? true : false}
      />
    ) : (
      ""
    )
  );
  return <div className={classes.notes}>{notesList}</div>;
}

export default Notes;

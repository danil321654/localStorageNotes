import React from "react";
import {connect} from "react-redux";
import NewNote from "./Components/NewNote.js";
import Notes from "./Components/Notes.js";
import {createUseStyles} from "react-jss";

import {addNote} from "./actions/addNote.js";
import {deleteNote} from "./actions/deleteNote.js";
import {editNote} from "./actions/editNote.js";
import {appearNote} from "./actions/appearNote.js";

const useStyles = createUseStyles({
  wrapper: {
    display: "grid",
    padding: "30px",
    gridTemplateRows: "1fr 4fr",
    height: "100vh"
  }
});
function App(props) {
  console.log("appsss", props);
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <NewNote addNote={props.addNote}/>
      <Notes deleteNote={props.deleteNote} editNote={props.editNote} appearNote={props.appearNote} notes={props.notes}/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    notes: state.notesReducer.notes
  };
};

const mapDispatchToProps = {
  addNote: addNote,
  deleteNote: deleteNote,
  appearNote: appearNote,
  editNote: editNote
};

export const Container = connect(mapStateToProps, mapDispatchToProps)(App);

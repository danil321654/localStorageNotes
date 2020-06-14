import React from "react";
import {connect} from "react-redux";
import NewNote from "./Components/NewNote.js";
import Notes from "./Components/Notes.js";
import {createUseStyles} from "react-jss";

import {addNote} from "./actions/addNote.js";
import {deleteNote} from "./actions/deleteNote.js";
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
      {NewNote(props)}
      {Notes(props)}
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
  appearNote: appearNote
};

export const Container = connect(mapStateToProps, mapDispatchToProps)(App);

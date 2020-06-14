import React from "react";
import {Button} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {store} from "./../store.js";
import {createUseStyles} from "react-jss";
const useStyles = createUseStyles({
  note: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    borderRadius: "5px",
    border: "2px solid rgba(53, 59, 64, 0.66)",
    boxShadow: "5px 5px 10px gray",
    width: "min-content",
    maxWidth: "350px",
    height: "min-content",
    margin: '10px'
  },
  noteText: {
    flexGrow: "1",
    wordWrap: 'break-word',
    padding: "0 10px 10px 10px",
  },
  noteButton: {
    minWidth: "30px !important",
    height: "30px !important"
  },
  postHeader: {
    display: "flex",
    flexDirecton: "row",
    justifyContent: "flex-end"
  },
  "@keyframes disappear": {
    from: {transform: "none"},
    to: {transform: "scale(0.5)", opacity: "0"}
  },
  dissapearing: {
    animation: "$disappear 0.5s ease-in-out 1"
  },
  "@keyframes appear": {
    from: {transform: "scale(0.1)", opacity: "100"},
    to: {transform: "none", opacity: "0"}
  },
  appearing: {
    animation: "$appear 0.5s ease-in-out 1"
  }
});

fontawesome.library.add(faTrash);

function Note(props) {
  //const like = () => store.dispatch(likeNote(props.noteId));
  const classes = useStyles();
  console.log(props.last);
  const del = () => {
    document.querySelector("#note" + props.noteId).className +=
      " " + classes.dissapearing;
    setTimeout(() => props.deleteNote(props.noteId), 500);
  };
  console.log("noteprops", props);

  setTimeout(() => props.appearNote(props.noteId), 700);
  return (
    <div
      className={
        props.appearAnim ? classes.note + " " + classes.appearing : classes.note + ""
      }
      id={"note" + props.noteId}
    >
      <div className={classes.postHeader}>
        <Button classes={{root: classes.noteButton}} onClick={del}>
          <FontAwesomeIcon icon="trash" />{" "}
        </Button>
      </div>
      <div className={classes.noteText}>{props.text}</div>
    </div>
  );
}

export default Note;

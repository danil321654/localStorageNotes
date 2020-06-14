//localStorage.clear();

let initialNotes = JSON.parse(localStorage.getItem("notes")) || [];

export const notesReducer = (state = {notes: [...initialNotes]}, action) => {
  let newState = state;
  switch (action.type) {
    case "ADD_NOTE":
      newState = Object.assign({}, state, {
        notes: [
          ...state.notes,
          {
            noteId: state.notes.length,
            text: action.text,
            noteStatus: "UNCHECKED",
            appeared: 0
          }
        ]
      });
      localStorage.removeItem("notes");
      localStorage.setItem("notes", JSON.stringify(newState.notes));
      return newState;
      break;
    case "DEL_NOTE":
      newState = Object.assign({}, state, {
        notes: state.notes.map(el =>
          el.noteId == action.noteId
            ? Object.assign({}, el, {noteStatus: "DELETED"})
            : el
        )
      });
      localStorage.removeItem("notes");
      localStorage.setItem("notes", JSON.stringify(newState.notes));
      return newState;
    case "APPEAR_NOTE":
      newState = Object.assign({}, state, {
        notes: state.notes.map(el =>
          el.noteId == action.noteId
            ? Object.assign({}, el, {appeared: true})
            : el
        )
      });
      localStorage.removeItem("notes");
      localStorage.setItem("notes", JSON.stringify(newState.notes));
      return newState;
      break;
    default:
      return state;
  }
};

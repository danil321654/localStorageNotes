  export const notesReducer = (state = {notes: []}, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return Object.assign({}, state, {
        notes: [
          ...state.notes,
          {
            noteId: state.notes.length,
            text: action.text,
            noteStatus: "UNCHECKED"
          }
        ]
      });
      break;
    case "DEL_NOTE":
      return Object.assign({}, state, {
        notes: state.notes.map(el =>
          el.noteId == action.noteId
            ? Object.assign(el, {noteStatus: "DELETED"})
            : el
        )
      });
      break;
    default:
      return state;
  }
};

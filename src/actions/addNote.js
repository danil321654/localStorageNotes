export const addNote = text => ({
  type: "ADD_NOTE",
  text: text,
  noteStatus: "UNCHECKED"
});

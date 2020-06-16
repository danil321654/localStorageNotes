export const editNote = (noteId,text) => ({
  type: "EDIT_NOTE",
  text: text,
  noteId: noteId
});

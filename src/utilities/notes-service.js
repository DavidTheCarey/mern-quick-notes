import * as notesAPI from './notes-api';

export async function createNote(noteData) {
  // const token = await usersAPI.signUp(noteData);
  // localStorage.setItem('token', token);
  // TODO: return user object from token instead
  return getUser();
}
export default function NoteItem({note, idx, user}){
    return(
            <li>
                <div>Note: {note.text}</div>
                <div>Date: {note.createdAt}</div>
            </li>
    );
}
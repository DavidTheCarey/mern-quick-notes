import { Component } from "react";
import * as noteAPI from "../../utilities/notes-api";

export default class NoteForm extends Component {


    state = {
        text: "",
        user: this.props.user
    }
    handleChange = (evt) => {
        this.setState({
          [evt.target.name]: evt.target.value,
        });
    };

    handleSubmit = async (evt) => {
        const textarea = this.state;
        const newNotes = await noteAPI.newNote(textarea);
        this.props.setNotes(newNotes);
    }

    render(){
        return(
            <div className="form-container">
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                <label>Write a Note:</label>
                <textarea 
                    type="text" 
                    name="text" 
                    value={this.state.textarea} 
                    onChange={this.handleChange} 
                    required>
                </textarea>
                <button type="submit">Add Note</button>
                </form>
            </div>
        )
    }
} 
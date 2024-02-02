import { useRef } from 'react';
import './CreateNewUser.css'

const CreateNewUser = ({setCreateNewUser}) => {
    const nameInput = useRef();
    return (
        <section id='create-new-user'>
            <div className='input-field'>
                <label>Name</label>
                <input ref={nameInput} type="text" />
            </div>
            <div className='buttons'>
                <button onClick={() => setCreateNewUser("")}>Cancel</button>
                <button onClick={() => setCreateNewUser(nameInput.current.value)} id='create'>Create</button>
            </div>
        </section>
    );
}
 
export default CreateNewUser;
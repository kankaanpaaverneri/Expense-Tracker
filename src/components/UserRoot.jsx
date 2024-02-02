import './UserRoot.css'

const UserRoot = ({selectedUser}) => {
    return (
        <section id="user-root">
            <h1>Welcome {selectedUser.name}</h1>
        </section>
    );
}
 
export default UserRoot;
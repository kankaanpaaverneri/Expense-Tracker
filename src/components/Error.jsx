import './Error.css'

const Error = ({error}) => {
    console.log(error);
    return (
        <section id="error">
            <h1>Something went wrong...</h1>
            <div className='error-message'>
                <p>{error}</p>
            </div>
        </section>
    );
}
 
export default Error;
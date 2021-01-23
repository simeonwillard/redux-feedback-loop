import {useHistory} from 'react-router-dom';

function Submitted() {

    const history = useHistory();

    const handleClick = () => {
        console.log('clicked leave new feedback');
        history.push('/step-one');

    }
    

    return (
        <div>
            <h1>Thank You!</h1>
            <br/>
            <div><button onClick={handleClick}>Leave New Feedback</button></div>
        </div>
    )
}


export default Submitted;
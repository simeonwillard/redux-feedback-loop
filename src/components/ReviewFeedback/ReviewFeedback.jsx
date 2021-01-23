import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';



function ReviewFeedback() {

    const history = useHistory();
    const feedback = useSelector(state => state.formsReducer);
    console.log(feedback);

    const updateDB = () => {
        axios
        .put
    }


    const handleClick = () => {
        console.log('clicked submit');

        //put

        history.push('/submit');

    }


    return (
        <div>
            <div>Feeling: {feedback[0].feeling}</div>
            <br />
            <div>Understanding: {feedback[1].understanding}</div>
            <br />
            <div>Support: {feedback[2].supported}</div>
            <br />
            <div>Comments: {feedback[3].comments}</div>
            <br />
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}




export default ReviewFeedback;
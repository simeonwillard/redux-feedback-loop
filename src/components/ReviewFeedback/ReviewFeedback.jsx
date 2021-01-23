import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function ReviewFeedback() {

    const history = useHistory();
    const feedback = useSelector(state => state.formsReducer);
    console.log(feedback);

    const dataToSend = {
        feeling: feedback[0].feeling,
        understanding: feedback[1].understanding,
        support: feedback[2].supported,
        comments: feedback[3].comments
    }

    const sendFeedback = () => {
        //post to db
        axios
            .post('/feedback', dataToSend)
            .then(response => {
                history.push('/submit');
            })
            .catch(error => {
                console.log('error in posting feedback', error);
            });
    }


    const handleClick = () => {
        console.log('clicked submit');
        sendFeedback();
        console.log(dataToSend);
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
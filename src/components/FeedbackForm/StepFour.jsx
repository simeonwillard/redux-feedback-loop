import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StepFour() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [comments, setComments] = useState(0);


    const handleClick = (event) => {
        event.preventDefault();

        const fourthPage = { comments };
        dispatch({ type: 'FEEDBACK', payload: fourthPage });

        history.push('/review');
    }

    return (
        <>
            <section>
                <form>
                    <h3>Any comments you want to leave?</h3>
                    <input
                        // value={comments}
                        type="text"
                        onChange={(event) => setComments(event.target.value)}
                        placeholder="any comments"
                    />
                    <button type="submit" onClick={handleClick}>Next</button>
                </form>
            </section>
        </>
    )
}


export default StepFour;
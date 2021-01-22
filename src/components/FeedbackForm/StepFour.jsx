import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StepThree() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [comments, setComments] = useState(0);


    const handleClick = (event) => {
        event.preventDefault();

        const fourthPage = { supported };
        dispatch({ type: 'STEP_THREE', payload: fourthPage });

        history.push('/step-four');
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
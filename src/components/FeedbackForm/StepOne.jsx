import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StepOne() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [feeling, setFeeling] = useState(0);


    const handleClick = (event) => {
        event.preventDefault();

        const firstPage = { feeling };
        dispatch({ type: 'STEP_ONE', payload: firstPage });

        history.push('/step-two');
    }

    return (
        <>
            <section>
                <form>
                    <h3>How are you feeling today?</h3>
                    <input
                        // value={feeling}
                        type="number"
                        onChange={(event) => setFeeling(event.target.value)}
                        placeholder="scale of 1 to 5"
                    />
                    <button type="submit" onClick={handleClick}>Next</button>
                </form>
            </section>
        </>
    )
}


export default StepOne;
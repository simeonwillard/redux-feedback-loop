import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StepOne() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [feeling, setFeeling] = useState(0);


    const handleClick = (event) => {
        event.preventDefault();

        if (feeling > 0 && feeling < 6) {
            const firstPage = { feeling };
            dispatch({ type: 'FEEDBACK', payload: firstPage });

            history.push('/step-two');
        } else {
            alert('please enter on a scale of 1 to 5');
        }
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
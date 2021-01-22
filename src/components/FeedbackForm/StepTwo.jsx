import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StepTwo() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [understanding, setUnderstanding] = useState(0);


    const handleClick = (event) => {
        event.preventDefault();

        const secondPage = { understanding };
        dispatch({ type: 'STEP_TWO', payload: secondPage });

        history.push('/step-three');
    }

    return (
        <>
            <section>
                <form>
                    <h3>How well are you understanding the content?</h3>
                    <input
                        // value={understanding}
                        type="number"
                        onChange={(event) => setUnderstanding(event.target.value)}
                        placeholder="scale of 1 to 5"
                    />
                    <button type="submit" onClick={handleClick}>Next</button>
                </form>
            </section>
        </>
    )
}


export default StepTwo;
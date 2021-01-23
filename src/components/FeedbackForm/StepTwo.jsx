import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StepTwo() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [understanding, setUnderstanding] = useState(0);


    const handleClick = (event) => {
        event.preventDefault();

        if (understanding > 0 && understanding < 6) {
            const secondPage = { understanding };
            dispatch({ type: 'FEEDBACK', payload: secondPage });

            history.push('/step-three');
        } else {
            alert('please enter on a scale of 1 to 5');
        }
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
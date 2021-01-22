import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StepThree() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [supported, setSupported] = useState(0);


    const handleClick = (event) => {
        event.preventDefault();

        const thirdPage = { supported };
        dispatch({ type: 'STEP_THREE', payload: thirdPage });

        history.push('/step-three');
    }

    return (
        <>
            <section>
                <form>
                    <h3>How well are you being supported?</h3>
                    <input
                        // value={supported}
                        type="number"
                        onChange={(event) => setSupported(event.target.value)}
                        placeholder="scale of 1 to 5"
                    />
                    <button type="submit" onClick={handleClick}>Next</button>
                </form>
            </section>
        </>
    )
}


export default StepThree;
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";


import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';



function FeedbackForm() {

    const history = useHistory();

    history.push('/step-one');


    return (
        <Router>
            <div>
                <Route path="/step-one">
                    <StepOne />
                </Route>
                <Route path="/step-two">
                    <StepTwo />
                </Route>
                <Route path="/step-three">
                    <StepThree />
                </Route>
                <Route path="/step-four">
                    <StepFour />
                </Route>
            </div>
        </Router>
    )
}




export default FeedbackForm;
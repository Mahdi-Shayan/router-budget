import { Form, useNavigate } from "react-router-dom";

// library 


// assets
import illustration from '../assets/illustration.jpg'

export default function Intro() {

    return(
        <div className="intro-container">
            <div className="intro">
                <div className="title">
                    <h1>Take Control of <span>Your Money</span></h1>
                </div>
                <p className="description">Personal budgeting is the secret to financial freedom. start your journey today</p>
                <Form method="post">
                    <input
                    className="username-input" 
                        type="text" 
                        name="userName"
                        aria-label="Your Name"
                        placeholder="What is your name?"
                        autoComplete="given-name"
                        required
                    />
                    <input type="hidden" name="_action" value='newUser' />
                    <button className="create-btn">
                        <span>Creact Account</span>
                    </button>
                </Form>
            </div>
            <img className="intro-pic" src={illustration} alt="Person with Money" />
        </div>
    )
}
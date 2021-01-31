import React from 'react';
import {Link} from 'react-router-dom'


const Signup = () =>{
    return(
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Instagram</h2>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="password" />
                <button className="btn waves-effect #64b5f6 blue lighten-2" type="submit">Signup
                </button>
                <h5>
                <Link to="/signin">Already have an account ?</Link>
                </h5>
            </div>
        </div>
    )
}
export default Signup;
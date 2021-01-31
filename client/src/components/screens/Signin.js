import React from 'react';
import {Link} from 'react-router-dom'


const Signin = () =>{
    return(
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Instagram</h2>
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="password" />
                <button className="btn waves-effect #64b5f6 blue lighten-2" type="submit">Login
                </button>
                <h5>
                <Link to="/signup">Dont have an account ?</Link>
                </h5>
            </div>
        </div>
    )
}
export default Signin;
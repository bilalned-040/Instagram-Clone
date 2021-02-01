import React from 'react';

const Home = () =>{
    return (
        <div className="home">
            <div className="card home-card">
                <h5>bilal hanif</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80"/>
                </div>
                <div className="card-content">
                <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>title</h6>
                    <p>amazing post </p>
                    <input type="text" placeholder="add a comment" />         
                </div>
            </div> 
        </div>
    )
}
export default Home;
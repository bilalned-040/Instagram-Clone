import React from 'react';

const Profile = () =>{
    return(
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
           <div style={{
              margin:"18px 0px",
               borderBottom:"1px solid grey"
           }}>

         
           <div style={{
               display:"flex",
               justifyContent:"space-around",
              
           }}>
               <div>
                   <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                   src="https://cdn.dnd.com.pk/wp-content/uploads/2019/02/1653229-fawad-1520397575.jpg"
                   />
                 
               </div>
               <div>
                   <h4>Fawad khan</h4>
                   <h5>fawad@gmail.com</h5>
                   <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                       <h6>20 posts</h6>
                       <h6>20 followers</h6>
                       <h6>20 following</h6>
                   </div>

               </div>
           </div>
        </div>

        <div className="gallery">
            <img className="item" src="https://cdn.dnd.com.pk/wp-content/uploads/2019/02/1653229-fawad-1520397575.jpg" />
            <img className="item" src="https://cdn.dnd.com.pk/wp-content/uploads/2019/02/1653229-fawad-1520397575.jpg" />
            <img className="item" src="https://cdn.dnd.com.pk/wp-content/uploads/2019/02/1653229-fawad-1520397575.jpg" />
            <img className="item" src="https://cdn.dnd.com.pk/wp-content/uploads/2019/02/1653229-fawad-1520397575.jpg" />
            <img className="item" src="https://cdn.dnd.com.pk/wp-content/uploads/2019/02/1653229-fawad-1520397575.jpg" />

        </div>
    </div>
    )
}

export default Profile;
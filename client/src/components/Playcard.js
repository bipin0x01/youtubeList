import prefService from '../services/pref.service'
import { useState, React, useEffect } from 'react';
import { Fragment } from 'react';

function Playcard() {
    // const [username, setUsername] = useState([]);
    // const [address, setAddress] = useState([]);
    // const [phone, setPhone] = useState([]);
    // const [favMusic, setFavMusic] = useState([]);
    // const [website, setWebsite] = useState([]);
    const [pref, setPref] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await prefService.getAllPref(); 
            setPref(res.data);
        }

        fetchData();
    }, []);


    console.log()

    return (
        
        <div className="prefCard">
            {pref.map((prefDetail) => (
        <div className="card container" style={{width:"32rem",borderRadius:"8px",marginTop:"60px"}}>
            <div className="row p-4">
            <div className="left col-sm">    
            
                <Fragment key={prefDetail._id}>
                <p className="card-text">Username: {prefDetail.userId.name}</p>
                <p className="card-text">Address: {prefDetail.userId.address}</p>
                <p className="card-text">Phone: {prefDetail.userId.phone}</p>
                <p className="card-text">Fav Music: {prefDetail.favouriteMusic}</p>
                <p className="card-text">Website: <a href={prefDetail.websiteLink}>{prefDetail.websiteLink}</a></p>
                {/* <a href="#" class="btn btn-primary">See User Data</a> */}
                </Fragment>
            
            </div>  
            <div className="right col-sm">
                {/* <img className="card-img-top" src={"logo.png"} alt="aa"/> */}
                <div className="embed-responsive embed-responsive-4by3 pt-4" >
                    <iframe title="video" className="embed-responsive-item" src={prefDetail.youtubeLink} style={{width:"16rem",borderRadius:"5px"}}></iframe>
                </div>
            </div>
            </div>
        </div>
        ))}
        </div>
    )
}

export default Playcard

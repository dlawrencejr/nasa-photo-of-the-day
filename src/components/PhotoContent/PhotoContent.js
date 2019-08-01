import React, {useState,useEffect} from 'react';

import Axios from 'axios';

const PhotoContent = () =>{

    const [photoDate,setPhotoDate]=useState([]);
    const [photoSummary, setPhotoSummary]=useState([]);
    const [photoName,setPhotoName]=useState([]);
    const [photoCR,setPhotoCR]=useState([]);

    useEffect(() =>{

        Axios.get( 'https://api.nasa.gov/planetary/apod?api_key=vhofE4rFDu8cJevCUxlpFWhgrh1JfiQ4QW7s5xMY')
        .then(res => {
            console.log(res.data);
            setPhotoDate(res.data.date);
            setPhotoSummary(res.data.explanation);
            setPhotoName(res.data.title);
            setPhotoCR(res.data.copyright);

        })
        .catch(err => console.log(err));

    }, []);

    return (

        <div>

            <h1>{photoName}</h1>
            <h3>{photoDate}</h3>
            <p>{photoSummary}</p>
            <h4>Copyright ©{photoCR}</h4>

        </div>
    );
};

export default PhotoContent;


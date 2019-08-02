import React, {useState,useEffect} from 'react';
import '../../css/PhotoContent.css';
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

        <div className='main-container'>

            <h1 className='title'>{photoName}</h1>
            <h3 className='photo-date'>{photoDate}</h3>
            <p className='photo-text'>{photoSummary}</p>    
        <footer>
            <h4>Copyright ©{photoCR}</h4>
        </footer>
       
        </div>
    );
};

export default PhotoContent;


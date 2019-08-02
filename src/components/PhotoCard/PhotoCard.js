import React, {useState,useEffect} from 'react';
import '../../css/PhotoCard.css';
import Axios from "axios";

export default function PhotoCard(){

    const [photo, setPhoto] = useState([]);

    useEffect(() => {

        Axios.get( 'https://api.nasa.gov/planetary/apod?api_key=vhofE4rFDu8cJevCUxlpFWhgrh1JfiQ4QW7s5xMY')
        .then(res => {

            console.log(res.data);
            setPhoto(res.data.url);
        })
        .catch(err => {
            console.log('Error',err)
        })

    }, []);

    return (
        <div className='photo-container'>
            <img src = {photo} alt='from NASA' />
        </div>
    );


}
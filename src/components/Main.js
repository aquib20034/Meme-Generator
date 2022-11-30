import './Main.css';
import record from '../Database/record';
import { useState } from 'react';

import logo from '../images/troll-face.png';


export default function Main(){
    // let url;
    const [url, setUrl] = useState([logo]);
    const getMemeImage = event => {
        event.preventDefault();
        const memesArray = record.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setUrl(memesArray[randomNumber].url);
        console.log(url);

    }
    return (
        <main>
            <img className='main-img' src={url} />
            <form className='form'>
                <input type="text" className='form--input' placeholder='top text'/>
                <input type="text" className='form--input' placeholder='buttom text'/>
                <button className='form--button' onClick={getMemeImage}>Get a new meme image 🖼</button>
            </form>

        </main>

    );

}
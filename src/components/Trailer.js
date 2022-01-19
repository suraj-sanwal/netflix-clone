import React from 'react';
import YouTube from 'react-youtube';
import '../styles/Trailer.css';

function Trailer({trailerUrl}) {
    const opts = {
        height: '450',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
    }; 

    return (
        <div className="trailer-container">
            <YouTube  videoId={trailerUrl} opts={opts}/>
        </div>
    )
}

export default Trailer;
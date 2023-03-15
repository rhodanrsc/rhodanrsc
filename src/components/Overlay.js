import React from "react";

const redirect = () => {
    window.location.replace("http://rhodanrsc.github.io/portfolio")
}

const exit = () => {
    document.getElementById('overlay').style.opacity = 0;
    document.getElementById('overlay').style.scale = 0;
    document.getElementById('overlay').style.height = 0;
    document.getElementById('overlay').style.zIndex = 1;
}

const Overlay = () => {
    return (
        <div id="overlay" className="overlay">
            <button id="exit" onClick={exit}>X</button>
            <p>New portfolio website! Click the button below to be redirected</p>
            <button id="redirect" onClick={redirect}>Send me there!</button>
        </div>
    );
}

export default Overlay;
'use strict';

function tagline(){
    const taglineButClose = document.querySelector('.tagline__close');
    const tagline = document.querySelector('.tagline');

    taglineButClose.onclick = () =>{
        tagline.remove();
    };
}

export default tagline;
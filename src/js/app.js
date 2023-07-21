
document.addEventListener('DOMContentLoaded', () => initApp());

function initApp(){
    loadGalery();
}

function loadGalery(){
    const galery = document.querySelector('.galery-img');

    for(let i = 1; i<=12; i++){
        const image = document.createElement('picture');
        image.innerHTML = `
            <source srcset="build/img/thumb/${i}.avif" type="image/avif">
            <source srcset="build/img/thumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="image">
        `;
        image.onclick = function(){
            showImage(i);
        }
        galery.appendChild(image);
    }
}

function showImage(id){
    console.log(id);
}
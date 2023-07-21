
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
    const image = document.createElement('picture');
    image.innerHTML = `
        <source srcset="build/img/grande/${id}.avif" type="image/avif">
        <source srcset="build/img/grande/${id}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="image">
    `;

    //? Create the overlay to display the image
    const overlay = document.createElement('DIV');
    overlay.appendChild(image);
    overlay.classList.add('overlay');
    overlay.onclick = function(){
        const body = document.querySelector('body');
        body.classList.remove('fix-body');
        overlay.remove();
    }

    //? create a btn to close the modal
    const closeModal= document.createElement('P');
    closeModal.textContent = "X";
    closeModal.classList.add('btn-close');
    closeModal.onclick = function(){
        const body = document.querySelector('body');
        body.classList.remove('fix-body');
        overlay.remove();
    };

    overlay.appendChild(closeModal);

    //? append the overlay to the body
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fix-body');

}
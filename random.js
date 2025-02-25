const imgEl = document.getElementById('random-image')
    const btn = document.getElementById('container-stars')

    const srcArray = ['png/1.jpg','png/2.jpg','png/3.jpg',]

    imgEl.src = srcArray[3];

    btn.addEventListener('click', ()=>{
        window.location.reload();
    });

    randomImage();
    function randomImage(){
        const randomIndex = Math.floor(Math.random()*srcArray.length)

        if (randomIndex !== Number(localStorage.getItem('index'))){

            imgEl.src = srcArray[randomIndex];

            localStorage.setItem('index', randomIndex);
        } else {
            randomImage();
        }
    }
document.addEventListener("DOMContentLoaded", () => {
    const buttonLast = document.getElementById("buttonLast");
    const img = document.getElementById("img");
    const buttonNext = document.getElementById("buttonNext");

    const images = [
        'imgs/back001.jpg',
        'imgs/back002.jpg',
        'imgs/back003.jpg',
        'imgs/back004.jpg'
    ];

    images.forEach(src => {
    const img = new Image();
    img.src = src;
    });


    let index = 0;

    function ChangeImage(direction){
        index+=direction

        if(index >= images.length){
            index = 0;
        }

        if(index < 0){
           index = images.length -1;
        }

        img.src = images[index];
    }

    buttonNext.addEventListener("click",() => ChangeImage(1));
    buttonLast.addEventListener("click",() => ChangeImage(-1));

    document.addEventListener("keydown", (event) => {
        if(event.key === "ArrowRight"){
            ChangeImage(1)
        }

        if(event.key === "ArrowLeft"){
            ChangeImage(-1)
        } 
    })
});
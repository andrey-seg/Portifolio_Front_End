document.addEventListener('DOMContentLoaded', () => {

    // bloco de texto e imagem 
    const text = document.getElementById("text");
    const imgBox = document.getElementById("imgBox");

    //latas de refrigerante

    // Dados de cada refrigerante
    const sodaData = {
        guarana: {
            img: 'img/2f1a8384be47da2c12d08fd6bae7c689.png',
            title: 'Guaraná',
            description: 'Delicioso guaraná com sabor refrescante e natural. Perfeito para qualquer momento do dia!'
        },
        cocaCola: {
            img: 'img/3709-coca-cola-lata-350ml-zero-12un.20251024104230.png',
            title: 'Coca-Cola Zero',
            description: 'Coca-Cola zero açúcar, todo o sabor que você ama sem calorias.'
        },
        tubaina: {
            img: 'img/Itubaina_Lata_350ml_Tutti_Fruti_1_5514d2e788.png',
            title: 'Itubaina',
            description: 'Sabor tutti-frutti inconfundível. Um clássico brasileiro!'
        }
    };

    function changeContent(sodaKey){
        const soda = sodaData[sodaKey];
        
        // Muda a imagem
        const img = imgBox.querySelector('img');
        img.src = soda.img;
        
        // Muda o texto
        text.innerHTML = `
            <h3>${soda.title}</h3>
            <p>${soda.description}</p>
        `;
    }

    document.querySelectorAll('.cansBox img').forEach((img, index) => {
        const keys = ['guarana', 'cocaCola', 'tubaina'];
        img.addEventListener('click', () => changeContent(keys[index]));
    });

});
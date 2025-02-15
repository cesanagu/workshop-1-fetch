
const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');
appNode.className = 'grid gap-4 grid-cols-2 grid-rows-3 md:grid-cols-3'
appNode.addEventListener('click', (event) => {
    if (event.target.nodeName === 'H2'){
        window.alert('Hola H2');
    }
});


const formatPrice = (price) => {
    const newPrice= new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
    }).format(price)

    return newPrice;
};

//PROMESAS
//web api
//conectarnos al server
window
    .fetch(`${baseUrl}/api/avo`)
//procesar la respuesta y convertirla en JSON
.then(respuesta => respuesta.json())
//JSON -> Data -> renderizar info browser
.then(responseJSON =>{
    const todosLosItems = [];
    responseJSON.data.forEach(item => {
        
        //crear la imagen
        const imagen = document.createElement('img');
        imagen.src = `${baseUrl}${item.image}`;

        //crear el titulo
        const title = document.createElement('h2');
        title.textContent = item.name;
        title.className = 'text-1xl'

        //taste
        const taste = document.createElement('p');
        taste.textContent = item.attributes.taste;
        taste.className = 'text-sm self-end'
        
        //crear el precio
        const price = document.createElement('div');
        price.textContent = formatPrice(item.price);
        price.className = 'font-bold text-gray-500'

        const container = document.createElement('div')
        container.append(imagen, title, price, taste);
        container.className = 'md:grid grid-cols-2 mt-10 sm:block'

        todosLosItems.push(container);
    });
    appNode.append(...todosLosItems);
})

// const url = "https://platzi-avo.vercel.app/api/avo";

// //web api
// async function fetchData() {
//   const response = await fetch(url),
//   data = await response.json(),
//   allItems = [];

//   data.data.forEach((item) => {
//     // create image
//     const image = document.createElement("img");
//     // create title
//     const title = document.createElement("h2");
//     // create price
//     const price = document.createElement("div");

//     const container = document.createElement("div");
//     container.append(image, title, price);

//     allItems.push(container);
//   });

//   document.body.append(...allItems)
// }

// fetchData();

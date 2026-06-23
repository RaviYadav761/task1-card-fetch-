const container = document.querySelector(".container");

async function fatchapi() {

    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        data.products.forEach((product) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
           <img src="${product.thumbnail}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>Price: $${product.price}</p>
        <p>Category: ${product.category}</p>
      `;
            container.appendChild(card);
        });
    } catch (error) {
        console.log("error", error);
    }
}

fatchapi();
const url = "https://dog.ceo/api/breeds/list/all";
const contenedor = document.getElementById("contenedor");

const apiPerros = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const { message: breeds } = data;
  console.log(breeds);
  for (const breed in breeds) {
    const perros = await fetch(
      `https://dog.ceo/api/breed/${breed}/images/random`
    );
    const { message: photo } = await perros.json();
    const nuevoDiv = document.createElement("div");
    const imagenDiv = document.createElement("div");
    const breedListDiv = document.createElement("div");
    const nuevaImg = document.createElement("img");
    const ulBreed = document.createElement("ul");
    const miH3 = document.createElement("h3");
    breeds[breed].slice(0, 3).forEach((underBreed) => {
      const li = document.createElement("li");
      li.textContent = underBreed;
      ulBreed.appendChild(li);
    });

    nuevaImg.src = photo;
    nuevaImg.alt = breed;
    breedListDiv.className = "breeds-list";
    nuevaImg.className = "imagen";
    nuevoDiv.className = "doggy";
    imagenDiv.className = "image-breed-container";
    miH3.className = "elh3";
    miH3.textContent = breed;
    breedListDiv.appendChild(ulBreed);
    imagenDiv.appendChild(nuevaImg);
    imagenDiv.appendChild(breedListDiv);
    nuevoDiv?.appendChild(imagenDiv);
    nuevoDiv?.appendChild(miH3);
    contenedor?.appendChild(nuevoDiv);
  }
};

apiPerros();

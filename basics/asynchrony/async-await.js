function fetchDataWithPromise() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) =>
      console.log(
        `Respuesta exitosa con Promise. ${data.results.length} resultados disponibles.`
      )
    )
    .catch((error) => {
      console.log("Respuesta fallida con Promise.");
      console.log(error);
    });
}

async function fetchDataWithAsyncAwait() {
  try {
    let response = await fetch("https://rickandmortyapi.com/api/character");
    let data = await response.json();
    console.log(
      `Respuesta exitosa con async-await. ${data.results.length} resultados disponibles.`
    );
  } catch (error) {
    console.log("Respuesta fallida con async-await.");
    console.log(error);
  }
}

fetchDataWithPromise();
fetchDataWithAsyncAwait();

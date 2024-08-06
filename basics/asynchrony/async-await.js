function fetchDataWithPromise() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) =>
      console.log(
        `(Promise) Success. ${data.results.length} results available.`
      )
    )
    .catch((error) => {
      console.log("(Promise) Failed.");
      console.log(error);
    });
}

async function fetchDataWithAsyncAwait() {
  try {
    let response = await fetch("https://rickandmortyapi.com/api/character");
    let data = await response.json();
    console.log(
      `(async-await) Success. ${data.results.length} results available.`
    );
  } catch (error) {
    console.log("(async-await) Failed.");
    console.log(error);
  }
}

fetchDataWithPromise();
fetchDataWithAsyncAwait();

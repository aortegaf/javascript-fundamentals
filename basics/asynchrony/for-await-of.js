urls = [
  "https://rickandmortyapi.com/api/character",
  "https://rickandmortyapi.com/api/location",
  "https://rickandmortyapi.com/api/episode",
];

async function fetchDataWithForAwait() {
  try {
    for await (url of urls) {
      let response = await fetch(url);
      let data = await response.json();
      console.log("Success.");
      console.log(data);
    }
  } catch (error) {
    console.log("Failed.");
    console.log(error);
  }
}

fetchDataWithForAwait();

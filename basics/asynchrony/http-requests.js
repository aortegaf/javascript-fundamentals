function makeHTTPRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}

async function getData() {
  try {
    const data = await makeHTTPRequest(
      "GET",
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data; // Return the data from the function
  } catch (error) {
    console.error("getData() Failed:", error);
    throw error; // Re-throw the error to handle it outside
  }
}

// Handle the result outside of getData()
getData()
  .then((data) => {
    console.log("Fetched data:", data);
  })
  .catch((error) => {
    console.error("Failed to fetch data:", error);
  });

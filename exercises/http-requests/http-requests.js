/*
Trying out GET, POST, DELETE request with JavaScript
*/

function makeHTTPRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: method === "POST" ? JSON.stringify(data) : null,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json().then((data) => ({
      status: response.status,
      data: data,
    }));
  });
}

const title = document.getElementById("title");
const content = document.getElementById("content");
const postsList = document.getElementById("posts-list");

// GET
async function getRequest() {
  try {
    const response = await makeHTTPRequest(
      "GET",
      "https://jsonplaceholder.typicode.com/Posts"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

function displayPosts() {
  getRequest()
    .then((posts) => {
      postsList.innerHTML = "";

      posts.forEach((post) => {
        const postElement = document.createElement("article");
        postElement.classList.add("centered", "post-item");
        postElement.id = post.id;

        const title = document.createElement("h3");
        title.textContent = post.title;

        const body = document.createElement("p");
        body.textContent = post.body;

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "DELETE";

        postElement.append(title);
        postElement.append(body);
        postElement.append(deleteButton);

        postsList.append(postElement);
      });
    })
    .catch((error) => {
      console.log("getRequest() Failed.", error);
      alert("GET request failed");
    });

  title.value = "";
  content.value = "";
}

// POST
async function postRequest(body) {
  try {
    const response = await makeHTTPRequest(
      "POST",
      "https://jsonplaceholder.typicode.com/posts",
      body
    );
    return response;
  } catch (error) {
    throw error;
  }
}

function createPost() {
  postRequest({
    userId: 1,
    title: title.value,
    body: content.value,
  })
    .then((response) => {
      postsList.innerHTML = "";

      const requestStatus = document.createElement("p");
      requestStatus.textContent = `Request status: ${response.status}`;

      const message = document.createElement("h3");
      message.textContent = "You would be creating this post: ";

      const postElement = document.createElement("article");
      postElement.classList.add("centered", "post-item");

      const id = document.createElement("h4");
      id.textContent = "ID: " + response.data.id;

      const title = document.createElement("h3");
      title.textContent = "Title: " + response.data.title;

      const body = document.createElement("p");
      body.textContent = "Content: " + response.data.body;

      postElement.append(id);
      postElement.append(title);
      postElement.append(body);

      postsList.append(message);
      postsList.append(postElement);
      postsList.append(requestStatus);
    })
    .catch((error) => {
      console.log("postRequest() Failed.", error);
      alert("POST request failed");
    });

  title.value = "";
  content.value = "";
}

// DELETE
async function deleteRequest(id) {
  try {
    const response = await makeHTTPRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response;
  } catch (error) {
    throw error;
  }
}

postsList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const itemId = event.target.closest("article").id;
    deleteRequest(itemId)
      .then((response) =>
        alert(
          `Request status: ${response.status}. You would be deleting post with ID: ${itemId}.`
        )
      )
      .catch((error) => {
        console.log("deleteRequest() Failed.", error);
        alert("DELETE request failed");
      });
  }
});

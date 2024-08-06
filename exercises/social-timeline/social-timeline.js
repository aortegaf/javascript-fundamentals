/*
System requirements: 
1. User must be able to login with username and password.
2. System must be able to validate credentials.
3. If credentials are correct, the system must display a welcome message and the user timeline.
4. If credentials are incorrect, the system must display an error message and no timeline.
*/
const loginSection = document.getElementById("loginSection");
const mainSection = document.getElementById("mainSection");

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const status = usersDatabase.findIndex(
    (credentials) =>
      credentials.username == username && credentials.password == password
  );

  if (status != -1) {
    loginSection.style.display = "none";
    mainSection.style.display = "flex";
  } else {
    alert("Wrong credentials");
  }
}

function logout() {
  mainSection.style.display = "none";
  loginSection.style.display = "flex";
}

const usersDatabase = [
  {
    username: "andres",
    password: "123",
  },
  {
    username: "karen",
    password: "456",
  },
];

const usersTimeline = [
  { user: "Andrés", timeline: "I'm developing" },
  { user: "Karen", timeline: "Sleeping right now" },
];

const timelineContainer = document.getElementById("timeLine");

usersTimeline.forEach((timeline) => {
  timelineContainer.innerHTML += `<span style="font-weight: bold">${timeline.user}</span>: ${timeline.timeline} <br> <br>`;
});

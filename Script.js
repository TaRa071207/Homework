function signUp() {
    var firstName = document.getElementById("first_name").value;
    var lastName = document.getElementById("last_name").value;
    var emailOrPhone = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var birthday = document.getElementById("birthday").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;

    alert("First Name: " + firstName + "\n" +
          "Last Name: " + lastName + "\n" +
          "Email or Phone: " + emailOrPhone + "\n" +
          "Password: " + password + "\n" +
          "Birthday: " + birthday + "\n" +
          "Gender: " + gender);
}

var signUpButton = document.getElementById("signUpButton");
signUpButton.addEventListener("click", signUp);

function redirectToHomepage() {
    window.location.href = "homepage.html";
}

function onLoginFormSubmit(event) {
    event.preventDefault();
        redirectToHomepage();
}

var loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", onLoginFormSubmit);
}

function logout() {
    window.location.href = "index.html";
}

var logoutButton = document.getElementById("logoutButton");
if (logoutButton) {
    logoutButton.addEventListener("click", logout);
}

var posts = [];

function addPost(event) {
    event.preventDefault();
    var postTitle = document.getElementById("postTitle").value;
    var postContent = document.getElementById("postContent").value;
    
    var post = {
        title: postTitle,
        content: postContent
    };
    
    posts.push(post);
    displayPosts();
    
    document.getElementById("postTitle").value = "";
    document.getElementById("postContent").value = "";
}

function displayPosts() {
    var postList = document.getElementById("postList");
    postList.innerHTML = "";

    for (var i = 0; i < posts.length; i++) {
        var post = posts[i];
        var postDiv = document.createElement("div");
        postDiv.className = "post";
        postDiv.innerHTML = "<h2>" + post.title + "</h2><p>" + post.content + "</p>";
        postList.appendChild(postDiv);
    }
}

var addPostButton = document.getElementById("addPostButton");
if (addPostButton) {
    addPostButton.addEventListener("click", addPost);
}

displayPosts();

function displayPosts() {
    var postList = document.getElementById("postList");
    postList.innerHTML = "";

    for (var i = 0; i < posts.length; i++) {
        var post = posts[i];
        var postDiv = document.createElement("div");
        postDiv.className = "post";
        postDiv.innerHTML = "<h2>" + post.title + "</h2><p>" + post.content + "</p>";
        postList.appendChild(postDiv);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const postList = document.getElementById("postList");
    const addPostForm = document.getElementById("addPostForm");
    const addPostButton = document.getElementById("addPostButton");

    addPostForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const postTitle = document.getElementById("postTitle").value;
        const postContent = document.getElementById("postContent").value;

        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `<h2>${postTitle}</h2><p>${postContent}</p>`;

        postList.appendChild(postElement);

        document.getElementById("postTitle").value = "";
        document.getElementById("postContent").value = "";
    });
});

http
  .createServer(function (req, res) {
    switch (req.url) {
      case "/users":
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify(users));
        break;
      default:
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Resource not found" }));
    }
  })
  .listen(8080);
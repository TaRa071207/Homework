document.addEventListener("DOMContentLoaded", function () {
    const postTitleInput = document.getElementById("postTitle");
    const postContentTextarea = document.getElementById("postContent");
    const postList = document.getElementById("postList");

    const addPostButton = document.getElementById("addPostButton");
    addPostButton.addEventListener("click", function (event) {
        event.preventDefault();
        
        const title = postTitleInput.value;
        const content = postContentTextarea.value;
        
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `<h2>${title}</h2><p>${content}</p>`;
        
        postList.appendChild(postElement);
        
        postTitleInput.value = "";
        postContentTextarea.value = "";
    });
});
const postList = document.getElementById("postList");

const postElement = document.createElement("div");
postElement.classList.add("post");
postElement.innerHTML = `<h2>Welcome to Postpage</h2><p>This page is for post everything</p>`;
postList.appendChild(postElement);

document.addEventListener("DOMContentLoaded", function () {
    const postList = document.getElementById("postList");

    function loadPosts() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "server_url_here", true);

        xhr.send();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                postList.innerHTML = xhr.responseText;
            }
        };
    }

    const loadPostsButton = document.getElementById("loadPostsButton");
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
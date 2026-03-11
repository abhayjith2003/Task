let blogs = [];

async function getBlogs(){

let response = await fetch("https://jsonplaceholder.typicode.com/posts");

blogs = await response.json();

blogs = blogs.slice(0,10);

displayBlogs();

}

function displayBlogs(){

let container = document.getElementById("blogContainer");

container.innerHTML = "";

blogs.forEach((blog,index)=>{

container.innerHTML += `
<div class="blog">

<h3>${blog.title}</h3>

<p>${blog.body}</p>

<button class="edit" onclick="editBlog(${index})">Edit</button>

<button class="delete" onclick="deleteBlog(${index})">Delete</button>

</div>
`;

});

}

function addBlog(){

let title = document.getElementById("title").value.trim();
let body = document.getElementById("body").value.trim();
let error = document.getElementById("error");

error.innerText = "";

if(title === "" || body === ""){

error.innerText = "Title and description cannot be empty";

return;

}

let duplicate = blogs.some(blog => blog.title.toLowerCase() === title.toLowerCase());

if(duplicate){

error.innerText = "Blog title already exists";

return;

}

let newBlog = {
title:title,
body:body
};

blogs.unshift(newBlog);

displayBlogs();

document.getElementById("title").value="";
document.getElementById("body").value="";

}

function deleteBlog(index){

blogs.splice(index,1);

displayBlogs();

}

function editBlog(index){

let newTitle = prompt("Edit Title",blogs[index].title);
let newBody = prompt("Edit Blog",blogs[index].body);

if(newTitle.trim()==="" || newBody.trim()===""){

alert("Fields cannot be empty");

return;

}

blogs[index].title = newTitle;
blogs[index].body = newBody;

displayBlogs();

}

getBlogs();
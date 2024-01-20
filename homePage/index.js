import { BLOGS } from '../database/blogsData.js';

const blogElement = document.getElementById('recent-blog-grid');

function renderBlog() {
    const recentBlog = getMostRecentBlog();
    let blogHtml = `
        <img class='blog-img' src='./${recentBlog.imgPath}' alt='${recentBlog.title}'>
        <p class='blog-date'>${recentBlog.date}</p>
        <h2 class='blog-title'>${recentBlog.title}</h2>
        <p class='blog-content'>${recentBlog.content}</p>
        `;
    blogElement.innerHTML = blogHtml;
}

function getMostRecentBlog() {
    // This function just return the last element, if u want to change what is the
    // most recent blog, you should change this function only
    return BLOGS[BLOGS.length - 1];
}

renderBlog();

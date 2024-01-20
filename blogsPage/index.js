import { BLOGS } from '../database/blogsData.js';

const blogsElement = document.getElementById('blogs');
const viewLessMoreBtn = document.getElementById('view-less-more-btn');
const DEFAULT_LIMITED_LESS_VIEW = 3;

viewLessMoreBtn.addEventListener('click', function() {
    if (viewLessMoreBtn.textContent === 'View more') {
        viewLessMoreBtn.textContent = 'View less';
        renderBlogs(-1); // -1 means render all blogs
    }
    else {
        viewLessMoreBtn.textContent = 'View more';
        renderBlogs(DEFAULT_LIMITED_LESS_VIEW);
    }
});

function renderBlogs(nbBlogsToRender) {
    let blogsHtml = '';
    const blogsArray = getBlogsArrayWithSize(nbBlogsToRender);
    blogsArray.forEach(blog => {
        blogsHtml += `
        <div id="blog-item-${blog.id}" class="blog-item">
            <img class="blog-img" src="../${blog.imgPath}" alt="${blog.title}">
            <p class="date">${blog.date}</p>
            <h2>${blog.title}</h2>
            <p>${blog.content}</p>
        </div>
        `;
    });
    blogsElement.innerHTML = blogsHtml;
    reorderBlogs();
}

function getBlogsArrayWithSize(size) {
    if (size === -1) {
        return BLOGS;
    }

    const blogs = [];
    for(let i = 0; i < size; i++) {
        if(i < BLOGS.length) {
            blogs.push(BLOGS[i]);
        } else {
            break;
        }
    }
    return blogs;
}

function reorderBlogs() {
    if (viewLessMoreBtn.textContent === 'View more') {
        document.getElementById('newstyle').disabled = false;
    } else {
        document.getElementById('newstyle').disabled = true;
    }
}

renderBlogs(DEFAULT_LIMITED_LESS_VIEW);

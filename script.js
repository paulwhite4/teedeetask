const postsContainer = document.querySelector('.posts__wrapper');
fetch("https://tedee.com/wp-json/wp/v2/posts?per_page=4")
.then(response => response.json())
.then(data => {
    console.log(data);
    data.map(post => {
        const innerContent = `
        <div class = "post">
            <h2 class = "post__title"><a href = "${post.link}" class = "post__link">${post.title.rendered}</a></h2>
                by <span class = "post__author">${post.author}</span> |
                <span class = "post__date">${post.date}</span>
            <hr>
        </div>
        `
        postsContainer.innerHTML += innerContent;
    })
})
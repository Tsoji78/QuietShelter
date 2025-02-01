// public/app.js
document.addEventListener('DOMContentLoaded', () => {
    const blogContainer = document.getElementById('blogContainer');
    
    // Fetch blogs from Firebase
    db.collection("blogs")
      .orderBy("date", "desc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const blog = doc.data();
          blogContainer.appendChild(createBlogCard(blog));
        });
      })
      .catch((error) => {
        console.error("Error getting documents: ", error);
      });

    function createBlogCard(blog, docId) {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-box';
        blogCard.innerHTML = `
            <div class="blog-img">
                <img src="${blog.imageUrl}" alt="${blog.title}">
            </div>
            <div class="blog-text">
                <span>${new Date(blog.date).toLocaleDateString()} / ${blog.categories}</span>
                <a href="blog-detail.html?id=${docId}" class="blog-title">${blog.title}</a>
                <p>${blog.content.substring(0, 150)}...</p>
                <a href="blog-detail.html?id=${docId}">Read More</a>
            </div>
        `;
        return blogCard;
    }
});
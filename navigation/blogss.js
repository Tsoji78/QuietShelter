document.addEventListener('DOMContentLoaded', () => {
    // Get the blog ID from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('id');

    if (!blogId) {
        // Redirect to the home page if no blog ID is provided
        window.location.href = 'index.html';
        return;
    }

    // Fetch the blog post from Firebase
    db.collection('blogs')
        .doc(blogId)
        .get()
        .then((doc) => {
            if (doc.exists) {
                const blog = doc.data();
                renderBlogPost(blog);
            } else {
                // Redirect to the home page if the blog post doesn't exist
                window.location.href = 'index.html';
            }
        })
        .catch((error) => {
            console.error('Error fetching blog post:', error);
            window.location.href = 'index.html';
        });

    // Function to render the blog post
    function renderBlogPost(blog) {
        document.getElementById('blogImage').src = blog.imageUrl;
        document.getElementById('blogTitle').textContent = blog.title;
        document.getElementById('blogDate').textContent = `Published on: ${new Date(blog.date).toLocaleDateString()}`;
        document.getElementById('blogAuthor').textContent = `By: ${blog.author}`;
        document.getElementById('blogCategories').textContent = `Categories: ${blog.categories}`;
        document.getElementById('blogContent').innerHTML = blog.content.replace(/\n/g, '<br>');
    }
});
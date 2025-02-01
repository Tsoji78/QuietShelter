

// Your Firebase config (same as in your React app)
const firebaseConfig = {
    apiKey: "AIzaSyAB-WbFZTQ8bfHA3W44Q9ithgDGWos1jss",
    authDomain: "quietshelter-b5f54.firebaseapp.com",
    projectId: "quietshelter-b5f54",
    storageBucket: "quietshelter-b5f54.firebasestorage.app",
    messagingSenderId: "964395764892",
    appId: "1:964395764892:web:8cb55955d6f4a92f08f159"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

// Fetch posts from Firestore
async function fetchPosts() {
    try {
        const querySnapshot = await db.collection('blogs')
            .orderBy('createdAt', 'desc')
            .get();
        const container = document.getElementById('blog-container');
        container.innerHTML = ''; // Clear loading message

        querySnapshot.forEach((doc) => {
            const post = doc.data();
            const postId = doc.id; // Get the document ID
            const postElement = createPostElement(post, postId); // Pass postId
            container.appendChild(postElement);
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
        document.getElementById('blog-container').innerHTML = 
            '<div class="error">Error loading posts. Please try again later.</div>';
    }
}
// Create HTML element for a post
// Create HTML element for a post
function createPostElement(post, postId) {
    const div = document.createElement('div');
    div.className = 'post-card';

    // Limit the content to 150 characters and add an ellipsis if truncated
    const truncatedContent = post.content.length > 150 
        ? post.content.substring(0, 150) + '...' 
        : post.content;

    const html = `
        ${post.imageUrl ? 
            `<img src="${post.imageUrl}" alt="${post.title}" class="post-image">` : ''}
        <h2 class="post-title">${post.title}</h2>
        ${post.categories ? 
            `<div class="post-categories"> ${post.categories}</div>` : ''}
        <p class="post-date">Posted on ${new Date(post.date).toLocaleDateString()}</p>
        <div class="post-content">${truncatedContent}</div>
        <p class="post-author">By ${post.author}</p>
        
        <a href="/[id].html?id=${postId}" class="read-more">Read More</a>
    `;
    div.innerHTML = html;
    return div;
}

// Initial load
window.addEventListener('DOMContentLoaded', fetchPosts);

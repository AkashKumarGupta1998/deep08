document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function animateSkills() {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            if (isElementInViewport(bar)) {
                bar.style.width = width;
            }
        });
    }
    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    window.addEventListener('scroll', animateSkills);
    animateSkills(); // Run once on page load
    
    // Initialize skill bar widths from HTML data attributes
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = '0'; // Start at 0 for animation
    });
    
    // Post form handling
    const postForm = document.getElementById('post-form');
    if (postForm) {
        postForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const title = this.querySelector('#post-title').value;
            const content = this.querySelector('#post-content').value;
            const image = this.querySelector('#post-image').value || 'https://via.placeholder.com/600x400';
            
            if (title && content) {
                savePostToFile(title, content, image);
                this.reset();
                alert('Post saved successfully!');
                // In a real app, you would refresh the posts display here
            } else {
                alert('Please fill in all required fields');
            }
        });
    }
    
    // Function to save post to a separate file (simulated)
    function savePostToFile(title, content, image) {
        // In a real implementation, this would be a server-side API call
        // For this demo, we'll simulate it with localStorage
        const posts = JSON.parse(localStorage.getItem('posts') || [];
        const newPost = {
            id: Date.now(),
            title,
            content,
            image,
            date: new Date().toISOString()
        };
        posts.push(newPost);
        localStorage.setItem('posts', JSON.stringify(posts));
    }
    
    // Function to load and display posts
    function loadPosts() {
        const postsContainer = document.querySelector('.posts-container');
        if (!postsContainer) return;
        
        // In a real implementation, you would fetch from a server or file
        const posts = JSON.parse(localStorage.getItem('posts')) || [
            {
                id: 1,
                title: 'Getting Started with Web Development',
                content: 'Learn the basics of HTML, CSS, and JavaScript to start your journey in web development...',
                image: 'https://via.placeholder.com/600x400',
                date: '2023-05-15T10:00:00Z'
            },
            {
                id: 2,
                title: 'Responsive Design Principles',
                content: 'Understanding how to create websites that look great on all devices is crucial in today\'s mobile-first world...',
                image: 'https://via.placeholder.com/600x400',
                date: '2023-06-20T14:30:00Z'
            }
        ];
        
        postsContainer.innerHTML = '';
        
        posts.forEach(post => {
            const postDate = new Date(post.date);
            const postCard = document.createElement('div');
            postCard.className = 'post-card';
            postCard.innerHTML = `
                <div class="post-image" style="background-image: url('${post.image}')"></div>
                <div class="post-content">
                    <h3>${post.title}</h3>
                    <div class="post-meta">
                        <span><i class="far fa-calendar-alt"></i> ${postDate.toLocaleDateString()}</span>
                        <span><i class="far fa-user"></i> Your Name</span>
                    </div>
                    <p class="post-excerpt">${post.content.substring(0, 100)}...</p>
                    <a href="#" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
                </div>
            `;
            postsContainer.appendChild(postCard);
        });
    }
    
    loadPosts();
});

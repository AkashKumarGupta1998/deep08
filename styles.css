/* Global Styles */
:root {
    --primary-color: #6c63ff;
    --secondary-color: #4d44db;
    --accent-color: #ff6584;
    --dark-color: #2d2d2d;
    --light-color: #f8f9fa;
    --gray-color: #6c757d;
    --success-color: #28a745;
    --warning-color: #ffc107;
    --danger-color: #dc3545;
    --font-primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --font-secondary: 'Georgia', serif;
    --transition: all 0.3s ease;
    --box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --border-radius: 8px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-primary);
    color: var(--dark-color);
    line-height: 1.6;
    background-color: var(--light-color);
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    list-style: none;
}

img {
    max-width: 100%;
    height: auto;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

.btn {
    display: inline-block;
    padding: 12px 24px;
    background-color: var(--primary-color);
    color: white;
    border-radius: var(--border-radius);
    font-weight: 600;
    transition: var(--transition);
    border: none;
    cursor: pointer;
    text-align: center;
}

.btn:hover {
    background-color: var(--secondary-color);
    transform: translateY(-3px);
    box-shadow: var(--box-shadow);
}

.section-title {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
    position: relative;
    color: var(--dark-color);
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: var(--primary-color);
    border-radius: 2px;
}

/* Header Styles */
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: var(--transition);
}

header.scrolled {
    background-color: rgba(255, 255, 255, 0.98);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px;
}

.logo {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--primary-color);
}

nav ul {
    display: flex;
    gap: 30px;
}

nav ul li a {
    font-weight: 600;
    transition: var(--transition);
    position: relative;
}

nav ul li a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: var(--transition);
}

nav ul li a:hover::after {
    width: 100%;
}

.hamburger {
    display: none;
    cursor: pointer;
    flex-direction: column;
    gap: 5px;
}

.hamburger span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: var(--dark-color);
    transition: var(--transition);
}

/* Hero Section */
.hero {
    padding: 150px 0 100px;
    background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
}

.hero .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
}

.hero-content {
    flex: 1;
}

.hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 15px;
    line-height: 1.2;
}

.hero-content h1 span {
    color: var(--primary-color);
}

.hero-content .subtitle {
    font-size: 1.5rem;
    color: var(--gray-color);
    margin-bottom: 25px;
}

.social-links {
    display: flex;
    gap: 15px;
    margin-bottom: 30px;
}

.social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    color: var(--primary-color);
    box-shadow: var(--box-shadow);
    transition: var(--transition);
}

.social-links a:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-5px);
}

.hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
}

.image-placeholder {
    width: 350px;
    height: 350px;
    border-radius: 20px;
    background-color: var(--primary-color);
    opacity: 0.8;
    position: relative;
    overflow: hidden;
}

.image-placeholder::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
        to bottom right,
        transparent 0%,
        transparent 45%,
        white 50%,
        transparent 55%,
        transparent 100%
    );
    animation: shine 3s infinite;
}

@keyframes shine {
    0% {
        transform: rotate(0deg) translate(-10%, -10%);
    }
    100% {
        transform: rotate(360deg) translate(-10%, -10%);
    }
}

/* About Section */
.about {
    padding: 100px 0;
    background-color: white;
}

.about-content {
    display: flex;
    align-items: center;
    gap: 50px;
}

.about-image {
    flex: 1;
}

.about-text {
    flex: 1;
}

.about-text p {
    margin-bottom: 20px;
    font-size: 1.1rem;
}

.personal-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    margin: 25px 0;
}

.info-item {
    display: flex;
    gap: 10px;
}

.info-item span {
    font-weight: 600;
    color: var(--primary-color);
}

/* Continue in next part... */
/* Skills Section */
#skills {
    padding: 100px 0;
    background-color: #f8f9fa;
}

.skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
}

.skill-category {
    background-color: white;
    padding: 30px;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    transition: var(--transition);
}

.skill-category:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.skill-category h3 {
    margin-bottom: 20px;
    color: var(--primary-color);
    display: flex;
    align-items: center;
    gap: 10px;
}

.skill-category h3 i {
    font-size: 1.5rem;
}

.skill-item {
    margin-bottom: 15px;
}

.skill-name {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
}

.skill-bar {
    height: 10px;
    background-color: #e9ecef;
    border-radius: 5px;
    overflow: hidden;
}

.skill-progress {
    height: 100%;
    background-color: var(--primary-color);
    border-radius: 5px;
    transition: width 1.5s ease;
}

/* Projects Section */
#projects {
    padding: 100px 0;
    background-color: white;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
}

.project-card {
    background-color: white;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--box-shadow);
    transition: var(--transition);
    position: relative;
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.project-image {
    height: 200px;
    background-color: var(--primary-color);
    position: relative;
    overflow: hidden;
}

.project-image::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3));
}

.project-content {
    padding: 20px;
}

.project-content h3 {
    margin-bottom: 10px;
    color: var(--dark-color);
}

.project-content p {
    color: var(--gray-color);
    margin-bottom: 15px;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 15px;
}

.project-tag {
    padding: 5px 10px;
    background-color: #f0f0f0;
    border-radius: 20px;
    font-size: 0.8rem;
    color: var(--gray-color);
}

.project-links {
    display: flex;
    gap: 15px;
}

.project-links a {
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 600;
    color: var(--primary-color);
    transition: var(--transition);
}

.project-links a:hover {
    color: var(--secondary-color);
}

/* Posts Section */
#posts {
    padding: 100px 0;
    background-color: #f8f9fa;
}

.posts-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
    margin-bottom: 40px;
}

.post-card {
    background-color: white;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--box-shadow);
    transition: var(--transition);
}

.post-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.post-image {
    height: 200px;
    background-color: var(--gray-color);
}

.post-content {
    padding: 20px;
}

.post-content h3 {
    margin-bottom: 10px;
    color: var(--dark-color);
}

.post-meta {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
    color: var(--gray-color);
    font-size: 0.9rem;
}

.post-meta span {
    display: flex;
    align-items: center;
    gap: 5px;
}

.post-excerpt {
    color: var(--gray-color);
    margin-bottom: 15px;
}

.read-more {
    display: inline-block;
    color: var(--primary-color);
    font-weight: 600;
    transition: var(--transition);
}

.read-more:hover {
    color: var(--secondary-color);
}

.post-form {
    max-width: 800px;
    margin: 0 auto;
    background-color: white;
    padding: 30px;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: var(--dark-color);
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: var(--border-radius);
    font-family: var(--font-primary);
    transition: var(--transition);
}

.form-group input:focus,
.form-group textarea:focus {
    border-color: var(--primary-color);
    outline: none;
    box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.2);
}

.form-group textarea {
    min-height: 150px;
    resize: vertical;
}

/* Contact Section */
#contact {
    padding: 100px 0;
    background-color: white;
}

.contact-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 50px;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.contact-item {
    display: flex;
    align-items: flex-start;
    gap: 15px;
}

.contact-icon {
    width: 50px;
    height: 50px;
    background-color: rgba(108, 99, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color);
    font-size: 1.2rem;
}

.contact-details h3 {
    margin-bottom: 5px;
    color: var(--dark-color);
}

.contact-details p, 
.contact-details a {
    color: var(--gray-color);
    transition: var(--transition);
}

.contact-details a:hover {
    color: var(--primary-color);
}

/* Footer */
footer {
    background-color: var(--dark-color);
    color: white;
    padding: 30px 0;
    text-align: center;
}

.footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.footer-logo {
    font-size: 1.8rem;
    font-weight: 700;
    color: white;
}

.footer-links {
    display: flex;
    gap: 20px;
}

.footer-links a {
    transition: var(--transition);
}

.footer-links a:hover {
    color: var(--primary-color);
}

.copyright {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
}

/* Responsive Styles */
@media (max-width: 992px) {
    .hero .container,
    .about-content {
        flex-direction: column;
    }
    
    .hero-content,
    .about-text {
        text-align: center;
    }
    
    .personal-info {
        justify-content: center;
    }
    
    .social-links {
        justify-content: center;
    }
    
    .hero-image {
        margin-top: 50px;
    }
}

@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }
    
    nav ul {
        position: fixed;
        top: 80px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 80px);
        background-color: white;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
        transition: var(--transition);
    }
    
    nav ul.active {
        left: 0;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .hero-content h1 {
        font-size: 2.5rem;
    }
    
    .hero-content .subtitle {
        font-size: 1.2rem;
    }
    
    .personal-info {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 576px) {
    .projects-grid,
    .posts-container {
        grid-template-columns: 1fr;
    }
    
    .hero-content h1 {
        font-size: 2rem;
    }
    
    .btn {
        padding: 10px 20px;
    }
}

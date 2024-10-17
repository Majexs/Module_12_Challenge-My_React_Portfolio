// Footer provides links to other social media sites
export default function Footer() {
    return (
        <footer className = 'bg-body-tertiary'>
            <div>
                <a  
                    href="https://www.facebook.com/james.swanson1" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn">
                    Facebook
                </a>
                <a 
                    href="https://x.com/Majexs" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn">
                    Twitter
                </a>
                <a 
                    href="https://www.instagram.com/majexs/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn">
                    Instagram
                </a>
                <a 
                    href="https://www.linkedin.com/in/james-swanson-679bab66/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn">
                    LinkedIn
                </a>
                <a 
                    href="https://github.com/Majexs" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn">
                    GitHub
                </a>
            </div>
            <p>&copy; 2024 Majexs. All rights reserved.</p>
        </footer>
    );
}
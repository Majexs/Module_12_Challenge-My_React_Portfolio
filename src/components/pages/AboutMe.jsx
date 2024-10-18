// Default page for the Portfolio
export default function AboutMe() {
    return (
        <div className='container'>
            <h2>A Few Words About Me...</h2>
            <img    src="/images/my_photo.jpg" 
                    alt="James at his most professional"
                    className="img-fluid" />
            <p>
                James has lived a very nonlinear life - getting a BFA in Drama at NYU and going on to teach math & history for six years in private sector education. <br/>
                He is now looking to make yet another career change through coding, and here is a sample of his work. Expect more projects in the future!
            </p>
        </div>
    );
}
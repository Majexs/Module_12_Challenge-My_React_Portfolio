// Imports array of objects (which are the portfolio of projects)
import projects from './Projects'

// Function calls child component Card and passes Projects props to it
export default function Portfolio() {
    return (
        <div>
            <h1>Here's a Sample of my Work</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <Card 
                            title={title}
                            previewImage={previewImage}
                            altTitle={altTitle}
                            projectURL={projectURL}
                            gitHubRepo={gitHubRepo}
                            projectDescription={projectDescription}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
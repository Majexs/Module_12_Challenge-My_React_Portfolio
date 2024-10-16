// Imports array of objects (which are the portfolio of projects)
import projects from '../../utils/Projects';
import Card from './Card';

// Function calls child component Card and passes Projects props to it
export default function Portfolio() {
    return (
        <div>
            <h1>Here's a Sample of my Work</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <Card 
                            title={project.title}
                            previewImage={project.previewImage}
                            altTitle={project.altTitle}
                            projectURL={project.projectURL}
                            gitHubRepo={project.gitHubRepo}
                            projectDescription={project.projectDescription}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
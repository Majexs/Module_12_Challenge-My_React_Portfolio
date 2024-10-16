export default function Card(props) {
    return (
        <div>
            <h5>{props.title}</h5>
            <p>{props.projectDescription}</p>
            <a href={props.projectURL}>
                <img
                    src={props.previewImage}
                    alt={props.altTitle}
                />
            </a>
            <a href={props.gitHubRepo}>
                GitHub Repo
            </a>
        </div>
    );
}
export default function Card(props) {
    return (
        <div classname = 'card'>
            <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text">{props.projectDescription}</p>
                <a href={props.projectURL}>
                    <img
                        className="card-img-top img-fluid"
                        src={props.previewImage}
                        alt={props.altTitle}
                    />
                </a>
                <a 
                    href={props.gitHubRepo} 
                    className="btn btn-primary">
                    GitHub Repo
                </a>
            </div>
        </div>
    );
}
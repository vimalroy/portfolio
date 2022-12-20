import Projects from "../components/projects/Projects";

function Portfolio() {
    return (
        <div>
            <div className="page-title">
                <h1>Portfolio</h1>
                <div className="page-subtitle">
                    <h4> My Works</h4>
                </div>
            </div>

            <div id="content" className="page-content site-content single-post" role="main">

                <Projects />

            </div>
        </div>
    )
}

export default Portfolio
import './Projects.css'
import card1 from '../assets/images/card 1.png'
import card2 from '../assets/images/card 2.png'
import card3 from '../assets/images/card 3.png'
import card4 from '../assets/images/card 4.png'
import card5 from '../assets/images/card 5.png'
import card6 from '../assets/images/card 6.png'
import Link from '../assets/images/akar-icons_link-chain.png'
import LinkGH from '../assets/images/akar-icons_github-fill.png'
const Projects = () => {
    return (
        <>
            <div className="main container">
                <div className="projectTitle">
                    <h1>Projects</h1>
                    <p>Projects I have already built</p>
                </div>
                <div className="projectCardsAll">
                    <div className="projectCards">
                        <div className="projectCard">
                            <img src={card1} alt="" />
                            <div className="projectCardText">
                                <h2>Currency-Converter</h2>
                                <p>Currency Converter: A handy tool for quick currency conversion with up-to-date rates. Intuitive interface and sleek design, perfect for travelers and financial calculations.</p>
                            </div>
                            <div className="projectCardExtra">
                                <p>
                                    Tech stack : <span>HTML , JavaScript, SASS, React</span>
                                </p>
                            </div>
                            <div className="projectCardLinks">
                                <div className="projectCardLink">
                                    <img src={Link} alt="" />
                                    <a href="https://Murik64.github.io/currency-converter/ " target="_blank">
                                        Live Preview
                                    </a>
                                </div>
                                <div className="projectCardLink">
                                    <img src={LinkGH} alt="" />
                                    <a href="https://github.com/Murik64/currency-converter.git" target="_blank">
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="projectCard">
                            <img src={card2} alt="" />
                            <div className="projectCardText">
                                <h2>Quiz Questionnaire</h2>
                                <p>Quiz Questionnaire: An engaging quiz app with fun questions and results. Easy to use with a vibrant design—great for testing knowledge or entertainment!</p>
                            </div>
                            <div className="projectCardExtra">
                                <p>
                                    Tech stack : <span>HTML , JavaScript, SASS, React</span>
                                </p>
                            </div>
                            <div className="projectCardLinks">
                                <div className="projectCardLink">
                                    <img src={Link} alt="" />
                                    <a href="https://Murik64.github.io/Quiz-questionnaire/ " target="_blank">
                                        Live Preview
                                    </a>
                                </div>
                                <div className="projectCardLink">
                                    <img src={LinkGH} alt="" />
                                    <a href="https://github.com/Murik64/Quiz-questionnaire.git" target="_blank">
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="projectCard">
                            <img src={card3} alt="" />
                            <div className="projectCardText">
                                <h2>Counter</h2>
                                <p>Counter: A simple yet functional counter app with animations and settings. Ideal for tracking workouts or anything else with a user-friendly interface.</p>
                            </div>
                            <div className="projectCardExtra">
                                <p>
                                    Tech stack : <span>HTML , JavaScript, SASS, React</span>
                                </p>
                            </div>
                            <div className="projectCardLinks">
                                <div className="projectCardLink">
                                    <img src={Link} alt="" />
                                    <a href="https://murik64.github.io/counter/ " target="_blank">
                                        Live Preview
                                    </a>
                                </div>
                                <div className="projectCardLink">
                                    <img src={LinkGH} alt="" />
                                    <a href="https://github.com/Murik64/counter.git" target="_blank">
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projectCards">
                        <div className="projectCard">
                            <img src={card4} alt="" />
                            <div className="projectCardText">
                                <h2>Note App</h2>
                                <p>Note App: A stylish note-taking app with saving and categorization. Lightweight and well-designed—your best companion for organizing ideas!</p>
                            </div>
                            <div className="projectCardExtra">
                                <p>
                                    Tech stack : <span>HTML , JavaScript, SASS, React</span>
                                </p>
                            </div>
                            <div className="projectCardLinks">
                                <div className="projectCardLink">
                                    <img src={Link} alt="" />
                                    <a href="https://murik64.github.io/note-app/ " target="_blank">
                                        Live Preview
                                    </a>
                                </div>
                                <div className="projectCardLink">
                                    <img src={LinkGH} alt="" />
                                    <a href="https://github.com/Murik64/note-app.git" target="_blank">
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="projectCard">
                            <img src={card5} alt="" />
                            <div className="projectCardText">
                                <h2>Photo Collection</h2>
                                <p>Photo Collection: A gallery for storing and viewing photos with filters and sorting. Creative design and smooth transitions make it unique and convenient.!</p>
                            </div>
                            <div className="projectCardExtra">
                                <p>
                                    Tech stack : <span>HTML , JavaScript, SASS, React</span>
                                </p>
                            </div>
                            <div className="projectCardLinks">
                                <div className="projectCardLink">
                                    <img src={Link} alt="" />
                                    <a href="https://murik64.github.io/Photo-collection/ " target="_blank">
                                        Live Preview
                                    </a>
                                </div>
                                <div className="projectCardLink">
                                    <img src={LinkGH} alt="" />
                                    <a href="https://github.com/Murik64/Photo-collection.git" target="_blank">
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="projectCard">
                            <img src={card6} alt="" />
                            <div className="projectCardText">
                                <h2>List of Users</h2>
                                <p>List of Users: An app for managing a user list with search and details. Minimalist design and fast performance—perfect for showcasing skills!</p>
                            </div>
                            <div className="projectCardExtra">
                                <p>
                                    Tech stack : <span>HTML , JavaScript, SASS, React</span>
                                </p>
                            </div>
                            <div className="projectCardLinks">
                                <div className="projectCardLink">
                                    <img src={Link} alt="" />
                                    <a href="https://murik64.github.io/List-of-users/" target="_blank">
                                        Live Preview
                                    </a>
                                </div>
                                <div className="projectCardLink">
                                    <img src={LinkGH} alt="" />
                                    <a href="https://github.com/Murik64/List-of-users.git" target="_blank">
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;
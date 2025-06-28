import './TechStack.css';
import HTML from '../assets/images/HTML.png'
import CSS from '../assets/images/CSS.png'
import JS from '../assets/images/JS.png'
import REACT from '../assets/images/REACT.png'
import SASS from '../assets/images/SASS.png'
import GIT from '../assets/images/GIT.png'
import GITHUB from '../assets/images/GITHUB.png'
import VSCODE from '../assets/images/VSCODE.png'
const TechStack = () => {
    return (
        <>
            <div className="main container">
                <div className="TechStackTitle">
                    <h1>My Technical Skills</h1>
                    <p> Technologies I’ve been working with recently</p>
                </div>
                <div className="TechStackImg">
                    <div className="TechStackImg1">
                        <a href="https://developer.mozilla.org/ru/docs/Web/HTML" className='html' target="_blank">
                            <img src={HTML} alt="" />
                        </a>
                        <a href="https://developer.mozilla.org/ru/docs/Web/CSS" className='css' target="_blank">
                            <img src={CSS} alt="" />
                        </a>
                        <a href="https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Scripting" className='js' target="_blank">
                            <img src={JS} alt="" />
                        </a>
                        <a href="https://react.dev" className='react' target="_blank">
                            <img src={REACT} alt="" />
                        </a>
                    </div>
                    <div className="TechStackImg2">
                        <a href="https://sass-lang.com/documentation/values/" className='sass' target="_blank">
                            <img src={SASS} alt="" />
                        </a>
                        <a href="https://git-scm.com/doc" className='git' target="_blank">
                            <img src={GIT} alt="" />
                        </a>
                        <a href="https://docs.github.com/ru" className='github' target="_blank">
                            <img src={GITHUB} alt="" />
                        </a>
                        <a href="https://code.visualstudio.com/docs" className='vscode' target="_blank">
                            <img src={VSCODE} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TechStack;
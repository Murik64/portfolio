
import './NavButton.css'

const NavButton = ({isDarkMode,setIsDarkMode}) => {
    return (
        <>
            <div className="toggleWrapper" >
                <input
                    className="input"
                    id="dn" type="checkbox"
                    checked={isDarkMode}
                    onChange={() => setIsDarkMode(!isDarkMode)}
                />
                <label className="toggle" htmlFor="dn">
                    <span className="toggle__handler">
                        <span className="crater crater--1" />
                        <span className="crater crater--2" />
                        <span className="crater crater--3" />
                    </span>
                    <span className="star star--1" />
                    <span className="star star--2" />
                    <span className="star star--3" />
                    <span className="star star--4" />
                    <span className="star star--5" />
                    <span className="star star--6" />
                </label>
            </div>
        </>
    )
}

export default NavButton;
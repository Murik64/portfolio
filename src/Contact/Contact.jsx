import './Contact.css';
import Logo2 from '../assets/images/logo 2.svg';
import GH from '../assets/images/GH.png';
import IN from '../assets/images/IN.png';
import TW from '../assets/images/TW.png';

const Contact = () =>{
    return(
        <>
            <div className="main container">
                <div className="contactTitle">
                    <h1>For any questions please mail us: <span>muratansarov302@gmail.com</span></h1>
                </div>
                <div className="contactFooter">
                    <div className="contactFooterLogo">
                        <img src={Logo2} alt="" />
                    </div>
                    <div className="contactMain">
                        <div className="contactEmail">
                            <p>+998908113768</p>
                            <p>muratansarov302@gmail.com</p>
                        </div>
                        <div className="contactLinks">
                            <a href="https://github.com/Murik64" target="_blank">
                                <img src={GH} alt="" />
                            </a>
                            <a href="https://x.com/muratansarov?s=21&t=Kz8g3D7nd-v3IW9FfPXidQ" target="_blank">
                                <img src={TW} alt="" />
                            </a>
                            <a href="https://www.instagram.com/muri1ka?igsh=OTVoN2szM2RhZnBv&utm_source=qr" target="_blank">
                                <img src={IN} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
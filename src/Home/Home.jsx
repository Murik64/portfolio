import './home.css'
import userImg from '../assets/images/userImg.png'
const Home = () => {
    return (
        <>
            <div className="home container">
                <div className="home__title">
                    <h1>Hi 👋,</h1>
                    <h1>My name is <span>Murat</span></h1>
                    <h1>I build things for web</h1>
                </div>
                <div className="home__photo">
                    <img src={userImg} alt="" />
                </div>
            </div>
        </>
    )
}

export default Home;
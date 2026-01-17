import './Home.css'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Home = () => {
    return (
        <div className="flexbox-container">
            <div className="one"><h1 id="main_title"> Angela Zhao's Garden </h1></div>
            <Link to="/About" className="two">
                <motion.img
                    layoutId="flower-expand"
                    src="/myportfolio/flowericon.png"
                    className="logo react"
                    alt="Yellow flower icon"
                    transition={{
                        duration: 0.8,
                        ease: [0.43, 0.13, 0.23, 0.96]
                    }}
                />
            </Link>
            <Link to="/Projects" className="three">
                <img src="/myportfolio/flowericon.png" className="logo react" alt="React logo" />
            </Link>
            <Link to="/Contact" className="four">
                <img src="/myportfolio/flowericon.png" className="logo react" alt="React logo" />
            </Link>
            <div className="five"><img src="https://www.lovethispic.com/uploaded_images/43771-Blossom-Gif.gif?1" className="logo react" alt="React logo" /></div>
            <div className="six"><img src="https://www.lovethispic.com/uploaded_images/43771-Blossom-Gif.gif?1" className="logo react" alt="React logo" /></div>
            <div className="seven"><img src="https://www.lovethispic.com/uploaded_images/43771-Blossom-Gif.gif?1" className="logo react" alt="React logo" /></div>
            <div className="eight"><img src="https://www.lovethispic.com/uploaded_images/43771-Blossom-Gif.gif?1" className="logo react" alt="React logo" /></div>
            <div className="nine"><img src="https://www.lovethispic.com/uploaded_images/43771-Blossom-Gif.gif?1" className="logo react" alt="React logo" /></div>
        </div>
    );
};

export default Home;

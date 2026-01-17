import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
            <motion.div
                className="flower-container"
                layoutId="flower-expand"
                transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
                <motion.div
                    className="about-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <h2>About Me</h2>
                    <p>Hello! I'm Angela Zhao, a passionate web developer and gardener. I love creating beautiful and functional web applications while nurturing my garden.</p>
                    <p>In my free time, I enjoy exploring new technologies, hiking, and experimenting with new plant species in my garden.</p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default About;
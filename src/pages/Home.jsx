import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Rules from "../components/Rules";
import Criteria from "../components/Criteria";
import Faq from "../components/Faq";
import Timeline from "../components/Timeline";
import Prize from "../components/Prize";
import Partners from "../components/Partners";
import PrivacyPolicy from "../components/PrivacyPolicy";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <section>
            <Navbar />
            <Hero />
            <Intro />
            <Rules />
            <Criteria />
            <Faq />
            <Timeline />
            <Prize />
            <Partners />
            <PrivacyPolicy />
            <Footer />
        </section>
    );
};

export default Home;

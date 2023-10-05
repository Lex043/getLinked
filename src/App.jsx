import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Rules from "./components/Rules";
import Criteria from "./components/Criteria";
import Faq from "./components/Faq";
import Timeline from "./components/Timeline";
import Prize from "./components/Prize";
import Partners from "./components/Partners";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Footer from "./components/Footer";

const App = () => {
    return (
        <main className="flex min-h-screen flex-col justify-center bg-[#150e28] text-white">
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
        </main>
    );
};

export default App;

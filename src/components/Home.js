import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import HelmetHtmlHeader from "./HelmetHtmlHeader";
import Header from "./Header";
import Banner from "./Banner";
import SixBoxSection from "./SixBoxSection";
import FeatureProduct from "./FeatureProduct";
import NewsSection from "./NewsSection";
import SubscribeSection from "./SubscribeSection";
import ThreeBoxSection from "./ThreeBoxSection";
import FooterSection from "./FooterSection";
import ScriptSection from "./ScriptSection";


const Home = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {
        // if used in more components, this should be in context 
        // axios to /logout endpoint 
        setAuth({});
        navigate('/linkpage');
    }

    return (
        <div>
            <HelmetHtmlHeader />
            <div className="main-layout">
                {/* <!-- loader  -->*/}
                {/*<div className="loader_bg">
                <div className="loader"><img src="/images/loading.gif" alt="#" /></div>
                </div>*/}
                {/*<!-- end loader -->*/}
                <Header />
                <Banner />                             
                {/*<!-- six_box section -->*/}
                <SixBoxSection />                                                   
                {/*<!-- end six_box section -->
                 <!-- project section -->*/}
                <FeatureProduct/>
                {/* <!-- end project section -->
                <!-- fashion section -->*/}   
                {/*<!-- end fashion section -->
                <!-- news section -->*/}
                <NewsSection />                                                    
                {/* <!-- end news section -->
                <!-- newslatter section -->*/}
                <SubscribeSection/>                                                   
                {/*<!-- end newslatter section -->
                <!-- three_box section -->*/}
                <ThreeBoxSection/>                                                 
                {/* <!-- end three_box section -->
                <!--  footer -->*/}
                <FooterSection/>                                                   
                {/*<!-- end footer -->
                <!-- Javascript files-->*/}

                <ScriptSection/>                                                 
             </div>

        </div>
                                                            
    )
}

export default Home

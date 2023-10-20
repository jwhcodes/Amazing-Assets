import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import Values1 from "../../content/Values1.json";
import Values2 from "../../content/Values2.json";
import Values3 from "../../content/Values3.json";
import Values4 from "../../content/Values4.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="teamwork.jpg"
        id="intro"
      />

      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="container.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
                  <MiddleBlock
        title={Values1.title}
        content={Values1.text}
      />
      <MiddleBlock
        title={Values2.title}
        content={Values2.text}
      />
      <MiddleBlock
        title={Values3.title}
        content={Values3.text}
      />
      <MiddleBlock
        title={Values4.title}
        content={Values4.text}
      />

      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;

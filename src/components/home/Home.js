import Headr from "./headr/Headr";
import LandingSection from "./landingSection/LandingSection";
import Form from "./formFolder/Form";

export default function Home() {
  return (
    <div id="home">
      <Headr />
      <LandingSection />
      <Form />
    </div>
  );
}

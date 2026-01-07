import { Container } from "@mui/material";

// SectionHeading
import SectionHeading from "Utilis/SectionHeading";

//Component
import Solution from "Components/About/Solution";
import Myself from "Components/About/Myself";

//Data
import { data } from "Data/data";

const About = () => {
    return (
        <Container maxWidth={false} disableGutters as="section" sx={{ pt: "5em" }} id="about">
            <SectionHeading
                value1={data.About.heading.value1}
                value2={data.About.heading.value2}
                border={true}
            />
            <Solution />
            <Myself />
        </Container>
    );
};
export default About;
import { Container, Box } from "@mui/material";

//Components
import HeroContent from "Components/Hero/HeroContent";

// Data
import { data } from "Data/data";

//Styles
import styles from "Styles/Hero/Hero.styles";

const Hero = () => {
    return (
        <Container maxWidth={false} disableGutters sx={styles.Container} as="section" id="home">
            <HeroContent />
            <Box component="img" src={data.Hero.images.hero} alt="Hero Svg" sx={styles.HeroImage} />
            <Box component="img" src={data.Hero.images.particle} alt="Hero Svg" sx={styles.Paticle} />
        </Container>
    );
};
export default Hero;
import { Box, Typography, ButtonBase } from "@mui/material";
import { Link } from "react-scroll";

// Icons
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

//Data
import { data } from "Data/data";

//Styles
import styles from "Styles/Hero/HeroContent.styles";

const HeroContent = () => {
    return (
        <Box sx={styles.Container}>
            <Typography variant="h2" component="h2" sx={styles.Title} dangerouslySetInnerHTML={{ __html: data.Hero.title }} />
            <Typography variant="h6" component="h6" sx={styles.Slogan}>
                {data.Hero.slogan}
            </Typography>
            <Typography variant="body1" component="p" sx={styles.Description}>
                {data.Hero.description}
            </Typography>
            <Link
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}
            >
                <ButtonBase sx={styles.Button}>
                    {data.Hero.btnLabel}
                    <ArrowForwardTwoToneIcon />
                </ButtonBase>
            </Link>
        </Box>
    );
};
export default HeroContent;
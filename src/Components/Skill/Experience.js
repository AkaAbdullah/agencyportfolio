import { Box, Typography, ButtonBase } from "@mui/material";
import Link from "next/link";

//Icons
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

//Data
import { data } from "Data/data";

//Styles
import styles from "Styles/Skill/Experience.styles";

const Experience = () => {
    return (
        <Box sx={{ mb: { md: "0px", xxs: "20px" } }}>
            <Typography variant="h4" component="h4" sx={styles.Title}>
                {data.Skill.experience.title1}<br />
                {data.Skill.experience.title2}
            </Typography>
            <Typography variant="body1" component="p" sx={styles.Description}>
                {data.Skill.experience.description}
            </Typography>
            <Box sx={styles.ButtonContainer}>
                <Link href={data.Skill.experience.btnUrl}>
                    <a>
                        <ButtonBase sx={styles.Button}>
                            {data.Skill.experience.btnText}
                            <ArrowForwardTwoToneIcon />
                        </ButtonBase>
                    </a>
                </Link>
            </Box>
        </Box>
    );
};
export default Experience;
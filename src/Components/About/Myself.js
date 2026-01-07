import { Box, Stack, ButtonBase, Typography } from "@mui/material";
import { Link } from "react-scroll";

//Icons
import DoneIcon from '@mui/icons-material/Done';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

//Data
import { data } from "Data/data";

//Styles
import styles from "Styles/About/Myselft.styles";

const Myself = () => {
    return (
        <Box sx={styles.Container}>
            <Box sx={{ width: { md: "35%", xxs: "100%" } }}>
                <Typography variant="h4" component="h4" sx={styles.Title} dangerouslySetInnerHTML={{ __html: data.About.myself.title }} />
                <Typography variant="body1" component="p" className="sdjh" sx={styles.Description}>
                    {data.About.myself.description}
                </Typography>
                <Box sx={{ my: "28px" }}>
                    {data.About.myself.features.map((feature, i) => (
                        <Stack direction="row" sx={styles.Features} key={i}>
                            <DoneIcon />
                            <Typography variant="body1" component="p">
                                {feature}
                            </Typography>
                        </Stack>
                    ))}
                </Box>
                <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <ButtonBase sx={styles.Button}>
                        {data.About.myself.button}
                        <ArrowForwardTwoToneIcon />
                    </ButtonBase>
                </Link>
            </Box>
            <Box component="img" src={data.About.myself.image} alt="About" sx={styles.Image} />
        </Box>
    );
};
export default Myself;
import { Box, Typography } from "@mui/material";

//SectionHeading
import SectionHeading from "Utilis/SectionHeading";

//Component
import Slider from "Components/Client/Slider";


//Data
import { data } from "Data/data";

//Styles
import styles from "Styles/Client/Client.styles";

const Client = () => {
    return (
        <Box component="section" sx={styles.Container} id="client">
            <SectionHeading
                value1={data.Client.heading.value1}
                value2={data.Client.heading.value2}
                border={true}
            />
            <Slider />
        </Box>
    );
};
export default Client;
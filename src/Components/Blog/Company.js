import { Box, Grid, Divider } from "@mui/material";

// Data
import { data } from "Data/data";

//Styles
import styles from "Styles/Blog/Company.styles";

const Company = () => {
    return (
        <Box>
            <Divider sx={styles.Divider} />
            <Grid container spacing={3} sx={{ alignItems: "center" }}>
                {data.Blog.company &&
                    data.Blog.company.map((company, i) => (
                        <Grid item msm={3} xxs={6} key={i}>
                            <Box sx={{ textAlign: "center" }}>
                                <Box component="img" sx={styles.Image} src={company.logo} />
                            </Box>
                        </Grid>
                    ))
                }

            </Grid>
        </Box>
    );
};
export default Company;
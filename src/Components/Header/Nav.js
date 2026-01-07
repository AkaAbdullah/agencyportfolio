import { Box, ButtonBase } from "@mui/material";
import { Link } from "react-scroll";

//Data
import { data } from "Data/data";

//Styles
import styles from "Styles/Header/Nav.styles";

const Nav = () => {
    return (
        <Box sx={styles.Navs}>
            {data.Navs &&
                data.Navs.map((nav, i) => (
                    <Link
                        key={i}
                        activeClass='active'
                        to={nav.Id}
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <ButtonBase sx={styles.Buttons}>
                            {nav.name}
                        </ButtonBase>
                    </Link>
                ))
            }
        </Box>
    );
};
export default Nav;
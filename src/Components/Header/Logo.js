import { Box } from "@mui/material";
import Image from "next/image";
import { Link } from "react-scroll";

//Data
import { data } from "Data/data";

const Logo = () => {
    return (
        <Box sx={{ mt: "2px", a: { cursor: "pointer" } }}>
            <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
            >
                <Image src={data.Header.logo} width={200} height={30} alt="Logo" />
            </Link>
        </Box>
    );
};
export default Logo;
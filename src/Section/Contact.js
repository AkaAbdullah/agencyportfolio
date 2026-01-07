import { Container } from "@mui/material";

//SectionHeading
import SectionHeading from "Utilis/SectionHeading";

//Component
import Form from "Components/Contact/Form";

//Data
import { data } from "Data/data";

//Styles
import styles from "Styles/Contact/Contact.styles";

const Contact = () => {
    return (
        <Container maxWidth={false} disableGutters as="section" sx={styles.Container} id="contact">
            <SectionHeading
                value1={data.Contact.heading.value1}
                value2={data.Contact.heading.value2}
                border={true}
            />
            <Form />
        </Container>
    );
};
export default Contact;
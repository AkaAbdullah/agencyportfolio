import { Container } from "@mui/material";

//SectionHeading
import SectionHeading from "Utilis/SectionHeading";

//Component
import SingleBlog from "Components/Blog/SingleBlog";
import Company from "Components/Blog/Company";

//Data
import { data } from "Data/data";

const Blog = () => {
    return (
        <Container maxWidth={false} disableGutters as="section" sx={{ py: "5em" }} id="blog">
            <SectionHeading
                value1={data.Blog.heading.value1}
                value2={data.Blog.heading.value2}
                border={false}
            />
            <SingleBlog />
            <Company />
        </Container>
    );
};

export default Blog;
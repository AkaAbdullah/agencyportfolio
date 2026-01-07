import { useState, useRef, useMemo } from "react";
import { Container, Tab, Box, Fade, Slide } from "@mui/material";
import { TabContext, TabList, TabPanel } from '@mui/lab';

//SectionHeading
import SectionHeading from "Utilis/SectionHeading";

//Components
import Work from "Components/Portfolio/Work";

//Data
import { data } from "Data/data";

//Styles
import styles from "Styles/Portfolio/Portfolio.styles";

const Portfolio = () => {
    const [Items, setItems] = useState(data.Portfolio.works);
    const [value, setValue] = useState('1');
    const containerRef = useRef(null);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const filterItem = (filterItem) => {
        const updateItem = data.Portfolio.works.filter((curElem) => {
            return curElem.filter === filterItem;
        });
        setItems(updateItem);
    }
    useMemo(() => {
        const updateItem = data.Portfolio.works.filter((curElem) => {
            return curElem.filter === "web";
        });
        setItems(updateItem);
    }, [])

    return (
        <Container maxWidth={false} disableGutters as="section" sx={styles.Container} id="portfolio">
            <SectionHeading
                value1={data.Portfolio.heading.value1}
                value2={data.Portfolio.heading.value2}
                border={false}
            />
            <TabContext value={value}>
                <Box sx={{ mt: "3em" }}>
                    <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                        TabIndicatorProps={{
                            style: {
                                display: "none",
                            }
                        }}
                        sx={styles.ButtonGroup}
                    >
                        {data.Portfolio.tabs.map((tab) => (
                            <Tab key={tab.value} label={tab.label} value={tab.value} onClick={() => filterItem(tab.filter)} />
                        ))}
                    </TabList>
                </Box>
                {data.Portfolio.tabs.map((tab) => (
                    <TabPanel key={tab.value} value={tab.value} sx={{ pr: "0px", mt: "15px" }}>
                        <Box ref={containerRef}>
                            <Fade in={value === tab.value ? true : false} timeout={2000}>
                                <Box>
                                    <Slide in={value === tab.value ? true : false} direction="left" timeout={800} container={containerRef.current}>
                                        <Box>
                                            <Work works={Items} />
                                        </Box>
                                    </Slide>
                                </Box>
                            </Fade>
                        </Box>
                    </TabPanel>
                ))}
            </TabContext>
            <Box component="img" src={data.Portfolio.particle} alt="particle" sx={styles.Particle} />
        </Container >
    );
};

export default Portfolio;
import { createTheme } from '@mui/material/styles';

//Data
import { data } from 'Data/data';

// Create a theme instance.
const theme = createTheme({
    typography: {
        fontFamily: data.MainTheme.fonts.primary
        // 400 Regular
        // 500 Medium
        // 600 Semi-Bold
        // 700 Bold
        // 800 Extra-Bold
    },
    palette: {
        text: {
            primary: data.MainTheme.colors.text.primary, // Default Text Color
            secondary: data.MainTheme.colors.text.secondary // Secondary Text Color
        },
        background: {
            default: data.MainTheme.colors.background.default // Default Background Color
        },
        primary: {
            main: data.MainTheme.colors.primary.main, // Document Main Primary Color
            light: data.MainTheme.colors.primary.light, // Document Light Color (Button Background)
            box_shadow_black: data.MainTheme.colors.primary.box_shadow_black, // Box Shadow Black (Header Sticky)
            success: data.MainTheme.colors.primary.success, // SuccessMessage Color
            box_shadow_client: data.MainTheme.colors.primary.box_shadow_client, /// Box Shadow Clinet Slider
            box_show_blog: data.MainTheme.colors.primary.box_show_blog, //Box Shadow Blog Section
            box_shadow_blog_2: data.MainTheme.colors.primary.box_shadow_blog_2, // Box Shadow Blog Category
            divider: data.MainTheme.colors.primary.divider, // Divider Color (All Section Divider)
            social_bg: data.MainTheme.colors.primary.social_bg, // Social Background Color
            social_color: data.MainTheme.colors.primary.social_color, // Social Icon Color
            inputBorder: data.MainTheme.colors.primary.inputBorder, //For NewsLetter Input Border Color
            HeroGradient: data.MainTheme.colors.primary.HeroGradient, // Gradient (Hero Section)
            WorkGradient: data.MainTheme.colors.primary.WorkGradient, // Gradient (Portfolio Section)
            ContactGradient: data.MainTheme.colors.primary.ContactGradient, // Gradient (Contact Section)
        }
    },
    breakpoints: {
        values: {
            xxs: 0, // Double Extra Small Devices
            xs: 360, // Extra Small Devices
            sm: 480, // Small Devices
            msm: 576, // Medium Small Devices
            lsm: 640, // Large Small Devices
            smd: 768, // Small Medium Devices
            md: 992, // Medium Devices
            lg: 1200, // Large Devices
            xl: 1536, // Extra Small Devices
            xxl: 1980 // Double Extra Devices
        },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    '@media (min-width: 0px)': {
                        paddingLeft: '3%',
                        paddingRight: '3%',
                    },
                    '@media (min-width: 480px)': {
                        paddingLeft: '3%',
                        paddingRight: '3%',
                    },
                    '@media (min-width: 992px)': {
                        paddingLeft: '3%',
                        paddingRight: '3%',
                    },
                    '@media (min-width: 1200px)': {
                        paddingLeft: '5%',
                        paddingRight: '5%',
                    }
                }
            }
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    fontFamily: "Inter"
                },
            },
        },
    }
});

export default theme;
import React from 'react';
import firebase from 'firebase/app';
import 'firebase/analytics';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { grey, teal } from '@material-ui/core/colors';
// import Navigation from './components/Navigation';
// import { AppContextWrapper } from './AppContext';
// import Routes from './Routes';
// import SnackBarManager from './SnackBarManager';
import { DJKLogo } from './components/DJKLogo';
import { Links } from './components/Links';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAwq9apnVlkn1v5XOZvYc_1bLevxKkqSt0',
    authDomain: 'djk0sh3r.firebaseapp.com',
    projectId: 'djk0sh3r',
    storageBucket: 'djk0sh3r.appspot.com',
    messagingSenderId: '646219596353',
    appId: '1:646219596353:web:909bef14ee56c3cc157cc0',
    measurementId: 'G-WE3Q9DKF0D',
};
// Initialize Firebase App
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const useStyles = makeStyles((theme) => {
    return {
        box: {
            display: 'flex',
            // flexDirection: 'column',
            height: '100vh',
            maWidth: '100vw',
            background: '#FAFAFA',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
        },
        container: {
            flex: '1 auto',
            overflow: 'auto',
            marginTop: theme.spacing(),
            marginBottom: theme.spacing(),
        },
    };
});

const App = () => {
    const classes = useStyles();

    const theme = React.useMemo(() => {
        return createMuiTheme({
            palette: {
                type: 'dark',
                primary: grey,
                secondary: teal,
            },
            typography: {
                fontFamily: '"Inter", sans-serif',
            },
            shape: {
                borderRadius: 0,
            },
        });
    }, []);

    // return (
    //     {/*<HashRouter>
    //          <AppContextWrapper> */}
    //         <ThemeProvider theme={theme}>
    //             <CssBaseline />
    //             <Box className={classes.box}>
    //                 {/* <Box className={classes.navigation}>
    //                     <Navigation />
    //                 </Box> */}
    //                 <Box className={classes.container}>
    //                     {/* <Routes />
    //                     <SnackBarManager /> */}
    //                     <DJKLogo className={classes.svg} width={350} />
    //                 </Box>
    //             </Box>
    //         </ThemeProvider>
    //         {/* </AppContextWrapper>
    //     </HashRouter>*/}
    // );
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box className={classes.box}>
                <Box className={classes.container}>
                    <DJKLogo className={classes.svg} width={350} />
                    <Links />
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default App;

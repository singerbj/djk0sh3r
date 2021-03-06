import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Link } from '@material-ui/core';
import { FaTwitch, FaInstagram, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';
import { IoLogoTiktok } from 'react-icons/io5';

const useStyles = makeStyles((theme) => {
    return {
        links: {
            animation: `$myEffect 750ms ${theme.transitions.easing.easeInOut} 2000ms 1 normal forwards`,
            width: 400,
            maxWidth: '90%',
            opacity: 0,
            transition: 'width 750ms',
            color: '#202020',
            // marginTop: theme.spacing(2),
        },
        linksContainer: {
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
        },
        '@keyframes myEffect': {
            '0%': {
                opacity: 0,
                marginTop: 0,
            },
            '100%': {
                opacity: 1,
                marginTop: theme.spacing(2),
            },
        },
        icon: {
            color: '#202020',
            marginLeft: theme.spacing(1.5),
            marginRight: theme.spacing(1.5),
            width: 25,
            height: 25,
        },
    };
});

export const Links = () => {
    const classes = useStyles();
    return (
        <Box className={classes.linksContainer}>
            <Box className={classes.links}>
                <Link href="https://www.instagram.com/djk0sh3r/">
                    <FaInstagram className={classes.icon} />
                </Link>
                <Link href="https://www.twitch.tv/djk0sh3r">
                    <FaTwitch className={classes.icon} />
                </Link>
                <Link href="https://www.youtube.com/channel/UC_jsegCU6EVH_9kzpPejxHQ">
                    <FaYoutube className={classes.icon} />
                </Link>
                <Link href="https://twitter.com/djk0sh3r">
                    <FaTwitter className={classes.icon} />
                </Link>
                <Link href="https://www.tiktok.com/@djk0sh3r">
                    <IoLogoTiktok className={classes.icon} />
                </Link>
                <Link href="https://facebook.com/DJK0SH3R">
                    <FaFacebook className={classes.icon} />
                </Link>
            </Box>
        </Box>
    );
};

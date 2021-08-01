import React from 'react';
import BNavigation from '../BNavigation';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';

const useStylesBar = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        left: 50,
        right: 50,
    },
}));

export default function NewPost() {
    const classesBar = useStylesBar();

    return (
        <>
            <div className={classesBar.grow}>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    edge="start"
                    className={classesBar.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                >
                    <MenuIcon />
                </IconButton>
                <div className={classesBar.grow} />
                <Typography className={classesBar.title} variant="h6" noWrap>
                    새글쓰기
                </Typography>
                <div className={classesBar.grow} />
                    <IconButton aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            </div>
            <BNavigation />
        </>
    )
}
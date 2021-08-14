import React, {Component} from 'react';
import BNavigation from '../BNavigation';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// import Button from '@material-ui/core/InputLabel';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// const useStylesBar = makeStyles((theme) => ({
//     grow: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         left: 50,
//         right: 50,
//     },
// }));

// const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//     },
//     margin: {
//       margin: theme.spacing(1),
//     },
//     withoutLabel: {
//       marginTop: theme.spacing(3),
//     },
//     textField: {
//       width: '25ch',
//     },
//   }));

// const classesBar = useStylesBar();
// const classes = useStyles();

class PostNew extends Component {
    state = {
        title: '',
        content: '',
    };

    // useStylesBar = makeStyles((theme) => ({
    //     grow: {
    //         flexGrow: 1,
    //     },
    //     menuButton: {
    //         marginRight: theme.spacing(2),
    //     },
    //     title: {
    //         left: 50,
    //         right: 50,
    //     },
    // }));

    // useStyles = makeStyles((theme) => ({
    //     root: {
    //       display: 'flex',
    //       flexWrap: 'wrap',
    //     },
    //     margin: {
    //       margin: theme.spacing(1),
    //     },
    //     withoutLabel: {
    //       marginTop: theme.spacing(3),
    //     },
    //     textField: {
    //       width: '25ch',
    //     },
    //   }));

    // classesBar = this.useStylesBar();
    // classes = this.useStyles();
    
    postBoard = async () => {
        // TODO 바디에 user_name 추가해서 보내주세요~
        const { title, content } = this.state;
        const post = await axios.post('http://localhost:4000/app/v1/upload/commonBoard', { // 게시글 쓰기 (POST, JSON)
            title,
            content,
        })
        this.setState({
            title: '',
            content: '',
        });
        console.log(post);
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };
    
    render() {
        return (
            /* <>
            <div className={this.classesBar.grow}>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    edge="start"
                    className={this.classesBar.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                >
                    <MenuIcon />
                </IconButton>
                <div className={this.classesBar.grow} />
                <Typography className={this.classesBar.title} variant="h6" noWrap>
                    새글쓰기
                </Typography>
                <div className={this.classesBar.grow} />
                    <IconButton aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            </div>
            
            <div className={this.classes.root}>
                <FormControl fullWidth className={this.classes.margin}>
                    <InputLabel htmlFor="title">제목</InputLabel>
                    <Input
                        id="title"
                        value={this.state.title}
                        name="title"
                        onChange={this.handleChange}
                    />
                    <InputLabel htmlFor="content">내용</InputLabel>
                    <Input
                        id="content"
                        value={this.state.content}
                        name="content"
                        onChange={this.handleChange}
                    />
                </FormControl>
            </div>
            <Button>
                <button onClick={this.postBoard}>전송하기 </button>
                <Link to="/">목록</Link>
            </Button>
            <div>{JSON.stringify(this.state)}</div>
            <BNavigation />
            </> }*/
        <Wrap>
            <h2>Write</h2>
            <p>
                <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
            </p>
            <p>
                <textarea type="text" name="content" onChange={this.handleChange} value={this.state.content} />
            </p>
            <Button>
                <button onClick={this.postBoard}>전송하기 </button>
                <Link to="/">목록</Link>
            </Button>
            <div>{JSON.stringify(this.state)}</div>
        </Wrap>
        );
    }
}

const Wrap = styled.div`
    padding: 20px;
    input {
        width: 100%;
        height: 20px;
        border: 1px solid #ccc;
    }
    textarea {
        width: 100%;
        height: 100px;
        border: 1px solid #ccc;
    } `;
const Button = styled.div`
    border-top: 1px solid #eee;
    padding: 20px;
    button {
        float: right;
        padding: 10px 20px;
        border-radius: 5px;
        text-decoration: none;
        background: #212121;
        color: #fff;
        font-size: 16px;
    }
    a {
        float: right;
        padding: 10px 20px;
        border-radius: 5px;
        text-decoration: none;
        background: #f2f2f2;
        border: 1px solid #ddd;
        color: #424242;
        font-size: 16px;
    }
    & > button + a {
        margin-right: 5px;
    } `;


export default PostNew;

// const useStylesBar = makeStyles((theme) => ({
//     grow: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         left: 50,
//         right: 50,
//     },
// }));

// const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//     },
//     margin: {
//       margin: theme.spacing(1),
//     },
//     withoutLabel: {
//       marginTop: theme.spacing(3),
//     },
//     textField: {
//       width: '25ch',
//     },
//   }));

// export default function NewPost() {
//     const classesBar = useStylesBar();
//     const classes = useStyles();

//     const [values, setValues] = React.useState({
//         title: '',
//         // password: '',
//         // weight: '',
//         // weightRange: '',
//         // showPassword: false,
//       });

//     const postBoard = async () => {
//         // const { title, content } = this.state;
//         const response = await axios.post('api주소', { // 게시판 새 글 쓰기 (POST, JSON타입)
//             title,
//             // content,
//         });
//     }

//     const handleChange = (prop) => (event) => {
//         setValues({ ...values, [prop]: event.target.value });
//       };

//     return (
//         <>
//             <div className={classesBar.grow}>
//             <AppBar position="static">
//                 <Toolbar>
//                 <IconButton
//                     edge="start"
//                     className={classesBar.menuButton}
//                     color="inherit"
//                     aria-label="open drawer"
//                 >
//                     <MenuIcon />
//                 </IconButton>
//                 <div className={classesBar.grow} />
//                 <Typography className={classesBar.title} variant="h6" noWrap>
//                     새글쓰기
//                 </Typography>
//                 <div className={classesBar.grow} />
//                     <IconButton aria-label="show 17 new notifications" color="inherit">
//                     <Badge badgeContent={17} color="secondary">
//                         <NotificationsIcon />
//                     </Badge>
//                     </IconButton>
//                 </Toolbar>
//             </AppBar>
//             </div>
            
//             <div className={classes.root}>
//                 <FormControl fullWidth className={classes.margin}>
//                     <InputLabel htmlFor="standard-adornment-amount">제목</InputLabel>
//                     <Input
//                         id="standard-adornment-amount"
//                         value={values.title}
//                         onChange={handleChange('title')}
//                     />
//                 </FormControl>
//             </div>
//             <Button>
//                 <button onClick={this.postBoard}>전송하기 </button>
//                 <Link to="/">목록</Link>
//             </Button>

//             <BNavigation />
//         </>
//     )
// }
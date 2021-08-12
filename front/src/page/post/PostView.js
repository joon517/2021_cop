import React, { useEffect, useState } from 'react';
import { getPostByNo } from '../../Data';
import './Post.css';
import { Link } from 'react-router-dom'; 

// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import HiOutlineHeart from "react-icons/hi";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { CenterFocusStrong } from '@material-ui/icons';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import CommonTable from '../../component/table/CommonTable';
import CommonTableColumn from '../../component/table/CommonTableColumn';
import CommonTableRow from '../../component/table/CommonTableRow';
import { postList } from '../../Data';

import axios from 'axios';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 10,
     
  
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  favbord:{
    verticalAlign: CenterFocusStrong,
    marginLeft: -15,
  },
  more:{
    textAlign: 'right',
    // marginLeft: 80,
    // marginRight: 15,
  }

});



const PostView  = props => {
  // const [ dataList, setDataList ] = useState([]);

  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const classes = useStyles();

  useEffect(() => {
    // setDataList(postList);

    const fetchPosts = async () => {
      try {
        setPosts(null);
        setError(null);
        setLoading(true);
        const response = await axios.get('api주소'); // 게시판 목록 가져오기 (GET, JSON타입 데이터)
        setPosts(response.data);
      }
      catch (e) {
        setError(e);
      }
      setLoading(false);
    }
    fetchPosts();
  }, [ ])

  if (loading) return <div>로딩중..</div>
  if (error) return <div>에러 발생</div>
  if (!posts) return null;

  // const classes = useStyles();

  return (
    <>
           {
            //  dataList ? dataList.map((item, index) => {
              posts ? posts.map((item, index) => {
              
               return ( 
                 
                 <>
                 <br/>  
                <Card className={classes.root}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    @종목명 #테마키워드
                  </Typography> 
                  <Typography variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  {/* <Typography className={classes.pos} color="textSecondary">
                    adjective
                  </Typography> */}
                  <Typography variant="body2" component="p">
                    {item.content}
                    {/* <br />
                    {'"a benevolent smile"'} */}
                  </Typography>
                  {/* <Typography className={classes.favbord}> */}
                    {/* <VisibilityOutlinedIcon />{eye} */}
                  <Button className={classes.favbord}>
                    <VisibilityOutlinedIcon/>{item.readCount}
                  </Button>
                  <Button className={classes.favbord}>
                    <CommentOutlinedIcon/>{item.commentCount}
                  </Button>
                  <Button className={classes.favbord} >
                    <ThumbUpAltOutlinedIcon/>{item.likes}
                  </Button>
                  <Button className={classes.favbord}>
                    <ThumbDownAltOutlinedIcon/>{item.dislikes}
                  </Button>
                  
                </CardContent>
                {/* <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions> */}
              </Card>
              </>
               );
             }) : ''
           }
       </>
        
  )
}

export default PostView;

// export default function SimpleCard() {
//   const [likes, setLikes]=useState(0);
//   const [dislikes, setDislikes]=useState(0);
//   const [eye]=useState(0);
//   const [comment]=useState(0);
//   const classes = useStyles();

//   const increaseLikes = () => {
//     setLikes(likes+1);
//   };

//   const increaseDislikes = () => {
//     setDislikes(dislikes+1);
//   };


//   // const bull = <span className={classes.bullet}>•</span>;

//   return (
//     <>
//       <h3 style={{marginLeft: 15}} >최신글</h3>
      // <Card className={classes.root}>
      //   <CardContent>
      //     <Typography className={classes.title} color="textSecondary" gutterBottom>
      //       @종목명 #테마키워드
      //     </Typography>
      //     <Typography variant="h5" component="h2">
      //       제목입력
      //     </Typography>
      //     {/* <Typography className={classes.pos} color="textSecondary">
      //       adjective
      //     </Typography> */}
      //     <Typography variant="body2" component="p">
      //       게시글 내용의 본문이 1줄정도..
      //       {/* <br />
      //       {'"a benevolent smile"'} */}
      //     </Typography>
      //     {/* <Typography className={classes.favbord}> */}
      //       {/* <VisibilityOutlinedIcon />{eye} */}
      //     <Button className={classes.favbord}>
      //       <VisibilityOutlinedIcon/>{eye}
      //     </Button>
      //     <Button className={classes.favbord}>
      //       <CommentOutlinedIcon/>{comment}
      //     </Button>
      //     <Button className={classes.favbord} onClick={increaseLikes}>
      //       <ThumbUpAltOutlinedIcon/>{likes}
      //     </Button>
      //     <Button className={classes.favbord} onClick={increaseDislikes}>
      //       <ThumbDownAltOutlinedIcon/>{dislikes}
      //     </Button>
          
      //   </CardContent>
      //   {/* <CardActions>
      //     <Button size="small">Learn More</Button>
      //   </CardActions> */}
      // </Card>
      // <br/>
//       <Button className={classes.more}>
//         게시글 전체 보기<ChevronRightIcon/>
//       </Button>
//     </>
//   );
// }
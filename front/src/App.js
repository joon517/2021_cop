import { BrowserRouter, Route } from 'react-router-dom';
import PostMain from './page/post/PostMain';
import PostView from './page/post/PostView';
import PostNew from './page/post/PostNew';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/postView/:no' component={PostView} />
        <Route exact path='/' component={PostMain} />
        <Route exact path='/postNew' component={PostNew} />
        {/* TODO 404 페이지 추가해주세용
        <Route exact path='*' component={PostNew} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/navbar/NavbarLogin.js';
import BlogBody from '../src/components/blog-body/BlogBody.js';
import Filtering from '../src/components/filtering/Filtering.js';
import Blog from './components/blog/Blog.js';
import IncorrectLogin from './components/navbar/Incorrect.js';
import CorrectLogin from './components/navbar/Correct.js';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Navbar />
      {/* <Route>
        <Switch>
          <Route Component={Navbar} />
          <Route Component={CorrectLogin} />
          <Route Component={IncorrectLogin} />
        </Switch>
      </Route> */}
      {/* <IncorrectLogin /> */}
      {/* <CorrectLogin /> */}
      <BlogBody />
      <Filtering />
      <Blog />
      <header className='App-header'></header>
    </div>
  );
}
export default App;

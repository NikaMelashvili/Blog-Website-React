import './App.css';
import Navbar from '../src/components/navbar/Navbar.js';
import BlogBody from '../src/components/blog-body/BlogBody.js';
import Filtering from '../src/components/filtering/Filtering.js';
import Blog from './components/blog/Blog.js';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <BlogBody />
      <Filtering />
      <Blog />
      <header className='App-header'></header>
    </div>
  );
}
export default App;

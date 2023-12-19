import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import BlogBody from './BlogBody';
import Filtering from './Filtering';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <BlogBody />
      <Filtering />
      <header className='App-header'></header>
    </div>
  );
}
export default App;

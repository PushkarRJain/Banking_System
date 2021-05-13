import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Content from './components/home';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

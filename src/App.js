import './App.css';
import Home from './component/Home';
import { ProductProvider } from './context/ProductContext';
import Navbar from './component/Navbar'

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </ProductProvider>
  );
}

export default App;

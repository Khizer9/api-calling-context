import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <Home />
      </div>
    </ProductProvider>
  );
}

export default App;

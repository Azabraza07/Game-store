import { Routes, Route, } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux'
import HomePage from './pages/HomePage/HomePage'
import OrderPage from './pages/OrderPage/OrderPage'
import GamePage from './pages/GamePage/GamePage'
import Header from './components/Header/Header';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/order" element={<OrderPage />} />
          <Route path="/app/:title" element={<GamePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Provider>


  );
}

export default App;

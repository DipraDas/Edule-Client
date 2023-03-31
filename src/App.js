import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';
import 'animate.css';

function App() {
  return (

    <div className='app'>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </div>

  );
}

export default App;

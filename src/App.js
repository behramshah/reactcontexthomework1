import { Routes, Route } from 'react-router-dom';
import HomePage from './routes/Home';
import Navbar from './routes/Navbar';
import AddTodo from './routes/AddTodo';
import Complated from './routes/Completed';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index path='/' element={<HomePage/>}/>
        <Route index path='/add' element={<AddTodo/>}/>
        <Route index path='/completed' element={<Complated/>}/>
      </Route>
    </Routes>
  );
}

export default App;

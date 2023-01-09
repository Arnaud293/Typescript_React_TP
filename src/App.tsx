
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Main</h1>} />
        <Route path='/:id' element={<h2>Details</h2>} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

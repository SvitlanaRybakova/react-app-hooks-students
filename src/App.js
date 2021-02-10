import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import StudentContextProvider from './contexts/StudentContext';
import About from './pages/About';
import Home from './pages/Home';
import StudentForm from './pages/StudentForm';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* ОБВОРАЧИВАЮ компоненты еще одним, что бы у них был доступ к данным */}
        <StudentContextProvider>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/add-student' component={StudentForm} />
        </StudentContextProvider>

      </Router>
    </div>
  );
}

export default App;

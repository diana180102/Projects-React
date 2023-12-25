import './App.css';
import Testimonio from './components/Testimonio';
import testimonio from './models/testimonios.js';

function App() {
  return (
    <div className="App">
        <div className='container-main'>
          <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
            {testimonio.map((testimonio, index) =>(
              <Testimonio id = {index}
                name= {testimonio.name}
                country = {testimonio.country}
                image= {testimonio.image}
                alt = {testimonio.alt}
                work= {testimonio.work}
                company={testimonio.company}
                testimonio = {testimonio.testimonio} />
          ))}


         
          
        </div>
    </div>
  );
}

export default App;

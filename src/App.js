
import './App.css';
import "./Assets/App.scss"

function App() {
  return (
    <div className='container'> 
      <div className='header'> Header </div>
      <div className='section'>
        <div className='Card Section-body-1'>1</div>
        <div className='Card Section-body-2'>2</div>
        <div className='Card Section-body-3'>3</div>
        <div className='Card Section-body-4'>4</div>
        <div className='Card Section-body-5'>5</div>
        <div className='Card Section-body-6'>6</div>
      </div>
      <div className='content'>
        <div className='Body-1'> Isi </div>
        <div className='Body-2'>
          <div className='Baris-2 Body1'> Isi 1 </div>
          <div className='Baris-2 Body2'> Isi 2 </div>
        </div>
        <div className='Body-4'>
          <div className='Baris-4 Body-Baris-1'> Isi 1 </div>
          <div className='Baris-4 Body-Baris-2'> Isi 2 </div>
          <div className='Baris-4 Body-Baris-3'> Isi 3 </div>
          <div className='Baris-4 Body-Baris-4'> Isi 4 </div>
        </div>
      </div>
      <div className='footer'> Footer </div>
    </div>
  );
}

export default App;

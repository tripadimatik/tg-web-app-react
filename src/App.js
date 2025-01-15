import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

function App() {

  useEffect(() =>{
    tg.ready();
  }, [])

  const onClose = () => {
    tg.Close()
  }
  return (
    <div className="App">
      workdasdasd
        <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;

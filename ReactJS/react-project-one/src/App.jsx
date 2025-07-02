import './App.css';
import UserCard from './components/UserCard';
import './components/UserCard.css';


import me from './assets/me.jpg';
import iron from './assets/iron-man.webp';
import venom from './assets/venom.webp';



function App() {
  return (
    <div className='container'>
      <UserCard name='Abhi Mistry' image={me} />
      <UserCard name='Iron Man' image={iron} />
      <UserCard name='Venom' image={venom} />
    </div>
  );
}

export default App;

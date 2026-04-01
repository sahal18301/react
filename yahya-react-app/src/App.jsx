import './App.css';
import TextInput from './components/TextInput';
import ThemeSwitcher from './components/ThemeSwitcher';
import Userlist from './components/Userlist';
import Login from './components/Login';
import Header from './components/Header';
import Clicker from './components/Clicker';
import Greetings from './components/Greetings';
import Inputer from './components/Inputer';
import Counter from './components/Counter';
import Dashboard from './components/Dashboard';
import Notification from './components/Notification';
import Uncontrolled from './components/Uncontrolled';
function App() {
  return (
    <>
      <TextInput />
      <ThemeSwitcher />
      <Userlist />
      <Login isLoggedIn={false} />
      <Header />
      <Clicker />
      <Greetings name="Yahya" surname="Mohamed" />
      <Inputer />
      <Counter />
      <Dashboard />
      <Notification />
      <Uncontrolled />
    </>
  );
}

export default App

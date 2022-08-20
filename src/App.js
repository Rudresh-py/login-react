import logo from './logo.svg';
import './App.css';
import profile from "./images/a.png";
import email from "./images/email.jpg";
import pass from "./images/pass.png";


function App() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className='imgs'>
            <div className='container-image'>
              <img src={profile} alt="profile" className='profile' />

            </div>
          </div>
          <div>
          <h1>Login page</h1>
          <div>
          <img src={email} alt="email" className='email' />
          <input type="text" placeholder='user name' className='name'/>
          </div>
          <div className='second-input'>
          <img src={pass} alt="pass" className='email' />
          <input type="password" placeholder='user name' className='name'/>
          </div>
          <div className='login-button'>
          <button>Login</button>
          </div>
          <div>
            <p className='link'>
              <a href='#'>Forget password ?</a> or <a href='#'>Sign Up</a>
            </p>
          </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;

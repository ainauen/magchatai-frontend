import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import ChatAI from './pages/chatai/ChatAI';
import {AuthenticatedTemplate, UnauthenticatedTemplate} from "@azure/msal-react";
import { SignOutButton } from './components/SignOutButton';
import { SignInButton } from './components/SignInButton';


function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <UnauthenticatedTemplate>
        <BrowserRouter>
          <div className='header-row'>
            <div className='headerNew'>
              
              <NavLink to="/">Home</NavLink>
              <SignInButton/>
              {/* <NavLink to="/login">login</NavLink> */}
              

         
              {/* <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/chatai">chatai</NavLink> */}
              
             
              
              
            </div>
          </div>
          <div className='content-row'>
            <div className='contentNew'>
              <Routes>
                <Route path='/'  Component={Home} />
                <Route path='/login' Component={Login} />
                {/* <Route path='/dashboard' Component={Dashboard} />
                <Route path='/chatai' Component={ChatAI} /> */}
              </Routes>
            </div>
          </div>
          <div className='footer-row'>
            <div className='footerNew'>
              <NavLink to="/">Privacy Policy</NavLink>
              <NavLink to="/dashboard">Terms and Conditions</NavLink>
            </div>
          </div>
        </BrowserRouter>
        </UnauthenticatedTemplate>

        <AuthenticatedTemplate>
        <BrowserRouter>
          <div className='header-row'>
            <div className='headerNew'>
              
              <NavLink to="/">Home</NavLink>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/chatai">AI Interface</NavLink>     
              <SignOutButton />         
              
            </div>
          </div>
          <div className='content-row'>
            <div className='contentNew'>
              <Routes>
                <Route path='/'  Component={Home} />
                <Route path='/dashboard' Component={Dashboard} />
                <Route path='/chatai' Component={ChatAI} />
              </Routes>
            </div>
          </div>
          <div className='footer-row'>
            <div className='footerNew'>
              <NavLink to="/">Privacy Policy</NavLink>
              <NavLink to="/dashboard">Terms and Conditions</NavLink>
            </div>
          </div>
        </BrowserRouter>
        </AuthenticatedTemplate>
      </div>
      {/* <BrowserRouter>
        <div className='header'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/chatai">chatai</NavLink>
          <NavLink to="/login">login</NavLink>

        </div>
        <div className='content'>
        
          <Routes>
            <Route path='/'  Component={Home} />
            <Route path='/login' Component={Login} />
            <Route path='/dashboard' Component={Dashboard} />
            <Route path='/chatai' Component={ChatAI} />
          </Routes>
        
        </div>
        <div className='footerCustom'>
          <NavLink to="/">Privacy Policy</NavLink>
          <NavLink to="/dashboard">Terms and Conditions</NavLink>
        </div>
      </BrowserRouter> */}
    </div>

  );
}

export default App;

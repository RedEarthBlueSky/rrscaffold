import React from 'react';
import './Toolbar.css';

const Toolbar = props => (
  <header className='toolbar'>
    <nav className='toolbar_navigation'>
      <div className='toolbar_logo'><a href='/'>The Logo</a></div>
      <div>This toolbar is a from scratch build!</div>
      <div className='toolbar_navigatin-items'>
        <ul>
          <li><a href='/'>Main Page</a></li>
          <li><a href='/'>Lists</a>
            <ul>
              <li><a href='/'>Swift List</a></li>
              <li><a href='/'>Other Lists</a>
                <ul>
                  <li><a href='/'>This List</a></li>
                <li><a href='/'>That List</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href='/'>Page C</a></li>
          <li><a href='/'>Page D</a></li>
          <li><a href='/'>Page E</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;

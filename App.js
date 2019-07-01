import React, { Component } from 'react';
import Classic from '../views/Classic/Classic';
import LrRadio from '../views/LrRadio/LrRadio';
import Opus from '../views/Opus/Opus';
import World from '../views/World/World';
import LtvOne from '../views/LtvOne/Ltv1';
import LtvTwo from '../views/LtvTwo/Ltv2';

class App extends Component
{
  render()
  {
    return (
      <div>
        <h1 className='tc'>LRT</h1>
          <div className='flex'>
            <Classic />
            {/* <LrRadio />
            <Opus />
            <World />
            <Ltv1 /> */}
            {/* <Ltv2 /> */}
          </div>
      </div>
    );
  }
}

export default App;

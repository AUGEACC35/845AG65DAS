import React, { Component } from 'react';
import CardList from '../../components/CardList';

import WorldService from '../../services/WorldService';
const worldService = new WorldService();

class World extends Component
{
  constructor()
  {
    super();
    this.state =
    {
      data: []
    }
  }

  loadData  = () =>
  {
    worldService.getWorld()
      .then(response =>
        {
        this.setState({ data: response.data.tvprog });
        }
      )
      .catch(err => console.log(err));
  }

  componentDidMount()
  {
    this.loadData();
  }

  render()
  {
    let data = this.state.data;
    return (
      <div className='bg-light-blue br3 pa3 ma2 dib v-top ba bw2'>
      <div className='pa2 f2 lh-title tc'>
        { Object(data[0]).channel }
      </div>
        <CardList
          data={data}/>
      </div>
    );
  }
}

export default World;

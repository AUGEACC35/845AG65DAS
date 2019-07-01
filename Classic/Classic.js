import React, { Component } from 'react';
import ClassicService from '../../services/ClassicService';
import CardList from '../../components/CardList';
import { Card } from 'react-bootstrap';

const classicService = new ClassicService();

class Classic extends Component {
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
    classicService.getClassic()
      .then(response => 
        {
          this.setState({ data: response.data.tvprog });
        }
      )
      .catch(err => console.log(err));
  }

  componentDidMount()
  { // auto hook
    this.loadData(); 
  }

  render()
  {
    let data = this.state.data;
    return (
      <Card>
        <Card.Body>
            <div>
              { Object(data[0]).channel }
            </div>
              <CardList
                data={data}/>
        </Card.Body>
      </Card>
    );
  }
}

export default Classic;

import React, { Component } from 'react';
import { Country } from './Country';
import { Thumb } from '../thumbs/Thumb';
import { Clock } from './Clock';
import thumbSrc from '../thumb.png';
import { DatePicker, Carousel, Row, Col, AutoComplete, Spin } from 'antd';
import {decisions} from '../../customer-specific/Decisions';

export class Countries extends Component {
  state = {
    autocompleteLoaded: false
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({ autocompleteLoaded: true });
    }, 1000);
  }

  renderCities(country) {
    return (
      country.getCities().map((city, idx) => <li key={idx}>{city}</li>)
    );
  }

  render() {
    const dataSource = ['Roma', 'Bari', 'Ancona'];
    const italy = new Country('italy', dataSource);
    const thumbs = [
      {
        src: thumbSrc,
        title: 'Ancona'
      },
      {
        src: thumbSrc,
        title: 'Bari'
      }
    ]

    const imageSrcs = decisions.get('LARGE_IMAGES', []);

    return (
      <div>
        <h1>{italy.getName()}</h1>
        <ul style={{ width: 200, margin: '0 auto' }}>
          {this.renderCities(italy)}
        </ul>
        Date of trip: <DatePicker format="DD.MM.YYYY"/>
        <Row style={{marginTop: '0.2em'}}>
          <Col span={6}></Col>
          <Col span={12}>
            <Carousel afterChange={()=>{}}>
              {
                imageSrcs.map((src, idx) => <img src={src} alt="large" style={{height: '360px'}} key={idx}/>)
              }
            </Carousel>
          </Col>
          <Col span={6}></Col>
        </Row>

        <div style={{ marginTop: '0.4em'}}>
          {
            this.state.autocompleteLoaded ?

            <AutoComplete
              dataSource={dataSource}
              style={{ width: 200 }}
              onSelect={()=>{}}
              onSearch={()=>{}}
              filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
              placeholder="input here"
            />
            :
            <Spin/>
          }
        </div>
        
        <div>
          <div>
            <span style={{ marginRight : '4em'}}>Likes: 21</span>
            <span style={{ marginRight : '4em'}}>Dislikes: 0</span>
            <span style={{ marginRight : '4em'}}>Views: 700</span>
            <span><a href='#author'>Talk to author</a></span>
            <Clock/>
          </div>
        </div>
        
        <div>
          { thumbs.map((thumb, idx) => <Thumb key={idx} src={thumb.src} title={thumb.title}/>)}
        </div>
        { this.props.footer }
      </div>
    );
  }
}
import React from 'react';
import ReactDOM from 'react-dom';
import { ContactDetails, ContactList } from './components/ContactDetails';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('<ContactDetails />', () => {
  let wrapper;
  const props = {
    actions: () => { },
    records: [
      {

        "firstName": "Liana",
        "lastName": "Crooks"


      }
    ]
    // records:[{"firstName":'Akshay'},{"lastName":'Kharche'},{"title":'Software'}]
  };
  it('for Grid component', () => {
    wrapper = shallow(<ContactDetails {...props} />);
    expect(wrapper.find('Grid').length).toBe(1);
  })
  it('calls componentDidMount', () => {
    sinon.spy(ContactDetails.prototype, 'componentDidMount');
    expect(ContactDetails.prototype.componentDidMount.calledOnce).toEqual(false);
  });
  it('for Row component', () => {
    expect(wrapper.find('Row').length).toBe(1);
  })
  it('SearchDetails component', () => {
    expect(wrapper.find('SearchDetails').length).toBe(1);
  })
  // it('for Input tag', () => {
  //   expect(wrapper.find('input').props().type).toEqual('text');
  //   expect(wrapper.find('input').props().placeholder).toEqual('Search');
  //   expect(wrapper.find('input').props().className).toEqual('search-textbox')
  // })
  
  // it('simulates onChange events', () => {
  //   const onChange = sinon.spy();
  //   const event = { target: { value: "value" }};
  //   wrapper.find('input').simulate('change',event);
  //   expect(onChange.calledOnce).toEqual(true);
  // });

})
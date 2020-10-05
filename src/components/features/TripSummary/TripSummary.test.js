import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => { 
  it('should render correct link', () => { // Test sprawdzający, czy generowany jest ink do poprawnego adresu
    const expectedLink = '/trip/abc';
    const component = shallow(<TripSummary id='abc' image='' name='' cost='' days={1} />);
    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('should render correct image', () => { // Test sprawdzający, czy czy <img> ma poprawne src i alt
    const expectedImg = 'image.jpg';
    const expectedAltImg = 'altImage';
    const component = shallow(<TripSummary image={expectedImg} name={expectedAltImg} id='' cost='' days={1} />);
    const renderImg = component.find('img');
    expect(renderImg.prop('src')).toEqual(expectedImg);
  });

  it('should render proper props: name, cost, days', () => { // Test sprawdzający, czy czy poprawnie renderują się propsy name, cost i days
    const expectedName = 'name Test';
    const expectedCost = '10';
    const expectedDays = 2;
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} id='' image='' />);
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details').text()).toEqual(`${expectedDays} days from ${expectedCost}`);
  });

  it('should throw error without required props', () => { // Test sprawdzający, czy czy jest wywoływany błąd w przypadku braku któregokolwiek z propsów
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render correct tags', () => { // Test sprawdzjący, czy stworzone tu i przkazzane 3 tagi są renderowane w spanach w odpowiedniej kolejności
    const expectedTags = ['tag1', 'tag2', 'tag3'];
    const component = shallow(<TripSummary tags={expectedTags} id='' image='' name='' cost='' days={1} />);
    expect(component.find('.tags span').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedTags[2]);
  });

  it('should not render tags section', () => { // Test sprawdzjący, czy div z klasą tags nie jest renderowany
    expect(shallow(<TripSummary tags={[]} id='' image='' name='' cost='' days={1}/>).hasClass('tags')).toBe(false);
    expect(shallow(<TripSummary id='' image='' name='' cost='' days={1}/>).hasClass('tags')).toBe(false);
  });
});
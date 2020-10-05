import React from 'react';
import {shallow} from 'enzyme';
import Hero from './Hero';

describe('Component Hero', () => {
  it('should render without crashing', () => { // Test sprawdzający, czy Hero ma tekst w tytule
    const component = shallow(<Hero titleText='Lorem ipsum' imageSrc='test' />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });

  it('should throw error without required props', () => { // Test sprawdzający, czy Hero nie ma tekstu w tytule
    expect(() => shallow(<Hero />)).toThrow();
  });

  it('should render correct title and image', () => { // Test sprawdzający, czy tekst tytułu oraz zdjęcie są wyświetlane na stronie
    const expectedTitle = 'Lorem ipsum';
    const expectedImage = 'image.jpg';
    const component = shallow(<Hero titleText={expectedTitle} imageSrc={expectedImage} />);
  
    const renderedTitle = component.find('.title').text();
    expect(renderedTitle).toEqual(expectedTitle);
    expect(component.find('.image').prop('src')).toEqual(expectedImage);
  });

  it('renders correct classNames', () => { // Test sprawdzający, czy nasz wyrenderowany wrapper komponentu otrzymuje poprawne klasy, w zależności od propsa variant
    const mockVariants = 'small dummy';
    const component = shallow(<Hero titleText='Lorem' imageSrc='image.jpg' variant={mockVariants} />);
    expect(component.hasClass('component')).toBe(true);
    expect(component.hasClass('small')).toBe(true);
    expect(component.hasClass('dummy')).toBe(true);
  });
});
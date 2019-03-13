import React from 'react';
import { mount } from 'enzyme';
import Test1 from './Test1';

// Not using Juanlu's library

describe('Test1', () => {
    const myMockFunction = jest.fn();
    let props = {
        updateTextAction: myMockFunction,
        text: ''
    }

    it('should render correctly', () => {
        const component = mount(<Test1 {...props} />);
        expect(component).toBeTruthy();
    });

    it('it has a basic structure', () => {
        const component = mount(<Test1 {...props} />);
        expect(component.find('h1').length).toBe(1);
        expect(component.find('h2').length).toBe(3);
    });

});
import React from 'react';
import Header from '../../components/Header';
import { shallow } from 'enzyme';
import "../setupTests";
//shallow rendering only looks at the given component and renders that
//(unlike full DOM (document object model) rendering, which would render
//child components etc). FYI, DOM is how the code gets rendered: 
//https://www.w3.org/TR/WD-DOM/introduction.html

test('Should render header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();

    //expect(wrapper.find('h1').text()).toBe('Expensify');
//https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/text.html for info

    //const renderer = new ReactShallowRenderer();
    //renderer.render(<Header />);
    //expect(renderer.getRenderOutput()).toMatchSnapshot();
    //console.log(renderer.getRenderOutput());
    //this renders the component to the cmd - in this case showing that the type
    //is header and that there are four children in it (h1 and 3x navlinks)
});


 
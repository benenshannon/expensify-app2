import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//more info on enzyme here https://enzymejs.github.io/enzyme/

Enzyme.configure({
    adapter: new Adapter()
});
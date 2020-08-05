import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from '../../components/userComponent/signin'
import {shallow} from 'enzyme';

describe('Test SignIn component', () => {
    const home = shallow(<SignIn/>)

    it('Render home component', () => {
        const div = document.createElement("div");
        ReactDOM.render(<Home/>, div);
    });

    it('has two classes', () => {
        expect(home.hasClass('container')).toBe(true);
        expect(home.hasClass('wrapper')).toBe(true);
    });

    it('contains a text', () => {
        const blockText = home.find('p')
        expect(blockText.text()).toEqual('Connectez-vous pour avoir accés aux sets');
    });
});

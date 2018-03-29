import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import Link from './test/Link.react';
//import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

/*
it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDom.render(<App />, div);
});*/
/*
function MyComponent() {
    return (
        <div>
            <span className="heading">Title</span>
            <Subcomponent foo="bar" />
        </div>
    );
}
// in your test:
const renderer = new ShallowRenderer();
renderer.render(<MyComponent />);
const result = renderer.getRenderOutput();

expect(result.type).toBe('div');
expect(result.props.children).toEqual([
    <span className="heading">Title</span>,
    <Subcomponent foo="bar" />
]);
*/

/*
function Link(props) {
    return <a href={props.page}>{props.children}</a>;
}
const testRenderer = renderer.create(
    <Link page="https://www.facebook.com/">Facebook</Link>
);

console.log(testRenderer.toJSON());
/*
test('Link changes the class when hovered', () => {
    const component = renderer.create(
        <Link page="http://www.facebook.com">Facebook</Link>,
    );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // manually trigger the callback
        tree.props.onMouseEnter();
        // re-rendering
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // manually trigger the callback
        tree.props.onMouseLeave();
        // re-rendering
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
});*/
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ReactDOM from 'react-dom';
//import { shallowToJson } from 'enzyme-to-json';
import Link from './Link';
import 'mocha';
import { describe, it } from 'mocha';
import renderer from 'react-test-renderer';
import { render } from 'enzyme';
import { Provider } from 'react-redux';
import toJson from 'enzyme-to-json';
import configureStore from '../../src/models/store';

describe('Link', () => {
    it('should render correctly', () => {
        const output = render(
            <Provider>
            <Link title="mockTitle" url="mockUrl" />
            </Provider>
        );

        const tree = renderer.create(output).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
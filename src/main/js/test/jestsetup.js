/**
 * Created by user on 3/29/18.
 */
import { shallow, render, mount } from 'enzyme';
global.shallow = shallow;
global.render = render;
global.mount = mount;
// Обрушим тест при любой ошибке
console.error = message => {
    throw new Error(message);
};
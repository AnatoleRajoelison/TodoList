import React from 'react';
import { shallow } from 'enzyme';
import TodoForms from './TodoForms';

describe('TodoForms', () => {
it('renders without crashing', () => {
shallow(<TodoForms />);
});

it('adds a new task', () => {
const wrapper = shallow(<TodoForms />);
const input = wrapper.find('input[placeholder="Nouvelle tâche"]');
const button = wrapper.find('button[type="submit"]');
});

it('marks a task as done', () => {
const wrapper = shallow(<TodoForms />);
const input = wrapper.find('input[placeholder="Nouvelle tâche"]');
const addButton = wrapper.find('button[type="submit"]');
const checkbox = wrapper.findWhere(el => el.props().value === 'Faire les courses');
});
});
import React from 'react';
import {ConditionalsList, NewConditionalButton, NewGroupName} from "../../../form-builder/components/Conditionals";
import testForm from './test-form';
import renderer from 'react-test-renderer';


describe('Conditionals', () => {
    it('Renders list', () => {
        const component = renderer.create(
            <ConditionalsList
                conditionals={Object.values(testForm.conditional_groups.conditions)}
                strings={{'new-conditional': 'New Conditional'}}
            />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('Renders new conditional button', () => {
        const component = renderer.create(
            <NewConditionalButton
                text={'New'}
                onClick={jest.fn()}
            />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

});
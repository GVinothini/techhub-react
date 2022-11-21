import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import App from "./App";

jest.mock('react-redux', () => ({
    connect: (mapStateToProps, mapDispatchToProps) => (reactComponent) => ({
        mapStateToProps,
        mapDispatchToProps: (dispatch = jest.fn((action) => action), ownProps) => mapDispatchToProps(dispatch, ownProps),
        reactComponent,
        mockDispatch: jest.fn((action) => action)
    })
}));

jest.mock('./UserTableWithDelete', () => () => <div>Table</div>);

describe('App', () => {
    const mockProps = {
        userList: [ 'test-user1', 'test-user2'],
        addNewUsername: jest.fn()
    };
    it('should render app', () => {
       const { container } = render(<App.reactComponent {...mockProps} />);
       expect(container).toMatchSnapshot();
    });

    it('should call addNewUsername while click save button', () => {
        render(<App.reactComponent {...mockProps} />);
        fireEvent.click(screen.getByRole('button', { name: 'Save' }));
        expect(mockProps.addNewUsername).toBeCalled();
    });

    it('should call mapStateToProps', () => {
        const mockState = { userList: [ 'test-user1', 'test-user2'] };
        const ownProps = { buttonTheme: 'button-theme'};
        const result = App.mapStateToProps(mockState, ownProps);
        expect(result).toEqual({
            userList: mockState.userList,
            buttonTheme: ownProps.buttonTheme
        });
    });

    it('should call mapDispatchToProps', () => {
        const dispatch = jest.fn();
        const result = App.mapDispatchToProps(dispatch);
        result.addNewUsername();
        result.deleteUser();
    });
});

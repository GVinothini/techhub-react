import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import UserTable from "./UserTableWithDelete";

global.alert = jest.fn();

describe('UserTable', () => {
    const mockProps = {
        userList: [ 'test1', 'test2'],
        deleteUser: jest.fn()
    };

    it('should render UserTable', () => {
       const { container } = render(<UserTable {...mockProps} />);
       expect(container).toMatchSnapshot();
    });

    it('should call deleteUser while click save button', () => {
        render(<UserTable {...mockProps} />);
        const [firstDeleteButton] = screen.getAllByText('Delete');

        // Fires the Click event to verify the alert when the row is in 'ReadOnly' mode.
        fireEvent.click(firstDeleteButton);
        expect(global.alert).toBeCalled();

        // Getting 'Make ReadWrite' button Element from first row(user).
        // Fires the click event to change the button text to 'Make ReadOnly'
        const [firstButton] = screen.getAllByText('Make ReadWrite');
        fireEvent.click(firstButton);

        // Getting 'Make ReadOnly' button Element from first row(user).
        // Verifying the button text is changed successfully.
        const [changedButton] = screen.getAllByText('Make ReadOnly');
        expect(changedButton).toBeInTheDocument();

        // Fires the Click event to delete the user when the row is in 'ReadWrite' mode.
        fireEvent.click(firstDeleteButton);
        expect(mockProps.deleteUser).toBeCalled();
        
    });
    
});

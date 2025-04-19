import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./Header";

jest.mock('react-router-dom', () => {
    const actual = jest.requireActual('react-router-dom');
    const React = require('react');

    return {
        ...actual,
        Link: React.forwardRef(({ children, ...props }, ref) => (
            <a ref={ref} {...props}>
                {children}
            </a>
        )),
    };
});


describe('Header Component', () => {
    const renderHeader = (props = {}) => {
        const defaultProps = {
            isSignedIn: false,
            onSignOut: jest.fn(),
        };
        return render(
            <Router>
                <Header {...defaultProps} {...props} />
            </Router>
        );
    };

    it('shows "Login" when not signed in', () => {
        renderHeader({ isSignedIn: false });
        expect(screen.getByText(/login/i)).toBeInTheDocument();
    });

    it('shows "Logout" when signed in', () => {
        renderHeader({ isSignedIn: true });
        expect(screen.getByText(/logout/i)).toBeInTheDocument();
    });

    it('calls onSignOut when clicking "Logout"', () => {
        const handleSignOut = jest.fn();
        renderHeader({ isSignedIn: true, onSignOut: handleSignOut });
        fireEvent.click(screen.getByText(/logout/i));
        expect(handleSignOut).toHaveBeenCalled();
    });
});
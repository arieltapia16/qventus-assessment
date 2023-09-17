import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import PasswordValidator from './PasswordValidator';

describe('PasswordValidator', () => {
  it('renders without errors', () => {
    render(<PasswordValidator options={[]} customStyle={{}} />);
    const headerElement = screen.getByText('Password Component');
    expect(headerElement).toBeInTheDocument();
  });

  it('displays "Password is required" error when no password is provided', () => {
    render(<PasswordValidator options={[]} customStyle={{}} />);
    const inputElement = screen.getByPlaceholderText('Enter your password');
    fireEvent.change(inputElement, { target: { value: 'f' } });
    fireEvent.change(inputElement, { target: { value: '' } });

    const errorElements = screen.getAllByTestId('error-message');

    expect(errorElements.some(element => element.textContent === 'Password is required')).toBe(true);
  });

  it('displays "Must have a number (0-9)" error when options include "number" and password lacks a number', () => {
    render(<PasswordValidator options={['number']} customStyle={{}} />);
    const inputElement = screen.getByPlaceholderText('Enter your password');
    fireEvent.change(inputElement, { target: { value: 'PasswordWithoutNumber' } });

    const errorElements = screen.getAllByTestId('error-message');

    expect(errorElements.some(element => element.textContent === 'Must have a number (0-9)')).toBe(true);
  });

  it('displays no errors when all validation rules are satisfied', () => {
    render(
      <PasswordValidator
        options={['number', 'specialChar', 'uppercaseLetter', 'noConsecutiveLetters']}
        customStyle={{}}
      />
    );
    const inputElement = screen.getByPlaceholderText('Enter your password');
    fireEvent.change(inputElement, { target: { value: 'ValidPassword123!' } });

    expect(screen.queryAllByTestId('error-element')).toHaveLength(0);
  });
});

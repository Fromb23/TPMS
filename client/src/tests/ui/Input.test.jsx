import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '@/components/ui/Input/Input';
import { describe, it, expect, vi } from 'vitest';

describe('Input', () => {
  describe('Rendering', () => {
    it('should render without label when not provided', () => {
      render(<Input name="test" />);
      expect(screen.queryByRole('label')).not.toBeInTheDocument();
    });

    it('should render with label when provided', () => {
      render(<Input name="test" label="Test Label" />);
      expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    });

    it('should render with placeholder when provided', () => {
      render(<Input name="test" placeholder="Enter text" />);
      expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    });

    it('should render left icon when provided', () => {
      render(<Input name="test" leftIcon={<span data-testid="left-icon" />} />);
      expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    });

    it('should apply correct padding when left icon is present', () => {
      render(<Input name="test" leftIcon={<span />} />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveClass('pl-10');
    });

    it('should apply default padding when no left icon', () => {
      render(<Input name="test" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveClass('px-4');
    });
  });

  describe('Error states', () => {
    it('should show error message when error is provided', () => {
      render(<Input name="test" error="Invalid input" />);
      expect(screen.getByText('Invalid input')).toBeInTheDocument();
    });

    it('should apply error border style when error is present', () => {
      render(<Input name="test" error="Error" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveClass('border-red-500');
    });

    it('should not show error message when no error is provided', () => {
      render(<Input name="test" />);
      expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
    });
  });

  describe('User Interaction', () => {
    it('should focus on input when clicked', async () => {
      render(<Input name="test" />);
      const input = screen.getByRole('textbox');
      await userEvent.click(input);
      expect(input).toHaveFocus();
    });

    it('should accept user input', async () => {
      render(<Input name="test" />);
      const input = screen.getByRole('textbox');
      await userEvent.type(input, 'Hello World');
      expect(input).toHaveValue('Hello World');
    });
  });

  describe('Accessibility', () => {
    it('should associate label with input', () => {
      render(<Input name="test" label="Test Label" />);
      const input = screen.getByLabelText('Test Label');
      expect(input).toHaveAttribute('id', 'test');
    });

    it('should forward ref to input element', () => {
      const ref = vi.fn();
      render(<Input name="test" ref={ref} />);
      expect(ref).toHaveBeenCalled();
      expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLInputElement);
    });
  });

  describe('Props', () => {
    it('should apply custom className when provided', () => {
      render(<Input name="test" className="custom-class" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveClass('custom-class');
    });

    it('should set default type to text', () => {
      render(<Input name="test" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('type', 'text');
    });

    it('should set custom type when provided', () => {
      render(<Input name="test" type="email" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('type', 'email');
    });
  });
});
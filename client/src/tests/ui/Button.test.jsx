import { render, screen, fireEvent } from '@testing-library/react';
import Button from '@/components/ui/Button/Button';

describe('Button', () => {
  describe('Rendering', () => {
    it('should render with provided text', () => {
      render(<Button>Submit</Button>);
      const button = screen.getByRole('button', { name: 'Submit' });
      
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('Submit');
    });

    it('should render icon when provided', () => {
      render(<Button icon={<span data-testid="icon" />}>Click</Button>);
      expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    it('should apply fullWidth class when fullWidth is true', () => {
      render(<Button fullWidth>Full</Button>);
      expect(screen.getByRole('button')).toHaveClass('w-full');
    });

    it('should not apply fullWidth class when fullWidth is false', () => {
      render(<Button fullWidth={false}>Compact</Button>);
      expect(screen.getByRole('button')).not.toHaveClass('w-full');
    });

    it('should use the correct type attribute', () => {
      render(<Button type="submit">Submit</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });
  });

  describe('Loading and disabled states', () => {
    it('should show loading text when loading is true', () => {
      render(<Button loading>Click</Button>);
      expect(screen.getByText('Processing...')).toBeInTheDocument();
    });

    it('should be disabled when loading is true', () => {
      render(<Button loading>Click</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('should be disabled when disabled prop is true', () => {
      render(<Button disabled>Click</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
    });
  });

  describe('Styling', () => {
    it('should apply correct variant classes', () => {
      render(<Button variant="danger">Delete</Button>);
      expect(screen.getByRole('button')).toHaveClass('bg-red-600');
    });
  });

  describe('User Interaction', () => {
    it('should call onClick when clicked', () => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Click Me</Button>);
      
      fireEvent.click(screen.getByRole('button', { name: 'Click Me' }));
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from '@/components/ui/Select/Select';
import { describe, it, expect, vi } from 'vitest';

describe('Select', () => {
  const mockOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];

  describe('Rendering', () => {
    it('should render without label when not provided', () => {
      render(<Select name="test" options={mockOptions} />);
      expect(screen.queryByRole('label')).not.toBeInTheDocument();
    });

    it('should render with label when provided', () => {
      render(<Select name="test" label="Test Label" options={mockOptions} />);
      expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    });

    it('should render default "Select an option" as first option', () => {
      render(<Select name="test" options={mockOptions} />);
      expect(screen.getByRole('option', { name: 'Select an option' })).toBeInTheDocument();
    });

    it('should render all provided options', () => {
      render(<Select name="test" options={mockOptions} />);
      expect(screen.getAllByRole('option')).toHaveLength(mockOptions.length + 1); // +1 for default option
    });

    it('should apply full width class when fullWidth is true', () => {
      render(<Select name="test" options={mockOptions} fullWidth />);
      expect(screen.getByRole('combobox')).toHaveClass('w-full');
    });

    it('should not apply full width class when fullWidth is false', () => {
      render(<Select name="test" options={mockOptions} fullWidth={false} />);
      expect(screen.getByRole('combobox')).not.toHaveClass('w-full');
    });
  });

  describe('Error states', () => {
    it('should show error message when error is provided', () => {
      render(<Select name="test" options={mockOptions} error="Invalid selection" />);
      expect(screen.getByText('Invalid selection')).toBeInTheDocument();
    });

    it('should apply error border style when error is present', () => {
      render(<Select name="test" options={mockOptions} error="Error" />);
      expect(screen.getByRole('combobox')).toHaveClass('border-red-500');
    });

    it('should not show error message when no error is provided', () => {
      render(<Select name="test" options={mockOptions} />);
      expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
    });
  });

  describe('User Interaction', () => {
    it('should call onChange when selection changes', async () => {
      const mockOnChange = vi.fn();
      render(<Select name="test" options={mockOptions} onChange={mockOnChange} />);
      
      await userEvent.selectOptions(
        screen.getByRole('combobox'),
        screen.getByRole('option', { name: 'Option 1' })
      );
      
      expect(mockOnChange).toHaveBeenCalledTimes(1);
    });

    it('should update selected value when changed', async () => {
      let value = '';
      const handleChange = (e) => { value = e.target.value; };
      
      render(
        <Select 
          name="test" 
          options={mockOptions} 
          onChange={handleChange} 
          value={value}
        />
      );
      
      await userEvent.selectOptions(
        screen.getByRole('combobox'),
        screen.getByRole('option', { name: 'Option 2' })
      );
      
      expect(value).toBe('option2');
    });
  });

  describe('Accessibility', () => {
    it('should associate label with select element', () => {
      render(<Select name="test" label="Test Label" options={mockOptions} />);
      const select = screen.getByLabelText('Test Label');
      expect(select).toHaveAttribute('id', 'test');
    });
  });

  describe('Props', () => {
    it('should apply custom className when provided', () => {
      render(<Select name="test" options={mockOptions} className="custom-class" />);
      expect(screen.getByRole('combobox')).toHaveClass('custom-class');
    });

    it('should set the selected value when value prop is provided', () => {
      render(<Select name="test" options={mockOptions} value="option1" />);
      expect(screen.getByRole('combobox')).toHaveValue('option1');
    });

    it('should pass additional props to select element', () => {
      render(<Select name="test" options={mockOptions} data-testid="custom-select" />);
      expect(screen.getByTestId('custom-select')).toBeInTheDocument();
    });
  });
});
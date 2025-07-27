import { render, screen, fireEvent } from '@testing-library/react';
import Form from '@/components/ui/Form/Form';

describe('Form component', () => {
  it('renders children inside the form', () => {
    render(
      <Form>
        <button type="submit">Submit</button>
      </Form>
    );
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('calls onSubmit when submitted', () => {
    const handleSubmit = vi.fn();
    render(
      <Form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </Form>
    );
    const form = document.querySelector('form');
    fireEvent.submit(form);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it('applies custom className', () => {
    const className = 'my-custom-class';
    const { container } = render(<Form className={className} />);
    expect(container.firstChild).toHaveClass(className);
  });
});

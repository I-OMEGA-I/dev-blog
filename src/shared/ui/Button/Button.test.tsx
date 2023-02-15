import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {
    test('in the document', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByTestId('btn')).toBeInTheDocument();
    });

    test('with theme clean', () => {
        render(<Button theme={ButtonTheme.CLEAN}>TEST</Button>);
        expect(screen.getByTestId('btn')).toHaveClass('clean');
    });
});

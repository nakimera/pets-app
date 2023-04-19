import { render, screen } from '@testing-library/react';
import { Button } from "../components/atoms/button";

describe("Button", () => {
    const renderButton = () =>
        render(
            <Button>Test button</Button>
        );

    test("renders button with text", () => {
        renderButton();
        expect(screen.getByText(/Test button/i)).toBeInTheDocument();
    });
});

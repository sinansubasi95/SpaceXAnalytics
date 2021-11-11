import { render } from "@testing-library/react";
import { HorizontalTable } from '../components/Table/'


test('on render, cells can be null or string', () => {
    render(<div>test</div>);

    screen.debug();
});
import { render } from "@testing-library/react";
import {screen} from '@testing-library/dom';
import {VerticalTable} from '../components/Table';

test('should render table header', () => {
    const { getByTestId } = render(<VerticalTable/>);
    const tableHeaderEl = getByTestId("tableHeader");

    expect (tableHeaderEl.textContent).toBeTruthy();

    // screen.debug();
});
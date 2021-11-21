import { render } from "@testing-library/react";
import {screen} from '@testing-library/dom';
import PastLaunch from '../pages/launches/past-launches/[id]';

test('it should render table without any error', () => {
    render(<PastLaunch/>);

    screen.debug();
});
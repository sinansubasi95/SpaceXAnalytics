import { render } from "@testing-library/react";
import {screen} from '@testing-library/dom';
import {PastLaunch} from '../pages/launches/past-launches/[id]';

test('on render, cells can be null or string', () => {
    render(<PastLaunch/>);

    screen.debug();
});
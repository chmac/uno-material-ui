import { LoadingIcon } from '../src/LoadingIcon';

describe('LoadingIcon', () => {
    let circularTxt;

    beforeAll(() => {
        circularTxt = LoadingIcon.displayName.toString();
    });

    test('Should contain a <CircularProgress />', () => {
        expect(circularTxt.includes('CircularProgress')).toBe(true);
    });
});
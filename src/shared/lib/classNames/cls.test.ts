import { cls } from './cls';

describe('classNames(cls)', () => {
    test('with only one param', () => {
        expect(cls('className')).toBe('className');
    });

    test('with many params', () => {
        expect(cls('className test1 test2')).toBe('className test1 test2');
    });

    test('with condition params', () => {
        const expected = 'className active hovered';
        expect(cls('className', { active: true, hovered: true }))
            .toBe(expected);
    });

    test('with false condition params', () => {
        const expected = 'className active';
        expect(cls('className', { active: true, hovered: false }))
            .toBe(expected);
    });

    test('with mixed params', () => {
        const expected = 'className active class2';
        expect(cls('className', { active: true, hovered: false }, 'class2'))
            .toBe(expected);
    });

    test('with undefined params', () => {
        const expected = 'className';
        expect(cls('className', { active: undefined, hovered: false }))
            .toBe(expected);
    });

    test('with null params', () => {
        const expected = 'className';
        expect(cls('className', { active: null, hovered: null }))
            .toBe(expected);
    });
});

import Wrapper from '../dist/wrapper.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('constructor', function() {

    const wrapper = new Wrapper<number>(new Set<number>([1,2,3,4]));
    it('equal', () => expect([...wrapper]).toEqual([1,2,3,4]));
});

describe('set', function() {

    const wrapper = new Wrapper<number>(new Set<number>());
    wrapper.add(1);
    it('equal', () => expect([...wrapper]).toEqual([1]));
});

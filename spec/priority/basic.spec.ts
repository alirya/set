import Priority, {PriorityValue} from '../../dist/priority.js';
import {ShuffleParameters} from '@axiona/array/shuffle.js';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('test', function() {

    const sorted : PriorityValue<string>[] = [
        {value:'g', priority:7},
        {value:'f', priority:6},
        {value:'e', priority:5},
        {value:'d', priority:4},
        {value:'c', priority:3},
        {value:'b', priority:2},
        {value:'a', priority:1}
    ];

    const source = new Priority(new Set<PriorityValue<string>>());

    for (const value of ShuffleParameters(sorted)) {

        source.add(value);
    }

    it('test', function() {

        expect([...source.values()].map(data=>data.value)).toEqual(['g', 'f', 'e', 'd', 'c', 'b', 'a']);
        expect([...source.keys()].map(data=>data.value)).toEqual(['g', 'f', 'e', 'd', 'c', 'b', 'a']);
        expect([...source.entries()]).toEqual(sorted.map(sorted=>[sorted, sorted]));

        let copy = Array.from(sorted);
        source.forEach((value, key) => {

            expect(value).toEqual(copy.shift() as PriorityValue<string>);
        });

        copy = Array.from(sorted);
        for(const priority of source) {

            expect(priority).toEqual((copy.shift() as PriorityValue<string>));
        }
    });

    // it('priority', function() {
    //
    //     for(const value of sorted) {
    //
    //         expect(priority).toEqual(source.priority(value) as number);
    //     }
    // });

});

describe('with negative', function() {

    const sorted : PriorityValue<string>[] = [
        {value:'g', priority:3},
        {value:'f', priority:2},
        {value:'e', priority:1},
        {value:'d', priority:0},
        {value:'c', priority:-1},
        {value:'b', priority:-2},
        {value:'a', priority:-Number.MAX_SAFE_INTEGER}
    ];

    const source = new Priority(new Set<PriorityValue<string>>());

    for (const value of ShuffleParameters(sorted)) {

        source.add(value);
    }

    it('test', function() {

        expect([...source.values()].map(data=>data.value)).toEqual(['g', 'f', 'e', 'd', 'c', 'b', 'a']);
        expect([...source.keys()].map(data=>data.value)).toEqual(['g', 'f', 'e', 'd', 'c', 'b', 'a']);
        expect([...source.entries()]).toEqual(sorted.map(sorted=>[sorted, sorted]));

        let copy = Array.from(sorted);
        source.forEach((value, key) => {

            expect(value).toEqual(copy.shift() as PriorityValue<string>);
        });

        copy = Array.from(sorted);
        for(const priority of source) {

            expect(priority).toEqual((copy.shift() as PriorityValue<string>));
        }
    });

});

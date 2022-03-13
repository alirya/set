import Shuffle from "@alirya/array/shuffle-parameters";
import Set from "../../../dist/Priority/set";

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('test', function() {

    const sorted : [string, number][] = [
        ['g', 7],
        ['f', 6],
        ['e', 5],
        ['d', 4],
        ['c', 3],
        ['b', 2],
        ['a', 1]
    ];

    const sortedBoth : [string, string][] = [
        ['g', 'g'],
        ['f', 'f'],
        ['e', 'e'],
        ['d', 'd'],
        ['c', 'c'],
        ['b', 'b'],
        ['a', 'a'],
    ];

    const source = new Set<string>();

    for (const [value, priority] of Shuffle(sorted)) {

        source.add(value, priority)
    }

    it('test', function() {

        expect([...source.values()]).toEqual(['g', 'f', 'e', 'd', 'c', 'b', 'a']);
        expect([...source.keys()]).toEqual(['g', 'f', 'e', 'd', 'c', 'b', 'a']);
        expect([...source.entries()]).toEqual(sortedBoth);

        let copy = Array.from(sortedBoth);
        source.forEach((value, key) => {

            expect([key, value]).toEqual(copy.shift() as [string, string]);
        });

        copy = Array.from(sortedBoth);
        for(const priority of source) {

            expect(priority).toEqual((copy.shift() as [string, string])[0] as string);
        }
    });

    it('priority', function() {

        for(const [value, priority] of sorted) {

            expect(priority).toEqual(source.priority(value) as number);
        }
    });

});

import Segment from '../dist/segment.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

let set = new Segment('.',['root.parent.child']);

it('constructor', function() {

    expect([...set]).toEqual([
        'root',
        'root.parent',
        'root.parent.child',
    ]);
});

it('remove root', function() {

    set.delete('root');
    expect([...set]).toEqual([]);
});

it('add multi', function() {

    set.add('root.parent.child');
    expect([...set]).toEqual([
        'root',
        'root.parent',
        'root.parent.child',
    ]);
});

it('remove middle', function() {

    set.delete('root.parent');
    expect([...set]).toEqual([
        'root',
    ]);
});

it('add multi', function() {

    set.add('root.parent.child');
    expect([...set]).toEqual([
        'root',
        'root.parent',
        'root.parent.child',
    ]);
});


it('add multi', function() {

    set.add('root2.parent2.child2.sub2');
    expect([...set]).toEqual([
        'root',
        'root.parent',
        'root.parent.child',
        'root2',
        'root2.parent2',
        'root2.parent2.child2',
        'root2.parent2.child2.sub2'
    ]);
});

it('remove root', function() {

    set.delete('root');
    set.delete('root2');
    expect([...set]).toEqual([]);
});


it('add multi', function() {

    set.add('root.parent.child.sub');
    set.add('root2.parent2.child2.sub2');
    expect([...set]).toEqual([
        'root',
        'root.parent',
        'root.parent.child',
        'root.parent.child.sub',
        'root2',
        'root2.parent2',
        'root2.parent2.child2',
        'root2.parent2.child2.sub2'
    ]);
});

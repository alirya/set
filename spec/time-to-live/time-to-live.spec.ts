import TimeToLive from '../../dist/time-to-live.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('has', ()=>{

    let ttl = new TimeToLive(2000);

    it('add data', function() {

        ttl.add('a');
        expect(ttl.has('a')).toBeTrue();
        expect(ttl.has('a')).toBeTrue();
    });

    it('wait 2s', function(done) {

        setTimeout(done, 2100);
    });

    it('check data', function() {

        expect(ttl.has('a')).toBeFalse();

    });
});


describe('iterator', ()=>{

    let ttl = new TimeToLive(2000);

    it('add data', function() {

        ttl.add('a');
        expect([...ttl]).toEqual(['a']);
        expect([...ttl]).toEqual(['a']);
    });

    it('wait 2s', function(done) {

        setTimeout(done, 2100);
    });

    it('check data', function() {

        expect([...ttl]).toEqual([]);
    });
});

describe('values', ()=>{

    let ttl = new TimeToLive(2000);

    it('add data', function() {

        ttl.add('a');
        expect([...ttl]).toEqual(['a']);
        expect([...ttl]).toEqual(['a']);
    });

    it('wait 2s', function(done) {

        setTimeout(done, 2100);
    });

    it('check data', function() {

        expect([...ttl.values()]).toEqual([]);
    });
});

describe('keys', ()=>{

    let ttl = new TimeToLive(2000);

    it('add data', function() {

        ttl.add('a');
        expect([...ttl]).toEqual(['a']);
        expect([...ttl]).toEqual(['a']);
    });

    it('wait 2s', function(done) {

        setTimeout(done, 2100);
    });

    it('check data', function() {

        expect([...ttl.keys()]).toEqual([]);
    });
});


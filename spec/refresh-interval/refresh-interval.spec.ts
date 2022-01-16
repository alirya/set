import RefreshInterval from '../../dist/refresh-interval';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('has', ()=>{

    let ttl : RefreshInterval<string>;

    it('add data', function() {

        ttl = new RefreshInterval(2000, (set)=>{

            set.add('c');
        });
    });

    it('add data', function() {

        ttl.add('a');
        expect(ttl.has('a')).toBeTrue();
        expect(ttl.has('c')).toBeFalse();
        expect(ttl.size).toEqual(1);
    });

    it('wait 2s', function(done) {

        setTimeout(done, 2100);
    });

    it('check data', function() {

        expect(ttl.has('a')).toBeTrue();
        expect(ttl.has('c')).toBeTrue();
        expect(ttl.size).toEqual(2);
    });
});

describe('iterator', ()=>{

    let ttl : RefreshInterval<string>;

    it('add data', function() {

        ttl = new RefreshInterval(2000, (set)=>{

            set.add('c');
        });
    });

    it('add data', function() {

        ttl.add('a');
        expect([...ttl]).toEqual(['a']);

    });

    it('wait 2s', function(done) {

        setTimeout(done, 2100);
    });

    it('check data', function() {

        expect([...ttl]).toEqual(['a', 'c']);
    });
});

describe('values', ()=>{

    let ttl : RefreshInterval<string>;

    it('add data', function() {

        ttl = new RefreshInterval(2000, (set)=>{

            set.add('c');
        });
    });

    it('add data', function() {

        ttl.add('a');
        expect([...ttl]).toEqual(['a']);

    });

    it('wait 2s', function(done) {

        setTimeout(done, 2100);
    });

    it('check data', function() {

        expect([...ttl]).toEqual(['a', 'c']);
    });
});

describe('keys', ()=>{

    let ttl : RefreshInterval<string>;

    it('add data', function() {

        ttl = new RefreshInterval(2000, (set)=>{

            set.add('c');
        });
    });

    it('add data', function() {

        ttl.add('a');
        expect([...ttl]).toEqual(['a']);

    });

    it('wait 2s', function(done) {

        setTimeout(done, 2100);
    });

    it('check data', function() {

        expect([...ttl]).toEqual(['a', 'c']);
    });
});


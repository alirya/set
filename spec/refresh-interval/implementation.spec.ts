import RefreshInterval from '../../dist/refresh-interval';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('has', ()=>{

    let ttl = new RefreshInterval(20000,()=>undefined);

    it('add data', function() {

        ttl.add('a');
        expect(ttl.has('a')).toBeTrue();
    });

    it('delete', function() {
        ttl.delete('a');
    });

    it('check data', function() {

        expect(ttl.has('a')).toBeFalse();
    });
});


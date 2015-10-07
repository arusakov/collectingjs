describe('COLLECTINGJS.stringify()', function () {

  beforeAll(function () {
    jasmine.addCustomEqualityTester(function (first, second) {
      return COLLECTINGJS.stringify(first) === JSON.stringify(second);
    });
  });

  it('JSON.stringify primitives', function () {
    expect(1).toEqual(1);
    expect(null).toEqual(null);

    // arusakov not in this pollyfill
    //expect(undefined).toEqual(undefined);
    //expect(new Date()).toEqual(new Date());

    expect(0).toEqual(0);
    expect(1e6).toEqual(1000000);
    expect(true).toEqual(true);
    expect(false).toEqual(false);
    expect('').toEqual('');
    expect('1').toEqual('1');
  });

  it('JSON.stringify objects', function () {
    expect({}).toEqual({});
    expect({x: 1}).toEqual({x: 1});
    expect({
      x: 1,
      y: 'y',
      z: null,
      zz: undefined
    }).toEqual({x: 1, y: 'y', z: null, zz: undefined});
  });

  it('JSON.stringify arrays', function () {
    expect([]).toEqual([]);
    expect([1, 2]).toEqual([1, 2]);
    expect([undefined, null]).toEqual([undefined, null]);
    expect(['x', 2, 'y', null]).toEqual(['x', 2, 'y', undefined]);
  });

  it('JSON.stringify nested', function () {
    expect([1, {1: 1}, [0, 0.0, 'x', true, null, undefined]])
      .toEqual([1, {1: 1}, [0, 0.0, 'x', true, null, undefined]]);
    expect({
      x: {
        y: 'y',
        z: 1,
        zz: {
          zzz: null
        }
      },
      xx: [1, 2, null]
    }).toEqual({
      x: {
        y: 'y',
        z: 1,
        zz: {
          zzz: null
        }
      },
      xx: [1, 2, null]
    });
  });
});
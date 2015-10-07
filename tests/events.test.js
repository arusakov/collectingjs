describe('COLLECTINGJS events', function () {
  var input;
  beforeEach(function () {
    input = document.createElement('input');
    input.setAttribute('id', 'input');
    document.body.appendChild(input);

    COLLECTINGJS.watch('input');
  });

  afterEach(function () {
    document.body.removeChild(input);
    input = null;
  });

  it('empty', function () {
    expect(JSON.parse(COLLECTINGJS.events())).toEqual({
      input: {
        e: [],
        t: jasmine.any(Number)
      }
    })
  });

  it('watch one more time', function () {

  });

});

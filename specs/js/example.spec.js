describe('The thisFunction Function', function () {

  it('2+3+5 should equal 10',function () {
    var result = exampleFunction(2,3,5);
    expect(result).toBe(10);
  });

  it('1+1+1 should not equal 5',function () {
    var result = exampleFunction(1,1,1);
    expect(result).not.toBe('5');
  });
});


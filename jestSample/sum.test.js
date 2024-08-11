const src = require('./sum'); // Update the path if needed

test('adds 1 + 2 to equal 3', () => {
  expect(src.sum(1, 2)).toBe(3);
});

const CONTEXT_TYPE = {
    CREATE : 'create'
}

test('foo excuted with create context, bar expect to be called', ()=>{
    const MOCK_CONTEXT_TYPE_CREATE = { type : CONTEXT_TYPE.CREATE}
    const barSpy = jest.spyOn(src,'bar');
    src.foo(MOCK_CONTEXT_TYPE_CREATE);
    expect(barSpy).toHaveBeenCalled();
    barSpy.mockRestore();
});
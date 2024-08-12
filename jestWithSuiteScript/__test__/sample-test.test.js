import * as src from '../src/ns-style-sample-js'
describe('Basic jest test with simple assert', () => {
    it('should assert stings are equal', () => {
        const a = 'foobar';
        const b = 'foobar';
        expect(a).toMatch(b);
    });
});

describe('Basic jest test with simple assert', () => {
    it('should assert stings are equal', () => {
        expect(src.sum(1,2)).toBe(3);
    });
});

const CONTEXT_TYPE = {
    CREATE : 'create'
}

describe('Check foo handle on context type',()=>{
    it('When type is create, bar should be called',()=>{
      const MOCK_CONTEXT_TYPE_CREATE = { type : CONTEXT_TYPE.CREATE}
      const barSpy = jest.spyOn(src,'bar');
      src.foo(MOCK_CONTEXT_TYPE_CREATE);
      expect(barSpy).toHaveBeenCalled();
      barSpy.mockRestore();
    });
    it('When type is not create, bar should not be called',()=>{
      const MOCK_CONTEXT_TYPE_CREATE = { type : 'anything else'}
      const barSpy = jest.spyOn(src,'bar');
      src.foo(MOCK_CONTEXT_TYPE_CREATE);
      expect(barSpy).not.toHaveBeenCalled();
      barSpy.mockRestore();
    });
  });

  describe('Check const foo handle on context type',()=>{
    it('When type is create, bar should be called',()=>{
      const MOCK_CONTEXT_TYPE_CREATE = { type : CONTEXT_TYPE.CREATE}
      const barSpy = jest.spyOn(src,'bar');
      src.fooConst(MOCK_CONTEXT_TYPE_CREATE);
      expect(barSpy).toHaveBeenCalled();
      barSpy.mockRestore();
    });
    it('When type is not create, bar should not be called',()=>{
      const MOCK_CONTEXT_TYPE_CREATE = { type : 'anything else'}
      const barSpy = jest.spyOn(src,'bar');
      src.fooConst(MOCK_CONTEXT_TYPE_CREATE);
      expect(barSpy).not.toHaveBeenCalled();
      barSpy.mockRestore();
    });
  });
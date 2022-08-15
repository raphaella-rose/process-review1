const schoolReport = require('./schoolReport');

describe('schoolReport', () => {
  it('returns no results given when passed an empty string', () => {
    expect(schoolReport("")).toEqual('No results given.');
  })

  it('returns number of green marks when only one green has been passed', () => {
    expect(schoolReport("Green")).toEqual("Green: 1");
  })

  it('returns number of amber marks when only one amber has been passed', () => {
    expect(schoolReport("Amber")).toEqual("Amber: 1");
  })

  it('returns number of red marks when only one red has been passed', () => {
    expect(schoolReport("Red")).toEqual("Red: 1");
  })

  it('returns number of green marks when multiple have been passed', () => {
    expect(schoolReport("Green, Green, Green")).toEqual("Green: 3");
  })
})
import { TimeStampPipe } from './time-stamp';

describe('Unit Test: timestamp', () => {
  let timestamp: TimeStampPipe = null;

  beforeEach(() => {
    timestamp = new TimeStampPipe();
  });

  afterEach(() => {
    timestamp = null;
  });

  it('should be instantiated', () => {
    expect(timestamp).toBeDefined();
  });

  it('should have a transform function', () => {
    expect(timestamp.transform).toBeDefined();
  });

  it('#transform should convert ISO date to full date for default', () => {
    const dateMock = '2017-03-19T11:00:00';

     expect(timestamp.transform(dateMock, '')).toBe(new Date(dateMock));
  });

  it('#transform should convert ISO date to day when day arg is passed', () => {
    const dateMock = '2017-03-19T11:00:00';

     expect(timestamp.transform(dateMock, 'day')).toBe(new Date(dateMock).getDate());
  });

  it('#transform should convert ISO date to month when month arg is passed', () => {
    const dateMock = '2017-03-19T11:00:00';

     expect(timestamp.transform(dateMock, 'month')).toBe(new Date(dateMock).getMonth());
  });
});

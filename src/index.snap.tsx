import axios from 'axios';
import ReactDOM from 'react-dom';


jest.mock('react-dom');
jest.mock('./AppRoot', () => ({ AppRoot: 'AppRoot' }));

const mockReactDOMRender = ReactDOM.render as jest.MockedFunction<typeof ReactDOM.render>;
const mockMountNode = document.createElement('div');
mockMountNode.id = 'app';
document.body.appendChild(mockMountNode);

let root: unknown;

describe('app entry point', () => {
  beforeEach(() => {
    process.env.NODE_ENV = 'production';
    return import('./index').then((module) => {
      root = module; // eslint-disable-line @typescript-eslint/no-unused-vars
      jest.resetModules();
    });
  });

  test('"ReactDOM.render" and "Sentry.init" should work correctly in "production" mode', () => {
    expect(mockReactDOMRender.mock.calls[0][0]).toMatchSnapshot();
    expect(mockReactDOMRender.mock.calls[0][1]).toEqual(mockMountNode);
  });

  test('axios defaults params', () => {
    const responseFn = axios.interceptors.response.use as jest.Mock;
    const mockResponse = {};
    expect(responseFn.mock.calls[0][0](mockResponse)).toEqual(mockResponse);
  });

  test('getSentryDSN should return correct DSN string', () => {
    const { getSentryDSN } = (root as { getSentryDSN: (isProd: boolean) => string });
    expect(getSentryDSN(false)).toBe('');
    expect(getSentryDSN(true)).toMatchSnapshot();
  });
});

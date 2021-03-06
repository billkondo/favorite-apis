// https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
//
// Some libraries (e.g. React Ant Design) use window.matchMedia in their implementation
// This script mocks it in the tests environment

const mockMatchMedia = () =>
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

export default mockMatchMedia;

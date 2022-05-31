import '@testing-library/jest-dom';

jest.mock('./constants/environment', () => ({
  APP_TITLE: 'Vite App Jest',
}));

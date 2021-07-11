import React from 'react';
import Home from '../../../pages/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  cleanup,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';

describe('Home', () => {
  beforeEach(() => {
    render(
      <Router>
        <Home />
      </Router>
    );
  });
  afterEach(() => {
    cleanup();
  });
  test('render Bem-vindo Title', () => {
    const title = screen.getByText('Bem-vindo');

    expect(title).toBeInTheDocument();
  });

  test('render chapéus Title', () => {
    const hats = screen.getByText('chapéus');

    expect(hats).toBeInTheDocument();
  });

  test('render casacos Title', () => {
    const coats = screen.getByText('casacos');

    expect(coats).toBeInTheDocument();
  });

  test('render sapatilhas Title', () => {
    const sneakears = screen.getByText('sapatilhas');

    expect(sneakears).toBeInTheDocument();
  });

  test('render mulher Title', () => {
    const women = screen.getByText('mulher');

    expect(women).toBeInTheDocument();
  });

  test('render homem Title', () => {
    const men = screen.getByText('homem');

    expect(men).toBeInTheDocument();
  });
});

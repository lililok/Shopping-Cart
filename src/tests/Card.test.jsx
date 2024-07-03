import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../parts/Card';

describe('Card component', () => {
  const Product = {
    id: 1,
    image: 'image-url.jpg',
    title: 'Product',
    price: 10,
  };

  it('renders product information correctly', () => {
    render(<Card product={Product} />);

    expect(screen.getByText('Product')).toBeInTheDocument();
    expect(screen.getByText('$10')).toBeInTheDocument();
    expect(screen.getByAltText('Product')).toBeInTheDocument();
  });

});
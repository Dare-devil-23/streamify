import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileCard from '@/src/components/common/profileCard';

// Mocking the DownArrowIcon component
jest.mock('@/src/icons', () => ({
  DownArrowIcon: ({ className }: any) => <svg data-testid="down-arrow-icon" className={className}></svg>,
}));

// Mocking user data
jest.mock('@/src/data', () => ({
  user: {
    profilePicture: '/images/profile.jpg',
    fullName: 'John Doe',
    email: 'johndoe@example.com',
  },
}));

describe('ProfileCard Component', () => {
  it('renders the profile picture', () => {
    render(<ProfileCard />);
    const profileImage = screen.getByAltText('Profile');
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute('src', '/images/profile.jpg');
  });

  it('renders the user\'s full name and email', () => {
    render(<ProfileCard />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('johndoe@example.com')).toBeInTheDocument();
  });

  it('renders the DownArrowIcon', () => {
    render(<ProfileCard />);
    const downArrowIcon = screen.getByTestId('down-arrow-icon');
    expect(downArrowIcon).toBeInTheDocument();
    expect(downArrowIcon).toHaveClass('w-5 h-5 text-zinc-600');
  });

  it('hides full name, email, and DownArrowIcon on small screens', () => {
    render(<ProfileCard />);
    
    // The parent div should have the 'hidden md:block' class for the full name and email
    const fullNameContainer = screen.getByText('John Doe').parentElement;
    const emailContainer = screen.getByText('johndoe@example.com').parentElement;
    const downArrowIconContainer = screen.getByTestId('down-arrow-icon').parentElement;
  
    expect(fullNameContainer).toHaveClass('hidden md:block');
    expect(emailContainer).toHaveClass('hidden md:block');
    expect(downArrowIconContainer).toHaveClass('hidden md:block');
  });  
});

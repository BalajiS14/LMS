import React from 'react';
import Hero from '../../components/student/Hero';
import Companies from '../../components/student/Companies';
import SearchBar from '../../components/student/SearchBar'; // Import SearchBar
import CoursesSection from '../../components/student/CoursesSection';

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero />
      <SearchBar /> {/* Add the SearchBar component here */}
      <Companies />
      <CoursesSection/>
    </div>
  );
};

export default Home;

import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/students/Home';
import CoursesList from './pages/students/CoursesList';
import CourseDetails from './pages/students/CourseDetails';
import MyEnrollments from './pages/students/MyEnrollments';
import Player from './pages/students/Player';
import Loading from './components/student/Loading';
import Educator from './pages/educator/Educator';
import AddCourse from './pages/educator/AddCourse';
import MyCourses from './pages/educator/MyCourses';
import StudentsEnrolled from './pages/educator/StudentsEnrolled';
import Navbar from './components/student/Navbar';

const App = () => {
  const location = useLocation();
  const isEducatorRoute = location.pathname.startsWith('/educator');

  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute && <Navbar />} {/* Navbar appears only for student routes */}

      <Routes>
        {/* Student Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/course-list' element={<CoursesList />} />
        <Route path='/course/:id' element={<CourseDetails />} />
        <Route path='/my-enrollments' element={<MyEnrollments />} />
        <Route path='/player/:courseId' element={<Player />} />
        <Route path='/loading/:path' element={<Loading />} />

        {/* Educator Routes */}
        <Route path='/educator' element={<Educator />}>
          <Route path='add-course' element={<AddCourse />} />
          <Route path='my-courses' element={<MyCourses />} />
          <Route path='students-enrolled' element={<StudentsEnrolled />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
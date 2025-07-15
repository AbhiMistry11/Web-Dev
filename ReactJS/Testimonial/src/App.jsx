import { useState } from 'react';
import './App.css';
import Testimonial from './components/Testimonial';
import reviews from './data';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-md text-center">
        <h2 className="text-2xl font-bold text-purple-700 mb-2">Our Testimonials</h2>
        <div className="h-1 w-16 bg-purple-400 mx-auto mb-4 rounded"></div>
        
        <Testimonial reviews={reviews} />
      </div>
    </div>
  );
}

export default App;

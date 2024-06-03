import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch('/api/exercises'); // Adjust the API endpoint accordingly
        if (response.ok) {
          const data = await response.json();
          setExercises(data);
        } else {
          console.error('Failed to fetch exercises');
        }
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    fetchExercises();
  }, []);

  return (
    <div>
      <h1>Exercise List</h1>
      <ul>
        {exercises.map(exercise => (
          <li key={exercise.id}>{exercise.name}</li>
          // Adjust this according to your exercise object structure
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;

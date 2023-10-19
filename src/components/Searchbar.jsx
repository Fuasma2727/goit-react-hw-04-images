import React, { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(searchQuery);
  };

  return (
    <div>
      <input type="text" value={searchQuery} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Buscar</button>
    </div>
  );
};

export default Searchbar;
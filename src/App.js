import React, { useState, useEffect } from 'react';
import ApiService from './ApiService';
import NewsList from './components/news/NewsList';

function App() {
  return(
    <div>
        <NewsList/>
    </div>
  )
}

export default App;
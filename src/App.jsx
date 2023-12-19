import React from 'react'
import NavBar from './components/navBar'
import NewsBoard from './components/newsBoard';

const App = () => {

  const [category, setCategory] = React.useState('general')

  return (
    <div>
      <NavBar setCategory={setCategory}/>
      <NewsBoard category={category} />
    </div>
  )
}

export default App;

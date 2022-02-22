// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import img from './users.png'
function App() {
  const [page, setPage] = useState([]);
  const [pageNo, setpageNo] = useState(undefined)
  const [disp, setdisp] = useState(false)
  const handleClick = () => {
    setdisp(true)
    fetch('https://reqres.in/api/users?page=1')
      .then(res => res.json())
      .then(
        (result) => {
          // console.log(result.data)
          setPage(result.data)
        }
      )
  }
  useEffect(() => {
    if (pageNo) {
      fetch(`https://reqres.in/api/users?page=${pageNo}`)
        .then(res => res.json())
        .then(
          (result) => {
            // console.log(result.data)
            setPage(result.data)
          }
        )
    }
  }, [pageNo])
  const changepage = () => {
    setpageNo("1");
  }
  const changepagesec = () => {
    setpageNo("2");
  }

  return (
    <div className="App">
      <Navbar handleClick={handleClick} disp={disp} />
      <div className='imageContainer'>
        {
          page.length > 0 ?
          page.map(item => (
            <div className='container' key={item.id}>
              <img src={item.avatar} alt="profile" />
              <div className='detail'>
                <p>{item.first_name} {item.last_name}</p>

                <p>{item.email}</p>
              </div>
            </div>
          ))
            :
            <div>
              <h1>Click on get User </h1>
              <img className='homeimg' src={img} alt="users" />
            </div>
        }
       

      </div>
      {
        page.length > 0 &&
        <div className="buttons">
          <button onClick={changepage} className='paginate'>1</button>
          <button onClick={changepagesec} className='paginate'>2</button>
        </div>
      }
    </div>
  );
}

export default App;

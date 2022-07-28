import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true)


    useEffect(()=>{
      const url = "https://randomuser.me/api/"

      axios.get(url).then(response => {
        const users = response.data
        setData([users])
        setLoading(false)
          
    }).catch(error=>(
      console.log(error)
    ))

    },[])

    if (loading) {
      return <div id='page-loading'><h4>Loading ...</h4></div>
      
    }

   
  return (

    <div className="App">
     {

        data.map(item=>(
          item.results.map(user=>(
            <section id='card-person'>
              <div className="cover">
                  <img src="./cover.jpg"  alt="cover" />
                  <div className="avatar-user">
                      <img src={user.picture.large} alt={user.name.first}/>
                  </div>
              </div>
              <div className="content">

                <div className="name-user">
                    <h3><i class="fa fa-user" style={{marginRight:"3px"}}></i>{`${user.name.first} ${user.name.last}`}</h3>
                </div>
                <div className="info-user">
                    <p className='birth'><i class="fa fa-birthday-cake" aria-hidden="true"></i>{`${user.dob.age} Years`}</p>
                    <p className='mail'><i class="fa fa-envelope" aria-hidden="true"></i>{user.email}</p>
                    <p className='phone'><i class="fa fa-phone" aria-hidden="true"></i>{user.phone}</p>
                    <p className='address'><i class="fa fa-map-marker" aria-hidden="true"></i>{`${user.location.street.name} ${user.location.city},${user.location.country}`}</p>
                </div>
              </div>
            </section>
          ))
        ))

      }

 
    </div>
  );
}

export default App;

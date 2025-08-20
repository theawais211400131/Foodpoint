import React from 'react';
import { data } from '../src/restApi.json'
const Team = () => {
  return (
    <section className='team' id='team'>
        <div className="container">
            <div className="heading_section">
                <h1 className='heading'>OUR TEAM</h1>
                <p>We contains the team that knows about the actual taste they are not only professional in there field also love to cook and likes the good food (A good food does'nt need any apprication is the line that is same for these chiefs)</p>  
            </div>
            <div className="team_container">
                {
                    data[0].team.map(element=>{
                        return(
                            <div className="card" key={element.id}>
                                <img src={element.image} alt={element.name}/>
                                <h3>{element.name}</h3>
                                <p>{element.designation}</p>

                            </div>
                        )
                    })
                }
            </div>
            
        </div>

    </section>
  )
}

export default Team
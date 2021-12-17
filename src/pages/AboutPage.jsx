import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'
function AboutPage(){
  return <Card> 
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React App to get feedback from clients</p>
        <p>Version</p>
        <p>
          <Link to='/'>Go Back</Link>
        </p>
      </div> 
  </Card>
}

export default AboutPage
// - - - - - - -  HARD - - - - -  




import React, { Component } from 'react'




export default class names extends Component {
  
    constructor(props) {
      super()
      this.state = {person: [{
            name: 'Oscar Silva',
            home: 'Greensboro, NC',
            sport: 'Soccer',
            age: 50},
            { name: 'Naruto',
            home: 'Leaf Village',
            sport: 'Shadow Jitsu',
            age: 60},
            { name: 'Sasuke',
            home: 'Leaf Village',
            sport: 'Chidori',
            age: 70},
            { name: 'Bee',
            home: 'Cloud Village',
            sport: 'Rapping',
            age: 80}] }
            }
    changeName() {
      this.setState ({
  
      })
    }

    render() {
      return (
        <div>
            {this.state.person.map((person, index) => (
                <div key={index}>
                    <h1>Name: {person.name}</h1>
                    <p>Hometown: {person.home}</p>
                    <p>Favorite Sport: {person.sport}</p>
                    <p>Age: {person.age}</p>
                </div>
            ))}
        </div>
      )
    }
  }






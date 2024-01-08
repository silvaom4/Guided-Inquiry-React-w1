import React, { Component } from 'react'

// -- - - - HARD - - - - - - - -


export default class basicinfo extends Component {
  
    constructor(props) {
      super()
      this.state = {person: {
          name: 'Oscar Silva',
          home: 'Greensboro, NC',
          sport: 'Soccer',
          age: 50,
      } }
    }
    changeName() {
      this.setState ({
  
      })
    }

    render() {
      return (
        <div>
          <h1>Name: {this.state.person.name}</h1>
          <p>Hometown: {this.state.person.home}</p>
          <p>Favorite Sport: {this.state.person.sport}</p>
          <p>Age: {this.state.person.age}</p>
        </div>
      )
    }
  }
  
//   const App = () => {
//       const people = []
//   }
  
  












// ---- - - - - - - - MEDIUM - - - - - 

// export default class basicinfo extends Component {
  
//   constructor(props) {
//     super()
//     this.state = {person: {
//         name: 'Oscar Silva',
//         home: 'Greensboro, NC',
//         sport: 'Soccer',
//         age: 50,
//     } }
//   }
  




//   render() {
//     return (
//       <div>
//         <h1>Name: {this.state.person.name}</h1>
//         <p>Hometown: {this.state.person.home}</p>
//         <p>Favorite Sport: {this.state.person.sport}</p>
//         <p>Age: {this.state.person.age}</p>
//       </div>
//     )
//   }
// }






// -- -- - - -  - - - 









// ---- - - - - - - - EASY -- - - - - -

// import React, { Component } from 'react'

// export default class App extends Component {
  
//   constructor(props) {
//     super()
//     this.state = {person: {} }
//   }



//   render() {
//     return (
//       <div>
//         <h1>Name: Oscar Silva</h1>
//         <p>Hometown: Greensboro, NC</p>
//         <p>Favorite Sport: Soccer</p>
//         <p>Age: 99</p>
//       </div>
//     )
//   }
// }





// ---- VERY EASY --- - - - - - - - - - - 


// import React, { Component } from 'react'

// export default class App extends Component {
  
//   constructor() {
//     super()
//   }



//   render() {
//     return (
//       <div>
//         <h1>Name: Oscar Silva</h1>
//         <p>Hometown: Greensboro, NC</p>
//         <p>Favorite Sport: Soccer</p>
//         <p>Age: 99</p>
//       </div>
//     )
//   }
// }


// export default App;

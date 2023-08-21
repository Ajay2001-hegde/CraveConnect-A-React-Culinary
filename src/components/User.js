import React, { Component } from 'react'
import Shimmer from './Shimmer';

export default class User extends Component {
    constructor(props){
        super(props);

        this.state ={
            userinfo:{
                avatar_url:'',
                bio:'',
                    name:'',
                    login:'',

                    location:'',
            }
                
        }
        
        
    }
async componentDidMount(){
    const data = await fetch('https://api.github.com/users/Ajay2001-hegde');
    const json = await data.json();
    this.setState({
        userinfo:json,
    })
    console.log(json)
}
  
  render() {
    const {name,avatar_url,bio,login ,location} = this.state.userinfo;
    if (!name) {
      // Display shimmer while data is being fetched
      return <Shimmer />;
    }
    
    return (

      <div className='container align-middle'>
        <img className="px-4  border-black shadow-sl rounded-10" src={avatar_url}></img>
        <h4 className='pt-12'>{name}</h4>
        <h4 className='pt-12'>{bio}</h4>
        <h5 className='pt-12'>{location}</h5>
        
      </div>
    )
  }
}

import React, { Component } from 'react';
import ListsContacts from './ListsContacts';
import * as ContactAPI from './utils/ContactsAPI';
import CreateContact from './CreateContact';
import {Route} from 'react-router-dom'
class App extends Component {

  state={
  contacts:[],
}
componentDidMount(){
ContactAPI.getAll()
.then((contacts)=>{this.setState({contacts:contacts})})
}
removeContact=(contact)=>{
  this.setState((currentState)=>({
    contacts:currentState.contacts.filter((c)=>{
      return c.id!=contact.id
    })
  }))
ContactAPI.remove(contact);
}
createNewContact = (contact) => {
  ContactAPI.create(contact)
  .then((contact)=>{
    this.setState((currentState)=>({
      contacts:currentState.contacts.concat([contact])
    }));
  });
}
  render() {
    return (
      <div>
        <Route exact  path='/' render={()=>(
          <ListsContacts 
          onDelete={this.removeContact} 
          contacts={this.state.contacts}/>
        )}
       />
       <Route exact path='/create' render={({history})=>(<CreateContact 
       onCantactCreate={(contact)=>{
         this.createNewContact(contact)
        history.push('/')
        }}
       />)}/>
      </div>
    );
  }
}

export default App;

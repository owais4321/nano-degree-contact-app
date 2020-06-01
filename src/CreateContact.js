import React , {Component} from 'react'
import {Link} from 'react-router-dom';
import ImageInput from './ImageInput';
import serializeForm from 'form-serialize'
class CreateContact extends Component{
    submitHandler = (e) => {
        e.preventDefault();
        const values=serializeForm(e.target,{hash:true});
        console.log(values);
        if(this.props.onCantactCreate){
            this.props.onCantactCreate(values);
        }
    }
    render(){
        return(
            <div>
                <Link
                className='close-create-contact'
                to='/'>
                    close
                </Link>
                <form 
                className='create-contact-form'
                onSubmit={(e)=>{this.submitHandler(e)}}>
                    <ImageInput
                    className='create-contact-avatar-input'
                    name='avatarURL'
                    maxHeight='64'
                    />
                    <div className='create-contact-details'>
                        <input type='text' name='name' placeholder='name'/>
                        <input type='text' name='handle' placeholder='handle' />
                        <button>Add Contact</button>
                    </div>
                </form>

            </div>
        )
    }
}
export default CreateContact;
import React, { useState } from 'react';

export default function TestContact() {

    const formStyles = {
        display: 'flex',
        flexDirection: 'column',
        margin: '40px'
    }

    return (
        <div>
            <form 
                style={formStyles} 
                name='contact v1' 
                action='/contacts' 
                method='post'
                data-netlify='true'
                onSubmit='submit'
            >
               <div>
                    <label>First Name <br/>
                        <input type='text' name='first-name'/>
                    </label>
               </div>

                <div>
                    <label htmlFor='email'>Email</label> <br/>
                    <input id='email' type='email' name='email' />
                </div>

                <div>
                    <label>Anyy Comments?
                        <textarea name='comments'></textarea>
                    </label>
                </div>

                <button type='submit'>Send a Message</button>
            </form>
        </div>
        // <div>
        //     <form style={formStyles} name='contact' action='/contacts' method='post'>
        //         <input type='hidden' name='form-name' value='contact' />
        //         <input required type='text' name='name' placeholder='Your Name' />
        //         <input required type='email' name='email' placeholder='Your Email' />
        //         <textarea required  name='message' placeholder='message' cols='30' rows='10' ></textarea>
        //         <button type='submit'>Send a Message</button>
        //     </form>
        // </div>
    )
}

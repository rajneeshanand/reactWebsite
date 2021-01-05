import React,{ useState} from 'react';
import ReactDOM from 'react-dom';

const Contact=()=>{
const [data,setData]=useState({
    fullname: "",
    phone: "",
    Email: "",
    msg: "",

});
const InputEvent=(event)=>{
    const {name,value}=event.target;

    setData((preVal)=>{
        return{
            ...preVal,
            [name]: value,
        }
    })
}
 const formSubmit=(e)=>{
    e.preventDefault();
    alert(`${data.fullname}`);
 };

    return(
        <>
       
       <div className="my-5">
           <h1 className="text-center"> Contact-Us</h1>

       </div>
       <div className="container contact_div">
           <div className="row">
               <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                    <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" 
                    name="fullname"
                    value={data.fullname}
                    onChange={InputEvent}
                    placeholder="Enter your name"/>
                    
                    </div>

                    <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Phone</label>
                    <input type="number" class="form-control" id="exampleInputEmail1" 
                    name="phone"
                    value={data.phone}
                    onChange={InputEvent}
                    placeholder="mobile no"/>
                    
                    </div>

                    <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" 
                    name="Email"
                    value={data.Email}
                    onChange={InputEvent}
                    placeholder="emailHelp"/>
                    
                    </div>

                    <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Messages</label>
                    <textarea 
                     className="form-control"
                     rows="3"
                     name="msg"
                     value={data.msg}
                     onChange={InputEvent}
                     ></textarea>
                    
                    
                    </div>
                    <div className="col-12">
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                  
                </form>     
               </div>
           </div>
       </div>
        </>

    );
}
export default Contact;
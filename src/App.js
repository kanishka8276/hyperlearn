import React from 'react';
import './App.css';
import hyp from './hyperlearn.png';
import Home from './home';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { FormWithConstraints, FieldFeedbacks, Async, FieldFeedback } from 'react-form-with-constraints';
const Router = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
const Link = require("react-router-dom").Link;
const Switch = require("react-router-dom").Switch;
class App extends React.Component {
  handleChange = e => {
    this.form.validateFields(e.target);
  }
  constructor(props){
    super(props);
    this.state = {
      type: 'password',
    }
    this.showHide = this.showHide.bind(this);
  }

  showHide(e){
    //e.preventDefault();
    //e.stopPropagation();
    this.setState({
      type: this.state.type === 'text' ? 'password' : 'text'
    })  
  }

  contactSubmit = e => {
    e.preventDefault();
    this.form.validateFields();

    if (!this.form.isValid()) {
      console.log('form is invalid: do not submit');
    } else {
      console.log('form is valid: submit');
    }
  }
    render(){
      return (
             <Router>
			  <div className='App'>  
                   <div className="left" >
                   <center>
                   <h1> <span style={{color:'#ff751a'}}>&lt;/hyper</span><span style={{color:'#8000ff'}}>Learn</span><span style={{color:'#ff751a'}}>&gt;</span></h1>
                   <img src={hyp} alt="hyp" class='hypimg' />
                   <h1>Welcome Back!</h1>
                   <h2 style={{padding:'1rem 7rem',color:'#333333'}}>hyperLearn helps you connect and learn with the best mentors out there</h2>
                   </center>
                   </div>
	               <div className="right">
	               <center>
		              <h1>Create New Account</h1>
		              <FormWithConstraints ref={form => this.form = form}
                       onSubmit={this.contactSubmit}
                       noValidate>
		               <label>
		                     Full name
		               </label>
		               <input type='text' name="name"  required onChange={this.handleChange}/>
		               <FieldFeedbacks for="name">
                            <FieldFeedback when="*" />
							</FieldFeedbacks>
							<label>
									Email address 
							</label>
						<input type='email' name="email" onChange={this.handleChange} required />
						<FieldFeedbacks for="email">
						<FieldFeedback when="*" />
						</FieldFeedbacks>
						<label>
							Phone Number
						</label>		   
						<input type='text' name="phone" title="Enter valid phone number with 10 digits" onChange={this.handleChange} required pattern=".{10}" />
						<FieldFeedbacks for="phone">
							<FieldFeedback when={value => /\W/.test(value)} warning>
								Should contain number only</FieldFeedback>
							<FieldFeedback when={value => /[A-Z]/.test(value)} warning>
								Should contain numbers only.
							</FieldFeedback>
							<FieldFeedback when={value => /[a-z]/.test(value)} warning>
								Should contain numbers only.
							</FieldFeedback>
							<FieldFeedback when="patternMismatch">
								Should be a valid Indian number with 10 digits
							</FieldFeedback>
							<FieldFeedback when="*" />
						</FieldFeedbacks>
						<label>
							Password
						</label>
						<input type={this.state.type} name="password" onChange={this.handleChange}  required pattern=".{8,}" required  style={{width:'87%'}}/>
		                <span className="password__show" style={{fontSize:'1.5rem',color:'#333333'}} onClick={this.showHide}>
						{this.state.type === 'text' ?<i className="fa fa-eye-slash"></i> :<i className="fa fa-eye"></i>}</span>
						<FieldFeedbacks for="password">
								<FieldFeedback when="patternMismatch">
									Should be at least 8 characters long
								</FieldFeedback>
								<FieldFeedback when="*" />
								<FieldFeedback when={value => !/\d/.test(value)} warning>
									Should contain numbers
								</FieldFeedback>	
								<FieldFeedback when={value => !/[A-Z]/.test(value)} warning>
									Should contain capital letters
								</FieldFeedback>
								<FieldFeedback when={value => !/\W/.test(value)} warning>
									Should contain special characters
								</FieldFeedback>
						</FieldFeedbacks>
		            <Link to="/home">
					<input type='submit' value='Sign Up' id='signup'/>
					</Link>
					<h4 style={{color:'#333333'}}>Already have an Account?</h4>
					<button id='signin'> Sign In</button>
				</FormWithConstraints>
	</center>	 
     </div>			
	 </div>
	  <Switch>
          <Route path="/home" exact component={Home} />
	 </Switch>	  
	  </Router>
          )
        }
    }

   export default App;

import React from 'react';
import './App.css';
import hyp from './hyperlearn.png';
class Home extends React.Component {
    render() {
        return (
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
				   <h1>Your details</h1>
				   </div>
		</div>		   
		);
    }

}

export default Home;
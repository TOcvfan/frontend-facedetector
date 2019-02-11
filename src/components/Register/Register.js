import React from 'react';

class Register extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			email: '',
			password: ''
		}
	}

	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}

	onSubmitSignIn = () => {
		fetch('http://test-tester.7e14.starter-us-west-2.openshiftapps.com/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				password: this.state.password	
			})
		})
		.then(response => response.json())
		.then(user => {
		 if (user.id) {
		 	this.props.loadUser(user)
			this.props.onRouteChange('home');
		}
	  })
	}

	render() {
		const { onRouteChange } = this.props;
		return (
			<article className="br3 shadow-5 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
			<div className="w-80 w-70-m w-60-l fr">
				<header className="pa3 bb b--light-gray relative">
					<h1 className="b ma0 f3">Register</h1>
					</header>
						<div id="register-form" action="" className="ph3 pt3 pb4 f7">
							<div className="mb3">
								<label htmlFor="" className="db ttu b lh-copy">Username</label>
								<input 
									name="username" 
									type="text" 
									className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" 
									onChange={this.onNameChange}
								/>
							</div>
							<div className="mb3">
								<label htmlFor="" className="db ttu b lh-copy">Email</label>
								<input 
									name="email" 
									type="email" 
									className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray"
									onChange={this.onEmailChange} 
								/>
							</div>
							<div className="mb4">
								<label htmlFor="" className="db ttu b lh-copy">Password</label>
								<input 
									name="password" 
									type="password" 
									className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" 
									onChange={this.onPasswordChange}
								/>
							</div>
							<div className="mb3 tc f6">
								Do you have an account? <p onClick={() => onRouteChange('signin')} className="blue ph1 pointer">Log In Now!</p>
							</div>
							<div className="tc">
								<input type="submit" value="Register" onClick={this.onSubmitSignIn} className="ttu bn pv3 ph4 f6 bg-blue white b br-pill pointer grow" />
							</div>
						</div>
					</div>
				</article>
			);
	}
}

export default Register;
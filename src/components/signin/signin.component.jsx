import React from "react";
import "./signin.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-buttom.component";

import { signInWithGoogle } from "../../firebase/firebase.util.js";

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();

		this.setState({ email: "", password: "" });
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
		console.log(this.state);
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your Email and Password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						label="email"
						handleChange={this.handleChange}
						value={this.state.email}
						required
					/>

					<FormInput
						name="password"
						type="password"
						label="password"
						handleChange={this.handleChange}
						value={this.state.password}
						required
					/>

					<div className="buttons">
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							{" "}
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;

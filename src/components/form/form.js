import React from "react";
import axios from "axios";
import Router from "next/router"
import "../modal/toggleModal";

class Form extends React.Component {
	state = {
		email: ""
	};

	formChangeHandler = e => {
		this.setState({
			email: e.target.value
		});
	};

	formSubmitHandler = async e => {
    e.preventDefault();

		if (this.state.email !== "") {
			await axios({
				method: "post",
				url: "http://api.test/api/subscribe_user",
				data: this.state,
				config: {
					headers: {
						"Access-Control-Allow-Origin": "*",
						"Content-Type": "application/json; charset=utf-8"
					}
				}
			})
				.then(function(response) {
          console.log(response);
          Router.push('/thank-you')
				})
				.catch(function(response) {
					console.error(response);
				});
		}
	};

	render() {
		return (
			<form className="flex" onSubmit={this.formSubmitHandler}>
				<input
					id="email"
					type="text"
					onChange={this.formChangeHandler}
					value={this.state.email}
					className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
					placeholder="your@mail.com"
				/>
				<button
          id="form-submit"
					className="md:px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r"
					type="submit">
					Start
				</button>
			</form>
		);
	}
}

export default Form;

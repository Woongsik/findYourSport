import React from "react";
import {Form,Container, Dropdown, Divider, Input, Button} from "semantic-ui-react";
import "./FindGuests.css";

class FindGuests extends React.Component {
		
	static defaultProps = {
        categoryOptions : [
            { key: 1, text: 'ALL', value: 'ALL' },
            { key: 2, text: 'BASKET BALL', value: 'BASKET BALL' },
            { key: 3, text: 'FOOT BALL', value: 'FOOT BALL' },
            { key: 4, text: 'BADMINTON', value: 'BADMINTON' },
            { key: 5, text: 'ICE HOCKEY', value: 'ICE HOCKEY' },
        ],
        regionOptions : [
            { key: 1, text: 'ALL', value: 'ALL' },
            { key: 2, text: 'Helsinki', value: 'Helsinki' },
            { key: 3, text: 'Espoo', value: 'Espoo' },
            { key: 4, text: 'Vantaa', value: 'Vantaa' },
        ],
        costOptions : [
            { key: 1, text: 'Hi, lets have fun', value: 'Hi, lets have fun' },
            { key: 2, text: 'Hi, open for everyone', value: 'Hi, open for everyone' },
            { key: 3, text: 'Hi, We need skillful players', value: 'Hi, We need skillful players' },
        ]

	}
	
	state = {	
		category: "",
		title:"",
		date: "", 
		region: "",
		address: "",
		amPm: "",
		hour:"",
		minute: "",
		players: "",
		duration:"", 
		cost: "",
		description:""
	}
	
	handleChange = (e, { value, name }) => this.setState({ [name]: value })
	handleSearchChange = (e, { name, searchQuery }) => this.setState({ [name]: searchQuery })
	handleInput = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		});
		console.log(this.state);
	} 
	
	render (){
		const {categoryOptions,regionOptions, costOptions } = this.props;
		return (
			<Container fluid className="findGuest">
				<Container className="header">
					<h1>Welcome to Sport Management App</h1>
					<h3>Please specify the Sport and players you need</h3>
				</Container>
				<Divider />
				<Container className="findGuestForm">
					<Form>
						<Form.Field inline>
							<label htmlFor="category">Category: </label>
							<Dropdown 
								name="category"
								className="findGuestForm_input"
								clearable selection search
								autoComplete="true"
								options={categoryOptions}
								onChange={this.handleChange}
								onSearchChange={this.handleSearchChange}
								value={this.state.category}
								placeholder="What Sports ..." 
							/>
						</Form.Field>

						<Form.Field inline>
							<label htmlFor="title">Title : </label>
							<Input name="title" placeholder='Describe the event shortly ...'
									type="text" onChange={this.handleInput} 
									className="title_input"
									required />

						</Form.Field>						
						
						<br/>
						<br/>
						<Form.Field inline>
							<label htmlFor="date">Date : </label>
							<Dropdown 
								name="date"
								className="findGuestForm_input"
								clearable selection search
								autoComplete="true"
								options={regionOptions}
								onChange={this.handleChange}
								onSearchChange={this.handleSearchChange}
								value={this.state.date}
								placeholder="When is the Date ..." 
							/>                             
						</Form.Field>
						<Form.Field inline>
							<label htmlFor="region">Region : </label>
							<Dropdown 
								name="region"
								className="findGuestForm_input"
								clearable selection search
								autoComplete="true"
								options={regionOptions}
								onChange={this.handleChange}
								onSearchChange={this.handleSearchChange}
								value={this.state.region}
								placeholder="Where is the Location..." 
							/>                             
						</Form.Field>
						<Form.Field inline>
							<label htmlFor="address">Address: </label>
							<Dropdown 
								name="address"
								className="findGuestForm_input"
								clearable selection search
								autoComplete="true"
								options={regionOptions}
								onChange={this.handleChange}
								onSearchChange={this.handleSearchChange}
								value={this.state.address}
								placeholder="The Address is ..." 
							/>
						</Form.Field> 						
						
						<Form.Field inline>
							<label htmlFor="time">Time: </label>
							<span name="time">
								<Button.Group>
									<Button attached="left" >
										<label className="smallLabel">
											<input name="amPm"
												type="radio"  
												onClick={this.handleInput}												
												value="am"
											/>
											<span>AM</span>
										</label>
									</Button>
									<Button attached="right">
										<label className="smallLabel">
											<input name="amPm"
													type="radio"  
													onClick={this.handleInput}
													value="pm"
												/>
											<span>PM</span>
										</label>
									</Button>
								</Button.Group>
								<Input name="hour"  label='Hour' placeholder='9' 
									type="number" onChange={this.handleInput}
									className="time_input" min="0" max="12"/>
								<Input name="minute"  label='Minutes' placeholder='30' 
									type="number" onChange={this.handleInput} 
									className="time_input" min="0" max="59"/>
							</span>
						</Form.Field> 

						<br />
						<br/>
						<Form.Field inline>
							<label htmlFor="players">Players : </label>
							<Dropdown 
								name="players"
								className="findGuestForm_input"
								clearable selection search
								autoComplete="true"
								options={costOptions}
								onChange={this.handleChange}
								onSearchChange={this.handleSearchChange}
								value={this.state.players}
								placeholder="How many Players :" 
							/>
						</Form.Field> 
						
						<Form.Field inline>
							<label htmlFor="duration">Duration: </label>
							<Dropdown 
								name="duration"
								className="findGuestForm_input"
								clearable selection search
								autoComplete="true"
								options={costOptions}
								onChange={this.handleChange}
								onSearchChange={this.handleSearchChange}
								value={this.state.duration}
								placeholder="How many Hours ..." 
							/>
						</Form.Field> 
						
						<br />
						<br/>
						<Form.Field inline>
							<label htmlFor="cost">Cost: </label>
							<Dropdown 
								name="cost"
								className="findGuestForm_input"
								clearable selection search
								autoComplete="true"
								options={costOptions}
								onChange={this.handleChange}
								onSearchChange={this.handleSearchChange}
								value={this.state.cost}
								placeholder="How much the Cost ..." 
							/>
						</Form.Field> 
						<br/>
						<br/>
						<Divider horizontal>Optional Information</Divider>
						<br />
						<br/>
						<Form.Field inline>
							<label htmlFor="contact">Contact: </label>
							<span name="contact">

								<Input name="mobile" label='Mobile' placeholder='0466298287'
									type="text" onChange={this.handleInput} 
									
									required />
							
								<Input name="email" label='Email' 
									onChange={this.handleInput}
									placeholder='myEmail@com' type="email" required/>
							</span>
						</Form.Field>

						<Form.Field inline>
							<label htmlFor="description">Description: </label>
							<textarea name="description" className="findGuestForm_input description_input"
								onChange={this.handleInput}
							></textarea>

							
						</Form.Field> 
						
						<Container className="submitButton">
							<Button color="blue" type="submit" >Post event !</Button>
							<Button >Cancel</Button>
						</Container>
					</Form>
				</Container>

			
			
			</Container>
		
		);
	}
}

export default FindGuests;
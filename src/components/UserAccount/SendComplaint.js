import React from 'react';
import axios from 'axios';
import Styled from 'styled-components';
import Form from '../../styled/Form';

const FormContainer = Styled.div`margin: 0; padding: 3rem`;

const styles = {
    messageDiv: {
        padding: "3rem",
        fontSize: "1.2rem",
        borderBottom: "1px solid rgba(189, 189, 192, 0.3)"
    },
    contentDiv: {
        height: "500px"
    }
}

export default class SendComplaint extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        axios
            .post('http://localhost:8000/api/complaint/send', {
                id: Date.now(),
                author: "vicalpa5@hotmail.com",
                user: this.refs.user.value,
                subject: this.refs.subject.value,
                complaint: this.refs.complaint.value,
                explanation: ""
            })
            .then(function(res) {
                console.log(res);
            })
            .catch(function(err) {
                console.log(err);
            });
    }

    render() {
        return (
            <FormContainer>
                <Form data-test="form" onSubmit={this.handleSubmit}>
                    <fieldset>
                        <label htmlFor="text">
                            <input
                                type="text"
                                placeholder="Enter email address of user you are complaining about"
                                ref="user"
                                required
                            />
                        </label>
                        <label htmlFor="text">
                            <input
                                type="text"
                                placeholder="Enter subject of your complaint"
                                ref="subject"
                                required
                            />
                        </label>
                        <label htmlFor="text">
                            <input
                                type="text"
                                placeholder="Write your complaint here"
                                ref="complaint"
                                required
                            />
                        </label>
                        <button type="submit">Send complaint</button>
                    </fieldset>
                </Form>
            </FormContainer>
        );
    }
}

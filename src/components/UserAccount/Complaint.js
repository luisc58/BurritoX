import React from 'react';
import Form from '../../styled/Form';
import Styled from 'styled-components';

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

export class Complaint extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        const data = {
            user: 'vicalpa5@hotmail.com',
            complaint: this.props.complaintId,
            explanation: this.refs.explanation.value
        };
        this.props.action(data);
    }

    render() {
        const { subject, content } = this.props;

        return (
            <div>
                <div style={ styles.messageDiv }>
                    <h2>{ subject }</h2>
                    <p>{ content }</p>
                </div>
                <FormContainer>
                    <Form data-test="form" onSubmit={this.handleSubmit}>
                        <fieldset>
                            <label htmlFor="text">
                                <input
                                    type="text"
                                    placeholder="Explain your complaint here"
                                    ref="explanation"
                                    required
                                />
                            </label>
                            <button type="submit">Explain complaint</button>
                        </fieldset>
                    </Form>
                </FormContainer>
            </div>
        );
    }
}

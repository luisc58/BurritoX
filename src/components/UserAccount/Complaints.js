import React from 'react';
import Styled from 'styled-components';
import { MenuItem } from './MenuItem';
import { ComplaintItem } from './ComplaintItem';
import { Complaint } from './Complaint';
import SendComplaint from './SendComplaint';
import axios from 'axios';

const StyledMain = Styled.div`
    display: grid;
    grid-template-columns: 15% 25% 60%;
`;

const StyledSideMenu = Styled.aside`
    background-color: rgba(139,139,139,0.2);
    height: 92vh;
    border-right: 1px solid rgba(189, 189, 192, 0.3);
    padding-top: 1rem;
	transition: width 0.3s;
    div {
        display: flex;
        padding: 1rem 1.3rem;
        font-size: 1rem;
        font-weight: bold;
        color: white;
    }
`;

const StyledComplaintList = Styled.aside`
    background-color: rgba(215,215,215,0.2);
    height: 92vh;
    border-right: 1px solid rgba(189,189,192,0.3);
    transition: width 0.3s;
    overflow-y: scroll;
    div {
        border-bottom: 1px solid rgba(189,189,192,0.3);
        font-size: 1rem;
        color: black;
        padding: 1.5rem 0 1.5rem 1rem;
    };
    p {
        margin: 0;
        font-size: 1.2rem;
    }
`;

const DismissMessage = Styled.div`
    height: 92vh;
    background-color: rgba(255, 255, 255, 1);

    p {
        padding: 10rem 0;
        text-align: center;
        font-weight: bold;
        font-size: 1.5rem;
        color: rgba(181,181,181, 1);
    };
`;

class Complaints extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            complaintsFetched: false,
            complaints: null,
            selectedComplaintItem: null
        };
        this.updateSelectedComplaintItem = this.updateSelectedComplaintItem.bind(this);
        this.renderSelectedComplaint = this.renderSelectedComplaint.bind(this);
    }

    fetchComplaints() {
        const { complaintsFetched } = this.state;

        if (!complaintsFetched) {
            axios
                .get("http://localhost:8000/api/vicalpa5@hotmail.com/complaints")
                .then(res => {
                    this.setState({
                        complaintsFetched: true,
                        complaints: res.data
                    });
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => {

                });
        }
    }

    updateSelectedComplaintItem(id) {
        this.setState({ selectedComplaintItem: id });
    }

    renderComplaintItems() {
        this.fetchComplaints();
        const { complaints } = this.state;
        let complaintList = [];

        if (complaints) {
            for (let i in this.state.complaints) {
                complaintList.push(
                    <ComplaintItem
                        key={'item-' + i}
                        data={{
                            id: i,
                            author: complaints[i].author,
                            subject: complaints[i].subject,
                            content: complaints[i].content
                        }}
                        action={this.updateSelectedComplaintItem}
                    />
                );
            }

        }

        return complaintList;
    }

    handleSubmit(data) {
        axios
            .post('http://localhost:8000/api/complaint/respond', {
                user: data.user,
                complaint: data.complaint,
                response: data.explanation
            })
            .then(function(res) {
                console.log(res)
            })
            .catch(function(err) {
                console.log(err);
            });
    }

    renderSelectedComplaint() {
        const { selectedComplaintItem, complaints } = this.state;


        if (selectedComplaintItem != null) {
            const selectedComplaint = complaints[selectedComplaintItem];
            return <Complaint
                        complaintId={selectedComplaintItem}
                        subject={selectedComplaint.subject}
                        content={selectedComplaint.content}
                        action={this.handleSubmit} />;
        } else {
            return (
                <DismissMessage>
                    <p>Nothing to show</p>
                </DismissMessage>
            );
        }
    }

    render() {

        return (
            <StyledMain>
                <StyledSideMenu>
                    <MenuItem name="Inbox" />
                </StyledSideMenu>
                <StyledComplaintList>
                    {this.renderComplaintItems()}
                </StyledComplaintList>
                {this.renderSelectedComplaint()}
            </StyledMain>
        );
    }
}

export default Complaints;

import React from 'react';
import Styled from 'styled-components';
import { MenuItem } from './MenuItem';
import { ComplaintItem } from './ComplaintItem';
import { Complaint } from './Complaint';

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
    };
    p {
        padding-left: 1.3rem;
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

let complaints = {
    "0": {
        "author": "transmitter@gmail.com",
        "subject": "Bad Sneakers",
        "content": "Praesentium ex at et vel labore optio sed. Vitae in aut. Quia odio architecto mollitia error. Consectetur eum rerum enim deleniti ad ut sequi molestiae atque. Tempora maxime ipsum error. Sit assumenda quia. Rerum incidunt accusamus sed et a recusandae qui. Consequuntur id aliquam consequatur est voluptatem. Ut est architecto reiciendis dignissimos ut non sint consequatur enim. Doloribus voluptatem cum. Numquam voluptatem illum quis odio occaecati est autem quas reprehenderit. Consectetur optio iusto dicta doloremque non ut totam et. Et deleniti aliquam qui voluptas id id ut voluptas vitae.",
        "explanation": ""
    },
    "1": {
        "author": "hard_drive@gmail.com",
        "subject": "Bad Hoodie",
        "content": "Vero eum nesciunt fugit numquam laudantium. Est sed tempora eos animi. Eos et dolores. Vitae repudiandae qui dignissimos ut. Debitis non occaecati. Et molestiae illo minus. Unde animi tempora ipsum incidunt excepturi ea voluptatum. Est voluptas consequatur odit iusto inventore et non. Et debitis quae dolores amet minima est nihil aut. Neque rerum magnam voluptatem dolore. Et sit voluptate quo quo sed ut quisquam at corrupti. Reiciendis illum cumque voluptas qui quaerat in aut.",
        "explanation": ""
    }
};

class Complains extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedComplaintItem: null,
        };
        this.updateSelectedComplaintItem = this.updateSelectedComplaintItem.bind(this);
        this.renderSelectedComplaint = this.renderSelectedComplaint.bind(this);
    }

    updateSelectedComplaintItem(id) {
        this.setState({ selectedComplaintItem: id });
    }

    renderComplaintItems(complaints) {
        let complaintList = [];
        for (let i in complaints) {
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

        return complaintList;
    }

    handleSubmit(explanation) {
        // handle this
    }

    renderSelectedComplaint(complaints) {
        const { selectedComplaintItem } = this.state;

        if (selectedComplaintItem != null) {
            const selectedComplaint = complaints[selectedComplaintItem];
            return <Complaint
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
                    <MenuItem name="Send Complaint" />
                </StyledSideMenu>
                <StyledComplaintList>
                    {this.renderComplaintItems(complaints)}
                </StyledComplaintList>
                {this.renderSelectedComplaint(complaints)}
            </StyledMain>
        );
    }
}

export default Complains;

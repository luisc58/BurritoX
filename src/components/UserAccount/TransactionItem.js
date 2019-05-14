import React from 'react';
import Styled from 'styled-components';
import { formatDate } from '../../utils/helpers';

const TransactionItemContainer = Styled.div`
    div {
        padding: 1rem 0;
        border-bottom: solid 1px rgba(215, 215, 215, 0.6);
    }

    p {
        text-align: left;
        font-size: 1.2rem;
        margin: 0 2rem;
    }

    .monetary {
        font-weight: bold;
    }
`;

function TransactionItem(props) {
    return (
        <TransactionItemContainer>
            <div>
                <p>{ props.data.item }</p>
                <p>{ formatDate(props.data.date) }</p>
                <p className="monetary">{ '$' + props.data.amount }</p>
            </div>
        </TransactionItemContainer>
    );
}

export default TransactionItem;

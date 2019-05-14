import React from 'react';
import Styled from 'styled-components';
import TransactionItem from './TransactionItem';

// date attribute must be a timestamp
const dummyTransactions = {
    "0": {
        "item": "MacBook Pro",
        "amount": 10000,
        "date": Date.now()
    },
    "1": {
        "item": "MacBook Air",
        "amount": 8000,
        "date": Date.now()
    },
    "2": {
        "item": "Mac Pro",
        "amount": 20000,
        "date": Date.now()
    },
    "3": {
        "item": "iMac",
        "amount": 15000,
        "date": Date.now()
    },
    "4": {
        "item": "iPhone X",
        "amount": 50000,
        "date": Date.now()
    }
};

const RootContainer = Styled.div`
    height: 92vh;
    overflow-y: scroll;

    h1 {
        text-align: center;
        margin: 2.5rem 0;
    }
`;

const TransactionsContainer = Styled.div`
    padding: 0 5rem;
`;

class Transactions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transactionsFetched: false
        }
    }

    fetchTransactions() {
        // implement this
    }

    renderTransactionHistory(transactions) {
        let transactionHistory = [];

        for (let transaction in transactions) {
            transactionHistory.push(<TransactionItem
                                        key={'transaction-' + transaction}
                                        data={transactions[transaction]} />);
        }

        return transactionHistory;
    }

    render() {
        return (
            <RootContainer>
                <h1>TRANSACTION HISTORY</h1>
                <TransactionsContainer>
                    { this.renderTransactionHistory(dummyTransactions) }
                </TransactionsContainer>
            </RootContainer>
        );
    }
}

export default Transactions;

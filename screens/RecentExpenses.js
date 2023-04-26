import React from 'react';
import { Text } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

const RecentExpenses = () => {
    return (
        <ExpensesOutput expensePeriod='Last 7 days'/>
    );
}

export default RecentExpenses;

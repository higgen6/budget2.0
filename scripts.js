// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to all calculator forms
    document.getElementById('loanCalculatorForm').addEventListener('submit', function(e) {
        e.preventDefault();
        calculateLoan();
    });

    document.getElementById('budgetTrackerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        calculateBudget();
    });

    document.getElementById('yearlyPlannerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        calculateYearly();
    });

    document.getElementById('creditCardForm').addEventListener('submit', function(e) {
        e.preventDefault();
        calculateCredit();
    });
});

// Loan Calculator Function
function calculateLoan() {
    try {
        const loanAmount = parseFloat(document.getElementById('loanAmount').value) || 0;
        const interestRate = parseFloat(document.getElementById('interestRate').value) || 0;
        const loanTerm = parseFloat(document.getElementById('loanTerm').value) || 0;

        if (loanAmount <= 0 || interestRate <= 0 || loanTerm <= 0) {
            alert('Please enter valid positive numbers for all fields');
            return;
        }

        const monthlyRate = (interestRate / 100) / 12;
        const totalPayments = loanTerm * 12;
        const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / 
                              (Math.pow(1 + monthlyRate, totalPayments) - 1);
        const totalCost = monthlyPayment * totalPayments;
        const totalInterest = totalCost - loanAmount;

        const resultsDiv = document.getElementById('loanResults');
        resultsDiv.innerHTML = `
            <h3>Loan Results</h3>
            <p>Monthly Payment: $${monthlyPayment.toFixed(2)}</p>
            <p>Total Interest: $${totalInterest.toFixed(2)}</p>
            <p>Total Cost: $${totalCost.toFixed(2)}</p>
        `;
    } catch (error) {
        console.error('Loan calculation error:', error);
        alert('Error calculating loan. Please check your inputs.');
    }
}

// Budget Tracker Function
function calculateBudget() {
    try {
        const income = parseFloat(document.getElementById('monthlyIncome').value) || 0;
        const housing = parseFloat(document.getElementById('housing').value) || 0;
        const food = parseFloat(document.getElementById('food').value) || 0;
        const transport = parseFloat(document.getElementById('transport').value) || 0;
        const utilities = parseFloat(document.getElementById('utilities').value) || 0;

        const totalExpenses = housing + food + transport + utilities;
        const remaining = income - totalExpenses;
        const savingsRate = (remaining / income) * 100;

        const resultsDiv = document.getElementById('budgetResults');
        resultsDiv.innerHTML = `
            <h3>Budget Results</h3>
            <p>Total Expenses: $${totalExpenses.toFixed(2)}</p>
            <p>Remaining: $${remaining.toFixed(2)}</p>
            <p>Savings Rate: ${savingsRate.toFixed(1)}%</p>
        `;
    } catch (error) {
        console.error('Budget calculation error:', error);
        alert('Error calculating budget. Please check your inputs.');
    }
}

// Yearly Planner Function
function calculateYearly() {
    try {
        const yearlyIncome = parseFloat(document.getElementById('yearlyIncome').value) || 0;
        const savingsGoal = parseFloat(document.getElementById('savingsGoal').value) || 0;

        if (yearlyIncome <= 0 || savingsGoal <= 0) {
            alert('Please enter valid positive numbers');
            return;
        }

        const monthlyIncome = yearlyIncome / 12;
        const monthlySavingsTarget = (yearlyIncome * (savingsGoal / 100)) / 12;

        const resultsDiv = document.getElementById('yearlyResults');
        resultsDiv.innerHTML = `
            <h3>Yearly Planning Results</h3>
            <p>Monthly Income: $${monthlyIncome.toFixed(2)}</p>
            <p>Monthly Savings Target: $${monthlySavingsTarget.toFixed(2)}</p>
            <p>Yearly Savings Target: $${(monthlySavingsTarget * 12).toFixed(2)}</p>
        `;
    } catch (error) {
        console.error('Yearly calculation error:', error);
        alert('Error calculating yearly plan. Please check your inputs.');
    }
}

// Credit Card Calculator Function
function calculateCredit() {
    try {
        const balance = parseFloat(document.getElementById('creditBalance').value) || 0;
        const apr = parseFloat(document.getElementById('creditInterest').value) || 0;
        const payment = parseFloat(document.getElementById('creditPayment').value) || 0;

        if (balance <= 0 || apr <= 0 || payment <= 0) {
            alert('Please enter valid positive numbers');
            return;
        }

        const monthlyRate = (apr / 100) / 12;
        let remainingBalance = balance;
        let months = 0;
        let totalInterest = 0;

        while (remainingBalance > 0 && months < 1200) {
            months++;
            const interest = remainingBalance * monthlyRate;
            totalInterest += interest;
            remainingBalance = remainingBalance + interest - payment;
        }

        const resultsDiv = document.getElementById('creditResults');
        resultsDiv.innerHTML = `
            <h3>Credit Card Payoff Results</h3>
            <p>Months to Pay Off: ${months}</p>
            <p>Total Interest: $${totalInterest.toFixed(2)}</p>
            <p>Total Payment: $${(balance + totalInterest).toFixed(2)}</p>
        `;
    } catch (error) {
        console.error('Credit card calculation error:', error);
        alert('Error calculating credit card payoff. Please check your inputs.');
    }
}

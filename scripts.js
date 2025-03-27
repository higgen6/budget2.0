function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    const term = parseFloat(document.getElementById('loanTerm').value) * 12;

    const monthlyPayment = (loanAmount * interestRate * Math.pow(1 + interestRate, term)) / (Math.pow(1 + interestRate, term) - 1);
    const totalInterest = monthlyPayment * term - loanAmount;

    document.getElementById('loanResults').innerHTML = `
        <h3>Results</h3>
        <p>Monthly Payment: $${monthlyPayment.toFixed(2)}</p>
        <p>Total Interest: $${totalInterest.toFixed(2)}</p>
        <p>Total Payment: $${(monthlyPayment * term).toFixed(2)}</p>
    `;
}

function calculateBudget() {
    const monthlyIncome = parseFloat(document.getElementById('monthlyIncome').value);
    const housing = parseFloat(document.getElementById('housing').value);
    const food = parseFloat(document.getElementById('food').value);
    const transport = parseFloat(document.getElementById('transport').value);
    const utilities = parseFloat(document.getElementById('utilities').value);

    const totalExpenses = housing + food + transport + utilities;
    const remainingIncome = monthlyIncome - totalExpenses;

    document.getElementById('budgetResults').innerHTML = `
        <h3>Results</h3>
        <p>Total Expenses: $${totalExpenses.toFixed(2)}</p>
        <p>Remaining Income: $${remainingIncome.toFixed(2)}</p>
        <p>Expense Ratio: ${((totalExpenses / monthlyIncome) * 100).toFixed(1)}%</p>
    `;
}

function calculateYearly() {
    const yearlyIncome = parseFloat(document.getElementById('yearlyIncome').value);
    const savingsGoal = parseFloat(document.getElementById('savingsGoal').value);

    const monthlyIncome = yearlyIncome / 12;
    const monthlySavings = (yearlyIncome * savingsGoal) / 100 / 12;

    document.getElementById('yearlyResults').innerHTML = `
        <h3>Results</h3>
        <p>Monthly Income: $${monthlyIncome.toFixed(2)}</p>
        <p>Monthly Savings: $${monthlySavings.toFixed(2)}</p>
        <p>Yearly Savings: $${(monthlySavings * 12).toFixed(2)}</p>
    `;
}

function calculateCredit() {
    const creditBalance = parseFloat(document.getElementById('creditBalance').value);
    const interestRate = parseFloat(document.getElementById('creditInterest').value) / 100 / 12;
    const minPayment = parseFloat(document.getElementById('creditPayment').value);

    let balance = creditBalance;
    let months = 0;
    let totalInterest = 0;

    while (balance > 0) {
        months++;
        const interest = balance * interestRate;
        const principal = minPayment - interest;
        totalInterest += interest;
        balance -= principal;
    }

    document.getElementById('creditResults').innerHTML = `
        <h3>Results</h3>
        <p>Months to Payoff: ${months}</p>
        <p>Total Interest Paid: $${totalInterest.toFixed(2)}</p>
        <p>Total Amount Paid: $${(creditBalance + totalInterest).toFixed(2)}</p>
    `;
}

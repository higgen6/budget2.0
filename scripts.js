// Tab Navigation
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        document.getElementById(button.dataset.tab).classList.add('active');
    });
});

// Monthly Budget Calculator (50/30/20 Rule)
function calculateMonthlyBudget() {
    // Get income values
    const salary = parseFloat(document.getElementById('salary').value) || 0;
    const otherIncome = parseFloat(document.getElementById('otherIncome').value) || 0;
    const totalIncome = salary + otherIncome;

    // Get expenses
    const housing = parseFloat(document.getElementById('housing').value) || 0;
    const utilities = parseFloat(document.getElementById('utilities').value) || 0;
    const groceries = parseFloat(document.getElementById('groceries').value) || 0;

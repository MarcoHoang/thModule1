class SavingsAccount {
    constructor(code, type, customerName, idCard, openingDate, amount) {
        this.code = code;
        this.type = type;
        this.customerName = customerName;
        this.idCard = idCard;
        this.openingDate = openingDate;
        this.amount = amount;
    }

    isValid() {
        return (
            this.code.length <= 5 &&
            this.type.length <= 10 &&
            this.customerName.length <= 30 &&
            typeof this.idCard === "number" &&
            !isNaN(new Date(this.openingDate).getTime()) &&
            typeof this.amount === "number"
        );
    }
}

let savingsAccounts = [
    new SavingsAccount('001', 'Ngan', 'Hoang', 123456789, '2024-01-01', 5000000),
    new SavingsAccount('002', 'Dai', 'Tam', 987654321, '2024-02-15', 3000000000000)
];

function addSavingsAccount(account) {
    for (let i = 0; i < savingsAccounts.length; i++) {
        if (savingsAccounts[i].code === account.code) {
            alert("Tài khoản đã tồn tại. Hãy nhập lại!");
            return;
        }
    }

    if (!account.isValid()) {
        alert("Lỗi dữ liệu. Hãy nhập lại!");
        return;
    }

    savingsAccounts.push(account);
    alert("Tài khoản đã được thêm vào danh sách!");
    displayAccounts();
}

function displayAccounts() {
    const tableBody = document.getElementById('accountsTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; 

    savingsAccounts.forEach(account => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${account.code}</td>
            <td>${account.type}</td>
            <td>${account.customerName}</td>
            <td>${account.idCard}</td>
            <td>${account.openingDate}</td>
            <td>${account.amount}</td>
            <td><button onclick="deleteSavingsAccount('${account.code}')">Delete</button></td>
        `;

        tableBody.appendChild(row);
    });
}

function deleteByCode() {
    const codeToDelete = document.getElementById('deleteCode').value.trim();  

    if (codeToDelete === "") {
        alert("Please enter an account code.");
        return;
    }

    const index = savingsAccounts.findIndex(a => a.code === codeToDelete);  
    if (index !== -1) {
        savingsAccounts.splice(index, 1);  
        alert("Account deleted.");
        displayAccounts();  
    } else {
        alert("Account not found.");
    }

    document.getElementById('deleteCode').value = "";
}

document.getElementById('addAccountForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const code = document.getElementById('code').value;
    const type = document.getElementById('type').value;
    const customerName = document.getElementById('customerName').value;
    const idCard = Number(document.getElementById('idCard').value);
    const openingDate = document.getElementById('openingDate').value;
    const amount = Number(document.getElementById('amount').value);

    const newAccount = new SavingsAccount(code, type, customerName, idCard, openingDate, amount);
    addSavingsAccount(newAccount);

    document.getElementById('addAccountForm').reset();
});
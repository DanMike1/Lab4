let abebe = {
    accountNo: "1234",
    Password: "Pass",
    Balance: "3000"
}
let belete = {
    accounNo: "2345",
    Password: "asset",
    Balance: "2900"
}

function checkBal() {
    if (kuter == "1") {
        alert(abebe.Balance)
    } else if (kuter == "2") {
        alert(belete.Balance)

    } else {
        alert("NO ENTRY!")
    }
}

function trans() {

    let amount = parseFloat(prompt("How much would u like to transfer?"));
    if (kuter == "1") {

        if (abebe.Balance - amount < 0) {
            alert("No money, No way");
        } else {
            abebe.Balance -= amount;
            belete.Balance += amount;
            alert("A transfer of " + amount + " amount has been made! to Belete with account no." + belete.accounNo);
        }

    } else if (kuter == "2") {
        if (belete.Balance - amount < 0) {
            alert("No money, No way");
        } else {
            belete.Balance -= amount;
            amount.Balance += amount;
            alert("A transfer of " + amount + " amount has been made! to Abebe with account no." + abebe.accountNo);
        }


    }
}

function withDraw() {
    let amount = parseFloat(prompt("How much would u like to withdraw from your account"));
    if (amount > 50 && amount < 3000) {
        if (kuter == "1") {
            abebe.Balance = abebe.Balance - amount;
            alert("Your balance is: " + abebe.Balance +" after withdrawing  "+ amount +" in cash.")
    
        } else if (kuter == "2") {
            belete.Balance = belete.Balance - amount;
            alert("Your balance is: " + belete.Balance +" after withdrawing  "+ amount +" in cash.")
            
        } else {
            alert("Can't Withdraw")
        }

}
}

function depo() {
    let amount = parseFloat(prompt("How much would u like to deposit to your account"));
    if (amount > 10) {
        if (kuter == "1") {
            abebe.Balance = abebe.Balance + amount;
            alert("Your balance is: " + abebe.Balance +" in cash.")
        } else if (kuter == "2") {
            belete.Balance = belete.Balance + amount;
            alert("Your balance is: " + belete.Balance +" in cash.")
        } else {
            alert("Can't deposit")
        }
    } else {
        alert("Not enough Money to deposit");
    }
}



(function choice() {
    while (true){

    megebiya = prompt("Insert account number")
    mekolefiya = prompt("Insert password")
    kuter = "0"
    if (megebiya == abebe.accountNo && mekolefiya == abebe.Password) {
        
        kuter = "1"
        Mercha = parseInt(prompt("Choose the Desired Option: 1 for Check balance, 2 for Transfer, 3 for Deposit, 4 for Withdrawal"))

        if (Mercha == 1) {


            checkBal()
        } else if (Mercha == 2) {

            trans()
        } else if (Mercha == 3) {
            depo()
        } else if (Mercha == 4) {
            withDraw()
        } else {
            alert("Wrong input")
            break;
        }

    } else if (megebiya == belete.accounNo && mekolefiya == belete.Password) {
        kuter = "2"

        Mercha = parseInt(prompt("Choose the Desired Option: 1 for Check balance, 2 for Transfer, 3 for Deposit, 4 for Withdrawal"))

        if (Mercha == 1) {


            checkBal()
        } else if (Mercha == 2) {

            trans()
        } else if (Mercha == 3) {
            depo()
        } else if (Mercha == 4) {
            withDraw()
        } else {
            alert("Wrong input")
            break;
        }

    } else {
        alert("Wrong Credentials")
        choice()

    }
}

})();
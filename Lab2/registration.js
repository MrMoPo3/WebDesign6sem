class UserModel {
    validateUserData(userData) {
        const { name, password, email, dob } = userData;

        if (name.length < 4 || password.length < 4) {
            alert("Login and password must contain at least 4 characters!");
            return false;
        }

        if (!this.isValidEmail(email)) {
            alert("Please enter a valid email address!");
            return false;
        }

        if (!dob) {
            alert("Please enter your date of birth!");
            return false;
        }

        const today = new Date().toISOString().split("T")[0];
        if (dob > today) {
            alert("Enter a correct date of birth that does not exceed the current date!");
            return false;
        }

        return true;
    }

    isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    checkExistingAccount(userData) {
        const { email, name } = userData;
        const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

        const existingAccount = accounts.find(
            (account) => account.email === email || account.name === name
        );

        if (existingAccount) {
            alert(
                "An account with this email address or username already exists!"
            );
            return false;
        }

        return true;
    }

    saveUserData(userData) {
        const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
        accounts.push(userData);
        localStorage.setItem("accounts", JSON.stringify(accounts));
    }

    setCurrentAccount(account) {
        localStorage.setItem("currentAccount", JSON.stringify(account));
    }
}

class UserView {
    getUserData() {
        return {
            name: document.getElementById("inputName").value,
            password: document.getElementById("inputPassword").value,
            email: document.getElementById("inputEmail").value,
            dob: document.getElementById("inputDOB").value,
            surname: document.getElementById("inputSurname").value,
            sex: document.getElementById("inputSex").value,
        };
    }

    showRegistrationSuccessMessage() {
        alert("You have successfully registered!");
    }

    redirectToMainPage() {
        window.location.href = "../index.html";
    }
}

class UserController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.registrationButton = document.getElementById("registrationButton");
        this.registrationButton.addEventListener("click", (event) => this.handleSignUp(event));
    }

    handleSignUp(event) {
        event.preventDefault();
        const userData = this.view.getUserData();
        this.saveDataToLocalStorage(userData);
    }

    saveDataToLocalStorage(userData) {
        if (!this.model.validateUserData(userData)) {
            return;
        }

        if (!this.model.checkExistingAccount(userData)) {
            return;
        }

        this.model.saveUserData(userData);
        this.view.showRegistrationSuccessMessage();
        this.view.redirectToMainPage();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const model = new UserModel();
    const view = new UserView();
    const controller = new UserController(model, view);
});

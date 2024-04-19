class UserModel {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    authenticateUser(userData) {
        const { email, password } = userData;
        const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

        const user = accounts.find(
            (account) => account.email === email && account.password === password
        );

        if (!user) {
            alert("Wrong login or password!");
            return false;
        }
            return true;
       
    }
}

class UserView {
    constructor() {
        this.emailInput = document.getElementById("inputEmail");
        this.passwordInput = document.getElementById("inputPassword");
        this.signUpButton = document.querySelector("button.btn-primary");
    }

    showRegistrationSuccessMessage() {
        alert("You have successfully signed !");
    }

    redirectToMainPage() {
        window.location.href = "../index.html";
    }

    getUserData() {
        return {
            email: document.getElementById("inputEmail").value,
            password: document.getElementById("inputPassword").value,
        };
    }
}

class UserController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.signUpButton.addEventListener("click", this.handleSignUp.bind(this));
    }

    login() {
        const userData = this.view.getUserData();

        if (!this.model.authenticateUser(userData)) {
            return;
        }

        this.view.showRegistrationSuccessMessage();
        this.view.redirectToMainPage();
    }

    handleSignUp(event) {
        event.preventDefault();
        this.login();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const model = new UserModel();
    const view = new UserView();
    const controller = new UserController(model, view);
});
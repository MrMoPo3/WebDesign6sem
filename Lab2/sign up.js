class UserModel {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}

class UserView {
    constructor() {
        this.emailInput = document.getElementById("exampleInputEmail1");
        this.passwordInput = document.getElementById("exampleInputPassword1");
        this.signUpButton = document.querySelector("button.btn-primary");
    }

    getUserInput() {
        const email = this.emailInput.value;
        const password = this.passwordInput.value;
        return new UserModel(email, password);
    }

    showRegistrationSuccessMessage() {
        alert("You have successfully signed !");
    }

    redirectToMainPage() {
        window.location.href = "../index.html";
    }
}

class UserController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.signUpButton.addEventListener("click", this.handleSignUp.bind(this));
    }

    handleSignUp(event) {
        event.preventDefault();
        const user = this.view.getUserInput();
        this.view.showRegistrationSuccessMessage();
        this.view.redirectToMainPage();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const model = new UserModel();
    const view = new UserView();
    const controller = new UserController(model, view);
});
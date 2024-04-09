// Model: Handles data and business logic
class UserModel {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}

// View: Handles the UI and DOM manipulation
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
        window.location.href = "main.html";
    }
}

// Controller: Handles user interactions and application logic
class UserController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.signUpButton.addEventListener("click", this.handleSignUp.bind(this));
    }

    handleSignUp(event) {
        event.preventDefault();
        const user = this.view.getUserInput();
        // Here you can perform further validations if needed
        this.view.showRegistrationSuccessMessage();
        this.view.redirectToMainPage();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const model = new UserModel();
    const view = new UserView();
    const controller = new UserController(model, view);
});

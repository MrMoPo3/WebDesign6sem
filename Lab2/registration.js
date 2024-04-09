// Model: Handles data and business logic
class UserModel {
    constructor(name, surname, email, password) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
    }
}

// View: Handles the UI and DOM manipulation
class UserView {
    constructor() {
        this.nameInput = document.getElementById("inputName");
        this.surnameInput = document.getElementById("inputSurname");
        this.emailInput = document.getElementById("inputEmail4");
        this.passwordInput = document.getElementById("inputPassword4");
        this.signUpButton = document.querySelector("button.btn-primary");
    }

    getUserInput() {
        const name = this.nameInput.value;
        const surname = this.surnameInput.value;
        const email = this.emailInput.value;
        const password = this.passwordInput.value;
        return new UserModel(name, surname, email, password);
    }

    showRegistrationSuccessMessage() {
        alert("You have successfully registered!");
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

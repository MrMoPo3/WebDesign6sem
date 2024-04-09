// Модель
class SurveyModel {
    constructor(form) {
        this.form = form;
    }

    getAnswers() {
        const elements = this.form.elements;
        const answers = {};

        for (const element of elements) {
            if (element.tagName === "SELECT" || (element.tagName === "INPUT" && (element.type === "checkbox" || element.type === "radio"))) {
                if (element.type === "checkbox" || element.type === "radio") {
                    if (element.checked) {
                        if (!answers[element.name]) {
                            answers[element.name] = [];
                        }
                        answers[element.name].push(element.value);
                    }
                } else {
                    answers[element.name] = element.value;
                }
            }
        }

        return answers;
    }
}


// Вид
class SurveyView {
    constructor() { }

    displayResults(answers) {
        let resultString = "Your answers:\n";
        for (const key in answers) {
            if (answers.hasOwnProperty(key)) {
                resultString += key + ": " + (Array.isArray(answers[key]) ? answers[key].join(", ") : answers[key]) + "\n";
            }
        }
        alert(resultString);
    }
}

// Контролер
class SurveyController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.init();
    }

    init() {
        const resultButton = this.model.form.querySelector("button[type='button']");
        if (resultButton) {
            resultButton.addEventListener("click", () => {
                const answers = this.model.getAnswers();
                this.view.displayResults(answers);
            });
        }
    }
}

// Ініціалізація
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("lifestyleSurveyForm");
    const model = new SurveyModel(form);
    const view = new SurveyView();
    const controller = new SurveyController(model, view);
});

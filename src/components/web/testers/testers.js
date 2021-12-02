class TestersBaby extends HTMLElement {
    constructor () {
        super();
        this.innerHTML = `
        Hey Baby
        `
    }
};

customElements.define('testers-baby');
export const Tip = (tip) => {
    return `
        <section class="tipCard">
            <div class="tip__text">${tip.text}</div>
            <div class="tip__author">${tip.author}</div>
            <div class="tip__location">${tip.location}</div>
        </section>
    `
}
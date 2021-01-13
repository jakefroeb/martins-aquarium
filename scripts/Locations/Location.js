export const Location = (location) => {
    return `
        <section class="locationCard">
            <div class="location__name">${location.name}</div>
            <div class="location__date">${location.date}</div>
        </section>
    `
}
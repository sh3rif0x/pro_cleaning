export function initTeam() {
    const starsBoxes = document.querySelectorAll(".service-list .star-icons");

    console.log("Found:", starsBoxes.length);

    starsBoxes.forEach(starsBox => {
        let icons = "";

        for (let i = 0; i < 5; i++) {
            icons += `<img src="./assets/Vector(3).svg" alt="" class="star-icons-img">`;
        }

        starsBox.innerHTML = icons;
    });
}
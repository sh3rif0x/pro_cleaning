import { initHeader } from "./header.js"
import { initTestimonials } from "./testimonials.js"
import { initTeam } from "./team.js"

async function loadSections() {
    try {
        const files = [

            ["header", "sections/header.html"],

            ["home", "sections/home.html"],

            ["about", "sections/about.html"],

            ["services", "sections/services.html"],

            ["pricing", "sections/pricing.html"],

            ["team", "sections/team.html"],

            ["testimonials", "sections/testimonials.html"],

            ["blog", "sections/blog.html"],

            ["contact", "sections/contact.html"],

            ["footer", "sections/footer.html"]

        ];

        // Promise.all creates more than promise and we handle them at once inside the Promise.all  [promise1,promise2......]

        await Promise.all(
            files.map(async([id, file]) => {

                const response = await fetch(file);

                if (!response.ok) {
                    throw new Error(`Failed to load ${file}`);
                }

                document.getElementById(id).innerHTML = await response.text()

            })
        );

        console.log("All files loaded");
        initHeader()
        initTeam()
        initTestimonials()
    } catch (err) {
        console.log("error while loading files")
    }

}
loadSections()
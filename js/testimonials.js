export function initTestimonials() {

    const testimonials = [

        {
            name: "Robert Fox",
            role: "Business Man",
            image: "./assets/1.png",
            rating: 5,
            text: "Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service."
        },

        {
            name: "Jane Cooper",
            role: "Designer",
            image: "./assets/22.png",
            rating: 5,
            text: "Amazing cleaning service! Everything was perfectly organized and spotless. The team was friendly, professional, and very careful."
        },

        {
            name: "Cody Fisher",
            role: "Manager",
            image: "./assets/33.png",
            rating: 4,
            text: "Very professional service from start to finish. They arrived on time and did an excellent job cleaning my entire home."
        },

        {
            name: "Esther Howard",
            role: "Business Woman",
            image: "./assets/44.png",
            rating: 5,
            text: "I am extremely happy with the results. My house looks completely different and everything was cleaned with great attention to detail."
        },

        {
            name: "Wade Warren",
            role: "Entrepreneur",
            image: "./assets/1.png",
            rating: 5,
            text: "Great experience! The staff were polite, fast, and professional. I will definitely use their cleaning services again."
        }

    ];


    const testimonial =
        document.querySelector(".testimonial-right");

    const increaseBtn =
        document.querySelector(".increase-btn");

    const decreaseBtn =
        document.querySelector(".decrease-btn");


    let index = 0;


    function showTestimonial() {

        const test = testimonials[index];

        testimonial.innerHTML = `

            <div class="persona-bg">

                <img
                    src="${test.image}"
                    alt="${test.name}"
                >

            </div>


            <div>

                <h4>
                    ${test.name}
                </h4>

                <p class="testimonial-role">
                    ${test.role}
                </p>

                <div class="testimonial-rating">
                    ${"★".repeat(test.rating)}
                </div>

                <p class="testimonial-text">
                    ${test.text}
                </p>

            </div>

        `;
    }


    showTestimonial();


    /* =========================
       RIGHT BUTTON
    ========================= */

    increaseBtn.addEventListener("click", () => {

        index++;

        if (index >= testimonials.length) {
            index = 0;
        }

        showTestimonial();

    });


    /* =========================
       LEFT BUTTON
    ========================= */

    decreaseBtn.addEventListener("click", () => {

        index--;

        if (index < 0) {
            index = testimonials.length - 1;
        }

        showTestimonial();

    });

}
const pricingData = [{
        name: "BASIC PACKAGE",
        monthly: "59.00",
        yearly: "590.00",

        monthlyFeatures: [
            "Dusting of all surfaces",
            "Sweeping and mopping floors",
            "Vacuuming carpets and rugs",
            "Cleaning of kitchen surfaces",
            "Cleaning of bathroom surfaces",
            "Emptying trash bins"
        ],

        yearlyFeatures: [
            "Dusting of all surfaces",
            "Sweeping and mopping floors",
            "Vacuuming carpets and rugs",
            "Cleaning of kitchen surfaces",
            "Cleaning of bathroom surfaces",
            "Emptying trash bins"
        ],

        buttonClass: ""
    },

    {
        name: "ENTERPRISE PACKAGE",
        monthly: "69.00",
        yearly: "690.00",

        monthlyFeatures: [
            "All services in the Basic Plan",
            "Detailed dusting",
            "Wiping down of kitchen appt",
            "Cleaning inside the microwave",
            "Changing bed linens",
            "Spot cleaning walls and doors"
        ],

        yearlyFeatures: [
            "All services in the Basic Plan",
            "Detailed dusting",
            "Wiping down of kitchen appt",
            "Cleaning inside the microwave",
            "Changing bed linens",
            "Spot cleaning walls and doors"
        ],

        buttonClass: "green-btn"
    },

    {
        name: "PREMIUM PACKAGE",
        monthly: "99.00",
        yearly: "990.00",

        monthlyFeatures: [
            "All services in the Clean Plan",
            "Deep cleaning of kitchen appt",
            "Baseboards, door frames, & vents",
            "Organization of closets pantries",
            "Carpet, upholstery spot cleaning",
            "Detailed bathroom cleaning"
        ],

        yearlyFeatures: [
            "All services in the Clean Plan",
            "Deep cleaning of kitchen appt",
            "Baseboards, door frames, & vents",
            "Organization of closets pantries",
            "Carpet, upholstery spot cleaning",
            "Detailed bathroom cleaning"
        ],

        buttonClass: ""
    }
];


export function initPricing() {

    const pricingPlans = document.querySelector(".pricing-plans");
    const monthlyBtn = document.querySelector(".monthly");
    const yearlyBtn = document.querySelector(".yearly");

    if (!pricingPlans || !monthlyBtn || !yearlyBtn) {
        return;
    }


    function renderPricing(type = "monthly") {

        pricingPlans.innerHTML = pricingData.map((plan, index) => {

                    const price = plan[type];
                    const features = plan[`${type}Features`];

                    const packageClass = [
                        "basic-package",
                        "enterprise-package",
                        "premium-package"
                    ][index];

                    return `
                <div class="${packageClass}">

                    <h3>${plan.name}</h3>

                    <div class="price-box">
                        <strong>$ ${price}</strong>
                        <span>/ ${type === "monthly" ? "Monthly" : "Yearly"}</span>
                    </div>

                    <ul>
                        ${features.map(feature => `
                            <li>${feature}</li>
                        `).join("")}
                    </ul>

                    <button class="${plan.buttonClass}">
                        Book Now
                    </button>

                </div>
            `;

        }).join("");
    }


    monthlyBtn.addEventListener("click", () => {

        monthlyBtn.classList.add("active");
        yearlyBtn.classList.remove("active");

        renderPricing("monthly");
    });


    yearlyBtn.addEventListener("click", () => {

        yearlyBtn.classList.add("active");
        monthlyBtn.classList.remove("active");

        renderPricing("yearly");
    });


    renderPricing("monthly");
}
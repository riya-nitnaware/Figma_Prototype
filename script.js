/* =========================================
   STYLEFIG JAVASCRIPT
   ========================================= */


/* =========================================
   DELETE FEATURE CARD
   ========================================= */

function attachDeleteButtons() {

    const deleteButtons =
        document.querySelectorAll(".delete-btn");

    deleteButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            const card =
                button.closest(".feature-card");

            if (card) {
                card.remove();
            }

        });

    });

}


/* Run delete functionality */
attachDeleteButtons();


/* =========================================
   ADD FEATURE CARD
   ========================================= */

const addCardBtn =
    document.getElementById("addCardBtn");

const cardsContainer =
    document.getElementById("cardsContainer");


if (addCardBtn && cardsContainer) {

    addCardBtn.addEventListener("click", function() {

        const newCard =
            document.createElement("article");

        newCard.className =
            "feature-card";

        newCard.innerHTML = `
            <div class="card-content">

                <h3>New Feature</h3>

                <p>
                    This feature card was added
                    dynamically using JavaScript.
                </p>

            </div>

            <button
                class="delete-btn"
                type="button">
                Delete
            </button>
        `;

        cardsContainer.appendChild(newCard);

        /* Attach delete event to new card */
        const deleteButton =
            newCard.querySelector(".delete-btn");

        deleteButton.addEventListener("click", function() {

            newCard.remove();

        });

    });

}


/* =========================================
   MOBILE NAVIGATION
   ========================================= */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function() {

        const isOpen =
            navLinks.classList.toggle("active");

        menuBtn.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    /* Close menu after clicking a link */

    const navigationLinks =
        navLinks.querySelectorAll("a");

    navigationLinks.forEach(function(link) {

        link.addEventListener("click", function() {

            navLinks.classList.remove("active");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================================
   DARK / LIGHT MODE
   ========================================= */

const themeToggle =
    document.getElementById("themeToggle");


function updateThemeButton() {

    if (!themeToggle) {
        return;
    }

    if (document.body.classList.contains("dark-mode")) {

        themeToggle.textContent =
            "Light";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

    } else {

        themeToggle.textContent =
            "Dark";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

    }

}


/* Load saved theme */

const savedTheme =
    localStorage.getItem("stylefig-theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

}


updateThemeButton();


/* Change theme */

if (themeToggle) {

    themeToggle.addEventListener("click", function() {

        document.body.classList.toggle("dark-mode");

        const isDark =
            document.body.classList.contains("dark-mode");

        localStorage.setItem(
            "stylefig-theme",
            isDark ? "dark" : "light"
        );

        updateThemeButton();

    });

}


/* =========================================
   INLINE JAVASCRIPT DEMONSTRATION
   ========================================= */

function showWelcomeMessage() {

    alert(
        "Welcome to StyleFig. Start creating your modern website."
    );

}


/* =========================================
   CONTACT FORM
   ========================================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const message =
                document.getElementById("message").value.trim();


            if (!name || !email || !message) {

                alert(
                    "Please fill in all fields."
                );

                return;
            }


            alert(
                "Thank you, " +
                name +
                ". Your message has been submitted."
            );


            contactForm.reset();

        }
    );

}


/* =========================================
   DOWNLOAD PAGE AS PNG
   ========================================= */

const pngBtn =
    document.getElementById("pngBtn");


if (pngBtn) {

    pngBtn.addEventListener("click", function() {

        if (typeof html2canvas === "undefined") {

            alert(
                "Download library is not available."
            );

            return;
        }


        html2canvas(document.body, {

            useCORS: true,

            backgroundColor:
                getComputedStyle(document.body)
                    .getPropertyValue("--background")

        }).then(function(canvas) {

            const link =
                document.createElement("a");

            link.download =
                "stylefig-website.png";

            link.href =
                canvas.toDataURL("image/png");

            link.click();

        });

    });

}


/* =========================================
   DOWNLOAD PAGE AS JPG
   ========================================= */

const jpgBtn =
    document.getElementById("jpgBtn");


if (jpgBtn) {

    jpgBtn.addEventListener("click", function() {

        if (typeof html2canvas === "undefined") {

            alert(
                "Download library is not available."
            );

            return;
        }


        html2canvas(document.body, {

            useCORS: true,

            backgroundColor:
                getComputedStyle(document.body)
                    .getPropertyValue("--background")

        }).then(function(canvas) {

            const link =
                document.createElement("a");

            link.download =
                "stylefig-website.jpg";

            link.href =
                canvas.toDataURL(
                    "image/jpeg",
                    0.95
                );

            link.click();

        });

    });

}
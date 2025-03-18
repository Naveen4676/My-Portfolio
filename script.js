document.addEventListener("DOMContentLoaded", function () {
    // Certificates Gallery
    const certificates = [
        "certificate1.png", "Certificate2.png", "certificate3.png", 
        "certificate4.png", "certificate5.png", "certificate6.jpg", 
        "certificate7.png", "certificate8.png"
    ];

    const gallery = document.getElementById("gallery");
    if (gallery) {
        certificates.forEach(cert => {
            let img = document.createElement("img");
            img.src = cert;
            img.alt = "Certificate";
            img.onclick = () => openModal(cert);
            gallery.appendChild(img);
        });
    }

    function openModal(src) {
        document.getElementById("modal").style.display = "flex";
        document.getElementById("modalImg").src = src;
        document.getElementById("downloadBtn").href = src;
    }

    function closeModal() {
        document.getElementById("modal").style.display = "none";
    }

    // Smooth Scrolling Fix
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const navbarHeight = document.querySelector("header").offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 10; // Ensures proper alignment
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Show Project Details
    function showProjectDetails(projectId) {
        document.querySelectorAll(".project-details").forEach(project => {
            project.style.display = "none";
        });

        const selectedProject = document.getElementById(projectId);
        if (selectedProject) {
            selectedProject.style.display = "block";
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Close menu when clicking a link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
});



// Dinamik Saat Fonksiyonu
function updateDateTime() {
    const datetimeElement = document.getElementById('datetime');
    const currentDate = new Date();
    const formattedTime = currentDate.toLocaleTimeString('tr-TR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
    datetimeElement.textContent = formattedTime;
}

setInterval(updateDateTime, 1000);
updateDateTime(); 

// Form Doğrulama
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
            const formMessage = document.getElementById("formMessage");

            // Basit doğrulama
            if (!name || !email || !message) {
                formMessage.textContent = "Lütfen tüm alanları doldurun!";
                formMessage.style.color = "red";
            } else if (!/\S+@\S+\.\S+/.test(email)) {
                formMessage.textContent = "Geçerli bir e-posta adresi girin!";
                formMessage.style.color = "red";
            } else {
                formMessage.textContent = "Mesaj başarıyla gönderildi!";
                formMessage.style.color = "green";
                contactForm.reset();
            }
        });
    }

    // Biyografiyi Göster/Gizle Fonksiyonu
    const toggleButton = document.getElementById("toggleButton");
    if (toggleButton) {
        toggleButton.addEventListener("click", toggleBio);
    }

    // Projeleri Filtreleme Fonksiyonu
    const filterButtons = document.querySelectorAll(".filter-buttons button");
    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            const category = this.getAttribute("onclick").match(/'([^']+)'/)[1];
            filterProjects(category);
        });
    });
});

// Biyografiyi Göster/Gizle Fonksiyonu
function toggleBio() {
    const moreText = document.getElementById("moreText");
    const toggleButton = document.getElementById("toggleButton");

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "block";
        toggleButton.textContent = "Daha Az ";
    } else {
        moreText.style.display = "none";
        toggleButton.textContent = "Daha Fazlası";
    }
}

// Projeleri Filtreleme Fonksiyonu
function filterProjects(category) {
    const projects = document.querySelectorAll(".project");
    projects.forEach((project) => {
        if (category === "all" || project.dataset.category === category) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}

// Modalı açma
function openModal(imageSrc, description) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    
    modal.style.display = 'flex'; // Modalı göster
    modalImage.src = imageSrc;
    modalDescription.textContent = description;
}

// Modalı kapama
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Modalı gizle
}

// Modal dışında tıklanırsa kapatma
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

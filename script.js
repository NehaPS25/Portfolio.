
    
  (function(){
    // Initialize EmailJS with your Public Key
    emailjs.init("UeBAQE1R5a7EJ-_hb"); 
  })();

  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_56xp38j", "template_pjb9o36", this)
      .then(() => {
        alert("✅ Message Sent Successfully!");
        this.reset(); // clear the form
      }, (error) => {
        alert("❌ Failed to send message. " + JSON.stringify(error));
      });
  });
  
    // Sidebar Navigation
    const navLinks = document.querySelectorAll('.sidebar .nav-link');
    const sections = document.querySelectorAll('.section');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        sections.forEach(s => { s.classList.remove('active'); s.style.display = "none"; });
        this.classList.add('active');
        const target = this.getAttribute('data-target');
        const section = document.getElementById(target);
        section.style.display = "block";
        setTimeout(() => section.classList.add('active'), 50);
      });
    });

    // Typed.js
    new Typed('.typed-text', {
      strings: ["Full Stack Developer", "Web Developer", "Frontend Developer", "Tech Enthusiast"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true
    });

    // Download Resume PDF
document.getElementById("downloadResume").addEventListener("click", function () {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF("p", "mm", "a4");

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  let cursorY = margin;

  // === Page break helper ===
  function checkPageBreak(extraHeight = 12) {
    if (cursorY + extraHeight > pageHeight - margin) {
      doc.addPage();
      cursorY = margin;
    }
  }

  // === Section divider ===
  function drawLine() {
    doc.setDrawColor(150);
    doc.setLineWidth(0.2);
    doc.line(margin, cursorY, pageWidth - margin, cursorY);
    cursorY += 6;
    checkPageBreak();
  }

  // === HEADER ===
  const img = new Image();
  img.src = "pic.jpg"; // photo
  img.onload = function () {
    doc.addImage(img, "JPEG", pageWidth - 50, margin, 30, 35);

    doc.setFont("times", "bold");
    doc.setFontSize(16);
    doc.text("Neha Shinde", margin, cursorY + 10);

    doc.setFont("times", "normal");
    doc.setFontSize(11);
    doc.text("Email: nehashinde8525@gmail.com | Phone: +91 8652120119", margin, cursorY + 18);
    cursorY += 40;
    checkPageBreak();

    // === OBJECTIVE ===
    doc.setFont("times", "bold"); doc.setFontSize(13);
    doc.text("Objective", margin, cursorY);
    cursorY += 8;
    doc.setFont("times", "normal"); doc.setFontSize(11);
    let objective = "I would love to be a part of an organization that will give me a platform to utilize my technical, communication and leadership skills, enrich my knowledge for the development of organization without overlooking basic values of life and wherein I can work with certainty, energy and be better than the best.";
    let wrappedObj = doc.splitTextToSize(objective, pageWidth - 2 * margin);
    wrappedObj.forEach(line => {
      checkPageBreak();
      doc.text(line, margin, cursorY);
      cursorY += 6;
    });
    drawLine();

    // === SKILLS ===
    doc.setFont("times", "bold"); doc.setFontSize(13);
    doc.text("Skills and Interests", margin, cursorY);
    cursorY += 8;
    doc.setFont("times", "normal"); doc.setFontSize(11);
    let skills = [
      "Programming Languages: C++, Java",
      "Technologies: SpringBoot, MySQL, ReactJS, HTML",
      "Databases: MySQL",
      "Soft Skills: Critical thinking, Data-driven decision making, Project ownership"
    ];
    skills.forEach(line => {
      checkPageBreak();
      doc.text(line, margin, cursorY);
      cursorY += 6;
    });
    drawLine();

    // === EDUCATION ===
    doc.setFont("times", "bold"); doc.setFontSize(13);
    doc.text("Education", margin, cursorY);
    cursorY += 8;
    doc.setFont("times", "normal"); doc.setFontSize(11);
    doc.text("Bharati Vidyapeeth Deemed University", margin, cursorY); cursorY += 6;
    doc.text("Bachelor of Engineering in Computer Engineering (Dec 2021 - June 2025)", margin, cursorY);
    cursorY += 12;
    drawLine();

    // === EXPERIENCE ===
    doc.setFont("times", "bold"); doc.setFontSize(13);
    doc.text("Experience", margin, cursorY);
    cursorY += 8;
    doc.setFont("times"); doc.setFontSize(11);
    doc.text("In-House Internship (Mar 2024 - Apr 2024)", margin, cursorY);
    cursorY += 8;
    doc.setFont("times", "normal");

    let exp = [
      "Developed a Python-based backend to preprocess file data and train a Random Forest model.",
      "Built a Flask API to handle file uploads and return predictions.",
      "Created a web interface (HTML, CSS, JS) to check file safety status.",
      "Conducted testing with labeled data, achieving high accuracy.",
      "Ensured efficient handling of CSV and TXT file formats with secure storage."
    ];
    exp.forEach(line => {
      checkPageBreak();
      let wrapped = doc.splitTextToSize("• " + line, pageWidth - 2 * margin);
      doc.text(wrapped, margin + 5, cursorY);
      cursorY += wrapped.length * 6;
    });
    drawLine();

    // === PROJECTS ===
    doc.setFont("times", "bold"); doc.setFontSize(11);
    doc.text("Projects", margin, cursorY);
    cursorY += 8;
    let projects = [
      "Cyber Triage Tool - Endpoint forensic analysis & incident response.",
      "Hospital Management System - Built with React.js, SpringBoot & MySQL.",
      "Recipe Book Web App",
      "Online Shopping System",
      "Portfolio Website"
    ];
    doc.setFont("times", "normal");
    projects.forEach(line => {
      checkPageBreak();
      let wrapped = doc.splitTextToSize("• " + line, pageWidth - 2 * margin);
      doc.text(wrapped, margin + 5, cursorY);
      cursorY += wrapped.length * 6;
    });
    drawLine();

    // === CERTIFICATIONS ===
    doc.setFont("times"); doc.setFontSize(11);
    doc.text("Certifications", margin, cursorY);
    cursorY += 8;
    let certs = [
      "Full Stack Web Development – Coursera",
      "React.js Advanced – Udemy"
    ];
    certs.forEach(line => {
      checkPageBreak();
      doc.text("• " + line, margin + 5, cursorY);
      cursorY += 6;
    });
    drawLine();

    // === HOBBIES ===
    doc.setFont("times", "bold"); doc.setFontSize(11);
    doc.text("Hobbies", margin, cursorY);
    cursorY += 8;
    doc.setFont("times", "normal");
    ["Sketching", "Content Creation"].forEach(line => {
      checkPageBreak();
      doc.text("• " + line, margin + 5, cursorY);
      cursorY += 6;
    });
    drawLine();

    // === CONTACT ===
    doc.setFont("times", "bold"); doc.setFontSize(11);
    doc.text("Contact", margin, cursorY);
    cursorY += 8;
    doc.setFont("times", "normal");
    ["Email: nehashinde8525@gmail.com", "Phone: +91 8652120119", "City: Navi Mumbai, India"].forEach(line => {
      checkPageBreak();
      doc.text(line, margin, cursorY);
      cursorY += 6;
    });
    drawLine();

    // SAVE PDF
    doc.save("Neha_Shinde_Resume.pdf");
  };
});

// Create overlay for mobile
const overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.appendChild(overlay);

document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("active");
  overlay.classList.toggle("active");
});

// Close when overlay clicked
overlay.addEventListener("click", () => {
  document.querySelector(".sidebar").classList.remove("active");
  overlay.classList.remove("active");
});

// Auto-close sidebar on mobile when clicking a nav link
document.querySelectorAll(".sidebar .nav-link").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      document.querySelector(".sidebar").classList.remove("active");
      overlay.classList.remove("active");
    }
  });
});

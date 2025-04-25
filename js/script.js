document.getElementById('toggleVideoBtn').addEventListener('click', function () {
    const video = document.getElementById('heroVideo');
    if (video.paused) {
      video.play();
      this.textContent = '❚❚'; // Pause icon
    } else {
      video.pause();
      this.textContent = '▶'; // Play icon
    }
  });
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // Your WhatsApp number with country code (example: +1 for US)
    const phoneNumber = "+923052021176"; // Replace with your WhatsApp number
    
    // Construct the message you want to send
    const whatsappMessage = `*New Message from Website*\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Redirect to WhatsApp with pre-filled message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, "_blank");
  });
  
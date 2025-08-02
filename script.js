// For login/register page animation
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

if (registerLink && wrapper) {
  registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
  });
}

if (loginLink && wrapper) {
  loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
  });
}

// For showing dashboard section inside same page (if used)
function call() {
  const dashboardDiv = document.querySelector(".dashboard");
  if (dashboardDiv) {
    dashboardDiv.style.visibility = 'visible';
  }
}

// For dashboard data population
document.addEventListener('DOMContentLoaded', () => {
  const data = {
    name: "Mayank Kumar",
    referralCode: "mayank2025",
    donation: Math.floor(Math.random() * (4000 - 1500 + 1)) + 1500
  };

  const nameEl = document.getElementById('internName');
  const refEl = document.getElementById('refCode');
  const donationEl = document.getElementById('donation');

  if (nameEl && refEl && donationEl) {
    nameEl.innerText = data.name;
    refEl.innerText = data.referralCode;
    donationEl.innerText = data.donation;
  }



  // Unlocking rewards
  const tShirt = document.querySelector(".t-shirt");
  const hoodie = document.querySelector(".hoodie");
  const cert = document.querySelector(".certificate");

  if (data.donation >= 1500 && tShirt) {
    tShirt.classList.add("unlocked");
    tShirt.querySelector(".reward-text").innerText = "✅ T-Shirt Unlocked";
  }
  if (data.donation >= 2000 && hoodie) {
    hoodie.classList.add("unlocked");
    hoodie.querySelector(".reward-text").innerText = "✅ Hoodie Unlocked";
  }
  if (data.donation >= 3000 && cert) {
    cert.classList.add("unlocked");
    cert.querySelector(".reward-text").innerText = "✅ Certificate Unlocked";
  }
});


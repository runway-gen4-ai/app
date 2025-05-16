// Cookie Banner functionality
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

function initCookieBanner() {
  const banner = document.querySelector('.cookie-banner');
  const customizeBtn = document.querySelector('.customize-cookies');
  const customizeSection = document.querySelector('.cookie-customize');
  const acceptAllBtn = document.querySelector('.accept-all-cookies');
  const rejectAllBtn = document.querySelector('.reject-all-cookies');
  const savePreferencesBtn = document.querySelector('.save-preferences');
  
  // Check if user has already made a choice
  const cookieChoice = getCookie('cookie-preferences');
  if (cookieChoice) {
    banner.classList.add('hidden');
    return;
  }
  
  // Toggle customize section
  customizeBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    customizeSection.classList.toggle('active');
  });
  
  // Accept all cookies
  acceptAllBtn?.addEventListener('click', () => {
    setCookie('cookie-preferences', 'all', 365);
    setCookie('essential', 'true', 365);
    setCookie('performance', 'true', 365);
    setCookie('functionality', 'true', 365);
    banner.classList.add('hidden');
  });
  
  // Reject all cookies except essential
  rejectAllBtn?.addEventListener('click', () => {
    setCookie('cookie-preferences', 'essential', 365);
    setCookie('essential', 'true', 365);
    setCookie('performance', 'false', 365);
    setCookie('functionality', 'false', 365);
    banner.classList.add('hidden');
  });
  
  // Save custom preferences
  savePreferencesBtn?.addEventListener('click', () => {
    const performance = document.querySelector('#performance-cookies').checked;
    const functionality = document.querySelector('#functionality-cookies').checked;
    
    setCookie('cookie-preferences', 'custom', 365);
    setCookie('essential', 'true', 365);
    setCookie('performance', performance, 365);
    setCookie('functionality', functionality, 365);
    banner.classList.add('hidden');
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initCookieBanner);
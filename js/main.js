// Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // FAQ Accordion functionality
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const isOpen = answer.style.display === 'block';
      
      // Close all answers
      document.querySelectorAll('.faq-answer').forEach(item => {
        item.style.display = 'none';
      });
      
      // Reset all question indicators
      document.querySelectorAll('.faq-question').forEach(item => {
        item.classList.remove('active');
        item.style.color = '';
      });
      
      // If clicked question wasn't open, open it
      if (!isOpen) {
        answer.style.display = 'block';
        this.classList.add('active');
        this.style.color = 'var(--color-primary)';
        
        // Update the + to -
        this.style.setProperty('--faq-icon', '"-"');
      }
    });
  });
  
  // Initialize: Open the first FAQ item by default
  if (faqQuestions.length > 0) {
    faqQuestions[0].click();
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});
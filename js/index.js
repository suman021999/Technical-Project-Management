// Collapse/Expand functionality for thread sections
document.addEventListener('DOMContentLoaded', function() {
    
    // Sidebar toggle functionality - FIXED
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    if (sidebarToggle && sidebar && mainContent) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('expanded');
             // Change toggle symbol
            const icon = sidebarToggle.querySelector('i');

    if (sidebar.classList.contains('expanded')) {
        icon.className = 'ri-arrow-left-line';
    } else {
        icon.className = 'ri-arrow-right-line';
    }
           
        });
    }
    
    // Handle collapse buttons
    const collapseButtons = document.querySelectorAll('.collapse-btn');
    
    collapseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            
            if (content && (content.classList.contains('thread-content') || content.classList.contains('method-content'))) {
                if (content.style.display === 'none') {
                    content.style.display = 'block';
                    this.textContent = '^ ' + this.textContent.substring(2);
                } else {
                    content.style.display = 'none';
                    this.textContent = '> ' + this.textContent.substring(2);
                }
            }
        });
    });

    // Handle floating action buttons
    const floatButtons = document.querySelectorAll('.float-btn');
    
    floatButtons.forEach(button => {
        button.addEventListener('click', function() {
            const emoji = this.textContent;
            
            switch(emoji) {
                case '?':
                    alert('Help & Support');
                    break;
                case '💬':
                    alert('Chat with us');
                    break;
                case '👥':
                    alert('Community');
                    break;
            }
        });
    });

    // Handle submit button
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', function() {
            alert('Task submitted successfully!');
        });
    }

    // Handle sub-thread button
    const subThreadBtns = document.querySelectorAll('.sub-thread-btn');
    
    subThreadBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const threadContent = this.closest('.thread-content');
            if (threadContent) {
                const newThreadInput = document.createElement('div');
                newThreadInput.className = 'thread-input';
                newThreadInput.innerHTML = `
                    <label>Sub thread ${document.querySelectorAll('.thread-input').length + 1}</label>
                    <input type="text" placeholder="Enter Text here">
                `;
                
                this.parentNode.insertBefore(newThreadInput, this);
            }
        });
    });

    // Handle info buttons
    const infoButtons = document.querySelectorAll('.info-btn, .info-btn-small');
    
    infoButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            alert('More information about this section');
        });
    });

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Handle input focus effects
    const inputs = document.querySelectorAll('input[type="text"]');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#2563eb';
            this.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
        });
        
        input.addEventListener('blur', function() {
            this.style.borderColor = '#ddd';
            this.style.boxShadow = 'none';
        });
    });

    // Character count for text inputs (optional enhancement)
    const textInputs = document.querySelectorAll('.thread-input input, .summary-section input');
    
    textInputs.forEach(input => {
        input.addEventListener('input', function() {
            const maxLength = 500;
            const currentLength = this.value.length;
            
            if (currentLength > maxLength) {
                this.value = this.value.substring(0, maxLength);
            }
        });
    });

    // Add animation on page load
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
    });

    // Handle window resize for sidebar
    window.addEventListener('resize', function() {
        if (sidebar.classList.contains('expanded')) {
            if (window.innerWidth > 768) {
                mainContent.style.marginLeft = '400px';
            } else {
                mainContent.style.marginLeft = '300px';
            }
        } else {
            if (window.innerWidth > 768) {
                mainContent.style.marginLeft = '60px';
            } else {
                mainContent.style.marginLeft = '50px';
            }
        }
    });

    console.log('Deep Thought - Technical Project Management loaded successfully');
});

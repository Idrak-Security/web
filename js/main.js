/**
 * Idrak Security - Main JavaScript
 * Handles FAQ accordion, Industry/Service tabs, mobile menu
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // FAQ ACCORDION FUNCTIONALITY
    // ============================================
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.closest('.faq-item');
            const answer = faqItem.querySelector('.faq-answer');
            const isActive = faqItem.classList.contains('active');
            
            // Close all other FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                const otherAnswer = item.querySelector('.faq-answer');
                if (otherAnswer) {
                    otherAnswer.style.maxHeight = null;
                }
            });
            
            // Toggle current item
            if (!isActive) {
                faqItem.classList.add('active');
                if (answer) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            }
        });
    });

    // ============================================
    // INDUSTRY/SERVICE TABS FUNCTIONALITY
    // ============================================
    const detailTabs = document.querySelectorAll('.detail-tab');
    
    detailTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabGroup = this.closest('.detail-tabs');
            const contentContainer = this.closest('.industry-detail, .service-detail');
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs in this group
            if (tabGroup) {
                tabGroup.querySelectorAll('.detail-tab').forEach(t => {
                    t.classList.remove('active');
                });
            }
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all tab content in this container
            if (contentContainer) {
                contentContainer.querySelectorAll('.detail-tab-content').forEach(content => {
                    content.classList.remove('active');
                    content.style.display = 'none';
                });
                
                // Show target tab content
                const targetContent = contentContainer.querySelector('[data-content="' + targetTab + '"]');
                if (targetContent) {
                    targetContent.classList.add('active');
                    targetContent.style.display = 'block';
                }
            }
        });
    });

    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ============================================
    // INDUSTRY/SERVICE NAVIGATION
    // ============================================
    const industryNavItems = document.querySelectorAll('.industry-nav-item, .service-nav-item');
    
    industryNavItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Remove active class from all nav items
            industryNavItems.forEach(navItem => {
                navItem.classList.remove('active');
            });
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Hide all detail sections
            document.querySelectorAll('.industry-detail, .service-detail').forEach(detail => {
                detail.classList.remove('active');
                detail.style.display = 'none';
            });
            
            // Show target detail section
            const targetDetail = document.querySelector(targetId);
            if (targetDetail) {
                targetDetail.classList.add('active');
                targetDetail.style.display = 'block';
                
                // Reset tabs in this section - show first tab content
                const firstTab = targetDetail.querySelector('.detail-tab');
                const firstContent = targetDetail.querySelector('.detail-tab-content');
                
                if (firstTab) {
                    targetDetail.querySelectorAll('.detail-tab').forEach(t => t.classList.remove('active'));
                    firstTab.classList.add('active');
                }
                
                if (firstContent) {
                    targetDetail.querySelectorAll('.detail-tab-content').forEach(c => {
                        c.classList.remove('active');
                        c.style.display = 'none';
                    });
                    firstContent.classList.add('active');
                    firstContent.style.display = 'block';
                }
            }
        });
    });

    // ============================================
    // INITIALIZE - Show first items by default
    // ============================================
    // Show first industry/service detail if exists
    const firstDetail = document.querySelector('.industry-detail, .service-detail');
    if (firstDetail) {
        firstDetail.classList.add('active');
        firstDetail.style.display = 'block';
        
        // Show first tab content
        const firstContent = firstDetail.querySelector('.detail-tab-content');
        if (firstContent) {
            firstContent.classList.add('active');
            firstContent.style.display = 'block';
        }
    }

    // Mark first nav item as active
    const firstNavItem = document.querySelector('.industry-nav-item, .service-nav-item');
    if (firstNavItem) {
        firstNavItem.classList.add('active');
    }

});

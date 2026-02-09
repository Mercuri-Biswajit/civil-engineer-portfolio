// ===========================
// EDUCATION DATA
// ===========================
// Add or edit education/certifications here. Each needs: year, degree, and school

const education = [
    {
        year: '2020',
        degree: 'B.Tech Civil Engineering',
        school: 'Surendra Institute of Engineering and Management'
    },
    {
        year: '2021',
        degree: 'AutoCAD 2D',
        school: 'Udemy'
    },
    {
        year: '2022',
        degree: 'Learn Practical Building Construction',
        school: 'Udemy'
    }
];

// ===========================
// RENDER FUNCTION
// ===========================

// Render Education (About Page)
function renderEducation() {
    const educationTimeline = document.getElementById('educationTimeline');
    if (!educationTimeline) {
        return;
    }
    
    educationTimeline.innerHTML = education.map(edu => `
        <div class="education-item">
            <div class="education-icon">🎓</div>
            <div>
                <div class="education-year">${edu.year}</div>
                <h4 class="education-degree">${edu.degree}</h4>
                <p class="education-school">${edu.school}</p>
            </div>
        </div>
    `).join('');
    
    console.log('Education items rendered:', education.length);
}

// ===========================
// INITIALIZATION
// ===========================

// Initialize education when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Add a small delay to ensure DOM is fully loaded
    setTimeout(() => {
        renderEducation();
    }, 100);
});

// Also try to render if window is already loaded
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(renderEducation, 100);
}

// Export for use in other scripts (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { education, renderEducation };
}
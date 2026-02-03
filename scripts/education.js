// ===========================
// EDUCATION DATA
// ===========================
// Add or edit education/certifications here. Each needs: year, degree, and school

const education = [
    {
        year: '2016 - 2020',
        degree: 'B. Tech Civil Engineering',
        school: 'Surendra Institute of Engineering and Management, Siliguri'
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
    if (!educationTimeline) return;
    
    educationTimeline.innerHTML = education.map(edu => `
        <div class="education-item">
            <div class="education-year">${edu.year}</div>
            <h4 class="education-degree">${edu.degree}</h4>
            <p class="education-school">${edu.school}</p>
        </div>
    `).join('');
}

// ===========================
// INITIALIZATION
// ===========================

// Initialize education when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    renderEducation();
});

// Export for use in other scripts (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { education, renderEducation };
}
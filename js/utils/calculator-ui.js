/* ====================================
   CALCULATOR UI INTERACTIONS
   Handles collapsible sections, animations, and chart
   NO changes to calculation logic
   ==================================== */

document.addEventListener('DOMContentLoaded', function() {
  initCollapsibleSections();
  initBreakdownToggle();
  initFormSubmitEnhancements();
});

/* ====================================
   COLLAPSIBLE SECTIONS
   ==================================== */

function initCollapsibleSections() {
  const sectionHeaders = document.querySelectorAll('.section-header[data-section]');
  
  sectionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const sectionId = this.getAttribute('data-section');
      const content = document.getElementById(`${sectionId}-section`);
      
      // Toggle collapsed class
      this.classList.toggle('collapsed');
      
      // Toggle content visibility
      if (content.style.display === 'none') {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  });
}

/* ====================================
   BREAKDOWN TOGGLE
   ==================================== */

function initBreakdownToggle() {
  const toggleBtn = document.getElementById('toggleBreakdown');
  const breakdownContent = document.getElementById('breakdownContent');
  
  if (toggleBtn && breakdownContent) {
    toggleBtn.addEventListener('click', function() {
      this.classList.toggle('active');
      
      if (breakdownContent.style.display === 'none' || breakdownContent.style.display === '') {
        breakdownContent.style.display = 'block';
        this.querySelector('.breakdown-toggle').textContent = '−';
      } else {
        breakdownContent.style.display = 'none';
        this.querySelector('.breakdown-toggle').textContent = '+';
      }
    });
  }
}

/* ====================================
   FORM SUBMIT ENHANCEMENTS
   ==================================== */

function initFormSubmitEnhancements() {
  const form = document.getElementById('buildingCalculatorForm');
  
  if (form) {
    // Intercept form submission to update summary
    form.addEventListener('submit', function(e) {
      // The original calculators.js will handle the calculation
      // We just update the summary after a short delay
      setTimeout(updateInputSummary, 100);
    });
  }
}

/* ====================================
   UPDATE INPUT SUMMARY
   ==================================== */

function updateInputSummary() {
  // Update building type display
  const buildingType = document.getElementById('buildingType');
  const summaryBuildingType = document.getElementById('summaryBuildingType');
  
  if (buildingType && summaryBuildingType) {
    summaryBuildingType.textContent = buildingType.options[buildingType.selectedIndex].text;
  }
  
  // Update number of floors
  const numFloors = document.getElementById('numFloors');
  const summaryFloors = document.getElementById('summaryFloors');
  
  if (numFloors && summaryFloors) {
    summaryFloors.textContent = numFloors.value;
  }
  
  // Update cost displays
  updateCostDisplays();
  
  // Animate chart
  animateDonutChart();
}

/* ====================================
   UPDATE COST DISPLAYS
   ==================================== */

function updateCostDisplays() {
  // Get cost values from the existing breakdown
  const costBreakdown = document.getElementById('costBreakdown');
  
  if (costBreakdown && costBreakdown.children.length > 0) {
    const costItems = costBreakdown.querySelectorAll('.cost-item');
    
    if (costItems.length >= 3) {
      // Materials
      const materialsAmount = costItems[0].querySelector('.cost-item__amount');
      const costMaterials = document.getElementById('costMaterials');
      if (materialsAmount && costMaterials) {
        costMaterials.textContent = materialsAmount.textContent;
      }
      
      // Labor
      const laborAmount = costItems[1].querySelector('.cost-item__amount');
      const costLabor = document.getElementById('costLabor');
      if (laborAmount && costLabor) {
        costLabor.textContent = laborAmount.textContent;
      }
      
      // Equipment (combined from overhead, contingency, etc.)
      const equipmentTotal = calculateEquipmentTotal(costItems);
      const costEquipment = document.getElementById('costEquipment');
      if (costEquipment) {
        costEquipment.textContent = equipmentTotal;
      }
    }
  }
}

function calculateEquipmentTotal(costItems) {
  // Sum up overhead, contingency, finishing
  let total = 0;
  
  for (let i = 2; i < costItems.length; i++) {
    const amount = costItems[i].querySelector('.cost-item__amount');
    if (amount) {
      const value = parseFloat(amount.textContent.replace(/[₹,]/g, ''));
      if (!isNaN(value)) {
        total += value;
      }
    }
  }
  
  return formatCurrency(total);
}

/* ====================================
   ANIMATE DONUT CHART
   ==================================== */

function animateDonutChart() {
  const costBreakdown = document.getElementById('costBreakdown');
  
  if (!costBreakdown || costBreakdown.children.length === 0) {
    return;
  }
  
  const costItems = costBreakdown.querySelectorAll('.cost-item');
  let total = 0;
  const values = [];
  
  // Calculate total and individual values
  costItems.forEach(item => {
    const amountElement = item.querySelector('.cost-item__amount');
    if (amountElement) {
      const value = parseFloat(amountElement.textContent.replace(/[₹,]/g, ''));
      if (!isNaN(value)) {
        values.push(value);
        total += value;
      }
    }
  });
  
  if (total === 0) return;
  
  // Calculate percentages
  const percentages = values.map(v => (v / total) * 100);
  
  // Update chart circles
  const circumference = 2 * Math.PI * 80; // radius = 80
  let currentOffset = 0;
  
  // Materials (first segment)
  if (percentages[0]) {
    const segment1 = (percentages[0] / 100) * circumference;
    const circle1 = document.getElementById('chartCircle1');
    if (circle1) {
      circle1.style.strokeDasharray = `${segment1} ${circumference}`;
      circle1.style.strokeDashoffset = `0`;
    }
    currentOffset = segment1;
  }
  
  // Labor (second segment)
  if (percentages[1]) {
    const segment2 = (percentages[1] / 100) * circumference;
    const circle2 = document.getElementById('chartCircle2');
    if (circle2) {
      circle2.style.strokeDasharray = `${segment2} ${circumference}`;
      circle2.style.strokeDashoffset = `-${currentOffset}`;
      circle2.parentElement.style.transform = `rotate(${(currentOffset / circumference) * 360 - 90}deg)`;
    }
    currentOffset += segment2;
  }
  
  // Others (third segment)
  const othersPercentage = percentages.slice(2).reduce((a, b) => a + b, 0);
  if (othersPercentage) {
    const segment3 = (othersPercentage / 100) * circumference;
    const circle3 = document.getElementById('chartCircle3');
    if (circle3) {
      circle3.style.strokeDasharray = `${segment3} ${circumference}`;
      circle3.style.strokeDashoffset = `-${currentOffset}`;
      circle3.parentElement.style.transform = `rotate(${(currentOffset / circumference) * 360 - 90}deg)`;
    }
  }
  
  // Update center percentage (show materials percentage)
  const chartPercentage = document.getElementById('chartPercentage');
  if (chartPercentage && percentages[0]) {
    chartPercentage.textContent = `${Math.round(percentages[0])}%`;
  }
}

/* ====================================
   UTILITY FUNCTION - FORMAT CURRENCY
   ==================================== */

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

/* ====================================
   SMOOTH SCROLL TO RESULTS ON MOBILE
   ==================================== */

function scrollToResults() {
  if (window.innerWidth <= 968) {
    const resultsPanel = document.querySelector('.calc-right-panel');
    if (resultsPanel) {
      setTimeout(() => {
        resultsPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }
}

// Export for use in calculators.js if needed
if (typeof window !== 'undefined') {
  window.calculatorUI = {
    updateInputSummary,
    animateDonutChart,
    scrollToResults
  };
}
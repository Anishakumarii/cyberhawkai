// Frontend wiring for `scam-detector.html`

document.addEventListener("DOMContentLoaded", () => {
  console.log("Scam Detector Initialized");

  const form = document.getElementById("scamForm");
  const scamTextEl = document.getElementById("scamText");
  const emptyStateEl = document.getElementById("emptyState");
  const resultCardEl = document.getElementById("resultCard");
  const scanningOverlayEl = document.getElementById("scanningOverlay");
  const finalResultEl = document.getElementById("finalResult");
  const threatMeterFillEl = document.getElementById("threatMeterFill");
  const threatScoreEl = document.getElementById("threatScore");

  if (!form) {
    console.error("Scam Form not found!");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("Form submitted");

    const text = scamTextEl.value;
    if (!text) {
      console.warn("No text entered");
      return;
    }

    // Reset UI for new analysis
    emptyStateEl.style.display = "none";
    resultCardEl.style.display = "block";
    scanningOverlayEl.style.display = "flex";
    finalResultEl.style.display = "none";

    try {
      if (!window.Backend || !window.Backend.analyzeScamText) {
        throw new Error("Backend service 'analyzeScamText' is not available.");
      }

      console.log("Analyzing text...");
      const result = await window.Backend.analyzeScamText(text);
      console.log("Analysis complete", result);

      scanningOverlayEl.style.display = "none";
      finalResultEl.style.display = "block";

      // Update UI Elements
      const threatTitle = document.getElementById("threatTitle");
      const threatIcon = document.getElementById("threatIcon");
      const scamType = document.getElementById("scamType");
      const redFlags = document.getElementById("redFlags");
      const safetyAdvice = document.getElementById("safetyAdvice");

      // Determine levels and icons
      let levelClass = "safe-level";
      let iconHtml = '<i class="fa-solid fa-shield-check"></i>';
      let title = "Low Risk Detected";
      let titleColor = "text-success";

      if (result.threatScore >= 70) {
        levelClass = "danger-level";
        iconHtml = '<i class="fa-solid fa-triangle-exclamation"></i>';
        title = "High Risk Detected";
        titleColor = "text-danger";
      } else if (result.threatScore >= 40) {
        levelClass = "warning-level";
        iconHtml = '<i class="fa-solid fa-circle-exclamation"></i>';
        title = "Medium Risk Detected";
        titleColor = "text-warning";
      }

      // Set the values
      threatTitle.innerText = title;
      threatTitle.className = `brand-font ${titleColor}`;
      threatIcon.innerHTML = iconHtml;
      threatIcon.className = `fs-1 ${titleColor} mb-2 glow-animation`;
      
      threatMeterFillEl.className = `threat-meter-fill ${levelClass}`;
      
      scamType.innerText = result.scamType;
      safetyAdvice.innerHTML = `<i class="fa-solid fa-shield-halved"></i> ${result.safetyAdvice}`;
      
      // Clear and populate red flags
      redFlags.innerHTML = "";
      if (result.redFlags && result.redFlags.length > 0) {
        result.redFlags.forEach(flag => {
          const li = document.createElement("li");
          li.innerText = flag;
          redFlags.appendChild(li);
        });
      }

      // Animate meter
      setTimeout(() => {
        threatMeterFillEl.style.width = `${result.threatScorePercent}%`;
        threatScoreEl.innerText = `${result.threatScore}/100`;
        threatScoreEl.className = `fw-bold ${titleColor}`;
      }, 100);

    } catch (error) {
      console.error("Analysis failed:", error);
      scanningOverlayEl.style.display = "none";
      alert("Analysis failed. Please check the console for details.");
    }
  });

  // Export to window for the inline onclick handler
  window.resetAnalyzer = function resetAnalyzer() {
    scamTextEl.value = "";
    resultCardEl.style.display = "none";
    emptyStateEl.style.display = "flex";
    threatMeterFillEl.style.width = "0%";
    threatMeterFillEl.className = "threat-meter-fill";
    threatScoreEl.innerText = "0/100";
    threatScoreEl.className = "text-danger fw-bold";
  };
});
// Frontend wiring for `scam-detector.html`

document.addEventListener("DOMContentLoaded", () => {
  console.log("Scam Detector Initialized");

  const form = document.getElementById("scamForm");
  const scamTextEl = document.getElementById("scamText");
  const emptyStateEl = document.getElementById("emptyState");
  const resultCardEl = document.getElementById("resultCard");
  const scanningOverlayEl = document.getElementById("scanningOverlay");
  const finalResultEl = document.getElementById("finalResult");
  const threatMeterFillEl = document.getElementById("threatMeterFill");
  const threatScoreEl = document.getElementById("threatScore");

  if (!form) {
    console.error("Scam Form not found!");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("Form submitted");

    const text = scamTextEl.value;
    if (!text) {
      console.warn("No text entered");
      return;
    }

    // Reset UI for new analysis
    emptyStateEl.style.display = "none";
    resultCardEl.style.display = "block";
    scanningOverlayEl.style.display = "flex";
    finalResultEl.style.display = "none";

    try {
      if (!window.Backend || !window.Backend.analyzeScamText) {
        throw new Error("Backend service 'analyzeScamText' is not available.");
      }

      console.log("Analyzing text...");
      const result = await window.Backend.analyzeScamText(text);
      console.log("Analysis complete", result);

      scanningOverlayEl.style.display = "none";
      finalResultEl.style.display = "block";

      // Update UI Elements
      const threatTitle = document.getElementById("threatTitle");
      const threatIcon = document.getElementById("threatIcon");
      const scamType = document.getElementById("scamType");
      const redFlags = document.getElementById("redFlags");
      const safetyAdvice = document.getElementById("safetyAdvice");

      // Determine levels and icons
      let levelClass = "safe-level";
      let iconHtml = '<i class="fa-solid fa-shield-check"></i>';
      let title = "Low Risk Detected";
      let titleColor = "text-success";

      if (result.threatScore >= 70) {
        levelClass = "danger-level";
        iconHtml = '<i class="fa-solid fa-triangle-exclamation"></i>';
        title = "High Risk Detected";
        titleColor = "text-danger";
      } else if (result.threatScore >= 40) {
        levelClass = "warning-level";
        iconHtml = '<i class="fa-solid fa-circle-exclamation"></i>';
        title = "Medium Risk Detected";
        titleColor = "text-warning";
      }

      // Set the values
      threatTitle.innerText = title;
      threatTitle.className = `brand-font ${titleColor}`;
      threatIcon.innerHTML = iconHtml;
      threatIcon.className = `fs-1 ${titleColor} mb-2 glow-animation`;
      
      threatMeterFillEl.className = `threat-meter-fill ${levelClass}`;
      
      scamType.innerText = result.scamType;
      safetyAdvice.innerHTML = `<i class="fa-solid fa-shield-halved"></i> ${result.safetyAdvice}`;
      
      // Clear and populate red flags
      redFlags.innerHTML = "";
      if (result.redFlags && result.redFlags.length > 0) {
        result.redFlags.forEach(flag => {
          const li = document.createElement("li");
          li.innerText = flag;
          redFlags.appendChild(li);
        });
      }

      // Animate meter
      setTimeout(() => {
        threatMeterFillEl.style.width = `${result.threatScorePercent}%`;
        threatScoreEl.innerText = `${result.threatScore}/100`;
        threatScoreEl.className = `fw-bold ${titleColor}`;
      }, 100);

    } catch (error) {
      console.error("Analysis failed:", error);
      scanningOverlayEl.style.display = "none";
      alert("Analysis failed. Please check the console for details.");
    }
  });

  // Export to window for the inline onclick handler
  window.resetAnalyzer = function resetAnalyzer() {
    scamTextEl.value = "";
    resultCardEl.style.display = "none";
    emptyStateEl.style.display = "flex";
    threatMeterFillEl.style.width = "0%";
    threatMeterFillEl.className = "threat-meter-fill";
    threatScoreEl.innerText = "0/100";
    threatScoreEl.className = "text-danger fw-bold";
  };
});

// "Backend" logic for the demo UI.
// In a real application, these would be implemented on a server and called via HTTP.
window.Backend = window.Backend || {};

/**
 * Enhanced scam analysis using keyword detection and heuristic scoring.
 */
window.Backend.analyzeScamText = function analyzeScamText(text) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const normalized = text.toLowerCase();
      let score = 0;
      const flags = [];

      // Category 1: Urgency & Pressure
      const urgencyKeywords = ["urgent", "immediate", "action required", "suspended", "blocked", "within 24 hours", "final call", "last chance", "act now", "limited time"];
      const foundUrgency = urgencyKeywords.filter(k => normalized.includes(k));
      if (foundUrgency.length > 0) {
        score += Math.min(foundUrgency.length * 15, 45);
        flags.push("Creates false sense of urgency or pressure");
      }

      // Category 2: Financial & "Too Good to Be True"
      const financialKeywords = ["winner", "prize", "cash", "lottery", "investment", "bitcoin", "crypto", "earn money", "bonus", "reward", "dollars", "rupees"];
      const foundFinancial = financialKeywords.filter(k => normalized.includes(k));
      if (foundFinancial.length > 0) {
        score += Math.min(foundFinancial.length * 12, 40);
        flags.push("Promises unrealistic financial gain or rewards");
      }

      // Category 3: Sensitive Info Requests
      const sensitiveKeywords = ["verify your account", "confirm password", "social security", "aadhaar", "otp", "login details", "security code", "pin", "update details"];
      const foundSensitive = sensitiveKeywords.filter(k => normalized.includes(k));
      if (foundSensitive.length > 0) {
        score += Math.min(foundSensitive.length * 20, 50);
        flags.push("Requests sensitive personal or financial credentials");
      }

      // Category 4: Generic Greetings & Suspicious Patterns
      const genericKeywords = ["dear customer", "dear user", "dear valued member", "to whom it may concern"];
      const foundGeneric = genericKeywords.filter(k => normalized.includes(k));
      if (foundGeneric.length > 0) {
        score += 10;
        flags.push("Uses generic greetings instead of your name");
      }

      // Check for suspicious links (common URL shorteners)
      const linkPattern = /(bit\.ly|t\.co|tinyurl\.com|goo\.gl|shorturl\.at)/i;
      if (linkPattern.test(normalized)) {
        score += 25;
        flags.push("Contains suspicious or obfuscated links");
      }

      // Final score normalization
      const finalScore = Math.min(score, 100);
      
      let classification = "Low Risk / Likely Safe";
      let advice = "This message doesn't show obvious signs of a common scam, but always remain cautious with unsolicited communications.";
      
      if (finalScore >= 70) {
        classification = "High Risk / Probable Scam";
        advice = "CRITICAL: Do not click any links or provide any information. This message matches multiple high-risk scam patterns.";
      } else if (finalScore >= 40) {
        classification = "Medium Risk / Suspicious";
        advice = "Caution: This message has some suspicious elements. Verify the sender through official channels before taking any action.";
      }

      resolve({
        threatScore: finalScore,
        threatScorePercent: finalScore,
        redFlags: flags.length > 0 ? flags : ["No common scam patterns identified."],
        scamType: classification,
        safetyAdvice: advice
      });
    }, 1500);
  });
};

/**
 * Simulated FIR generator.
 * Returns the values that the UI spans expect.
 */
window.Backend.generateFIRDraft = function generateFIRDraft(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const today = new Date().toLocaleDateString("en-IN");
      resolve({
        today,
        type: data.type,
        amount: data.amount || "0",
        name: data.name,
        incDate: data.date,
        desc: data.desc,
      });
    }, 2000);
  });
};

/**
 * Simulated URL classification.
 */
window.Backend.classifyUrl = function classifyUrl(url) {
  const normalized = (url || "").toLowerCase();
  return {
    isSafe:
      normalized.includes("google.com") || normalized.includes("github.com"),
  };
};

/**
 * Simulated evidence upload handling.
 */
window.Backend.handleEvidenceFiles = function handleEvidenceFiles(files) {
  const count = files?.length ?? 0;
  return Promise.resolve({
    message: `${count} file(s) selected for upload. (Simulation complete)`,
  });
};
// "Backend" logic for the demo UI.
// In a real application, these would be implemented on a server and called via HTTP.
window.Backend = window.Backend || {};

/**
 * Enhanced scam analysis using keyword detection and heuristic scoring.
 */
window.Backend.analyzeScamText = function analyzeScamText(text) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const normalized = text.toLowerCase();
      let score = 0;
      const flags = [];

      // Category 1: Urgency & Pressure
      const urgencyKeywords = ["urgent", "immediate", "action required", "suspended", "blocked", "within 24 hours", "final call", "last chance", "act now", "limited time"];
      const foundUrgency = urgencyKeywords.filter(k => normalized.includes(k));
      if (foundUrgency.length > 0) {
        score += Math.min(foundUrgency.length * 15, 45);
        flags.push("Creates false sense of urgency or pressure");
      }

      // Category 2: Financial & "Too Good to Be True"
      const financialKeywords = ["winner", "prize", "cash", "lottery", "investment", "bitcoin", "crypto", "earn money", "bonus", "reward", "dollars", "rupees"];
      const foundFinancial = financialKeywords.filter(k => normalized.includes(k));
      if (foundFinancial.length > 0) {
        score += Math.min(foundFinancial.length * 12, 40);
        flags.push("Promises unrealistic financial gain or rewards");
      }

      // Category 3: Sensitive Info Requests
      const sensitiveKeywords = ["verify your account", "confirm password", "social security", "aadhaar", "otp", "login details", "security code", "pin", "update details"];
      const foundSensitive = sensitiveKeywords.filter(k => normalized.includes(k));
      if (foundSensitive.length > 0) {
        score += Math.min(foundSensitive.length * 20, 50);
        flags.push("Requests sensitive personal or financial credentials");
      }

      // Category 4: Generic Greetings & Suspicious Patterns
      const genericKeywords = ["dear customer", "dear user", "dear valued member", "to whom it may concern"];
      const foundGeneric = genericKeywords.filter(k => normalized.includes(k));
      if (foundGeneric.length > 0) {
        score += 10;
        flags.push("Uses generic greetings instead of your name");
      }

      // Check for suspicious links (common URL shorteners)
      const linkPattern = /(bit\.ly|t\.co|tinyurl\.com|goo\.gl|shorturl\.at)/i;
      if (linkPattern.test(normalized)) {
        score += 25;
        flags.push("Contains suspicious or obfuscated links");
      }

      // Final score normalization
      const finalScore = Math.min(score, 100);
      
      let classification = "Low Risk / Likely Safe";
      let advice = "This message doesn't show obvious signs of a common scam, but always remain cautious with unsolicited communications.";
      
      if (finalScore >= 70) {
        classification = "High Risk / Probable Scam";
        advice = "CRITICAL: Do not click any links or provide any information. This message matches multiple high-risk scam patterns.";
      } else if (finalScore >= 40) {
        classification = "Medium Risk / Suspicious";
        advice = "Caution: This message has some suspicious elements. Verify the sender through official channels before taking any action.";
      }

      resolve({
        threatScore: finalScore,
        threatScorePercent: finalScore,
        redFlags: flags.length > 0 ? flags : ["No common scam patterns identified."],
        scamType: classification,
        safetyAdvice: advice
      });
    }, 1500);
  });
};

/**
 * Simulated FIR generator.
 * Returns the values that the UI spans expect.
 */
window.Backend.generateFIRDraft = function generateFIRDraft(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const today = new Date().toLocaleDateString("en-IN");
      resolve({
        today,
        type: data.type,
        amount: data.amount || "0",
        name: data.name,
        incDate: data.date,
        desc: data.desc,
      });
    }, 2000);
  });
};

/**
 * Simulated URL classification.
 */
window.Backend.classifyUrl = function classifyUrl(url) {
  const normalized = (url || "").toLowerCase();
  return {
    isSafe:
      normalized.includes("google.com") || normalized.includes("github.com"),
  };
};

/**
 * Simulated evidence upload handling.
 */
window.Backend.handleEvidenceFiles = function handleEvidenceFiles(files) {
  const count = files?.length ?? 0;
  return Promise.resolve({
    message: `${count} file(s) selected for upload. (Simulation complete)`,
  });
};


// Frontend wiring for `url-checker.html`

const urlForm = document.getElementById("urlForm");
const urlResultsEl = document.getElementById("urlResults");
const resultDetailsEl = document.getElementById("resultDetails");
const scanProgressEl = document.getElementById("scanProgress");
const progressBarEl = document.getElementById("progressBar");

urlForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const url = document.getElementById("urlInput").value;

  urlResultsEl.classList.remove("d-none");
  resultDetailsEl.classList.add("d-none");
  scanProgressEl.classList.remove("d-none");

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 20;
    if (progress > 100) progress = 100;
    progressBarEl.style.width = progress + "%";

    if (progress === 100) {
      clearInterval(interval);
      setTimeout(() => {
        scanProgressEl.classList.add("d-none");
        document.getElementById("scannedUrl").innerText = url;
        resultDetailsEl.classList.remove("d-none");

        const { isSafe } = window.Backend.classifyUrl(url);

        if (isSafe) {
          const card = document.getElementById("mainStatusCard");
          card.classList.replace("border-danger", "border-success");
          const bgEl = card.querySelector(".opacity-10");
          if (bgEl) bgEl.classList.replace("bg-danger", "bg-success");

          const statusIconEl = document.getElementById("statusIcon");
          statusIconEl.innerHTML = '<i class="fa-solid fa-shield-check"></i>';
          statusIconEl.classList.replace("text-danger", "text-success");

          const statusTextEl = document.getElementById("statusText");
          statusTextEl.innerText = "SAFE WEBSITE";
          statusTextEl.classList.replace("text-white", "text-success");
        } else {
          const card = document.getElementById("mainStatusCard");
          card.classList.replace("border-success", "border-danger");

          const bgEl = card.querySelector(".opacity-10");
          if (bgEl && bgEl.classList.contains("bg-success")) {
            bgEl.classList.replace("bg-success", "bg-danger");
          }

          const statusIconEl = document.getElementById("statusIcon");
          statusIconEl.innerHTML =
            '<i class="fa-solid fa-skull-crossbones"></i>';
          statusIconEl.className = "fs-1 text-danger mb-2 glow-animation";

          const statusTextEl = document.getElementById("statusText");
          statusTextEl.innerText = "UNSAFE WEBSITE DETECTED";
          statusTextEl.className = "brand-font text-white mb-0";
        }
      }, 500);
    }
  }, 300);
});


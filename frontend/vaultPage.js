// Frontend wiring for `vault.html`

const dropZone = document.getElementById("dropZone");
const fileInput = document.getElementById("fileInput");

["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
  dropZone.addEventListener(eventName, preventDefaults, false);
});

["dragenter", "dragover"].forEach((eventName) => {
  dropZone.addEventListener(eventName, highlight, false);
});

["dragleave", "drop"].forEach((eventName) => {
  dropZone.addEventListener(eventName, unhighlight, false);
});

dropZone.addEventListener("drop", handleDrop, false);

fileInput.addEventListener("change", function () {
  handleFiles(this.files);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

function highlight() {
  dropZone.classList.add("dragover");
}

function unhighlight() {
  dropZone.classList.remove("dragover");
}

function handleDrop(e) {
  const dt = e.dataTransfer;
  const files = dt.files;
  handleFiles(files);
}

async function handleFiles(files) {
  if (!files || files.length === 0) return;
  const { message } = await window.Backend.handleEvidenceFiles(files);
  alert(message);
}


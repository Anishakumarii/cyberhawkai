// Frontend wiring for `fir-generator.html`

const firForm = document.getElementById("firForm");
const overlayEl = document.getElementById("generatingOverlay");
const draftEmptyStateEl = document.getElementById("draftEmptyState");
const draftContentEl = document.getElementById("draftContent");
const downloadBtn = document.getElementById("downloadBtn");

firForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("compName").value;
  const date = document.getElementById("compDate").value;
  const type = document.getElementById("compType").value;
  const amount = document.getElementById("compAmount").value || "0";
  const desc = document.getElementById("compDesc").value;

  draftEmptyStateEl.classList.add("d-none");
  draftContentEl.classList.add("d-none");

  overlayEl.classList.remove("d-none");
  overlayEl.classList.add("d-flex");

  const draft = await window.Backend.generateFIRDraft({
    name,
    date,
    type,
    amount,
    desc,
  });

  overlayEl.classList.remove("d-flex");
  overlayEl.classList.add("d-none");

  // Populate template spans
  document.getElementById("outDate").innerText = draft.today;
  document.getElementById("outType").innerText = draft.type;
  document.getElementById("outAmount").innerText = draft.amount;
  document.getElementById("outAmount2").innerText = draft.amount;
  document.getElementById("outName").innerText = draft.name;
  document.getElementById("outName2").innerText = draft.name;
  document.getElementById("outIncDate").innerText = draft.incDate;
  document.getElementById("outDesc").innerText = draft.desc;

  draftContentEl.classList.remove("d-none");

  // Enable download button (still a demo; PDF generation not implemented)
  downloadBtn.classList.remove("disabled");
  downloadBtn.classList.replace("btn-outline-neon", "btn-neon");
});


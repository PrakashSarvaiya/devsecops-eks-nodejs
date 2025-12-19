document.getElementById("healthBtn").addEventListener("click", () => {
  const output = document.getElementById("output");
  output.textContent = "Checking application health...";

  fetch("/health")
    .then((res) => res.json())
    .then((data) => {
      output.textContent = JSON.stringify(data, null, 2);
    })
    .catch(() => {
      output.textContent = "❌ Unable to reach application";
    });
});

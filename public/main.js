async function loadSignal() {
  try {
    const response = await fetch("https://ei-smart-signal-default-rtdb.firebaseio.com/latest_signal.json");
    const data = await response.json();

    document.getElementById("signal").textContent = data.signal || "--";
    document.getElementById("price").textContent = data.price || "--";
    document.getElementById("tp").textContent = data.tp || "--";
    document.getElementById("sl").textContent = data.sl || "--";
    document.getElementById("confidence").textContent = data.confidence || "--";
    document.getElementById("duration").textContent = data.duration || "--";
  } catch (err) {
    console.error("Error loading signal:", err);
  }
}

loadSignal();

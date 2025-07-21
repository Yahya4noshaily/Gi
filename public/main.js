function randomDir() {
  return Math.random() > 0.5 ? "شراء" : "بيع";
}

function randomPrice() {
  return (1.0900 + Math.random() * 0.002).toFixed(5);
}

function randomConfidence() {
  return (80 + Math.random() * 15).toFixed(1) + "%";
}

function randomDuration() {
  return Math.random() > 0.5 ? "30 ثانية" : "60 ثانية";
}

function generateSignal() {
  const type = randomDir();
  const entry = randomPrice();
  const tp = (parseFloat(entry) + (type === "شراء" ? 0.0004 : -0.0004)).toFixed(5);
  const sl = (parseFloat(entry) + (type === "شراء" ? -0.0002 : 0.0002)).toFixed(5);
  const duration = randomDuration();
  const confidence = randomConfidence();

  document.getElementById("recommendation").textContent = type;
  document.getElementById("price").textContent = entry;
  document.getElementById("tp").textContent = tp;
  document.getElementById("sl").textContent = sl;
  document.getElementById("duration").textContent = duration;
  document.getElementById("confidence").textContent = confidence;

  const log = `${type} @ ${entry} 🎯 ${tp} / 🛑 ${sl} / ⏱ ${duration} / 📊 ${confidence}`;
  const li = document.createElement("li");
  li.textContent = log;
  document.getElementById("historyList").prepend(li);
}

function promptAdmin() {
  const pin = prompt("🔐 أدخل رمز الدخول:");
  if (pin === "2025") {
    document.getElementById("admin-form").style.display = "block";
  } else {
    alert("❌ رمز خاطئ!");
  }
}

function submitManual() {
  const type = document.getElementById("manualType").value;
  const entry = document.getElementById("manualPrice").value;
  const tp = document.getElementById("manualTP").value;
  const sl = document.getElementById("manualSL").value;
  const duration = document.getElementById("manualDuration").value;
  const confidence = document.getElementById("manualConfidence").value;

  document.getElementById("recommendation").textContent = type;
  document.getElementById("price").textContent = entry;
  document.getElementById("tp").textContent = tp;
  document.getElementById("sl").textContent = sl;
  document.getElementById("duration").textContent = duration;
  document.getElementById("confidence").textContent = confidence;

  const log = `${type} @ ${entry} 🎯 ${tp} / 🛑 ${sl} / ⏱ ${duration} / 📊 ${confidence}`;
  const li = document.createElement("li");
  li.textContent = log;
  document.getElementById("historyList").prepend(li);
}

// توليد أول توصية تلقائيًا
generateSignal();

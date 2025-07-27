document.querySelectorAll(".accordion-button").forEach(btn => {
  btn.addEventListener("click", () => {
    const parent = btn.parentElement;
    const all = document.querySelectorAll(".accordion");
    all.forEach(sec => {
      if (sec !== parent) sec.classList.remove("open");
    });
    parent.classList.toggle("open");
  });
});

// Quiz logic
function checkQuiz() {
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  if (!q1 || !q2) {
    document.getElementById("quiz-result").textContent = "🧐 الرجاء اختيار كل الإجابات.";
    return;
  }

  let score = 0;
  if (q1.value === "2") score++;
  if (q2.value === "2") score++;

  const msg = score === 2 ? "🌟 ممتاز! أجبت بشكل صحيح." :
              score === 1 ? "👍 جيد، حاول مراجعة المعلومات مرة أخرى." :
                            "📌 تحتاج لمراجعة الصفحة أكثر.";
  document.getElementById("quiz-result").textContent = msg;
}

document.getElementById('submit-btn').addEventListener('click', function () {
  const form = document.getElementById('quiz-form');
  const answers = new FormData(form);
  let introvertScore = 0;
  let extrovertScore = 0;

  // Hitung skor berdasarkan jawaban
  for (let [key, value] of answers.entries()) {
    if (value === 'introvert') introvertScore++;
    if (value === 'extrovert') extrovertScore++;
  }

  const totalQuestions = 10;
  const introvertPercentage = (introvertScore / totalQuestions) * 100;
  const extrovertPercentage = (extrovertScore / totalQuestions) * 100;

  // Simpan hasil ke session storage
  sessionStorage.setItem('introvert', introvertPercentage);
  sessionStorage.setItem('extrovert', extrovertPercentage);

  // Redirect ke halaman hasil
  window.location.href = 'result.html';
});

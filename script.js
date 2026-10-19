const today = new Date();
today.setHours(0, 0, 0, 0);

const performanceDate = new Date(2026, 11, 6);
const millisecondsPerDay = 24 * 60 * 60 * 1000;
const daysUntilPerformance = Math.ceil(
  (performanceDate.getTime() - today.getTime()) / millisecondsPerDay
);
const countdown = document.getElementById("倒數");

if (countdown) {
  if (daysUntilPerformance > 0) {
    countdown.textContent = `距離演出還有 ${daysUntilPerformance} 天`;
  } else if (daysUntilPerformance === 0) {
    countdown.textContent = "今天演出";
  } else {
    countdown.textContent = `演出已過 ${Math.abs(daysUntilPerformance)} 天`;
  }
}

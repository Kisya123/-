// Пример: плавное появление элементов
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.container > *');
  elements.forEach((el, i) => {
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 200 * i);
  });
});

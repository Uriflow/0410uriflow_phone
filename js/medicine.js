document.addEventListener('DOMContentLoaded', function() {
  const doneDiv = document.querySelector('.done');
  const notDoneDiv = document.querySelector('.not');

  doneDiv.addEventListener('click', function() {
    if (doneDiv.classList.contains('active')) {
      doneDiv.classList.remove('active');
    } else {
      doneDiv.classList.add('active');
      notDoneDiv.classList.remove('active');
    }
  });

  notDoneDiv.addEventListener('click', function() {
    if (notDoneDiv.classList.contains('active')) {
      notDoneDiv.classList.remove('active');
    } else {
      notDoneDiv.classList.add('active');
      doneDiv.classList.remove('active');
    }
  });
});
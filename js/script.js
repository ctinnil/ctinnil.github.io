document.addEventListener('DOMContentLoaded', function() {
    var titles = document.querySelectorAll('.entry .title');
  
    titles.forEach(function(title) {
      title.addEventListener('mouseover', function() {
        this.classList.add('big');
      });
      
      title.addEventListener('mouseout', function() {
        this.classList.remove('big');
      });
    });
  });
  
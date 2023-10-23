$('.counter').each(function() {
    var $this = $(this),
      countTo = $this.attr('data-count');
  
    $({ countNum: $this.text().replace('+', '') }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 8000,
        easing: 'linear',
        step: function() {
          $this.text(formatNumber(Math.floor(this.countNum)) + '+');
        },
        complete: function() {
          $this.text(formatNumber(Math.floor(this.countNum)) + '+');
        },
      }
    );
  });
  
  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  var skillPers = document.querySelectorAll(".skill-per");

skillPers.forEach(function(skillPer) {
  var per = parseFloat(skillPer.getAttribute("per"));
  skillPer.style.width = per + "%";
  
  var animatedValue = 0; 
  var startTime = null;
  
  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;
    var stepPercentage = progress / 1000; // Dividing by duration in milliseconds (1000ms = 1s)
    
    if (stepPercentage < 1) {
      animatedValue = per * stepPercentage;
      skillPer.setAttribute("per", Math.floor(animatedValue) + "%");
      requestAnimationFrame(animate);
    } else {
      animatedValue = per;
      skillPer.setAttribute("per", Math.floor(animatedValue) + "%");
    }
  }
  
  requestAnimationFrame(animate);
});

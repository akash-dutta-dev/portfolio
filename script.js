var words = ['a Full Stack Developer', 'a Website Developer', 'a Freelancer', 'an Engineer over Developer', 'a proud Indian'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.typingText').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});

// Link to site -https://www.w3schools.com/ai/ai_chartjs.asp
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('scrollToBottomBtn').addEventListener('click', function() {
    // Scroll to the bottom of the page
    //scrollToBottom();
    scrollToElement("section5");
  });
  function scrollToElement(elementId) {
    const targetElement = document.getElementById(elementId);

    if (targetElement) {
        const duration = 2500; 
        const targetPosition = targetElement.offsetTop;
        const currentScrollPosition = window.scrollY;
        const distanceToScroll = targetPosition - currentScrollPosition;
        const startTime = performance.now();
        
        function scrollStep(timestamp) {
            const progress = timestamp - startTime;
            const easeInOutQuad = progress => progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;

            window.scrollTo(0, currentScrollPosition + easeInOutQuad(progress / duration) * distanceToScroll);

            if (progress < duration) {
                window.requestAnimationFrame(scrollStep);
            }
        }

        window.requestAnimationFrame(scrollStep);
    }
  }


  var frontendXValues = ["Javascript", "React", "HTML", "CSS", "MaterialUI", ""];
  var frontendYValues = [9, 9 , 8, 8, 7,0];
  var frontendBarColors = "orange";

  new Chart(document.getElementById("frontEndChart"), {
    type: "bar",
    data: {
      labels: frontendXValues,
      datasets: [{
        backgroundColor: frontendBarColors,
        data: frontendYValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Frontend",
        font: {
          size: 80 // Change the font size of the title
      }
      },
      scales: {
        xAxes: [{
          barPercentage: 0.5
        }],
        yAxes: [{
          ticks: {
            display: false
          }
        }]
      },
    },
  });


  var backendXValues = ["Express", "Node", "SQL", "GCP", "Microservice", ""];
  var backendYValues = [9, 9, 8, 7, 9, 0];
  var backendBarColors = "blue";

  new Chart(document.getElementById("backendChart"), {
    type: "bar",
    data: {
      labels: backendXValues,
      datasets: [{
        backgroundColor: backendBarColors,
        data: backendYValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Backend"
      },
      scales: {
        xAxes: [{
          barPercentage: 0.5
        }],
        yAxes: [{
          ticks: {
            display: false
          }
        }]
      },
    }
  });



  var frontendXValues = ["AI/ML", "StabilityAi", "HuggingFace", "Diffusers", "Transformer", ""];
  var frontendYValues = [9, 8, 8, 7, 7, 0];
  var frontendBarColors = "red";

  new Chart(document.getElementById("interestChart"), {
    type: "bar",
    data: {
      labels: frontendXValues,
      datasets: [{
        backgroundColor: frontendBarColors,
        data: frontendYValues,
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Interests"
      },
      scales: {
        xAxes: [{
          barPercentage: 0.5
        }],
        yAxes: [{
          ticks: {
            display: false
          }
        }]
      },
    }
  });


  var prevButton = '<button type="button" data-role="none" class="slick-prev" aria-label="prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1"><path fill="#FFFFFF" d="M 16,16.46 11.415,11.875 16,7.29 14.585,5.875 l -6,6 6,6 z" /></svg></button>';
   var nextButton = '<button type="button" data-role="none" class="slick-next" aria-label="next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M8.585 16.46l4.585-4.585-4.585-4.585 1.415-1.415 6 6-6 6z"></path></svg></button>';

    $('.slideContents').slick({
      infinite: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 1000,
      cssEase: 'ease-in-out',
    });

    $('.slideContent').mousedown(function(){
      $('.slideContents').addClass('dragging');
    });
    $('.slideContent').mouseup(function(){
      $('.slideContents').removeClass('dragging');
    });


});


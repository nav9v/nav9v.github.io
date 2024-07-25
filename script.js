(function ($) {
  $(window).on('load hashchange', function () {
    $('.content-region').hide();
    $('.main-menu a').removeClass('active');
    var region = location.hash || '#home';
    $(region).show();
    $('.main-menu a[href="' + region + '"]').addClass('active');
  });
  $(window).trigger('load');
})(jQuery);

function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  const timeString = hours + ':' + minutes + ':' + seconds;
  document.getElementById('clock').textContent = timeString;

  setTimeout(updateTime, 1000);
}

updateTime();
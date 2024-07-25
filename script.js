(function ($) {
  const $contentRegion = $('.content-region');
  const $mainMenuLinks = $('.main-menu a');
  function updateContent() {
    $contentRegion.hide();
    $mainMenuLinks.removeClass('active');
    const region = location.hash || '#home';
    $(region).show();
    $mainMenuLinks.filter('[href="' + region + '"]').addClass('active');
  }
  $(window).on('load hashchange', updateContent).trigger('load');
  
})(jQuery);

function updateTime() {
  requestAnimationFrame(updateTime);
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById('clock').textContent = timeString;
}

updateTime(); 
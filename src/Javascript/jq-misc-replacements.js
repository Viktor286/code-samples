// JQuery replacements: Selectors

// Events
// $(document).ready(function() {
if (document.readyState !== 'loading') callback();
else document.addEventListener('DOMContentLoaded', callback);

el.addEventListener('event-name', handler); // $el.on(eventName, eventHandler);
el.removeEventListener('event-name', handler); // $el.off(eventName, eventHandler);

// Modal inside Overlay click
overlay.addEventListener('click', function (e) {
  if (e.currentTarget === e.target) {
    console.log('Close the modal');
  }
});

// $(".element").trigger("myEvent");
document.querySelector('.element').dispatchEvent(new Event('myEvent'));
// CustomEvent
const event = new CustomEvent('custom-event', { detail: { key1: 'data' } });
el.dispatchEvent(event);

// Forms
// $('.radio').index(e.currentTarget);
Array.from(document.querySelectorAll('.radio')).indexOf(event.currentTarget);

// Iframe
// $iframe.contents().find('.css');
iframe.contentDocument.querySelectorAll('.css');

// Requests
// $.ajax
const response = await fetch('data.json');
const content = await response.json();

// $(selector).load(url, completeCallback)
fetch(url)
  .then((data) => data.text())
  .then((data) => {
    document.querySelector(selector).innerHTML = data;
  })
  .then(completeCallback);

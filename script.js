document.addEventListener('contextmenu', function(event) {
  // Prevent the default right-click context menu
  event.preventDefault();

  // Get the link's URL
  var linkUrl = event.target.href;

  // Modify the link's URL
  //var modifiedUrl = modifyLinkUrl(linkUrl); // Modify the URL according to your needs

  // Open a new page with the modified URL
  window.open(linkUrl);
});

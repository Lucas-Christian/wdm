function changeLanguage(language) {
  const currentUrl = window.location.origin;
  window.location.href = `${currentUrl}/${language}`;
}
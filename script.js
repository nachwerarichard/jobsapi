function addComment() {
  alert("Feature coming soon: Add a comment to this API.");
}

function addShowcase() {
  alert("Feature coming soon: Submit a project that uses this API.");
}

function subscribe() {
  const email = document.querySelector('.subscribe input').value;
  if (email) {
    alert(`Subscribed with ${email}`);
  } else {
    alert("Please enter your email.");
  }
}

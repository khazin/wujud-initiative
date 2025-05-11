document.querySelectorAll('.card-item').forEach(card => {
  card.addEventListener('click', function(e) {
    e.preventDefault();

    const image = card.querySelector('.card-image').src;
    const badge = card.querySelector('.badge-status');
    const title = card.querySelector('.card-title').innerText;
    const date = card.querySelector('.card-date').innerText;
    const description = card.querySelector('.card-description').innerText;
    const speakerName = card.querySelector('.speaker-name').innerText;
    const speakerBio = card.querySelector('.speaker-bio').innerText;
    const speakerImage = card.querySelector('.speaker-image').src;

    document.getElementById('modalImage').src = image;
    document.getElementById('modalBadge').textContent = badge.textContent;
    document.getElementById('modalBadge').className = badge.className;
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDate').innerText = date;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('modalSpeakerName').innerText = speakerName;
    document.getElementById('modalSpeakerBio').innerText = speakerBio;
    document.getElementById('modalSpeakerImage').src = speakerImage;

    document.getElementById('cardModal').style.display = "block";
  });
});

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('cardModal').style.display = "none";
});

window.addEventListener('click', function(e) {
  if (e.target.id === 'cardModal') {
    document.getElementById('cardModal').style.display = "none";
  }
});

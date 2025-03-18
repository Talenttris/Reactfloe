document.querySelector('input[name="original"]').addEventListener('change', function(e) {
    document.getElementById('originalFileName').textContent = e.target.files[0].name;
});

document.querySelector('input[name="reaction"]').addEventListener('change', function(e) {
    document.getElementById('reactionFileName').textContent = e.target.files[0].name;
});

document.getElementById('uploadForm').addEventListener('submit', function() {
    document.getElementById('loadingSpinner').classList.remove('d-none');
});

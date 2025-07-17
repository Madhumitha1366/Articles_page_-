function showSection(section) {
    // Hide all sections using Bootstrap/CCBP display utility
    document.querySelectorAll('.section-content').forEach(el => {
        el.classList.remove('d-block');
        el.classList.add('d-none');
    });

    // Show selected section using Bootstrap/CCBP display utility
    const target = document.getElementById(`section-${section}`);
    if (target) {
        target.classList.remove('d-none');
        target.classList.add('d-block');
    }
}
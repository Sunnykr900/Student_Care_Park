// File Upload Handling
const fileUpload = document.getElementById('fileUpload');
const fileInput = document.getElementById('fileInput');
const fileName = document.getElementById('fileName');

fileUpload.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
        fileName.textContent = `Selected file: ${fileInput.files[0].name}`;
    }
});

// Drag and Drop functionality
fileUpload.addEventListener('dragover', (e) => {
    e.preventDefault();
    fileUpload.style.borderColor = '#2ecc71';
    fileUpload.style.backgroundColor = 'rgba(46, 204, 113, 0.1)';
});

fileUpload.addEventListener('dragleave', () => {
    fileUpload.style.borderColor = '#3498db';
    fileUpload.style.backgroundColor = 'transparent';
});

fileUpload.addEventListener('drop', (e) => {
    e.preventDefault();
    fileUpload.style.borderColor = '#3498db';
    fileUpload.style.backgroundColor = 'transparent';
    
    if (e.dataTransfer.files.length) {
        fileInput.files = e.dataTransfer.files;
        fileName.textContent = `Selected file: ${fileInput.files[0].name}`;
    }
});

// Form Submission
const uploadForm = document.getElementById('uploadForm');
const successModal = document.getElementById('successModal');
const closeModal = document.getElementById('closeModal');
const modalOkBtn = document.getElementById('modalOkBtn');

uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a server
    // For this example, we'll just show the success modal
    successModal.style.display = 'block';
    
    // Reset form
    uploadForm.reset();
    fileName.textContent = '';
});

// Close modal
closeModal.addEventListener('click', () => {
    successModal.style.display = 'none';
});

modalOkBtn.addEventListener('click', () => {
    successModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === successModal) {
        successModal.style.display = 'none';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.style.border = '1px solid #4CAF50';
        });
        element.addEventListener('blur', () => {
            element.style.border = '1px dashed #ccc';
        });
    });
});

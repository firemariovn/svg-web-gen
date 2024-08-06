document.getElementById('file-input').addEventListener('change', handleFileSelect, false);
document.getElementById('apply-color').addEventListener('click', applyColor);

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file && file.type === 'image/svg+xml') {
        const reader = new FileReader();
        reader.onload = function(e) {
            const svgContainer = document.getElementById('svg-container');
            svgContainer.innerHTML = e.target.result;
        };
        reader.readAsText(file);
    } else {
        alert('Please upload a valid SVG file.');
    }
}

function applyColor() {
    const color = document.getElementById('color-picker').value;
    const svgContainer = document.getElementById('svg-container');
    const svgElements = svgContainer.querySelectorAll('path, circle, rect, polygon, polyline, ellipse, line');
    
    svgElements.forEach(element => {
        element.setAttribute('fill', color);
    });
}


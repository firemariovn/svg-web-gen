// TODO: Change Text
// TODO: Refactor

document.getElementById('file-input').addEventListener('change', handleFileSelect, false);

document.getElementById('color-picker').addEventListener('input', applyColor); // Optional
document.getElementById('color-picker2').addEventListener('input', applyColor2); // Optional
document.getElementById('color-picker3').addEventListener('input', applyColorText); // Optional

var svgContainer = document.getElementById('svg-container');

document.getElementById('download').addEventListener('click', () => {
    const serializer = new XMLSerializer();
    //const svgString = serializer.serializeToString(svgElement);
    const svgString = serializer.serializeToString(svgContainer);
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'custom-logo.svg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file && file.type === 'image/svg+xml') {
        const reader = new FileReader();
        reader.onload = function(e) {
            svgContainer = document.getElementById('svg-container');
            svgContainer.innerHTML = e.target.result;
        };
        reader.readAsText(file);
    } else {
        alert('Please upload a valid SVG file.');
    }
}

function applyColor() {
    const color = document.getElementById('color-picker').value;
    const svgElements = svgContainer.querySelectorAll('.first-color');
    
    svgElements.forEach(element => {
        var currentStyle = `fill: ${color};`;
        element.setAttribute('style', currentStyle);
    });
}

function applyColor2() {
    const color = document.getElementById('color-picker2').value;
    const svgElements = svgContainer.querySelectorAll('.second-color');
    
    svgElements.forEach(element => {
        var currentStyle = `fill: ${color};`;
        element.setAttribute('style', currentStyle);
    });
}

function applyColorText() {
    const color = document.getElementById('color-picker3').value;
    //const svgElements = svgContainer.querySelectorAll('path, circle, rect, polygon, polyline, ellipse, line');
    const svgElements = svgContainer.querySelectorAll('tspan');
    
    svgElements.forEach(element => {
        var currentStyle = `fill: ${color};`;
        element.setAttribute('style', currentStyle);
    });
}

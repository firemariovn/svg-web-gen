// THIS SCRIPT FOR LEECH ALL SVG FILE, USE IN DEBUG CONSOLE
// OF BROWSER (F12)

// Get all SVG elements
const svgs = document.querySelectorAll('svg');

// Convert SVG element to string
function svgToString(svgElement) {
    const serializer = new XMLSerializer();
    return serializer.serializeToString(svgElement);
}

// Download SVG as file
function downloadSVG(filename, svgString) {
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

// Loop through all SVG elements and save each as a file
// FIXME: But only download ~10 file at the time, i dont know why...
svgs.forEach((svg, index) => {
    const svgString = svgToString(svg);
    const filename = `svg_${index + 1}.svg`;
    downloadSVG(filename, svgString);
});

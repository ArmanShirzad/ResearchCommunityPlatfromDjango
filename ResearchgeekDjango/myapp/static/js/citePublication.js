function citePublication(title, authors, year, doi) {
    const citationText = `${authors} (${year}). ${title}. doi:${doi}`;

    navigator.clipboard.writeText(citationText).then(() => {
        alert('Citation copied to clipboard: ' + citationText); // Notify the user
    }, (err) => {
        console.error('Failed to copy: ', err); // Error handling
    });
}

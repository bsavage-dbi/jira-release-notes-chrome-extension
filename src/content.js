chrome.runtime.onMessage.addListener(function (request) {
    if (!request) return;

    if (request.command === 'FormatText') {
        formatReleaseNotes();
    }
});

function formatReleaseNotes() {
    var $releaseNotesTextArea = $('#editcopy'),
        releaseNotesText;

    if ($releaseNotesTextArea.length > 0) {
        releaseNotesText = $releaseNotesTextArea.val();
        $releaseNotesTextArea.val(removeUnneededSymbols(releaseNotesText));
    } else {
        alert('Release Notes haven\'t been found');
    }
}

function removeUnneededSymbols(text) {
    return text.replace(/<li>\[<a href='/gi, '')
               .replace(/<\/li>/gi, '')
               .replace(/'>.*?<\/a>\]/gi, '')
               .replace(/<h2>/gi, '')
               .replace(/<\/h2>/gi, '')
               .replace(/<ul>/gi, '')
               .replace(/<\/ul>/gi, '')
               .replace(/  /gi, '')
               .replace(/\n\n/gi, '\n');
}
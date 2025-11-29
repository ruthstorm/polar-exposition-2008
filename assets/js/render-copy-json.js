/*
	Arctic to Tropic - 2008 by Ruth Storm, https://ruthstorm.com
    Fetches assets/data/emails.json and inserts context blocks alternating with photos
*/


$(document).ready(async function() {
    console.log('Loading context from JSON...');
    
    try {
        const response = await fetch('assets/data/emails.json');
        if (!response.ok) {
            console.warn('Could not load emails.json:', response.statusText);
            return;
        }

        const contextData = await response.json();
        insertContextBlocks(contextData);
        
    } catch (error) {
        console.warn('Could not load context data:', error);
    }
});

function insertContextBlocks(contextData) {
    console.log('Grouping photos by date and inserting context blocks...');
    
    // Group photos by date
    const dateGroups = groupPhotosByDate();
    
    // Process each date group
    Object.keys(dateGroups).forEach(dateKey => {
        const photoGroup = dateGroups[dateKey];
        const contextEntry = contextData[dateKey];
        
        if (contextEntry && photoGroup.photos.length > 0) {
            // Find the last photo in this date group
            const lastPhotoInGroup = photoGroup.photos[photoGroup.photos.length - 1];
            
            // Check if we already added a context block after this group
            if (!$(lastPhotoInGroup).next('.context-block').length) {
                const contextArticle = createContextArticle(contextEntry, photoGroup.photos.length);
                $(lastPhotoInGroup).after(contextArticle);
                console.log(`Added context block for ${dateKey} (${photoGroup.photos.length} photos)`);
            }
        }
    });
}

function groupPhotosByDate() {
    const groups = {};
    
    $('.thumb').each(function() {
        const $thumb = $(this);
        const imgSrc = $thumb.find('img').attr('src');
        const datePrefix = extractDatePrefix(imgSrc);
        
        if (datePrefix) {
            if (!groups[datePrefix]) {
                groups[datePrefix] = {
                    datePrefix: datePrefix,
                    photos: []
                };
            }
            groups[datePrefix].photos.push($thumb[0]);
        }
    });
    
    return groups;
}

function extractDatePrefix(src) {
    if (!src) return null;
    const match = src.match(/(\d{4}-\d{2}-\d{2}_\d{2}-\d{2})/);
    return match ? match[1] : null;
}

function createContextArticle(entry, photoCount) {
    const dateStr = formatDate(entry.id);
    const contextContent = formatContextContent(entry.context);
    const photoCountText = photoCount > 1 ? ` (${photoCount} photos)` : '';
    
    const articleHtml = `
        <article class="context-block thumb" data-context-id="${entry.id}">
            <div class="context-header">
                <h2>Expedition Notes from Email${photoCountText}</h2>
                <h3>${dateStr}</h3>
            </div>
            <div class="context-content">
                <div class="context-text">${contextContent}</div>
                <div class="context-meta">
                    <small>From expedition archives • ${entry.filename}</small>
                </div>
            </div>
        </article>
    `;
    
    return $(articleHtml);
}

function formatDate(datePrefix) {
    try {
        const [datePart, timePart] = datePrefix.split('_');
        const [year, month, day] = datePart.split('-');
        const date = new Date(year, month - 1, day);
        
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    } catch (e) {
        return datePrefix;
    }
}

function formatContextContent(content) {
    if (!content) return '<p><em>No context available</em></p>';
    
    // Split by double line breaks for paragraphs
    const paragraphs = content.split(/\n\s*\n/).filter(p => p.trim());
    
    const formatted = paragraphs.map(paragraph => {
        const lines = paragraph.split('\n').filter(line => line.trim());
        
        // Check if it's a numbered list
        if (lines.every(line => /^\d+\./.test(line.trim()))) {
            const listItems = lines.map(line => {
                return `<li>${escapeHtml(line.replace(/^\d+\.\s*/, ''))}</li>`;
            }).join('');
            return `<ol>${listItems}</ol>`;
        }
        
        // Check for signatures (lines starting with common sign-offs)
        const lastLine = lines[lines.length - 1];
        if (/^(love|luv|cheers|regards|best|dad|paul|margaret|-- )/i.test(lastLine.trim())) {
            const bodyLines = lines.slice(0, -1);
            const signature = lastLine.trim();
            
            let result = '';
            if (bodyLines.length > 0) {
                result += `<p>${escapeHtml(bodyLines.join(' '))}</p>`;
            }
            result += `<p class="context-signature">${escapeHtml(signature)}</p>`;
            return result;
        }
        
        // Regular paragraph
        return `<p>${escapeHtml(lines.join(' '))}</p>`;
    });
    
    return formatted.join('');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

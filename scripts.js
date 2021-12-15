// Selectors
const tabs = document.querySelector('.options');
const styleHeader = document.querySelector('.options .style-header');
const tabButtons = tabs.querySelectorAll('[role="tab"]');

const styleButtons = tabs.querySelectorAll('[role="option"]');
const stylePanels = tabs.querySelectorAll('[role="tabpanel"]');
const imgs = document.querySelector('.img-display');
const avatarImgs = imgs.querySelectorAll('img');

const backgrounds = document.querySelector('[aria-labelledby="background"]')

const download = document.querySelector('.download');
// Tab handling
tabButtons.forEach(button => {
    button.addEventListener('click', handleTabClick)
})

function handleTabClick(e) {
    // Hide all Style options
    stylePanels.forEach(panel => {
        panel.hidden = true;
    })

    // Unselect everything
    tabButtons.forEach(tab => {
        tab.setAttribute('aria-selected', false);
    })
    // Mark just the clicked tab as selected
    e.currentTarget.setAttribute('aria-selected', true);

    // Find the associated tab option an show it
    const { id } = e.currentTarget;
    const stylePanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    stylePanel.hidden = false;
}


// Style handling
styleButtons.forEach(option => {
    option.addEventListener('click', handleStyleClick)
})

function handleStyleClick(e) {
    const { style, option } = e.currentTarget.dataset;
    if (option !== 'accessories' || 'background') {
        const img = imgs.querySelector(`[alt="${option}"]`)
        img.src = `assets/${option}/${style}.png`;
    }

    if (option === 'accessories') {
        const accessory = imgs.querySelector(`[alt="${option}"]`);
        accessory.hidden = false;
    }
}

// Color options
const colorOptions = backgrounds.querySelectorAll('.background');
colorOptions.forEach(color => {
    color.addEventListener('click', (e) => {
        const { background } = e.currentTarget.dataset;
        imgs.style.backgroundImage = `url("assets/backgrounds/${background}.png")`
    })
})

// Download functionality

function handleDownload() {
    html2canvas(imgs).then((canvas) => {
        let a = document.createElement('a');
        a.href = canvas.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream');
        a.download = 'Alpaca.jpg';
        a.click();
    })
}

download.addEventListener('click', handleDownload)

// Selectors
const tabs = document.querySelector('.options');
const styleHeader = document.querySelector('.options .style-header');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const stylePanels = tabs.querySelectorAll('[role="tabpanel"]');


// Tab handling
tabButtons.forEach(button => {
    button.addEventListener('click', handleTabClick)
})

function handleTabClick(e) {
    // Hide all Style options
    stylePanels.forEach(panel => {
        panel.hidden = true;
    })

    styleHeader.hidden = true;

    // Unselect everything
    tabButtons.forEach(tab => {
        tab.setAttribute('aria-selected', false);
    })
    // Mark just the clicked option as selected
    e.currentTarget.setAttribute('aria-selected', true);

    // Find the associated Style option an show it
    const { id } = e.currentTarget;
    const stylePanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    stylePanel.hidden = false;

}


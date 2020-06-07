function createAnalytics() {
    let counter = 0;
    let destroyed = false;

    const listenter = () => counter++;

    document.addEventListener('click', listenter) 
    
    return {
        destroy() {
            document.removeEventListener('click', listenter)
            destroyed = true;
        },
        getClicks() {
            if ( destroyed ) {
                return `Analytics is destroyed. Total clicks = ${counter}`;
            }
            return counter;
        }
    }
}

window.analytics = createAnalytics();
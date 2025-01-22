
async function runContentScript(): Promise<void> {
    console.log("Run Content Script");
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runContentScript);
} else {
    runContentScript();
}

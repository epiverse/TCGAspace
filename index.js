console.log(`index.js loaded\n${Date()}`);

(async function(){
    // operating UI components
    tcga = await import('./tcga.mjs')
})()
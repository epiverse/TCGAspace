console.log(`module tcga.mjs loaded\n${Date()}`);

// Zip dependency
const JSZip = (await import('https://esm.sh/jszip@3.10.1')).default

// load and unzip tcga pathology reports

//async function loadData(url='https://raw.githubusercontent.com/jkefeli/tcga-path-reports/refs/heads/main/TCGA_Reports.csv.zip'){
async function loadData(url='./tcgaPathReports.json.zip'){
    let tic = Date.now()
	let response = await fetch(url);
    let data = await response.arrayBuffer()
    let zip = await JSZip.loadAsync(data);
    let filename='tcgaPathReports.json'
    let file = zip.file(filename)
    let content = await file.async('string')
    return JSON.parse(content)
    //let toc = Date.now()
    //console.log(`full data file loaded in ${toc-tic} secs`)
}

export{
    loadData
}





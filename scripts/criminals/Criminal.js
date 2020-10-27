export const Criminal = (criminalObject) => {
    return `
    <div id="criminal-${criminalObject.id}" class="criminal">
    <h5>${criminalObject.name}</h5>
    <div>Age: ${criminalObject.age}</div>
    <div>Crime: ${criminalObject.conviction}</div>
    <div>Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
    <div>Term End:${new Date(criminal.incarceration.end).toLocaleDateString('en-US')} `
}
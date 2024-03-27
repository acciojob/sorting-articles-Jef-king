//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
let bandlist=document.querySelector("band");
function bandSort(a, b) {
    const ignoreWord = ['a', 'an', 'the'];
    const getTitle = (band) => band.replace(/^(the |an |a )/i, '');
    const titleA = getTitle(a);
    const titleB = getTitle(b);

    return titleA.localeCompare(titleB);
}
bands.sort(bandSort());
bands.forEach((element) => {
    let listBand = document.createElement('li');
    listBand.textContent = element;
    unorderedList.appendChild(listBand);
});
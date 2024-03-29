// //your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

let bandList=document.querySelector("#band");

function bandSort(a, b) {
    const ignoreWord = ['a', 'an', 'the'];
    const getTitle = (band) => band.replace(/^(the |an |a )/i, '');
    const titleA = getTitle(a);
    const titleB = getTitle(b);

    return titleA.localeCompare(titleB);
}

// bands.sort(bandSort);

// bands.forEach((element) => {
//     let listItem = document.createElement('li');
//     listItem.textContent = element;
//     bandList.appendChild(listItem);

//     // Create and append horizontal line
//     let horizontal = document.createElement('hr');
// 	horizontal.classList ="lineHr"
//     bandlist.appendChild(horizontal);
// });
let unorderedList = document.querySelector("#band");

function customSort(a, b) {
    const ignoreWord = ['a', 'an', 'the'];
    const getTitle = (band) => band.replace(/^(the |an |a )/i, '');
    const titleA = getTitle(a);
    const titleB = getTitle(b);

    return titleA.localeCompare(titleB);
}

// bands.sort(customSort);
// bands.sort(customSort);
bands.sort(bandSort);
bands.forEach((element) => {
    let listItem = document.createElement('li');
    listItem.textContent = element;
    bandList.appendChild(listItem);

    // Create and append horizontal line
    let horizontal = document.createElement('hr');
	horizontal.classList ="lineHr"
    unorderedList.appendChild(horizontal);
});
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

let ignoreArticle = (str) => {
  let newarr = str.toLowerCase().split(" ")
  let ans = []
  for(let i of newarr){
    if(i != 'a' && i != 'an' && i != 'the'){
      ans.push(i)
    }
  }
  return ans.join(" ")
}  

bands.sort(function(a,b){
  let str1 = ignoreArticle(a)
  let str2 = ignoreArticle(b)
  return str1.localeCompare(str2)
})

let unorderedList=document.querySelector("#bands");

bands.forEach((t)=>{
  let x=document.createElement('li');
  x.innerText=t;
  unorderedList.appendChild(x);
});

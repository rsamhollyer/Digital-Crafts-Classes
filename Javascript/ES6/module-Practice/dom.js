export const createCard = function(title, prose, foot){
    let sectionEL = document.createElement("section");
    let titleEL = document.createElement("h1");
    let paraEL = document.createElement("p");
    let footerEL = document.createElement("footer");
    sectionEL.append(titleEL, paraEL, footerEL)
    titleEL.innerHTML = title
    paraEL.innerHTML=prose
    footerEL.innerHTML= `${foot}`
    return sectionEL
}
// console.log("test");
const body = document.querySelector("body");

// body.innerHTML = `
// <h1>Title</h1>
// <main>
//     <section>
//         <h2>Section Subtitle</h2>
//         <p>lorem crap</p>

//         <ul>
//             <li>1</li>
//             <li>2</li>
//             <li>3</li>
//         </ul>
//     </section>
// </main>
// `;

let h1 = document.createElement("h1");
let main = document.createElement("main");
let section = document.createElement("section");
let h2 = document.createElement("h2");
let p = document.createElement("p");
let ul = document.createElement("ul");

body.append(h1);
h1.append("Title");

body.append(main);
main.append(section);

section.append(h2, p);
h2.append("Subtitle");
p.append("Lorem Ipsum");

main.append(ul);
for (let i = 0; i < 6; i++) {
	ul.append(document.createElement("li"));
}

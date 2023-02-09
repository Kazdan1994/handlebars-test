import { compile } from "handlebars";

// compile the template
let body = document.querySelector("body");

if (body) {
  const template = compile(body.innerHTML);

  // execute the compiled template and print the output to the console
  body.innerHTML = template({ firstname: "Arthur", lastname: "Jacquemin" });
}

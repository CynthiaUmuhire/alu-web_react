import $ from "jquery";

function component() {
  const paragraphs = ["Holberton Dashboard", "Dashboard data for the students", "Copyright - Holberton School"];
  const $element = $("<body></body>");
  paragraphs.forEach(p => {
    $element.append($(`<p>${p}</p>`));
  });
  return $element;
}

$("body").append(component());

// let
let client = " 찰스 ";
let letter =
    "Dear" +
    client +
    "\n\
Lorem ipsum dolor sit amet,consectetur adipisicing elit. Nostrum tempora, voluptatum beatae " +
    client +
    "officia, quidem dolorum blanditiis non molestiae officiis impedit ut dolor eaque tempore aspernatur ex tenetur reiciendis qui at?" +
    client;

console.log(letter);
console.log("----------------------------------------------------------------------------------------------------------");
// literal
let letter2 = `Dear ${client} 

Lorem ipsum dolor sit amet,consectetur adipisicing elit. 
Nostrum tempora, voluptatum beatae ${client.length} officia, quidem dolorum blanditiis non molestiae officiis impedit ut dolor eaque tempore aspernatur ex tenetur reiciendis qui at?${client}
${1 * 10}`;

console.log(letter2);

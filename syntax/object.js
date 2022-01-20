// arrray
var members = [`egoing`, `k7705`, `hoya`];
console.log(members[0]);
console.log(members[2]);

// object
var roles = {
    program: "egoing",
    language: "js",
    platform: "internet",
};
console.log(roles.program);
console.log(roles.language);

// arrayLoop
var i = 0;
while (i < members.length) {
    console.log("arrayLoop :", members[i]);
    i++;
}
// object
for (var name in roles) {
    console.log("object :", name, "value :", roles[name]);
}

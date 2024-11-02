// const root = document.getElementById("root");
// const heading = document.createElement("h1");
// heading.innerText = "Hello World!";
// root.appendChild(heading);

// const heading = React.createElement(
//     "h1",
//     {id: "heading"},
//     "Hello World inside the react"
//     );

const parent = React.createElement("div",{id : "parent"}, [
    React.createElement("div", {id: "child-1"}, [
        React.createElement("h1", {id:"heading"},"I'm and h1 tag"), 
        React.createElement("h2", {id:"heading2"},"I'm an h2 tag")
    ]),
    React.createElement("div", {id: "child-2"}, [
        React.createElement("h1", {id:"heading"},"I'm and h1 tag"), 
        React.createElement("h2", {id:"heading2"},"I'm an h2 tag")
    ]),
]);

console.log(parent);
 
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
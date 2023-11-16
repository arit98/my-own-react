/* v1
function reactRender(React, createRoot){
    const domElement = document.createElement(React.type)
    domElement.innerHTML = React.children
    domElement.setAttribute('href', React.props.href)
    domElement.setAttribute('target', React.props.target)

    createRoot.appendChild(domElement)
}
*/

// v2
function reactRender(React, createRoot){
    const domElement = document.createElement(React.type)
    domElement.innerHTML = React.children
    for(const prop in React.props){
        if(prop === "children") continue;
        domElement.setAttribute(prop, React.props[prop])
    }

    createRoot.appendChild(domElement)
}

const React = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me to visit google"
}

const createRoot = document.querySelector("#root")

reactRender(React, createRoot)


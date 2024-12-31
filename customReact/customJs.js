const mainContainer=document.getElementById('root')


function customRender(createElemet,container){
    const domElement=document.createElement(createElemet.type)
    domElement.innerHTML=createElemet.children
    // domElement.setAttribute("href",createElemet.props.href)
    // domElement.setAttribute("target",createElemet.props.target)

    // container.appendChild(domElement)
    for (const prop in createElemet.props) {
        if(prop ==="children") continue
        console.log(prop);
        
        domElement.setAttribute(prop,createElemet.props[prop])
     
        
    }

     container.appendChild(domElement)

}

createElemet={
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank",
    },
    children:"Click me to visit google"
}


customRender(createElemet,mainContainer)


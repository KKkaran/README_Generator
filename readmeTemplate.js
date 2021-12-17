module.exports =(fileObject) =>{

    let color = ""
    if(fileObject.license === "Apache2.0")  color = "red"
    else if(fileObject.license === "MIT")  color = "yellow"
    else if(fileObject.license === "IPL1.0")  color = "blue"
    else if(fileObject.license === "ISC")  color = "blue"

    return `<h1 align='center'>${fileObject.title}<span><img src="icons/project.png" height="25" width="25"/></span></h1>
    <img src="https://img.shields.io/badge/License-${fileObject.license}-${color}.svg"/>
    <h2 id="description">Description</h2>
    <p><img src="icons/search.png" height="18" width="20"/>${fileObject.description}</p>
    <hr>
    <h2>Table of Contents</h2>
    <ul>
        <li><a href="#description">Description</a></li>
        <li><a href="#install">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#license">License</a></li>
        <li><a href="#contri">Contributing</a></li>
        <li><a href="#test">Tests</a></li>
        <li><a href="#question">Questions</a></li>
    </ul>
    <hr>
    <h2 id="install">Installation</h2>
    <p><img src="icons/wheel.png" height="18" width="20"/>${fileObject.install}</p>
    <hr>
    <h2 id="usage">Usage</h2>
    <p><img src="icons/laptop.png" height="18" width="20"/>${fileObject.usage}</p>
    <hr>
    <h2 id="license">License</h2>
    <img src="https://img.shields.io/badge/License-${fileObject.license}-${color}.svg"/>
    <p>${fileObject.license}</p>
    <hr>
    <h2 id="contri">Contributing</h2>
    <p><img src="icons/people.png" height="18" width="20"/>${fileObject.contri}</p>
    <hr>
    <h2 id="test">Tests</h2>
    <p><img src="icons/pencil.png" height="18" width="20"/>${fileObject.test}</p>
    <hr>
    <h2 id="question">Questions</h2>
    <p>Incase of questions, Find me on: </p>
    <p><img src="icons/gmail.png" height="18" width="20"/> :<a href='mailto: ${fileObject.email}'>Email</a></p>
    <p><img src="icons/github.png" height="18" width="20"/> :<a href='https://github.com/${fileObject.github}'>Github</a></p>`
}
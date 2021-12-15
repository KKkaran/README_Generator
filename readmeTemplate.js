module.exports =(fileObject) =>{

    return `<h1 align='center'>${fileObject.title}</h1>
    <h2 id="description">Description</h2>
    <hr>
    <p>${fileObject.description}</p>
    <h2>Table of Contents</h2>
    <hr>
    <ul>
        <li><a href="#description">Description</a></li>
        <li><a href="#install">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#license">License</a></li>
        <li><a href="#contri">Contributing</a></li>
        <li><a href="#test">Tests</a></li>
        <li><a href="#question">Questions</a></li>
    </ul>
    <h2 id="install">Installtion</h2>
    <hr>
    <p>${fileObject.install}</p>
    <h2 id="usage">Usage</h2>
    <hr>
    <p>${fileObject.usage}</p>
    <h2 id="license">License</h2>
    <hr>
    <p>${fileObject.license}</p>
    <h2 id="contri">Contributing</h2>
    <hr>
    <p>${fileObject.contri}</p>
    <h2 id="test">Tests</h2>
    <hr>
    <p>${fileObject.test}</p>
    <h2 id="question">Questions</h2>
    <hr>
    <p>Incase of questions, Find me on: </p>
    <p>Email :<a href='mailto: ${fileObject.email}'>Email</a></p>
    <p>Github :<a href='https://github.com/${fileObject.github}'>Github</a></p>`
}
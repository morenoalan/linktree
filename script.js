function GrabVectors() {
    let allVectors = document.getElementsByClassName('icon')[0].childNodes[1].getAttribute('id');
    console.log(allVectors);
    let  vectorFinder = allVectors.slice(5, allVectors.length);
    vectorFinder = 'material-filled-' + vectorFinder;
    console.log(vectorFinder);
}
GrabVectors();
function GrabVectors() {
    let whatIconIWillPut = document.getElementsByClassName('icon')[0].childNodes[1].getAttribute('id');
    console.log(whatIconIWillPut);
    let namingVector = whatIconIWillPut.slice(5, whatIconIWillPut.length);
    namingVector = 'material-filled-' + namingVector;
    console.log(namingVector);
    let iframeAddress = 'https://vectours.blogspot.com';
    console.log(iframeAddress);
    //cross-origin problems
}
GrabVectors();
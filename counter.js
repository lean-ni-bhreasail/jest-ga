
function addCounter(element) {
    let counter = 0;
    const counterEl = document.createElement('div');
    counterEl.style.cssText = 'color: red; font-weight: bold';
    element.appendChild(counterEl);

    function setCounterVal(val) {
        counterEl.innerHTML = `Click count: ${val}`;
    }

    setCounterVal(counter);
    element.addEventListener('click', e => setCounterVal(++counter));
}

export { addCounter };

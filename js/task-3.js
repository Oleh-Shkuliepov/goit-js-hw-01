function getElementWidth (content , padding , border   ) { 
    let elementContentWidth = Number.parseFloat(content);
    let sumElementPadding = Number.parseFloat(padding) + Number.parseFloat(padding);
    let sumElementBorder = Number.parseFloat(border) + Number.parseFloat(border);
    const result = elementContentWidth + sumElementPadding + sumElementBorder;
    return result;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
function padLeft(padding, input) {
    if (typeof padding === 'number') {
        return ' '.repeat(padding) + input;
    }
    return padding + input;
}
function multiplyAll(values, factor) {
    if (!values) {
        return values;
    }
    else {
        return values.map((x) => x * factor);
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * Math.pow(shape.radius, 2);
        case 'square':
            return Math.pow(shape.sideLength, 2);
    }
}
function getAreaExhaustiveness(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * Math.pow(shape.radius, 2);
        case 'square':
            return Math.pow(shape.sideLength, 2);
        default:
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
//# sourceMappingURL=Narrowing.js.map
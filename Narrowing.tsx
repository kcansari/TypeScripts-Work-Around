function padLeft(padding: number | string, input: string): string {
  if (typeof padding === 'number') {
    return ' '.repeat(padding) + input
  }
  return padding + input
}

function multiplyAll(
  values: number[] | undefined,
  factor: number
): number[] | undefined {
  if (!values) {
    return values
  } else {
    return values.map((x) => x * factor)
  }
}

// Discriminated unions
interface Circle {
  kind: 'circle'
  radius: number
}

interface Square {
  kind: 'square'
  sideLength: number
}

type Shape = Circle | Square

function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2

    case 'square':
      return shape.sideLength ** 2
  }
}

// Exhaustiveness checking
type ShapeExhaustiveness = Circle | Square

function getAreaExhaustiveness(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2
    case 'square':
      return shape.sideLength ** 2
    default:
      const _exhaustiveCheck: never = shape
      return _exhaustiveCheck
  }
}

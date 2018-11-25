const triangle = require('../public/triangle');


test('three values are zero',() =>{
    const triangleobj = new triangle(0,0,0);
    expect(triangleobj.triangleType).toBe('Enter only Valid numbers')
});

test('a triangle must have  positive Number',() =>{
    const triangleobj = new triangle(-1,0,3);
    expect(triangleobj.triangleType).toBe('Enter only Valid numbers')
});

test('three equal valuese',() =>{
    const triangleobj = new triangle(5,5,5);
    expect(triangleobj.triangleType).toBe('equilateral')
});

test('three different Invalid values',() =>{
    const triangleobj = new triangle(1,2,3);
    expect(triangleobj.triangleType).toBe('Invalid')
});

test('values where two sides are equal',() =>{
    const triangleobj = new triangle(3,3,5);
    expect(triangleobj.triangleType).toBe('isosceles')
});

test('three different valid values',() =>{
    const triangleobj = new triangle(6,8,10);
    expect(triangleobj.triangleType).toBe('scalene')
});

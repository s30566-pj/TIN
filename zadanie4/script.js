function pythagorean(){
    let liczby = [a, b, c];
    var a;
    var b;
    var c;
    liczby.sort((x, y) => x - y);

    return (Math.pow(liczby[0], 2) + Math.pow(liczby[1], 2) === Math.pow(liczby[2], 2));
}
function pythagorean(){
    let liczby = [a, b, c];
    var a;
    var b;
    var c;
    liczby.sort((x, y) => x - y);

    return (liczby[0] ** 2 + liczby[1] ** 2 === liczby[2] ** 2);
}
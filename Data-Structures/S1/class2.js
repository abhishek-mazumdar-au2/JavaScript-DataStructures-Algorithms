class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    point(){
        return `(${this.x},${this.y})`
    }

    //                       ........statics.........
    static distance (a, b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const P1 = new Point(4, 5);
const P2 = new Point(9, 1);

console.log(P1.point());
console.log(P2.point());
console.log(Point.distance(P1, P2));
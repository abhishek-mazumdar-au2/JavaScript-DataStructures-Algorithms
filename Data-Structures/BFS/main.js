


var db =  [
    {
    "title": "Kaho Na Pyaar Hai",
    "cast": [
        "Hrithik Roshan",
        "Amisha Patel",
        "Anupam Kher"
    ]
},
{
    "title": "DDLJ",
    "cast": [
        "SRK",
        "Kajol",
        "Anupam Kher",
        "Amrish Puri"
    ]
},
{
    "title": "Karan Arjun",
    "cast": [
        "SRK",
        "Salman Khan",
        "Rakhi",
        "Amrish Puri",
        "Ranjit",
        "Kajol"
    ]
},
{
    "title": "Masaan",
    "cast": [
        "Richa Chaddha",
        "Pankaj Tripathi",
        "Sweta Tripathi",
        "Sanjay Mishra",
        "Vicky Kaushal"
    ]
},
{
    "title": "Fukrey",
    "cast": [
        "Richa Chaddha",
        "Ali Fazal",
        "Manjot Singh",
        "Pankaj Tripathi",
        "Pulkit Samrat"
    ]
},
{
    "title": "Victoria & Abdul",
    "cast": [
        "Judi Dench",
        "Ali Fazal",
        "Eddei Izzard",
        "Adeel Akhtar",
        "Paul Higgins"
    ]
},
{
    "title": "URI",
    "cast": [
        "Vicky Kaushal",
        "Yami Gautam"
    ]
},
{
    "title": "Kaabil",
    "cast": [
        "Hrithik Roshan",
        "Yami Gautam"
    ]
}
]
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
class Node{
    constructor(value){
        this.value = value;
        this.edges = [];
        this.searched = false;
        this.parent = null;
    }
    addEdge(neighbor){
        this.edges.push(neighbor)
        neighbor.edges.push(this)
    }
}

class Graph{
    constructor(){
        this.nodes = [];
        this.graph = {};
        this.end = null;
        this.start = null;
    }
    setStart(actor){
        this.start = this.graph[actor]
        return this.start
    }
    setEnd(actor){
        this.end = this.graph[actor]
        return this.end
    }
    addNode(m){
        // this.filter(m)
        if(!this.nodes.includes(m)){
            this.nodes.push(m)
            var title = m.value;
            this.graph[title] = m; 
        } 
    }
    getNode(m){
        return this.graph[m]
    }
}

        // const screen = document.getElementById('data');
        // screen.innerText = "  "
        // for(var i=0; i<db.length; i++){
        //     if(i===db.length-1){
        //          screen.innerText += db[i].title
        //          break;
        //     }
        //     screen.innerText += db[i].title+"---"
        
        //     // setting up the nodes
            
        // }
        var graph = new Graph()
        for(var j=0; j<db.length; j++){
            var movie = db[j].title;
            var cast = db[j].cast;
            
            var movieNode = new Node(movie);
            graph.addNode(movieNode)
            for(var k=0; k<cast.length; k++){
                var actor = cast[k]
                var actorNode = graph.getNode(actor);
                if(actorNode==null){
                    actorNode = new Node(actor);
                }
                graph.addNode(actorNode);
                movieNode.addEdge(actorNode);
            }
        }
        var start = graph.setStart('SRK')
        var end = graph.setEnd('Vicky Kaushal')
        // console.log(graph)
   
        function bfs(){
            var queue = [];
            start.searched = true;
            console.log(start.value)
            console.log(end.value)
            queue.push(start);
            console.log(queue[0].edges)
            while(queue.length>0){
                // console.log(queue)
                var node = queue.shift();
                if(node===end){
                    console.log("Found "+node.value)
                    break
                }
                for(var l=0; l<node.edges.length; l++){
                    var neighbor = node.edges[l]
                    queue.push(neighbor);
                    if(!neighbor.searched) neighbor.searched=true;
                    neighbor.parent = node;
                }
            }
            // console.log(node)
            var path = [];
            path.push(end);
            var next = end.parent;
            console.log(end)
            console.log(next)
            while(next!==null){
                console.log(next)
                path.push(next.value);
                next = next.parent
            }
            console.log("------------------------------------------------------------")
            console.log("------------------------------------------------------------")
            console.log(path)
        }
        bfs()



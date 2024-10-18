

   class Graph {
      constructor(size) {
      this.size = size;
      this.adjacencyMatrix = Array.from({length: size}, () => Array(size).fill(0));
      this.vertexData = Array(size).fill('');
      }
   
      addEdge(u, v, weight) {
      if(0 <= u && u < this.size && 0 <= v && v < this.size) {
         this.adjacencyMatrix[u][v] = 1;
         this.adjacencyMatrix[v][u] = 1;
      }
      }
   
      addVertexData(vertex, data) {
      if(0 <= vertex && vertex < this.size) {
         this.vertexData[vertex] = data;
      }
      }
   
      printGraph() {
      console.log('Adjacency Matrix:');
      this.adjacencyMatrix.forEach(row => {
         console.log(row.join(' '));
      });
      console.log("\nVertex Data:");
      this.vertexData.forEach((data, vertex) => {
         console.log(`Vertex ${vertex}: ${data}`);
      });
      }
   
      dfsUtil(v, visited) {
      visited[v] = true;
      console.log(this.vertexData[v], " ");
   
      for(let i = 0; i < this.size; i++) {
         if(this.adjacencyMatrix[v][i] === 1 && !visited[i]) {
            this.dfsUtil(i, visited);
         }
      }
      }
   
      dfs(startVertexData) {
      const visited = Array(this.size).fill(false);
      const startVertex = this.vertexData.indexOf(startVertexData);
      this.dfsUtil(startVertex, visited);
      }
   
      bfs(startVertexData) {
      let queue = [this.vertexData.indexOf(startVertexData)];
      let visited = new Array(this.size).fill(false);
      visited[queue[0]] = true;
   
      while (queue.length > 0) {
            let currentVertex = queue.shift();
            console.log(this.vertexData[currentVertex] + " ");
   
            for (let i = 0; i < this.size; i++) {
               if (this.adjacencyMatrix[currentVertex][i] === 1 && !visited[i]) {
                  queue.push(i);
                  visited[i] = true;
               }
            }
      }
   }
   
   }
   
   const g = new Graph(8);
   
   g.addVertexData(0, '0');
   g.addVertexData(1, '1');
   g.addVertexData(2, '2');
   g.addVertexData(3, '3');
   g.addVertexData(4, '4');
   g.addVertexData(5, '5');
   g.addVertexData(6, '6');
   g.addVertexData(7, '7');
   
   7
   //  g.addEdge(3, 0);  // D - A
   //  g.addEdge(0, 2);  // A - C
   //  g.addEdge(0, 3);  // A - D
   //  g.addEdge(0, 4);  // A - E
   //  g.addEdge(4, 2);  // E - C
   //  g.addEdge(2, 5);  // C - F
   //  g.addEdge(2, 1);  // C - B
   //  g.addEdge(2, 6);  // C - G
   //  g.addEdge(1, 5);  // B - F
   
   g.printGraph();
   
   console.log("\nDepth First Search starting from vertex D:");
   g.bfs('7');
   
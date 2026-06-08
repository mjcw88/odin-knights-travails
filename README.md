# The Odin Project (Full Stack Javascript) - Knights Travails
Knights Travails project for the Odin Project Full Stack Javascript course. Designed to get more familiar with different data structures like graphs and concepts like vertices, edges by building a function that returns the shortest path for a knight to move from one square to another on a 8x8 chess board.

Full project specs can be found [here](https://www.theodinproject.com/lessons/javascript-knights-travails).

#### Design Explanation

The #knightMoves function takes in 2 arguments, each being an array of 2 integers, representing row and column index on the 8x8 chess board. This chess board is built as an adjacency matrix with each index being initialised to **false** representing whether or not the knight piece has moved to that respective square on the board. 

Once all necessary validations have passed, the knightMoves function then resets all tiles back to false in the event of the user calling the function multiple times. 

From here, the #findPossibleMoves function is then called and passes through the start and end positions. This function then creates an array of possible moves the knight can make starting with its initial starting position, initialising the queue of moves. An array of all the possible directions the knight can make is also created which are integer values that either increase or decrease the row and column index of the matrix. 

A hashmap called path is then created which creates a linked list of all paths the knight can make from one square to the next, initialised with a key of the starting position with a value of null.

A while loop then begins with a breadth-first traversal through the queue of possible moves the knight can currently make, first it checks if a edge has been created, if not, then it flips that edge to true, this is to prevent it from needlessly rechecking the same square over and over, and then begins checking what legal moves the knight can make from the current position taken from the queue with the aforementioned directions array. If it's a legal move and hasn't stepped on that square before it is then added to the path hashmap, with a key of the new square, and a value of the current position that discovered it and added to the back of the queue.

This while loop will keep going until it finds the desired destination and then return the path hashmap.

This path map is then passed through the #findShortestPath function which starts with the end point and works its way backwards until it finds the starting position, using the value of that matrix index that discovered it. It adds those moves to the movesList array, reverses it so it's in the correct order since they're being added back to front, the end point is then added to the array and returned back.

Now that we have our shortest path in an array, the #knightMoves function then returns this in a formatted message as per the project specs.
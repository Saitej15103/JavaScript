function Film() {
    var Raj = {
      hero_name: "Nani",
      movie_name: "Eega",
      director_name: "Raja Mouli",
      plotof_movie: "BlockBuster",
    };
    console.log(Raj);
  }
  Film();


// Behind the Scenes:

// Memory Allocation: When the Film() function is called, the JavaScript engine allocates memory for the function's variables.
// Object Creation: The object { hero_name: "Nani", ... } is created in memory, and its address is stored in the Raj variable.
// Console Output: The console.log() function retrieves the object's contents from memory and displays them in the console.
// Memory Cleanup: After the function finishes executing, the memory allocated for its variables may be reclaimed by the JavaScript engine's garbage collector. (This process is automatic and varies depending on the JavaScript environment.)

// Here's the function's operation explained:

// The Film() function is defined.
// Inside Film(), a variable Raj is declared.
// An object is created and assigned to Raj.
// The object Raj contains movie information (hero, movie, director, plot).
// console.log(Raj) outputs the Raj object to the console.
// Film() is called, triggering the function's execution.
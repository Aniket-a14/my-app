"use client";

export default function MapExample() {
    const movies = ["ABCD", "Palavi's Life", "Aniket's Life"];

    return (
        <div className="min-h-screen p-4 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-4">All Movies</h1>
            <ul className="list-disc pl-6 list-none">
                {movies.map((movie, index) => (
                    <li key={index} className="mb-2">
                        {index + 1}: {movie}
                    </li>
                ))}
            </ul>
        </div>
    );
}

// --- Explanation of map and index ---

/*
map() is a JavaScript array method that creates a new array by calling a provided function on every element in the original array.

Syntax:
array.map((element, index) => {
    // return something for each element
});

- element: The current item in the array.
- index: The position of the current item (starting from 0).

Example using the code above:
const movies = ["ABCD", "Palavi's Life", "Aniket's Life"];

movies.map((movie, index) => (
    <li key={index}>
        {index + 1}: {movie}
    </li>
));

Here,
- movie is each movie name in the array.
- index is the position (0, 1, 2, ...).
- {index + 1}: {movie} displays the movie number and name.

The map function helps us render a list of items dynamically in React.

About the "key" prop:
- In React, when rendering lists using map, you must provide a unique key prop to each list item.
- The key helps React identify which items have changed, are added, or are removed.
- Using the index as a key is common for static lists, but for dynamic lists (where items can be reordered or deleted), a unique id is better.
- Example: <li key={index}>...</li>
- Always add a key prop to avoid warnings and to help React optimize performance.
*/


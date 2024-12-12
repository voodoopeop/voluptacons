// Assuming TYPE_ENUM is defined somewhere in your code
const TYPE_ENUM = "someType"; // Replace with the actual type you are checking against

// Example object f
const f = {
    type: "someType", // This should match TYPE_ENUM for the condition to be true
    // other properties...
};

if (f.type === TYPE_ENUM) {
    // The condition is true, so execute this block of code
    console.log("The type is enum");
    // Add your logic here
} else {
    // The condition is false, so execute this block of code instead
    console.log("The type is not enum");
    // Add alternative logic here if needed
}

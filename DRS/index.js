// Default value of a parameter
// function add(x, y = 0) {
//    return x + y;
// }
// document.write(add(10) + "<br>");
// document.write(add(10,2));

// Rest - allows other users to use ulimited parameters
// function userFriends(user, ...friends) { // user is the first parameters
//    console.log(user + ' has ' + friends.length + ' friends. They are:');
//    friends.map(n => console.log(n));
// }
// userFriends('John', 'Bob', 'Alice'); //passed into the array friends

// Spread
function userTopFriends(firstFriend, secondFriend, thirdFriends) {
    console.log(firstFriend);
    console.log(secondFriend);
    console.log(thirdFriends);
 }
 userTopFriends(...['Alice', 'Bob', 'Michelle', 'John']);
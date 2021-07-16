// array are a special type of object which store data. Regular obj use keys to access data but Array use index to access data
var mFriends = ['Shaw', 'Clara', 'Vab', 'Khun'];
console.log(mFriends);
console.log(typeof(mFriends));
console.log(mFriends[2]);
console.log(mFriends[0]);

// Update a value
mFriends[0] = 'Shawn';
console.log(mFriends);

// Add more items
mFriends[4] = 'Julian';
console.log(mFriends);

// mFriends[mFriends-1] //will give this last position
mFriends[mFriends.length] = 'Rob'
console.log(mFriends);

// Adding item to the end of an array
mFriends.push('Jack');
console.log(mFriends);

// Delete item => remove the last item
mFriends.pop();
console.log(mFriends);
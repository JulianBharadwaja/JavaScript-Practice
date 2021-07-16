var mFriends = ['Shaw', 'Aya', 'Dokyu', 'Echizen', 'Jacob'];
mFriends.splice(3,0, 'Donna', 'Rachel');

// Start, how many item del?, what will be add?
console.log(mFriends);

mFriends.splice(0, 0, 'Harvey');
console.log(mFriends);

// Delete item at specific position
mFriends.splice(2,1);
console.log(mFriends);

// concatenation
var mOffice = ['Nina', 'Nuna', 'Mary', "Arial", "Katie"];
var mAllFriends = mFriends.concat(mOffice);
console.log(mAllFriends);

// Sorting Ascending and Descending

mAllFriends.sort();
console.log(mAllFriends);

mAllFriends.reverse();
console.log(mAllFriends);
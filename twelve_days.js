function daysOfChristmas() {
  const lyrics =
  `On the first day of Christmas
my true love sent to me:
1 Partridge in a Pear Tree

On the second day of Christmas
my true love sent to me:
2 Turtle Doves
and 1 Partridge in a Pear Tree

On the third day of Christmas
my true love sent to me:
3 French Hens
2 Turtle Doves
and 1 Partridge in a Pear Tree

On the fourth day of Christmas
my true love sent to me:
4 Calling Birds
3 French Hens
2 Turtle Doves
and 1 Partridge in a Pear Tree

On the fifth day of Christmas
my true love sent to me:
5 Golden Rings
4 Calling Birds
3 French Hens
2 Turtle Doves
and 1 Partridge in a Pear Tree

On the sixth day of Christmas
my true love sent to me:
6 Geese a Laying
5 Golden Rings
4 Calling Birds
3 French Hens
2 Turtle Doves
and 1 Partridge in a Pear Tree

On the seventh day of Christmas
my true love sent to me:
7 Swans a Swimming
6 Geese a Laying
5 Golden Rings
4 Calling Birds
3 French Hens
2 Turtle Doves
and 1 Partridge in a Pear Tree

On the eighth day of Christmas
my true love sent to me:
8 Maids a Milking
7 Swans a Swimming
6 Geese a Laying
5 Golden Rings
4 Calling Birds
3 French Hens
2 Turtle Doves
and 1 Partridge in a Pear Tree

On the ninth day of Christmas
my true love sent to me:
9 Ladies Dancing
8 Maids a Milking
7 Swans a Swimming
6 Geese a Laying
5 Golden Rings
4 Calling Birds
3 French Hens
2 Turtle Doves
and 1 Partridge in a Pear Tree

On the tenth day of Christmas
my true love sent to me:
10 Lords a Leaping
9 Ladies Dancing
8 Maids a Milking
7 Swans a Swimming
6 Geese a Laying
5 Golden Rings
4 Calling Birds
3 French Hens
2 Turtle Doves
and 1 Partridge in a Pear Tree

On the eleventh day of Christmas
my true love sent to me:
11 Pipers Piping
10 Lords a Leaping
9 Ladies Dancing
8 Maids a Milking
7 Swans a Swimming
6 Geese a Laying
5 Golden Rings
4 Calling Birds
3 French Hens
2 Turtle Doves
and 1 Partridge in a Pear Tree

On the twelfth day of Christmas
my true love sent to me:
12 Drummers Drumming
11 Pipers Piping
10 Lords a Leaping
9 Ladies Dancing
8 Maids a Milking
7 Swans a Swimming
6 Geese a Laying
5 Golden Rings
4 Calling Birds
3 French Hens
2 Turtle Doves
and 1 Partridge in a Pear Tree`

console.log(lyrics)
}

// console.log('jonathan:')
// daysOfChristmas();

const gifts = [
  ['Partridge in a Pear Tree', 'first'],
  ['Turtle Doves', 'second'],
  ['French Hens', 'third'],
  ['Calling Birds', 'fourth'],
  ['Golden Rings', 'fifth'],
  ['Geese a Laying', 'sixth'],
  ['Swans a Swimming', 'seventh'],
  ['Maids a Milking', 'eighth'],
  ['Ladies Dancing', 'ninth'],
  ['Lords a Leaping', 'tenth'],
  ['Pipers Piping', 'eleventh'],
  ['Drummers Drumming', 'twelfth'],
]

const daysOfChristmas2 = (gifts) => {
  gifts.forEach((gift, index) => {
    const [giftName, dayOfChristmas] = gift
    console.log(`
        On the ${dayOfChristmas} day of Christmas,
        My true love gave to me
        ${index + 1} ${giftName}`)
    for (let i = index - 1; i > 0; i -= 1) {
      const otherGift = gifts[i][0]
      console.log(`        ${i + 1} ${otherGift}`)
    }
    if (index > 0) {
      console.log(`        and 1 ${gifts[0][0]}`)
    }
  })
}

console.log(':::::::::::::::::::::::::::::::::')
daysOfChristmas2(gifts)

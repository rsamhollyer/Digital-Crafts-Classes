# Plan for today

1. 15 minute warmup
2. triage kanban board questions
3. demo the final version app
4. several rounds of lecture/activities (to show them how to build up to the final version)
5. lab time

# Strings

## How do I turn `"DigitalCrafts Coding Bootcamp"` into `["DigitalCrafts", "Coding", "Bootcamp"]`?

JavaScript Strings have a `.split()` method. You pass it the character to use as the divider. 

This Node.js session in the terminal shows splitting by passing a space (`' '`) to `.split()`:

```js
> const s = 'DigitalCrafts Coding Bootcamp';
> const words = s.split(' ');
> words
[ 'DigitalCrafts', 'Coding', 'Bootcamp' ]
> 
```

Alternatively, if you pass an empty String `''`, you get the individual letters:

```js
> const letters = s.split('');
> letters
[
  'D', 'i', 'g', 'i', 't', 'a',
  'l', 'C', 'r', 'a', 'f', 't',
  's', ' ', 'C', 'o', 'd', 'i',
  'n', 'g', ' ', 'B', 'o', 'o',
  't', 'c', 'a', 'm', 'p'
]
```

Notice that the Array of letters includes the spaces. To get rid of those, you can `.filter()` them out.

First, write a helper function that accepts a letter (a String) and returns `false` if it's a space:

```js
const notSpace = l => l !== ' ';
```

Then, pass that to .filter:

```js
> const letters2 = letters.filter(notSpace);
> letters2
[
  'D', 'i', 'g', 'i', 't', 'a',
  'l', 'C', 'r', 'a', 'f', 't',
  's', 'C', 'o', 'd', 'i', 'n',
  'g', 'B', 'o', 'o', 't', 'c',
  'a', 'm', 'p'
]
```

And finally, you can chain `.split()` and `.filter()`:

```js
> s.split('').filter(notSpace)
[
  'D', 'i', 'g', 'i', 't', 'a',
  'l', 'C', 'r', 'a', 'f', 't',
  's', 'C', 'o', 'd', 'i', 'n',
  'g', 'B', 'o', 'o', 't', 'c',
  'a', 'm', 'p'
]
```

## How do I put them back together? :joy:

There's a method for that, too!

Use `.join()`:

```js
> letters.join('');
'DigitalCrafts Coding Bootcamp'
```

`.join()` accepts a String and inserts it between each of the elements in the Array:

```js
> letters.join('-');
'D-i-g-i-t-a-l-C-r-a-f-t-s- -C-o-d-i-n-g- -B-o-o-t-c-a-m-p'
```

# Dates

## How do I access the parts of a date if it's a String formatted like `2020-04-10T14:07:10.618Z`?

You can either `.split()` the string if you *know* it's formatted that way. (`2020-04-10T14:07:10.618Z` is in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601), specifically in [UTC](https://en.wikipedia.org/wiki/Coordinated_Universal_Time).)

However, it's better to pass that String to `new Date()` and use methods like `.getMonth()` and `.getYear()` to extract parts of the date.

Here's a Node session in the terminal that demonstrates:

```js
>const d = new Date("2020-04-10T14:07:10.618Z");
undefined
> d
2020-04-10T14:07:10.618Z
> d.getDay() // day of week
5
> d.getDate() // day of month
10
> d.getFullYear() // 4 digit year
2020
```


# Arrays of Objects

## How do I find a simple value in an Array?

`.find()`, like `.filter()` takes a callback that can test a single value.

(example code in demo code)

The callback should do comparison with `===` (not just `==`). This keeps JS from lying to you when comparing Strings and Numbers (e.g., `"5" == 5`).

## How do I find an Object in an Array?

`.find()` will also work for Objects, you just need to compare properties.

(example code in demo code)

# Express

## What are two kinds of backends I'll build with express?

1. APIs (sends back JSON formatted info)
2. Websites (sends back HTML pages)

## How do I plan a backend?

Use this acronym: CRUD

- Create
- Retrieve
- Update
- Delete

### What are examples?

- Blogs (author creates/updates/deletes posts. readers retrieve a list of posts or an individual)
- Amazon (retrieve list of products, create/update/delete orders)

(activity: what are some others?)

## How do I organize my backend code?

One of the most popular is "Model-View-Controller"

(Chris will make an ugly drawing, or hopefully use draw.io)
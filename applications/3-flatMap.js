var techMentors = [{
    name: 'Beth',
    age: 28,
    likes: [
      'Math', 
      'JavaScript',
      'Ricochet Robots'
    ]
  }, {
    name: 'Dan',
    age: 29,
    likes: [
      'Crickets',
      'The Queen',
      'Being Proper'
    ]
  }, {
    name: 'Sunny',
    age: 25,
    likes: [
      'BitCoin',
      'Meteor',
      'Beth',
    ]
  }, {
    name: 'Zach',
    age: 28,
    likes: [
      'JavaScript',
      'Bad Puns',
      'Reduce',
    ]
  }, {
    name: 'Magee',
    age: 36,
    likes: [
      'JavaScript',
      'Dogs',
      'Riding Motorcycles',
    ]
  }];
  


// Problem 1: Given an array of tech Mentors, collect their name and age only

const renderNameAndAge = coll => 
  coll.reduce((acc, curr, index, coll) => {
    const bucket = {}
    bucket.name = curr.name
    bucket.age = curr.age
    acc.push(bucket)
    return acc
  }, [])

// renderNameAndAge(techMentors) 

// Problem 2: Given an array of tech Mentory, collect ther name and age in an array
const renderNameAndAge2 = coll => 
  coll.reduce((acc, curr, index, coll) => {
    acc.name.push(curr.name)
    acc.age.push(curr.age)
    return acc 
  }, {name: [], age: []})

renderNameAndAge2(techMentors)

/*
  Problem 3: 
  - Collect methors likes and sort them by ascending order.
  - Likes should not repeat
*/
const collectMentorLikes = techMentors => techMentors
      .reduce((coll, mentor, index, techMentors) => {
        mentor.likes.forEach(like => {
          if (coll.indexOf(like) === -1) coll.push(like)
        })
        return index !== techMentors.length - 1 ? coll : coll.sort()
      }, [])
// collectMentorLikes(techMentors)
/*
  [ 'Bad Puns',
  'Being Proper',
  'Beth',
  'BitCoin',
  'Crickets',
  'Dogs',
  'JavaScript',
  'Math',
  'Meteor',
  'Reduce',
  'Ricochet Robots',
  'Riding Motorcycles',
  'The Queen' ]
*/

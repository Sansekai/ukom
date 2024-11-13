import fetch from 'node-fetch';

const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWM0YWM5ZmVmOTU3NmU4ZmY4YTUyYzE5ZTVkOWZmMyIsIm5iZiI6MTczMDQ4NzgyMy43OTg4MDI5LCJzdWIiOiI2NzI1MjUyOTc3MWY1Y2IxNDk1NThkNTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.m5WBh_RgItNI7big143MLZUPRwAggP0r8c3unFV5KSI'
  }
};

const res = await fetch(url, options);
const data = await res.json();
console.log(data);

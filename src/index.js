//functions
// Get local text file data
const getText = () => {
  fetch('test.txt')
    .then(res => {
      return res.text(); //returns a Promise<string>
    })
    .then(data => {
      //we react to the promise above with another then
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
};

// Get local json data
const getJson = () => {
  fetch('posts.json')
    .then(res => {
      return res.json(); //returns a Promise<any>
    })
    .then(data => {
      //we react to the promise above with another then
      console.log(data);
      let output = '';
      data.forEach(post => {
        output += `<li>${post.title}</li>`;
      });

      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
};

// Get from external API
const getExternal = () => {
  fetch('https://api.github.com/users')
    .then(res => {
      return res.json(); //returns a Promise<any>
    })
    .then(data => {
      //we react to the promise above with another then
      console.log(data);
      let output = '';
      data.forEach(user => {
        output += `<li>${user.login}</li>`;
      });

      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
};

//Grab the buttons
document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

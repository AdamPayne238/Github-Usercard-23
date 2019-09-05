/* Sstep 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


axios.get('https://api.github.com/users/AdamPayne238')
  .then(response => {
    console.log(response.data);
    const aNewCard = gitCard(response.data)
    entryPoint.appendChild(aNewCard)
  }) 
  .catch(error => {
    console.log(error);
  })

  let entryPoint = document.querySelector('.cards')


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['Au-jones', 'anthonypiazza', 'deegrams221', 'NicholasInterest1', 'brandonharris177', 'NickGonzalez04', 'pusheadmetal', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach(i => {
    axios.get('https://api.github.com/users/' + [i])
    .then((response) => {
      const aNewCard = gitCard(response.data)
      entryPoint.appendChild(aNewCard)
      })
  .catch((err) => {
      console.log(err);
    })
  })



function gitCard(data){

  //Define Elements
  //Card
  let card = document.createElement('div');
  //Image
  let gitImage = document.createElement('img');
  //info
  let gitInfo = document.createElement('div');
  //Name
  let gitName = document.createElement('h3');
  //UserName
  let gitUserName = document.createElement('p');
  //Location
  let gitLocation = document.createElement('p');
  //Profile
  let gitProfile = document.createElement('p');
  //ProfileATag
  let gitProfileA = document.createElement('a');
  //Followers
  let gitFollowers = document.createElement('p');
  //Following
  let gitFollowing = document.createElement('p');
  //Bio
  let gitBio = document.createElement('p');
  // let newA = document.createElement('a');

    //Set Structure of Elements (appendChild)
    card.appendChild(gitImage);
    card.appendChild(gitInfo);
    gitInfo.appendChild(gitName);
    gitInfo.appendChild(gitUserName);
    gitInfo.appendChild(gitLocation);

    gitInfo.appendChild(gitProfile);
    // gitProfile.textContent =  `Profile: ${data.html_url}`;
    gitProfile.appendChild(gitProfileA)
    gitProfileA.textContent = `Profile: ${data.html_url}`;

    gitProfile.appendChild(gitProfileA);
    // gitProfile.appendChild(newA);

    gitInfo.appendChild(gitFollowers);
    gitInfo.appendChild(gitFollowing);
    gitInfo.appendChild(gitBio);

    //Set Class
    //Card
    card.classList.add('card');
    //Card Info
    gitInfo.classList.add('card-info');
    //Name
    gitName.classList.add('name');
    //UserName
    gitUserName.classList.add('username');

    //Set Content
    gitImage.setAttribute('src', data.avatar_url);
    gitName.textContent = `${data.name}`;
    gitUserName.textContent = data.login;
    gitLocation.textContent = data.location;
  
    gitFollowers.textContent = `Followers: ${data.followers}`;
    gitFollowing.textContent = `Following: ${data.following}`;
    gitBio.textContent = `Bio: ${data.bio}`;

    return card
}


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

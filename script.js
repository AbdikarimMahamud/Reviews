const name=document.querySelector(".name")
const job=document.querySelector(".job")
const userImage=document.querySelector(".profile")
const review=document.querySelector(".review")
const rightArrow=document.querySelector(".right")
const leftArrow=document.querySelector(".left")
const surpriseme=document.getElementById("surprise-btn")

const users = [
    {
        Name:"David Bartolemough",
        work:"Web-architect",
        review:"The live 24/7 customer feedback line was the greatest thing for me as i initially switched from a no-sql database and had a lot of confusion integrating into a sql based one"
          ,image:"images/hippie 1.jpeg"
    },
    {
    Name: "Leah Morisette",
    work: "Backend-web-developer",
    review: "Never been so easy scaling large formats of data at once in a sql-database,this one makes it seamless,fast and honestly a bit fun",
    image: "images/hippie 2.jpeg"
  },
  {
    Name: "Akma Ilamerzati",
    work: "Data Analyst",
    review: "it was such a great time-saver when i had to go through chunks of complex and composite data,i honestly could not be happier getting the premium version with the chatbot",
    image: "images/hippie 3.jpeg"
  },
  {
    Name: "Marcus Vance",
    work: "UI/UX Designer",
    review: "The user flow and interface capabilities are top-notch. It drastically cut down our prototype-to-production pipeline time.",
    image: "images/hippie 4.jpg"
  },
  {
    Name: "Elena Rostova",
    work: "DevOps Engineer",
    review: "Deployment workflows and automated integration scripts ran without a single hitch right out of the box.",
    image: "images/hippie 5.avif"
  },
  {
    Name: "Tariq Mansour",
    work: "Full Stack Developer",
    review: "Combining client-side interactivity with secure backend endpoints has never felt this straightforward.",
    image: "images/hippie 6.jpg"
  },
  {
    Name: "Sora Takahashi",
    work: "Systems Architect",
    review: "Extremely reliable infrastructure management. Handling custom APIs and dynamic visual data is completely seamless.",
    image: "images/hippie 7.avif"
  },
  {
    Name: "James Mpingwa",
    work: "Frontend Engineer",
    review: "Building responsive dynamic UI components with smooth updates turned what used to be hours of work into minutes.",
    image: "images/hippie 8.jpg"
  }
];
let currentuser=0;
rightArrow.onclick=()=>{
     currentuser++
    if (currentuser>users.length){
        currentuser=0
    }
    name.textContent=users[currentuser].Name
    job.textContent=users[currentuser].work
    review.innerHTML=`<i class="fas fa-quote-left"></i> ${users[currentuser].review} <i class="fas fa-quote-right"></i>`
    userImage.setAttribute('src',users[currentuser].image)
   
    
}
      
    
leftArrow.onclick = () => {
    currentuser--;
  
    if (currentuser < 0) {
        currentuser = users.length - 1;
    }

    name.textContent = users[currentuser].Name;
    job.textContent = users[currentuser].work;
    review.innerHTML = `<i class="fas fa-quote-left"></i> ${users[currentuser].review} <i class="fas fa-quote-right"></i>`;
    userImage.setAttribute('src', users[currentuser].image);
}

surpriseme.onclick=()=>{
    currentuser=Math.floor(Math.random()*users.length)
    name.textContent = users[currentuser].Name;
    job.textContent = users[currentuser].work;
    review.innerHTML = `<i class="fas fa-quote-left"></i> ${users[currentuser].review} <i class="fas fa-quote-right"></i>`;
    userImage.setAttribute('src', users[currentuser].image);
}
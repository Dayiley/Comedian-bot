
const jokeButton = document.getElementById("requestJokeButton");
jokeIndex = 0;




const jokes = [
  [
  "What did 0 say to 8?",
  "Nice belt."
  ],
  [
  "Why do programmers prefer dark mode?",
  "Because light attracts bugs! 😆💻"
  ]
  ];

  let chatContent = document.querySelector(".chat-content")

  function appendBotMessage(messageText){
    const messageDiv = document.createElement("div")
    messageDiv.className  = "message bot-message";
  
    const avatar = document.createElement("div");
    avatar.className = "fas fa-robot message-avatar"
    
    messageDiv.appendChild(avatar);
    chatContent.appendChild(messageDiv)

    const contentDiv = document.createElement("div");
    contentDiv.className = " message-content";

    contentDiv.textContent = messageText;
    messageDiv.appendChild(contentDiv);

    scrollToBottom();
  }

  appendBotMessage("Hello! I am Comedian Bot, here to make you laugh. Let me think of a joke.");

  function requestJoke() {
    appendUserMessage();
    if (jokeIndex >= jokes.length) {
      appendBotMessage("Sorry, I'm out of jokes for now!");
      return;
    }
    
    jokeButton.style.display ="none";
    
    setTimeout(function() {
    appendBotMessage("Ok, got one.");
    }, 1000);

    setTimeout(function() {
    appendBotMessage(jokes[jokeIndex][0])
    }, 1500);

    setTimeout(function() {
      appendBotMessage(jokes[jokeIndex][1]);
      jokeIndex++;
      jokeButton.style.display ="inline-block";
    }, 3500);
}


function appendUserMessage(){
  const messageDiv = document.createElement("div")
    messageDiv.className  = "message user-message";
  
    const avatar = document.createElement("div");
    avatar.className = "fas fa-smile message-avatar"
    
    messageDiv.appendChild(avatar);
    chatContent.appendChild(messageDiv)

    const contentDiv = document.createElement("div");
    contentDiv.className = " message-content";

    contentDiv.textContent = "Tell me a joke!";
    messageDiv.appendChild(contentDiv);

scrollToBottom();
}

function scrollToBottom(){
  chatContent.scrollTop = chatContent.scrollHeight;
}


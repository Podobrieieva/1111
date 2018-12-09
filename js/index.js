

  
var comment = document.querySelector(".comment")
    
var addComment = document.querySelector(".submit_comment")
var footer = document.querySelector("footer")

class AddComment extends HTMLElement {
    constructor(){
    super()
    let reviewCard = document.createElement('div')
      reviewCard.className = "review_card"
      let cardAbout = document.createElement('div')
      cardAbout.className = "card_about"
      reviewCard.appendChild(cardAbout)
      let name = document.createElement("h3")
      cardAbout.appendChild(name)
      name.innerHTML = "Лилия Семёновна"
      let dateComment = document.createElement("p")
      cardAbout.appendChild(dateComment)
      dateComment.innerHTML = "14 октября 2011"
      let content = document.createElement('div')
      content.className = "content"
      content.innerHTML = comment.value
      reviewCard.appendChild(content)
      this.shadow = this.attachShadow ( { mode: 'open' } )
      let style = document.createElement('style')
      style.textContent = `
          .review_card{
              margin: 0 20px;
              font-family: Arial, Helvetica, sans-serif;
              font-style: normal;
    }
    .card_about{
     display: flex;
        flex-direction: row;
        align-items: center;
    }
    p{
        line-height: 1.5;
         margin-left: 15px;
        color: #949494;
        font-size: 12px;
    }
        
    .content{
        border: 1px solid #cfcfcf;
        background-color: #f2fbff;
        
        padding: 20px ;
    
        position: relative;
    }
    
    .content:before{
        
            content: ' ';
            position: absolute;
            width: 0;
            height: 0;
            top: -10px;
            border: 5px solid;
            border-color:  transparent transparent  #cfcfcf #cfcfcf;
    }
    .content:after {
        content: ' ';
        position: absolute;
        top: -8px;
        left: 21px;
        border: 4px solid;
        border-color:  transparent transparent #f2fbff #f2fbff;
    }
    h3, .content{
        font-size: 14px;
    }

    `
    this.shadow.appendChild(style)
    this.shadow.appendChild(reviewCard)
    
    
    }
    }
    customElements.define("add-comment", AddComment)
  
    
    var add = document.querySelector(".add_comment")

    function addCommentFunction(event){
        if (!comment.value){
            alert("Enter your comment")
        } else{ 
            var newComment = document.body.appendChild(document.createElement('add-comment'))
        
            add.before(newComment, footer)
         comment.value =""
        }
      
     }

     function keyPress(e){
       var e = e || window.event;
            if (e.ctrlKey && e.keyCode == 13) {
                addCommentFunction(event)
            }
            return true
          }
        
     
    addComment.addEventListener("click", addCommentFunction)
    document.addEventListener("keydown", keyPress)

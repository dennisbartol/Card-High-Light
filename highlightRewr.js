// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed

document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelectorAll(.card); 

  card.forEach.card(card => {
  	  card.addEventListener('mouseenter', handleMove);
      card.addEventListener('mouseleave', handleMove);
    });

  function handleMove(e) {
    const rect = this.getBoundingClientRect();


    }

});

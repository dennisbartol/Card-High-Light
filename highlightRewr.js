// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed

document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelectorAll(.card); 

  card.forEach.card(card => {
  	  card.addEventListener('mouseenter', handleMove);
      card.addEventListener('mouseleave', handleMove);
    });

  function handleMove(e) {
    const rect = this.getBoundingClientRect();
    // The getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
    // The getBoundingClientRect() method also returns a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height.

      const x = e.clientX - rect.left; 
      const y = e.clientY - rect.top; 

    }

});

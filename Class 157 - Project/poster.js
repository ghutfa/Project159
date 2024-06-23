AFRAME.registerComponent("poster", {
    schema: {
      state: {type: "string", default: "comic-list"},
      selectedCard: {type: "string", default: "#card1"}
    },

    init: function () {
      this.coverContainer = this.el;
      this.createCards()
    },

    tick: function() {
      const {state} = this.el.getAttribute("poster")
      if(state==="view") {
        this.hideEl([this.cover-container])
        this.showDesc()
      }
    },
  
    hideEl: function(elList) {
      elList.map((i)=>{
        i.setAttribute("visible", false)
      })
    },
  
    showDesc: function() {
      const {selectedCard} = this.data
      const skyEl = document.querySelector("#main-container")
      skyEl.setAttribute("material", {src: `assests/info/${selectedCard}.png`, color: 'white'})
    },
  
    createCards: function () {
      const posterRef = [
        {
          id: "super_man",
          title: "Superman",
          url: "assests/download.jpg",
        },
        {
          id: "spider_man",
          title: "Spiderman",
          url: "assests/spiderman.jpg",
        },
  
        {
          id: "captain_aero",
          title: "Captain Aero",
          url: "assests/cap_aero.jpg",
        },
        {
          id: "outer_space",
          title: "Outer Space",
          url: "assests/cap_aero.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of posterRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position, item.id)
        // Thumbnail Element
        const thumbnailEl = this.createThumbnail(item)
        borderEl.appendChild(thumbnailEl)
      }
    },
  
    createBorder: function(position, id){
      const element = document.createElement('a-entity')
      element.setAttribute("visible", true)
      element.setAttribute("geometry", {primitive: 'ring', radiusInner: 9, radiusOuter: 10})
      element.setAttribute("position", position)
      element.setAttribute("id", id)
      element.setAttribute("material", {color: "#0077CC", opacity: 1})
      return element
    },
  
    createThumbnail: function(item){
      const element = document.createElement('a-entity')
      element.setAttribute("visible", true)
      element.setAttribute("geometry", {primitive: 'circle', radius: 9})
      element.setAttribute("material", {src: item.url})
      return element
    }
    
  });
  
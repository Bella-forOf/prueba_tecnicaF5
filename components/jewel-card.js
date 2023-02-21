class jewelCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
      return ["img", "title", "price", "description", "collection"];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
      if (attr === "img") {
        this.img = newVal;
      }
      if (attr === "title") {
        this.title = newVal;
      }
      if (attr === "price") {
        this.price = newVal;
      }
      if (attr === "description") {
        this.description = newVal;
      }
      if (attr === "collection") {
        this.collection = newVal;
      }
    }
    getTemplate() {
      const template = document.createElement("template");
      template.innerHTML = `
        <main class="container js-container">
          <section class="imgBox">
            <img src="${
              this.img
            }" alt="joyas"/>
          </section>
          <section class="details">
            <div class="content">
              <h2>${this.title} <span>${this.collection}</span></h2>
              <p>${this.description}</p>
              <h3>${this.price}</h3>
              
            </div>
          </section>
        </main>
        ${this.getStyles()}
      `;
      return template;
    }
    getStyles() {
      return `
        <style>
        :host {
          --primary-background: hsl(310, 22%, 55%);
            width: 80%;
            max-width: 900px;
            min-width: 280px;
            margin: 0 auto;
        }
        .container {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 900px;
            height: 600px;
            margin: 20px;
           
        }
        .container .imgBox {
            position: relative;
            display: flex;
            justify-content: center;
            width: 50%;
          
            background-color: white;
        }
        
        
        .container .imgBox img {
           
      
        
          
            
        }
        .container .details {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            height: 100%;
            box-sizing: border-box;
            padding: 40px;
        }
        .container .details h2 {
            margin-bottom: 25px;
            font-size: 2.5em;
            line-height: 0.8em;
            color: #444;
        }
        .container .details h2 span {
            font-size: 0.4em;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #999;
        }
        .container .details p {
            max-width: 85%;
            margin-left: 15%;
            margin-bottom: 35px;
            color: #333;
            font-size: 15px;
        }
        .container .details h3 {
            float: left;
            font-size: 2.5em;
            color: #a2a2a2;
        }
      
        @media (max-width: 1080px) {
            .container {
                height: auto;
                width: auto;
            }
            .container .imgBox {
               
                width: 80%;
                box-sizing: border-box;
                height: auto;
                text-align: center;
            }
            .container .imgBox img {
                left: initial;
                width: 200px;
                heigt:200px;
               
                img {
                  width: 60px;
                }
            }
            .container .details {
                width: 100%;
                height: auto;
                padding: 20px;
            }
            .container .details p {
                max-width: 100%;
                margin-left: 0;
                
            }
        }
        </style>
      `;
    }
    render() {
      this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
      this.render();
    }
  }
  customElements.define("jewel-card", jewelCard);

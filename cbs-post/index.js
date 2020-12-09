
class FibsPost extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'}); // sets and returns 'this.shadowRoot'

        //console.log("Head", Head)

        
        // STYLE
        const styleEl = document.createElement("style");
        styleEl.innerHTML = headStyle;
        this.shadow.appendChild(styleEl)

    }
    
    connectedCallback() {
        console.log('Connected', this);
        console.log("this", this.getAttribute("title"))
        const possibleProps = [
            "title", "description", "authorLink", "authorName", "avatar", "data"
        ]
        const props = {}
        possibleProps.forEach(pp => {props[pp] = this.getAttribute(pp)} )
        console.log("props", props)

        const Head = headMarkup({...props})

        // WRAPPER
        const wrapper = document.createElement("div");
        wrapper.className = "fibs-post-wrapper"
        wrapper.innerHTML = Head
        this.shadow.appendChild(wrapper)
        
    }
    attributeChangedCallback(name, oldValue, newValue) {
        console.log('Custom square element attributes changed.');
    }
    
}

const headMarkup = ({title, description, authorLink, authorName, avatar, date}) => `

    <div class="head">
        <h1>${title}</h1>
        <p>${description}</p>
        <div class="author-box">
            <div class="avatar-wrapper">
                <a href="${authorLink}" target="_blank">
                    <div class="avatar-box">
                        <img src="${avatar}" alt="avatar">
                    </div>
                </a>
            </div>
            <div>
                <div>
                    <p class="author-name-box">
                        <a href="${authorLink}" target="_blank">
                            ${authorName}
                        </a>
                    </p>
                    <p class="date">${date}</p>
                </div>
            </div>
        </div>
    </div>
    <template>
        <section>
            <slot></slot>
            <button>OK</button>
        </section>
        <footer>Glad you're here!</footer>
    </template>
`

const headStyle = `
    body {
        font-family: GT-Walsheim, "Neue Helvetica W02", "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    .fibs-post-wrapper { width:100%; }
    h1 { 
        box-sizing: inherit;
        color: var(--text-color, inherit);
        font-family: GT-Walsheim, "Neue Helvetica W02", "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 40px;
        font-variant: common-ligatures;
        font-weight: 600;
        letter-spacing: -1.5px;
        line-height: 1.1;
        margin: 0px;
        outline: none;
        padding: 0px;
        text-align: center;
        text-rendering: geometricprecision;
        text-size-adjust: inherit;
    }
    @media only screen and (min-width: 375px) { 
        h1 { 
            font-size: 52px;
            letter-spacing: -1.5px;
        }
    }
    @media only screen and (min-width: 768px) { 
        h1 { 
            font-size: 64px;
            letter-spacing: -1.5px;
        }
    }
    @media only screen and (min-width: 1024px) { 
        h1 { 
            font-size: 80px;
            letter-spacing: -2.3px;
        }
    }

    /*-------------------EXCERPT----------------------------------------*/

    div.head p { 
        box-sizing: inherit;
        font-size: 20px;
        font-variant: common-ligatures;
        letter-spacing: -0.5px;
        line-height: 1.5;
        margin: 0px;
        outline: none;
        text-align: center;
        text-size-adjust: inherit;
    }
    @media only screen and (min-width: 425px) { 
        div.head p { 
            font-size: 28px;
            letter-spacing: -0.5px;
        }
    }

    /*-----------------------AUTHOR------------------------------------*/

    div.author-box { 
        align-items: center;
        distribute: center;
        -webkit-box-align: center;
        -webkit-box-pack: center;
        align-items: center;
        box-sizing: inherit;
        display: flex;
        flex-direction: row;
        font-size: 20px;
        font-variant: common-ligatures;
        justify-content: center;
        line-height: 40px;
        outline: none;
        text-size-adjust: inherit;
    }
    div.avatar-box {
        cursor: pointer;
        display: inline-block;
        font-size: 20px;
        height: 40px;
        left: 0px;
        line-height: 40px;
        outline: none;
        position: relative;
        right: 0px;
        text-size-adjust: inherit;
        top: 0px;
        vertical-align: top;
        width: 40px;
        overflow:hidden;
    }
    div.avatar-box:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 500px;
        width: 100%;
        height: 100%;
        z-index: 200;
        box-shadow: 0 0 0 1px rgba(0,0,0,0.1) inset;
    }
    div.avatar-box image{
        position:relative;
        opacity: 1;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 500px;
        display: block;
        -webkit-user-drag: none;
        -webkit-transition: 0.2s opacity;
        transition: 0.2s opacity;
    }
    p.author-name-box { 
        color: #111;
        box-sizing: inherit;

        font-weight: 600;
        letter-spacing: -0.1px;
        line-height: 1.5;
        margin: 0px;
        outline: none;
        text-size-adjust: inherit;
    }

    p.date {
        box-sizing: inherit;
        color: ##555;
        box-sizing: inherit;
        font-size: 14px;
        font-variant: common-ligatures;
        letter-spacing: -0.1px;
        line-height: 1.5;
        margin: 0px;
        outline: none;
        text-size-adjust: inherit;
    }
    
    
`

customElements.define('fibs-post', FibsPost);

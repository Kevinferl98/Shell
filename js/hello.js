
const Console = {
    $perm: document.getElementById("permanent"),
    $inputText: document.getElementById("input_text"),
    $container: document.getElementById("screen"),
    addConsoleMessage: function(message){
        //const val = this.$inputText.value;

        if(message){
            //var separata = message.split(" ");
            if(message==="date"){
                var $nuovoParagrafo = document.createElement("p");
                var d = new Date();
                $nuovoParagrafo.innerHTML = d;
                this.$container.appendChild($nuovoParagrafo);
                this.$inputText.value = "";
            }
            else if(message==="mario"){
                var img = document.createElement("img");
                img.src = "/mario.gif";
                img.width = 400;
                img.height = 200;
                this.$container.appendChild(img);
                this.$inputText.value = "";
            }
            else if(message=="google"){
                window.open("https://www.google.com");
                this.$inputText.value = "";
            }
            else{
                var separata = message.split(" ");
                if(separata[0]==="echo"){
                    var $nuovoParagrafo = document.createElement("p");
                    for(let i=1; i<separata.length; i++){
                        $nuovoParagrafo.innerHTML += separata[i] + " ";
                        this.$container.appendChild($nuovoParagrafo);
                        this.$inputText.value = "";
                        console.log(separata[i]);
                    }
                }
                else if(separata[0]==="sum"){
                    var $nuovoParagrafo = document.createElement("p");
                    if(separata.length!=3){
                        $nuovoParagrafo.innerHTML = "Use: sum num1 num2";
                        this.$container.appendChild($nuovoParagrafo);
                        this.$inputText.value = "";
                    }
                    else{
                        var result = this.add(parseFloat(separata[1]),parseFloat(separata[2]));
                        $nuovoParagrafo.innerHTML = result;
                        this.$container.appendChild($nuovoParagrafo);
                        this.$inputText.value = "";
                    }
                }
                else if(separata[0]==="sott"){
                    var $nuovoParagrafo = document.createElement("p");
                    if(separata.length!=3){
                        $nuovoParagrafo.innerHTML = "Use: sott num1 num2";
                        this.$container.appendChild($nuovoParagrafo);
                        this.$inputText.value = "";
                    }
                    else{
                        var result = this.sott(parseFloat(separata[1]),parseFloat(separata[2]));
                        $nuovoParagrafo.innerHTML = result;
                        this.$container.appendChild($nuovoParagrafo);
                        this.$inputText.value = "";
                    }
                }
                else if(separata[0]==="molt"){
                    var $nuovoParagrafo = document.createElement("p");
                    if(separata.length!=3){
                        $nuovoParagrafo.innerHTML = "Use: molt num1 num2";
                        this.$container.appendChild($nuovoParagrafo);
                        this.$inputText.value = "";
                    }
                    else{
                        var result = this.molt(parseFloat(separata[1]),parseFloat(separata[2]));
                        $nuovoParagrafo.innerHTML = result;
                        this.$container.appendChild($nuovoParagrafo);
                        this.$inputText.value = "";
                    }
                }
                else if(separata[0]==="div"){
                    var $nuovoParagrafo = document.createElement("p");
                    if(separata.length!=3){
                        $nuovoParagrafo.innerHTML = "Use: div num1 num2";
                        this.$container.appendChild($nuovoParagrafo);
                        this.$inputText.value = "";
                    }
                    else{
                        var result = this.div(parseFloat(separata[1]),parseFloat(separata[2]));
                        $nuovoParagrafo.innerHTML = result;
                        this.$container.appendChild($nuovoParagrafo);
                        this.$inputText.value = "";
                    }
                }
                else{
                    var $nuovoParagrafo = document.createElement("p");
                    $nuovoParagrafo.innerHTML = message + ": command not found";
                    this.$container.appendChild($nuovoParagrafo);
                    this.$inputText.value = "";
                }
            }
        }
    },
    init: function(){
        this.$inputText.addEventListener("keyup", (event) => {
            if(event.key === "Enter"){
                this.addConsoleMessage(this.$inputText.value);
            }
        });
    },
    add: function(num1, num2){
        return num1 + num2;
    },
    sott: function(num1, num2){
        return num1 - num2;
    },
    molt: function(num1, num2){
        return num1 * num2;
    },
    div: function(num1, num2){
        return num1/num2;
    }
};

Console.init();


// Classe per creare la Console

// class MyConsole{
//     #container;
//     #inputText;

//     constructor(){
//         this.#container = document.getElementById("screen");
//         this.#inputText = document.getElementById("input_text");
//         this.#inputText.addEventListener("keyup",(event) => {
//             if(event.key === "Enter"){
//                 this.addConsoleMessage(this.#inputText.value);
//             }
//         });
//     }
//     addConsoleMessage(message) {
//         //const val = this.$inputText.value;

//         if(message){
//             const $nuovoParagrafo = document.createElement("p");
//             $nuovoParagrafo.innerHTML = message;
//             this.#container.appendChild($nuovoParagrafo);
//             this.#inputText.value = "";
//         }
//     }

// }
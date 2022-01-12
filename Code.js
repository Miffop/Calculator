let scr=document.getElementById("Screen");
let nbuttons=document.getElementsByClassName("nclick");
for(let i=0;i<nbuttons.length;i++)
{
    nbuttons[i].onclick=()=>{
        scr.innerText+=nbuttons[i].innerHTML;
    }
}
let EvalClick=document.getElementById("evalClick");
EvalClick.onclick=()=>{
    try{
        if(scr.innerText.length>0)
            scr.innerText=eval(scr.innerText)
        else
            scr.innerText="0";
    }
    catch{
        scr.innerText="Error";
        setTimeout(()=>{
            scr.innerText="";
        },500);
    }
}
let DelClick=document.getElementById("delClick");
DelClick.onclick=()=>{
    if(scr.innerText.length>0)
    {
        scr.innerText=scr.innerText.slice(0,scr.innerText.length-1)
    }
}
let Mem=document.getElementById("Memory");
let MemClick=document.getElementById("memClick");

MemClick.onclick=()=>{
    if(scr.innerText.length>0){
        let Lidx=document.createElement("li");

        let p=document.createElement("span");
        p.appendChild(document.createTextNode(scr.innerText));
        p.style.width="400px";
        p.onclick=()=>{
            scr.innerText+=p.innerText;
        }

        let img=document.createElement("img");
        img.src="remove.png";
        img.style.width="20px"
        img.style.marginLeft="20px"
        img.onclick=()=>{
            Mem.removeChild(Lidx);
        }

        Lidx.appendChild(p);
        Lidx.appendChild(img);
        Mem.appendChild(Lidx);
    }
}



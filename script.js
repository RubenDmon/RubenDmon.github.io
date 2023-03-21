function init() {
    var za = [];
    var ca = [];
    var sa = [];

    var conjsinmed = [];
    var conjunion = [];
    var conjinterseccion;

    za=ponercat(za,document.getElementById("z").value,"z");
    ca=ponercat(ca,document.getElementById("c").value,"c");
    sa=ponercat(sa,document.getElementById("s").value,"s");
    if((document.getElementById("z").value>0) && (document.getElementById("c").value>0) && (document.getElementById("s").value>0)){

    resultado="<nav><a href='https://matematicasmodernas.com/union-e-interseccion-de-conjuntos/' class='nav-link'  target='_blank'>Click:Teoria de conjuntos</a></nav>";
    resultado+="<br><p id='a'>A) El conjunto con todos los casos es: <br></p>"
    resultado+="A= ";
    resultado+=conjuntog(za,ca,sa);
    resultado+="<br>"
    resultado+="";
    //poner lo en lo de union
    conjsinmed=grupoA(za,sa,ca);
    resultado +="<p id='info'>Informacion sobre los conjuntos</p>"
    resultado+="<br>El Conjunto de personas sin medicamento es: (Conjunto A) ";
    resultado+="{ ";
    for (let i = 0; i < conjsinmed.length; i++) {
        resultado+=(conjsinmed[i].ejercicio + conjsinmed[i].sal + conjsinmed[i].medicamento + ",")
      }
      resultado+=" }";
      resultado+="<br>"
      resultado+="<br>"
      resultado+="<br>El Conjunto de personas caminantes es: (Conjunto B)";
    resultado+="{ ";
     for (let i = 0; i < ca.length; i++) {
        resultado+=(ca[i].ejercicio + ca[i].sal + ca[i].medicamento + ",")
      }
      resultado+=" }";
      resultado+="<br>"
      resultado+="<br>"
      conjunion=union(conjsinmed,ca);

      
      resultado+="<p id='a'>B) El conjunto union es:  </p>"
      resultado+="AUB";
    resultado+="{ ";
    for (let i = 0; i < conjunion.length; i++) {
        resultado+=(conjunion[i].ejercicio + conjunion[i].sal + conjunion[i].medicamento + ",")
      }
      resultado+=" }";

      if(conjsinmed.length >= ca.length) {
        conjinterseccion=interseccion(conjsinmed,ca);
      }else{
        conjinterseccion=interseccion(ca,conjsinmed);
      }
      
      resultado+="<br><p id='a'>C) El conjunto interseccion es: </p>"
      resultado+="𝐴∩𝐵";
    resultado+="{ ";
    
        resultado+=conjinterseccion;
      
      resultado+=" }";
    document.getElementById("resultado").innerHTML =  resultado;
 


      
    }else{
      window.alert('Lo siento los numeros introducidos deben ser mayores a 0');
    }
    
 }
   

  function ponercat(c, cant, cat) {
    let flag = true;
    for (let i = 0; i < cant; i++) {
      c[i] = {
        ejercicio: cat,
        sal: "",
        medicamento:""
      };
    }
    for (let i = 0; i < cant; i++) {
      c[i].ejercicio = cat;
      if (i % 2 == 0) {
        c[i].sal = "y";
      } else {
        c[i].sal = "n";
      }
  
      if (i % 2 == 0) {
        if (cat === "z" && c[i].sal === "y") {
          if (flag) {
            c[i].medicamento = "m";
            flag = false;
          } else {
            c[i].medicamento = "f";
            flag = true;
          }
        } else {
          c[i].medicamento = "f";
        }
      } else {
        c[i].medicamento = "f";
      }
    }
  
    return c;
  }

  function conjuntog(z,s,c){
    let str = "{ ";
    for (let i = 0; i < z.length; i++) {
        str+=(z[i].ejercicio + z[i].sal + z[i].medicamento + ",");
    }
    for (let i = 0; i < s.length; i++) {
        str+=(s[i].ejercicio + s[i].sal + s[i].medicamento + ",");
    }
    for (let i = 0; i < c.length; i++) {
        str+=(c[i].ejercicio + c[i].sal + c[i].medicamento + ",");
    }
    str+=(" }");
    return str;
  }


  function grupoA(z,s,c) {
    var str = [];
    var cont=0;
      for (let i = 0; i < z.length; i++) {
        if (z[i].medicamento === "f") {
            str[cont] = {
                ejercicio: "z",
                sal: z[i].sal,
                medicamento:"f"
              };
              cont++;
 
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i].medicamento === "f") {
            str[cont] = {
                ejercicio: "s",
                sal: s[i].sal,
                medicamento:"f"
              };
              cont++;
 
  
        }
    }
    for (let i = 0; i < c.length; i++) {
        if (c[i].medicamento === "f") {
            str[cont] = {
                ejercicio: "c",
                sal: c[i].sal,
                medicamento:"f"
              };
              cont++;
 
 
        }
    }
    return str;
  }
  function union(a,b){
    var str = [];
    var cont=0;
    var string="";
    var aux="";
    for (let i = 0; i < a.length; i++) {
        aux=a[i].ejercicio+a[i].sal+a[i].medicamento;
        if(string.includes(aux)===false){
str[cont] = {
                ejercicio: a[i].ejercicio,
                sal: a[i].sal,
                medicamento:a[i].medicamento
              }
              cont++;
               string+=a[i].ejercicio+a[i].sal+a[i].medicamento+" ";  
        }
        
           
    }
    for (let i = 0; i < b.length; i++) {
        aux=a[i].ejercicio+a[i].sal+a[i].medicamento;
        if(string.includes(aux)===false){
          str[cont] = {
            ejercicio: b[i].ejercicio,
            sal: b[i].sal,
            medicamento:b[i].medicamento
          }
          cont++; 
          string+=b[i].ejercicio+b[i].sal+b[i].medicamento+" ";   
        }
        
        
        
    }
    
    return str;
  }

  ///hacerle lo de la interseccion con b
  function interseccion(a,b){
    var str= "";
    var cont=0;
    var stringa="";
    var stringb="";
    var aux="";
    for (let i = 0; i < a.length; i++) {
        stringa+=a[i].ejercicio+a[i].sal+a[i].medicamento+" ";  
    }
    /*for (let i = 0; i < b.length; i++) {
          stringb+=b[i].ejercicio+b[i].sal+b[i].medicamento+" ";   
     
    }*/
    for (let j = 0; j < b.length; j++) {
            aux=b[j].ejercicio+b[j].sal+b[j].medicamento;
            if(stringa.includes(aux) && (str.includes(aux)===false)){
                str+=(aux +" ,");
            }
    }

    
    return str;
  }

  
  
  
  
  
  
  


$(document).ready(function () {
   cardapio.eventos.init();
})

var cardapio = {};

cardapio.eventos = {
  init: () => {
   cardapio.metodos.obterItensCardapio();
  }
}

cardapio.metodos = {
    //obter a lista de itens do cardapio!
    obterItensCardapio: (categoria = 'burgers') => {
        var filtro = MENU[categoria];
         console.log(filtro);

         //limpar o intens cadapio
         $("#itensCardapio").html('');

         $.each(filtro,(i, e) => {            
          
            let temp = cardapio.templates.item.replace(/\${img}/g,e.img)
            .replace(/\${name}/g,e.name)
            .replace(/\${price}/g,e.price.toFixed(2).replace('.',','));
            $("#itensCardapio").append(temp)

         })
         //remove o active
         $(".container-menu a").removeClass('active');
         //seta menu para ativo
         $("#menu"+ categoria).add

    },

}
cardapio.templates = {
    item:
    `<div class="col-3 mb-5">
    <div class=" card card-item">
      <div class="img-produto">
         <img src="\${img}"/> 
      </div>
      <p class="title-produto text-center mt-4">
          <b>\${name}</b>
      </p>
      <p class="price-produto text-center">                              
           <b>R$ \${price}</b>
      </p>
      <div class="add-carrinho">
          <span class="btn-menos"><i class="fas fa-minus"></i></span>
          <span class="add-numero-itens">0</span>
          <span class="btn-mais"><i class="fas fa-plus"></i></span>
          <span class="btn btn-add"><i class="fa fa-shopping-bag"></i></span>
      </div>

    </div>
  </div>`

}
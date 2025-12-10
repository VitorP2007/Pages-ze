//PRODUTO INDIVIDUAL
// Lista de produtos
// só executa se estiver na página ProdInd
if (document.querySelector(".produto-container")) {
    document.addEventListener("DOMContentLoaded", () => {
        carregarProduto();
        configurarQuantidade();
    });
}

const produtos = {

    frango: {
        nome: "Frango Inteiro - Seara",
        preco: "R$ 25,99",
        imagem: "img/Produtos/Frango.png",
        descricao: "Frango inteiro congelado ideal para assados, cozidos e grelhados."
    },

    mortadela: {
        nome: "Mortadela Defumada - Seara",
        preco: "11,99",
        imagem: "img/Produtos/Mortandela.png",
        descricao: "Mortadela defumada saborosa, ideal para lanches."
    },

    Sucrilhos: {
        nome: "Cereal Sucrilhos - Kellogg’s",
        preco: "R$ 7,99",
        imagem: "img/Produtos/Sucrilhos.png",
        descricao: "Cereal matinal crocante."
    },

    picanha: {
        nome: "Picanha - Frisa",
        preco: "49,99",
        imagem: "img/Produtos/Picanha.png",
        descricao: "Picanha Frisa selecionada, perfeita para churrascos."
    },

    sabao: {
        nome: "Sabão Liquido - Brilhante",
        preco: "R$ 12,99",
        imagem: "img/Produtos/Sabão.png",
        descricao: "Sabão Liquido Brilhante para roupas limpas e cheirosas."
    },

    Shampoo: {
        nome: "Shampoo - Pantene",
        preco: "R$ 24,99",
        imagem: "img/Produtos/Shampoo.png",
        descricao: "Shampoo Pantene para cabelos macios e brilhantes."
    },

    pepsi: {
        imagem: "img/Produtos/Pepsi.png",
        nome: "Refrigerante - Pepsi",
        preco: "R$ 2,99",
        descricao: "Refrigerante Pepsi sabor original, ideal para festas e encontros."
    },

    veja: {
        nome: "Veja multiuso - VEJA",
        preco: "R$ 9,99",
        imagem: "img/Produtos/Veja.png",
        descricao: "Utilize Veja para uma limpeza eficaz na sua cozinha."
    },

    sabaoembarra: {
        nome: "Sabão em Barra - Ypê",
        preco: "R$ 14,99",
        imagem: "img/Produtos/Sabão barra.png",
        descricao: "Sabão em barra Ypê para roupas limpas e cheirosas."
    },

    51: {
        nome: "Cachaça Tradicional - 51",
        preco: "R$ 18,99",
        imagem: "img/Produtos/51.png",
        descricao: "Cachaça 51 tradicional, perfeita para caipirinhas."
    },

    coca: {
        nome: "Refrigerante - Coca-Cola",
        preco: "R$ 8,99",
        imagem: "img/Produtos/Coca Cola.png",
        descricao: "Refrigerante Coca-Cola sabor original, ideal para festas e encontros."
    },

    arroz: {
        nome: "Arroz Branco - Emoções",
        preco: "R$ 5,99",
        imagem: "img/Produtos/Arroz.png",
        descricao: "Arroz Branco - Emoções, perfeito para acompanhar suas refeições."
    },

    oleo: {
        nome: "Óleo de Soja - Soya",
        preco: "R$ 7,59",
        imagem: "img/Produtos/oleo.png",
        descricao: "Óleo de Soja Soya, ideal para frituras e preparos culinários."
    },

    feijao: {
        nome: "Feijão Carioca - Kicaldo",
        preco: "R$ 6,99",
        imagem: "img/Produtos/Feijão.png",
        descricao: "Feijão Carioca Kicaldo, rico em proteínas e fibras."
    },

    maça: {
        nome: "Maçã Verde - kg",
        preco: "R$ 12,99",
        imagem: "img/Produtos/maça.png",
        descricao: "Maçã Verde fresca e madura."
    },

    melancia: {
        nome: "Melancia - kg",
        preco: "R$ 4,69",
        imagem: "img/Produtos/Melancia.png",
        descricao: "Melancia suculenta e refrescante."
    },

    uva: {
        nome: "Uva - kg",
        preco: "R$ 15,99",
        imagem: "img/Produtos/Uva.png",
        descricao: "Uva doce e saborosa."
    },

    papel: {
        nome: "Papel Higiênico - Personal",
        preco: "R$ 19,99",
        imagem: "img/Produtos/Papel.png",
        descricao: "Papel Higiênico - Personal, folha tripla 12 rolos."
    },

    colgate: {
        nome: "Creme Dental - Colgate",
        preco: "R$ 5,99",
        imagem: "img/Produtos/Colgate.png",
        descricao: "Creme Dental Colgate para um sorriso saudável."
    },

    pao: {
        nome: "Pão Francês - kg",
        preco: "R$ 17,49",
        imagem: "img/Produtos/Pão.png",
        descricao: "Pão Francês fresquinho, ideal para o café da manhã."
    },

    bolo: {
        nome: "Bolo de Chocolate - kg",
        preco: "R$ 39,99",
        imagem: "img/Produtos/bolo.png",
        descricao: "Bolo de Chocolate delicioso."
    },

    salgados: {
        nome: "Salgados Sortidos - kg",
        preco: "R$ 14,99",
        imagem: "img/Produtos/salgado.png",
        descricao: "Salgados sortidos para festas e eventos."
    },

    margarida: {
        nome: "Margarina - Delicia",
        preco: "R$ 6,49",
        imagem: "img/Produtos/Margarina.png",
        descricao: "Margarina para um sabor especial em suas receitas."
    },

    iogurte: {
        nome: "Iogurte de morango - Danone",
        preco: "R$ 11,99",
        imagem: "img/Produtos/Danone.png",
        descricao: "Iogurte de morango Danone, bandeja com 6 unidades."
    },

    leite: {
        nome: "Leite Integral - Piracanjuba",
        preco: "R$ 4,79",
        imagem: "img/Produtos/Leite.png",
        descricao: "Leite Integral Piracanjuba, embalagem de 1 litro."
    }
};

// LÓGICA PARA CARREGAR PRODUTO
// =========================

function carregarProduto() {

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const produto = produtos[id];

    if (!produto) {
        document.querySelector("main").innerHTML = `
            <h2 style="text-align:center; padding:40px">Produto não encontrado.</h2>
        `;
        return;
    }

    // Preenche os dados do produto
    document.getElementById("produto-imagem").src = produto.imagem;
    document.getElementById("produto-imagem").alt = produto.nome;

    document.getElementById("produto-nome").textContent = produto.nome;
    document.getElementById("produto-preco").textContent = produto.preco;
    document.getElementById("produto-descricao").textContent = produto.descricao;

    // Botão de comprar (WhatsApp)
    atualizarLinkComprar(produto.nome);

    // Botão "Adicionar ao carrinho"
    const btnAdd = document.getElementById("btn-add-carrinho");

    if (btnAdd) {
        btnAdd.onclick = () => {
            adicionarAoCarrinho({
                id: produto.id,
                nome: produto.nome,
                preco: Number(produto.preco.replace(",", ".")),
                imagem: produto.imagem,
                qnt: Number(document.getElementById("quantidade").textContent)
            });

            alert("Produto adicionado ao carrinho!");
        };
    }
}

// CONTROLE DE QUANTIDADE
// =========================

function configurarQuantidade() {

    const mais = document.getElementById("mais");
    const menos = document.getElementById("menos");
    const display = document.getElementById("quantidade");

    mais.addEventListener("click", () => {
        display.textContent = String(Number(display.textContent) + 1);
        atualizarLinkComprar(document.getElementById("produto-nome").textContent);
    });

    menos.addEventListener("click", () => {
        const atual = Number(display.textContent);
        if (atual > 1) {
            display.textContent = String(atual - 1);
            atualizarLinkComprar(document.getElementById("produto-nome").textContent);
        }
    });
}

// ATUALIZA LINK DO WHATSAPP

function atualizarLinkComprar(nomeProduto) {

    const quantidade = document.getElementById("quantidade").textContent;
    const phone = "55999999999";

    const texto = encodeURIComponent(
        `Olá! Quero comprar: ${nomeProduto} (quantidade: ${quantidade})`
    );

    const link = `https://api.whatsapp.com/send?phone=${phone}&text=${texto}`;
    document.getElementById("btn-comprar").href = link;
}
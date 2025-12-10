/* =========================================================
   ESCONDER HEADER AO ROLAR
========================================================= */
let lastScroll = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    const atual = window.pageYOffset;

    if (atual > lastScroll) header.classList.add("hide-header");
    else header.classList.remove("hide-header");

    lastScroll = atual;
});

/* =========================================================
   FAQ / DÚVIDAS
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll(".faq-pergunta");

    botoes.forEach(btn => {
        btn.addEventListener("click", () => {
            const item = btn.closest(".faq-item");
            const resposta = item.querySelector(".faq-resposta");

            document.querySelectorAll(".faq-item").forEach(outro => {
                if (outro !== item) {
                    outro.classList.remove("open");
                    outro.querySelector(".faq-resposta").style.maxHeight = null;
                }
            });

            if (item.classList.contains("open")) {
                item.classList.remove("open");
                resposta.style.maxHeight = null;
            } else {
                item.classList.add("open");
                resposta.style.maxHeight = resposta.scrollHeight + "px";
            }
        });
    });
});

/*GERAR LINK WHATSAPP COM ITENS DO CARRINHO */
function gerarLinkWhatsAppFinal(carrinho) {
    const phone = "(77) 9546-3348"; // seu número

    let mensagem = "Olá! Gostaria de finalizar minha compra:%0A%0A";

    carrinho.forEach(item => {
        mensagem += `• ${item.nome} — Qtd: ${item.quantidade} — Preço: R$ ${item.preco}%0A`;
    });

    return `https://api.whatsapp.com/send?phone=${phone}&text=${mensagem}`;
}

/* =========================================================
   MENU LATERAL (não alterado)
========================================================= */
const menuBtn = document.getElementById("menu-btn");
const menuMobile = document.getElementById("menu-mobile");
const overlay = document.getElementById("menu-overlay");

// Abrir/fechar menu
if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        menuMobile.classList.toggle("show");
        overlay.classList.toggle("show");
    });
}

// Fechar ao clicar no fundo
if (overlay) {
    overlay.addEventListener("click", () => {
        menuMobile.classList.remove("show");
        overlay.classList.remove("show");
    });
}

// Fechar menu ao rolar página
window.addEventListener("scroll", () => {
    if (menuMobile.classList.contains("show")) {
        menuMobile.classList.remove("show");
        overlay.classList.remove("show");
    }
});


/* =========================================================
   CARRINHO — ABRIR / FECHAR (independente do menu)
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
    const btnCarrinho = document.getElementById("abrir-carrinho");
    const carrinho = document.getElementById("carrinho");
    const carrinhoOverlay = document.getElementById("carrinho-overlay");

    function abrirCarrinho() {
        carrinho.classList.add("ativo");
        carrinhoOverlay.classList.add("ativo");
    }

    function fecharCarrinho() {
        carrinho.classList.remove("ativo");
        carrinhoOverlay.classList.remove("ativo");
    }

    if (btnCarrinho) {
        btnCarrinho.addEventListener("click", () => {
            if (carrinho.classList.contains("ativo")) fecharCarrinho();
            else abrirCarrinho();
        });
    }

    if (carrinhoOverlay) {
        carrinhoOverlay.addEventListener("click", fecharCarrinho);
    }
});

/* =========================================================
   SISTEMA COMPLETO DO CARRINHO (LOCALSTORAGE)
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    function salvarCarrinho() {
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }

    function atualizarTotalCarrinho() {
        const totalEl = document.getElementById("carrinho-total-valor");
        if (!totalEl) return;

        let total = 0;
        carrinho.forEach(item => {
            total += Number(item.preco.replace(",", ".")) * item.quantidade;
        });

        totalEl.textContent = "R$ " + total.toFixed(2).replace(".", ",");
    }

    function renderizarCarrinho() {
        const lista = document.getElementById("carrinho-itens");
        if (!lista) return;

        lista.innerHTML = "";

        if (carrinho.length === 0) {
            lista.innerHTML = "<p>Seu carrinho está vazio.</p>";
            atualizarTotalCarrinho();
            return;
        }

        carrinho.forEach((item, index) => {
            const div = document.createElement("div");
            div.classList.add("item-carrinho");

            div.innerHTML = `
                <img src="${item.imagem}" class="img-carrinho">
                <div class="info-carrinho">
                    <strong>${item.nome}</strong><br>
                    <span>Qtd: ${item.quantidade}</span><br>
                    <span>Preço: R$ ${item.preco}</span>
                </div>
                <button class="remover-item" data-index="${index}">&times;</button>
            `;

            lista.appendChild(div);
        });

        document.querySelectorAll(".remover-item").forEach(btn => {
            btn.addEventListener("click", (e) => {
                carrinho.splice(e.target.dataset.index, 1);
                salvarCarrinho();
                renderizarCarrinho();
                atualizarTotalCarrinho();
            });
        });

        atualizarTotalCarrinho();
    }

    // Botão "Adicionar ao carrinho" (Página ProdInd)
    const btnAdd = document.getElementById("btn-add-carrinho");
    if (btnAdd) {
        btnAdd.addEventListener("click", () => {

            const nome = document.getElementById("produto-nome")?.textContent || "Produto";
            const preco = document.getElementById("produto-preco")?.textContent.replace("R$ ", "");
            const imagem = document.getElementById("produto-imagem")?.src;
            const quantidade = parseInt(document.getElementById("quantidade")?.textContent) || 1;

            carrinho.push({ nome, preco, imagem, quantidade });

            salvarCarrinho();
            renderizarCarrinho();

            // abre carrinho
            const carrinhoPainel = document.getElementById("carrinho");
            const carrinhoOverlay = document.getElementById("carrinho-overlay");

            carrinhoPainel.classList.add("ativo");
            carrinhoOverlay.classList.add("ativo");

            alert("Produto adicionado ao carrinho!");
        });
    }

    // Botão FINALIZAR COMPRA
    const btnFinalizarCompra = document.getElementById("finalizar-compra");
    if (btnFinalizarCompra) {
        btnFinalizarCompra.addEventListener("click", () => {
            const link = gerarLinkWhatsAppFinal(carrinho);
            window.location.href = link;
        });
    }

    renderizarCarrinho();
});


/* =========================================================
   BOTÃO VER MAIS CATEGORIAS
========================================================= */
const btnVerMais = document.getElementById("btn-vermais");
const maisCategorias = document.getElementById("mais-categorias-extra");

if (btnVerMais) {
    btnVerMais.addEventListener("click", () => {
        maisCategorias.classList.toggle("escondido");

        btnVerMais.querySelector("span").textContent =
            maisCategorias.classList.contains("escondido")
            ? "Mais Categorias"
            : "Ocultar Categorias";
    });
}

/* =========================================================*/
// BARRA DE PESQUISA
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
    const barra = document.getElementById("barra-pesquisa");
    const box = document.getElementById("resultado-pesquisa");

    if (!barra) return;

    barra.addEventListener("input", () => {
        const texto = barra.value.toLowerCase().trim();

        if (texto.length === 0) {
            box.style.display = "none";
            box.innerHTML = "";
            return;
        }

        const resultados = Object.keys(produtos).filter(id => {
            const p = produtos[id];
            return p.nome.toLowerCase().includes(texto);
        });

        if (resultados.length === 0) {
            box.style.display = "block";
            box.innerHTML = "<div>Nenhum produto encontrado.</div>";
            return;
        }

        box.style.display = "block";
        box.innerHTML = "";

        resultados.forEach(id => {
            const p = produtos[id];

            const item = document.createElement("div");
            item.innerHTML = `
                <img src="${p.imagem}">
                <span>${p.nome}</span>
            `;

            item.addEventListener("click", () => {
                window.location.href = `ProdInd.html?id=${id}`;
            });

            box.appendChild(item);
        });
    });

    // esconde ao clicar fora
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".pesquisa-container")) {
            box.style.display = "none";
        }
    });
});
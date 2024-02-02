document.addEventListener("DOMContentLoaded", function () {
    const nomeCapitulo = document.getElementById("musica");
    const audio = document.getElementById("audio-musica");
    const botaoPlayPause = document.getElementById("play-pause");
    const botaoProximoCapitulo = document.getElementById("proximo");
    const botaoCapituloAnterior = document.getElementById("anterior");

    const quantidadeCapitulos = 33;
    let taTocando = false;
    let capitulo = 0;

    const baseDir = "./musics/melanie-martinez/";
    const extensao = ".mp3";

    const nomesMusicas = [
        "Cake",
        "Class Fight",
        "Cry Baby",
        "Copy Cat",
        "Death",
        "Dollhouse",
        "Drama Club",
        "EVIL",
        "FAERIE SOIRÉE",
        "High School Sweethearts",
        "LIGHT SHOWER",
        "Lunchbox Friends",
        "Mad Hatter",
        "Milk and Cookies",
        "Mrs. Potato Head",
        "NYMPHOLOGY",
        "Orange Juice",
        "Pacify Her",
        "Pity Party",
        "Recess",
        "Show & Tell",
        "Sippy Cup",
        "SPIDER WEB",
        "Strawberry Shortcake",
        "Tag, You're It",
        "Teacher's Pet",
        "THE CONTORTIONIST",
        "Training Wheels",
        "TUNNEL VISION",
        "VOID",
        "Wheels On the Bus",
        "WOMB",
        "Soap",
    ];

    // Criar uma lista completa de URLs dos arquivos de áudio
    const urlsMusicas = nomesMusicas.map(nome => baseDir + nome + extensao);

    function tocarFaixa() {
        botaoPlayPause.classList.remove("bi-play-circle");
        botaoPlayPause.classList.add("bi-pause-circle-fill");
        audio.play();
        taTocando = true;
    }

    function pausarFaixa() {
        botaoPlayPause.classList.add("bi-play-circle");
        botaoPlayPause.classList.remove("bi-pause-circle-fill");
        audio.pause();
        taTocando = false;
    }

    function tocarOuPausarFaixa() {
        if (taTocando) {
            pausarFaixa();
        } else {
            tocarFaixa();
        }
    }

    function capituloAnterior() {
        if (capitulo === 0) {
            capitulo = quantidadeCapitulos - 1;
        } else {
            capitulo -= 1;
        }
        atualizarFaixa();
    }

    function proximoCapitulo() {
        capitulo = (capitulo + 1) % quantidadeCapitulos;
        atualizarFaixa();
    }

    // Função para atualizar a faixa, incluindo o nome da música
    function atualizarFaixa() {
        audio.src = urlsMusicas[capitulo];
        nomeCapitulo.innerText = nomesMusicas[capitulo];
        tocarFaixa(); // Alterado para tocar a faixa automaticamente ao atualizar
    }

    botaoPlayPause.addEventListener("click", tocarOuPausarFaixa);
    botaoCapituloAnterior.addEventListener("click", capituloAnterior);
    botaoProximoCapitulo.addEventListener("click", proximoCapitulo);
    audio.addEventListener("ended", proximoCapitulo);

    // Inicializa a primeira faixa ao carregar a página
    atualizarFaixa();
});
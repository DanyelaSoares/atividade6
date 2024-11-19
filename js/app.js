document.addEventListener('DOMContentLoaded', function () {
    // Inicializa o Swiper
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,
        pagination: {
            el: '.swiper-pagination'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

    // Lógica do modal
    function showModal() {
        document.getElementById("gameModal").style.display = "block";
    }

    function closeModal() {
        document.getElementById("gameModal").style.display = "none";
    }

    document.getElementById("openModalBtn").addEventListener("click", showModal);
    document.querySelector(".close").addEventListener("click", closeModal);

    // Lógica de navegação com as teclas de seta
    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') {
            swiper.slidePrev();  // Navega para o slide anterior
        } else if (event.key === 'ArrowRight') {
            swiper.slideNext();  // Navega para o próximo slide
        }
    });

    // Lógica para a busca por jogos usando o campo de entrada
    const gameInput = document.getElementById('gameInput');
    gameInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            let searchGame = gameInput.value.trim().toUpperCase();
            switch (searchGame) {
                case 'MARIO':
                    swiper.slideTo(0);  // Vai para o primeiro slide
                    break;
                case 'POKEMON':
                    swiper.slideTo(1);  // Vai para o segundo slide
                    break;
                case 'ZELDA':
                    swiper.slideTo(2);  // Vai para o terceiro slide
                    break;
                default:
                    alert('Jogo não encontrado');
                    break;
            }
        }
    });
});


const games = [
    {
        title: "Super Mario Odyssey",
        image: "super-mario-odyssey.jpg",
        description: "Super Mario Odyssey é um jogo de plataforma desenvolvido pela Nintendo. Mario viaja pelo mundo para salvar Princess Peach e resgatar a Princesa Daisy.",

    },
    {
        title: "The Legend of Zelda: Breath of the Wild",
        image: "The-Legend-of-Zelda-Breath-of-the-Wild.jpeg",
        description: "Zelda: Breath of the Wild é um jogo de ação e aventura que segue Link em sua jornada para salvar o Reino de Hyrule.",

    },
    {
        title: "Pokémon Sword and Shield",
        image: "pokemon-legends-arceus.jpeg",
        description: "Pokémon Sword and Shield são jogos de RPG onde os jogadores exploram a região de Galar e capturam Pokémon.",

    }
];

let currentGameIndex = 0; // Inicializa o índice do jogo

// Função para atualizar o conteúdo do modal
function updateModalContent(index) {
    const game = games[index];
    document.getElementById("gameTitle").textContent = game.title;
    document.getElementById("gameImage").src = game.image;
    document.getElementById("gameDescription").textContent = game.description;

}

// Atualiza o conteúdo inicial
updateModalContent(currentGameIndex);

// Navegação entre os jogos
document.getElementById("nextGame").addEventListener("click", function () {
    if (currentGameIndex < games.length - 1) {
        currentGameIndex++;
        updateModalContent(currentGameIndex);
    }
});

document.getElementById("prevGame").addEventListener("click", function () {
    if (currentGameIndex > 0) {
        currentGameIndex--;
        updateModalContent(currentGameIndex);
    }
});


document.addEventListener('DOMContentLoaded', function () {
    // Array com os dados dos jogos
    const games = [
        {
            title: "Super Mario Odyssey",
            image: "images/super_mario_odyssey_dinosaur_4k.jpeg",
            description: "Super Mario Odyssey é um jogo de plataforma desenvolvido pela Nintendo. Mario viaja pelo mundo para salvar Princess Peach e resgatar a Princesa Daisy.",

        },
        {
            title: "The Legend of Zelda: Breath of the Wild",
            image: "images/The-Legend-of-Zelda-Breath-of-the-Wild.jpeg",
            description: "Zelda: Breath of the Wild é um jogo de ação e aventura que segue Link em sua jornada para salvar o Reino de Hyrule.",

        },
        {
            title: "Pokémon Sword and Shield",
            image: "images/pokemon-legends-arceus.jpeg",
            description: "Pokémon Sword and Shield são jogos de RPG onde os jogadores exploram a região de Galar e capturam Pokémon.",

        }
    ];

    let currentGameIndex = 0; // Índice do jogo atual

    // Atualiza o conteúdo do modal
    function updateModalContent(index) {
        const game = games[index];
        document.getElementById("gameTitle").textContent = game.title;
        document.getElementById("gameImage").src = game.image;
        document.getElementById("gameDescription").textContent = game.description;

    }

    // Atualiza o modal com o primeiro jogo
    updateModalContent(currentGameIndex);

    // Eventos dos botões de navegação
    document.getElementById("nextGame").addEventListener("click", function () {
        if (currentGameIndex < games.length - 1) {
            currentGameIndex++;
            updateModalContent(currentGameIndex);
        } else {
            alert("Você já está no último jogo.");
        }
    });

    document.getElementById("prevGame").addEventListener("click", function () {
        if (currentGameIndex > 0) {
            currentGameIndex--;
            updateModalContent(currentGameIndex);
        } else {
            alert("Você já está no primeiro jogo.");
        }
    });
});

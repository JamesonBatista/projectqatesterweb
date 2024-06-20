document.addEventListener("DOMContentLoaded", function () {
  const estadosECidades = {
    ac: [
      "Acrelândia",
      "Assis Brasil",
      "Brasiléia",
      "Bujarí",
      "Capixaba",
      "Cruzeiro do Sul",
      "Epitaciolândia",
      "Feijó",
      "Jordão",
      "Manoel Urbano",
      "Marechal Thaumaturgo",
      "Mâncio Lima",
      "Plácido de Castro",
      "Porto Acre",
      "Porto Walter",
      "Rio Branco",
      "Rodrigues Alves",
      "Santa Rosa do Purus",
      "Sena Madureira",
      "Senador Guiomard",
      "Tarauacá",
      "Xapuri",
    ],
    al: [
      "Água Branca",
      "Anadia",
      "Arapiraca",
      "Atalaia",
      "Barra de Santo Antônio",
      "Barra de São Miguel",
      "Batalha",
      "Belém",
      "Belo Monte",
      "Boca da Mata",
      "Branquinha",
      "Cacimbinhas",
      "Cajueiro",
      "Campestre",
      "Campo Alegre",
      "Campo Grande",
      "Canapi",
      "Capela",
      "Carneiros",
      "Chã Preta",
      "Coité do Nóia",
      "Colônia Leopoldina",
      "Coqueiro Seco",
      "Coruripe",
      "Craíbas",
      "Delmiro Gouveia",
      "Dois Riachos",
      "Estrela de Alagoas",
      "Feira Grande",
      "Feliz Deserto",
      "Flexeiras",
      "Girau do Ponciano",
      "Ibateguara",
      "Igaci",
      "Igreja Nova",
      "Inhapi",
      "Jacaré dos Homens",
      "Jacuípe",
      "Japaratinga",
      "Jaramataia",
      "Jequiá da Praia",
      "Joaquim Gomes",
      "Jundiá",
      "Junqueiro",
      "Lagoa da Canoa",
      "Limoeiro de Anadia",
      "Maceió",
      "Major Isidoro",
      "Mar Vermelho",
      "Maragogi",
      "Maravilha",
      "Marechal Deodoro",
      "Maribondo",
      "Mata Grande",
      "Matriz de Camaragibe",
      "Messias",
      "Minador do Negrão",
      "Monteirópolis",
      "Murici",
      "Novo Lino",
      "Olho d'Água das Flores",
      "Olho d'Água do Casado",
      "Olho d'Água Grande",
      "Olivença",
      "Ouro Branco",
      "Palestina",
      "Palmeira dos Índios",
      "Pão de Açúcar",
      "Pariconha",
      "Paripueira",
      "Passo de Camaragibe",
      "Paulo Jacinto",
      "Penedo",
      "Piaçabuçu",
      "Pilar",
      "Pindoba",
      "Piranhas",
      "Poço das Trincheiras",
      "Porto Calvo",
      "Porto de Pedras",
      "Porto Real do Colégio",
      "Quebrangulo",
      "Rio Largo",
      "Roteiro",
      "Santa Luzia do Norte",
      "Santana do Ipanema",
      "Santana do Mundaú",
      "São Brás",
      "São José da Laje",
      "São José da Tapera",
      "São Luís do Quitunde",
      "São Miguel dos Campos",
      "São Miguel dos Milagres",
    ],
    ap: [
      "Amapá",
      "Calçoene",
      "Cutias",
      "Ferreira Gomes",
      "Itaubal",
      "Laranjal do Jari",
      "Macapá",
      "Mazagão",
      "Oiapoque",
      "Pedra Branca do Amapari",
      "Porto Grande",
      "Pracuúba",
      "Santana",
      "Serra do Navio",
      "Tartarugalzinho",
      "Vitória do Jari",
    ],
    am: [
      "Alvarães",
      "Amaturá",
      "Anamã",
      "Anori",
      "Apuí",
      "Atalaia do Norte",
      "Autazes",
      "Barcelos",
      "Barreirinha",
      "Benjamin Constant",
      "Beruri",
      "Boa Vista do Ramos",
      "Boca do Acre",
      "Borba",
      "Caapiranga",
      "Canutama",
      "Carauari",
      "Careiro",
      "Careiro da Várzea",
      "Coari",
      "Codajás",
      "Eirunepé",
      "Envira",
      "Fonte Boa",
      "Guajará",
      "Humaitá",
      "Ipixuna",
      "Iranduba",
      "Itacoatiara",
      "Itamarati",
      "Itapiranga",
      "Japurá",
      "Juruá",
      "Jutaí",
      "Lábrea",
      "Manacapuru",
      "Manaquiri",
      "Manaus",
      "Manicoré",
      "Maraã",
      "Maués",
      "Nhamundá",
      "Nova Olinda do Norte",
      "Novo Airão",
      "Novo Aripuanã",
      "Parintins",
      "Pauini",
      "Presidente Figueiredo",
      "Rio Preto da Eva",
      "Santa Isabel do Rio Negro",
      "Santo Antônio do Içá",
      "São Gabriel da Cachoeira",
      "São Paulo de Olivença",
      "São Sebastião do Uatumã",
      "Silves",
      "Tabatinga",
      "Tapauá",
      "Tefé",
      "Tonantins",
      "Uarini",
      "Urucará",
      "Urucurituba",
    ],
    ba: [
      "Salvador",
      "Feira de Santana",
      "Vitória da Conquista",
      "Camaçari",
      "Itabuna",
      "Juazeiro",
      "Lauro de Freitas",
      "Ilhéus",
      "Jequié",
      "Teixeira de Freitas",
      "Barreiras",
      "Alagoinhas",
      "Porto Seguro",
      "Simões Filho",
      "Paulo Afonso",
      "Eunápolis",
      "Santo Antônio de Jesus",
      "Serrinha",
      "Dias d'Ávila",
      "Guanambi",
    ],
    ce: [
      "Fortaleza",
      "Caucaia",
      "Juazeiro do Norte",
      "Maracanaú",
      "Sobral",
      "Crato",
      "Itapipoca",
      "Maranguape",
      "Iguatu",
      "Quixadá",
      "Pacatuba",
      "Aquiraz",
      "Canindé",
      "Quixeramobim",
      "Russas",
      "Aracati",
      "Tianguá",
      "Acaraú",
      "Crateús",
      "Icó",
    ],
    df: [
      "Brasília",
      "Ceilândia",
      "Taguatinga",
      "Samambaia",
      "Planaltina",
      "Águas Claras",
      "Gama",
      "Guará",
      "Sobradinho",
      "Santa Maria",
      "Recanto das Emas",
      "São Sebastião",
      "Riacho Fundo",
      "Paranoá",
      "Núcleo Bandeirante",
      "Cruzeiro",
      "Sudoeste/Octogonal",
      "Lago Sul",
      "Lago Norte",
      "Varjão",
    ],
    es: [
      "Vitória",
      "Vila Velha",
      "Serra",
      "Cariacica",
      "Linhares",
      "São Mateus",
      "Colatina",
      "Guarapari",
      "Aracruz",
      "Cachoeiro de Itapemirim",
      "Nova Venécia",
      "Barra de São Francisco",
      "Viana",
      "Santa Maria de Jetibá",
      "Domingos Martins",
      "Anchieta",
      "Baixo Guandu",
      "Jaguaré",
      "Iúna",
      "Venda Nova do Imigrante",
    ],
    go: [
      "Goiânia",
      "Aparecida de Goiânia",
      "Anápolis",
      "Rio Verde",
      "Luziânia",
      "Águas Lindas de Goiás",
      "Trindade",
      "Formosa",
      "Novo Gama",
      "Senador Canedo",
      "Catalão",
      "Itumbiara",
      "Jataí",
      "Planaltina",
      "Caldas Novas",
      "Santo Antônio do Descoberto",
      "Inhumas",
      "Valparaíso de Goiás",
      "Jaraguá",
      "Quirinópolis",
    ],
    ma: [
      "São Luís",
      "Imperatriz",
      "Timon",
      "Caxias",
      "São José de Ribamar",
      "Codó",
      "Paço do Lumiar",
      "Açailândia",
      "Bacabal",
      "Balsas",
      "Barra do Corda",
      "Pinheiro",
      "Santa Inês",
      "Chapadinha",
      "Grajaú",
      "Buriticupu",
      "Itapecuru Mirim",
      "Pedreiras",
      "Viana",
      "Zé Doca",
    ],
    ma: [
      "São Luís",
      "Imperatriz",
      "Timon",
      "Caxias",
      "São José de Ribamar",
      "Codó",
      "Paço do Lumiar",
      "Açailândia",
      "Bacabal",
      "Balsas",
      "Barra do Corda",
      "Pinheiro",
      "Santa Inês",
      "Chapadinha",
      "Grajaú",
      "Buriticupu",
      "Itapecuru Mirim",
      "Pedreiras",
      "Viana",
      "Zé Doca",
    ],
    ms: [
      "Campo Grande",
      "Dourados",
      "Três Lagoas",
      "Corumbá",
      "Ponta Porã",
      "Naviraí",
      "Nova Andradina",
      "Paranaíba",
      "Coxim",
      "Sidrolândia",
      "Aquidauana",
      "Maracaju",
      "Amambai",
      "Jardim",
      "Fátima do Sul",
      "Bonito",
      "Bataguassu",
      "Anastácio",
      "Ribas do Rio Pardo",
      "São Gabriel do Oeste",
    ],
    mg: [
      "Belo Horizonte",
      "Uberlândia",
      "Contagem",
      "Juiz de Fora",
      "Betim",
      "Montes Claros",
      "Ribeirão das Neves",
      "Uberaba",
      "Governador Valadares",
      "Ipatinga",
      "Sete Lagoas",
      "Divinópolis",
      "Santa Luzia",
      "Ibirité",
      "Poços de Caldas",
      "Patos de Minas",
      "Pouso Alegre",
      "Teófilo Otoni",
      "Barbacena",
      "Sabará",
    ],
    pa: [
      "Belém",
      "Ananindeua",
      "Santarém",
      "Marabá",
      "Castanhal",
      "Parauapebas",
      "Abaetetuba",
      "Cametá",
      "Bragança",
      "Altamira",
      "Tucuruí",
      "Paragominas",
      "Marituba",
      "Redenção",
      "Itaituba",
      "Capanema",
      "Barcarena",
      "Vigia",
      "Conceição do Araguaia",
      "Oriximiná",
    ],
    pb: [
      "João Pessoa",
      "Campina Grande",
      "Santa Rita",
      "Patos",
      "Bayeux",
      "Sousa",
      "Cajazeiras",
      "Cabedelo",
      "Guarabira",
      "Sapé",
      "Mamanguape",
      "Queimadas",
      "Pombal",
      "Monteiro",
      "Itabaiana",
      "Sumé",
      "Catolé do Rocha",
      "Solânea",
      "Esperança",
      "São Bento",
    ],
    pr: [
      "Curitiba",
      "Londrina",
      "Maringá",
      "Ponta Grossa",
      "Cascavel",
      "São José dos Pinhais",
      "Foz do Iguaçu",
      "Colombo",
      "Guarapuava",
      "Paranaguá",
      "Araucária",
      "Toledo",
      "Apucarana",
      "Pinhais",
      "Campo Largo",
      "Almirante Tamandaré",
      "Umuarama",
      "Paranavaí",
      "Piraquara",
      "Rolândia",
    ],
    pe: [
      "Recife",
      "Jaboatão dos Guararapes",
      "Olinda",
      "Caruaru",
      "Petrolina",
      "Paulista",
      "Cabo de Santo Agostinho",
      "Camaragibe",
      "Garanhuns",
      "Vitória de Santo Antão",
      "Igarassu",
      "São Lourenço da Mata",
      "Arcoverde",
      "Serra Talhada",
      "Santa Cruz do Capibaribe",
      "Goiana",
      "Abreu e Lima",
      "Gravatá",
      "Ouricuri",
      "Pesqueira",
    ],
    pi: [
      "Teresina",
      "Parnaíba",
      "Picos",
      "Piripiri",
      "Floriano",
      "Barras",
      "Campo Maior",
      "Barras",
      "Altos",
      "União",
      "Esperantina",
      "José de Freitas",
      "Pedro II",
      "Luzilândia",
      "Oeiras",
      "Valença do Piauí",
      "Miguel Alves",
      "Piracuruca",
      "São Raimundo Nonato",
      "Campo Maior",
    ],
    rj: [
      "Rio de Janeiro",
      "São Gonçalo",
      "Duque de Caxias",
      "Nova Iguaçu",
      "Niterói",
      "Belford Roxo",
      "Campos dos Goytacazes",
      "São João de Meriti",
      "Petrópolis",
      "Volta Redonda",
      "Magé",
      "Itaboraí",
      "Macaé",
      "Cabo Frio",
      "Angra dos Reis",
      "Nova Friburgo",
      "Barra Mansa",
      "Teresópolis",
      "Mesquita",
      "Nilópolis",
    ],
    rn: [
      "Natal",
      "Mossoró",
      "Parnamirim",
      "São Gonçalo do Amarante",
      "Macaíba",
      "Ceará-Mirim",
      "Caicó",
      "Açu",
      "Currais Novos",
      "São José de Mipibu",
      "Nova Cruz",
      "Touros",
      "Apodi",
      "João Câmara",
      "Santa Cruz",
      "Canguaretama",
      "Pau dos Ferros",
      "Nísia Floresta",
      "Goianinha",
      "Areia Branca",
    ],
    rs: [
      "Porto Alegre",
      "Caxias do Sul",
      "Pelotas",
      "Canoas",
      "Santa Maria",
      "Gravataí",
      "Viamão",
      "Novo Hamburgo",
      "São Leopoldo",
      "Rio Grande",
      "Alvorada",
      "Passo Fundo",
      "Sapucaia do Sul",
      "Uruguaiana",
      "Santa Cruz do Sul",
      "Cachoeirinha",
      "Bagé",
      "Bento Gonçalves",
      "Erechim",
      "Guaíba",
    ],
    ro: [
      "Porto Velho",
      "Ji-Paraná",
      "Ariquemes",
      "Vilhena",
      "Cacoal",
      "Jaru",
      "Rolim de Moura",
      "Guajará-Mirim",
      "Pimenta Bueno",
      "Buritis",
      "Machadinho d'Oeste",
      "Ouro Preto do Oeste",
      "Nova Mamoré",
      "Espigão d'Oeste",
      "Candeias do Jamari",
      "Alta Floresta d'Oeste",
      "Presidente Médici",
      "Cujubim",
      "São Miguel do Guaporé",
      "Alto Paraíso",
    ],
    rr: [
      "Boa Vista",
      "Rorainópolis",
      "Caracaraí",
      "Mucajaí",
      "Alto Alegre",
      "Cantá",
      "Pacaraima",
      "Bonfim",
      "Normandia",
      "São Luiz",
      "Uiramutã",
      "Amajari",
      "Iracema",
      "Caroebe",
      "São João da Baliza",
    ],
    sc: [
      "Florianópolis",
      "Joinville",
      "Blumenau",
      "São José",
      "Chapecó",
      "Criciúma",
      "Itajaí",
      "Lages",
      "Balneário Camboriú",
      "Jaraguá do Sul",
      "Palhoça",
      "Brusque",
      "Tubarão",
      "Camboriú",
      "Caçador",
      "Gaspar",
      "Concórdia",
      "Rio do Sul",
      "São Bento do Sul",
      "Araranguá",
    ],
    sp: [
      "São Paulo",
      "Campinas",
      "Guarulhos",
      "São Bernardo do Campo",
      "Santo André",
      "Osasco",
      "São José dos Campos",
      "Ribeirão Preto",
      "Sorocaba",
      "Mauá",
      "São José do Rio Preto",
      "Mogi das Cruzes",
      "Santos",
      "Diadema",
      "Jundiaí",
      "Piracicaba",
      "Carapicuíba",
      "Bauru",
      "Itaquaquecetuba",
      "São Vicente",
    ],
    se: [
      "Aracaju",
      "Nossa Senhora do Socorro",
      "Lagarto",
      "Itabaiana",
      "São Cristóvão",
      "Estância",
      "Tobias Barreto",
      "Simão Dias",
      "Nossa Senhora da Glória",
      "Propriá",
      "Itabaianinha",
      "Capela",
      "Canindé de São Francisco",
      "Porto da Folha",
      "Cristinápolis",
      "Poço Verde",
      "Monte Alegre de Sergipe",
      "Carira",
      "Riachão do Dantas",
      "Neópolis",
    ],
    to: [
      "Palmas",
      "Araguaína",
      "Gurupi",
      "Porto Nacional",
      "Paraíso do Tocantins",
      "Araguatins",
      "Colinas do Tocantins",
      "Guaraí",
      "Tocantinópolis",
      "Formoso do Araguaia",
      "Miracema do Tocantins",
      "Dianópolis",
      "Augustinópolis",
      "Taguatinga",
      "Araguacema",
      "Cristalândia",
      "Xambioá",
      "Tocantínia",
      "Natividade",
      "Miranorte",
    ],
  };

  const stateSelect = document.getElementById("state");
  const citySelect = document.getElementById("city");
  if (stateSelect) {
    stateSelect.addEventListener("change", function () {
      const selectedState = stateSelect.value;
      const cities = estadosECidades[selectedState];

      citySelect.innerHTML = "";

      if (cities) {
        cities.forEach(function (city) {
          const option = document.createElement("option");
          option.value = city;
          option.textContent = city;
          citySelect.appendChild(option);
        });
      } else {
        const option = document.createElement("option");
        option.value = "";
        option.textContent = "Selecione um estado primeiro";
        citySelect.appendChild(option);
      }
    });
  }

  const urlParams = new URLSearchParams(window.location.search);
  const index = urlParams.get("index");

  if (index !== null) {
    document.getElementById("name").value = urlParams.get("name");
    document.getElementById("email").value = urlParams.get("email");
    document.getElementById("password").value = urlParams.get("password");
    document.getElementById("gender").value = urlParams.get("gender");
    document.getElementById("birthdate").value = urlParams.get("birthdate");
    document.getElementById("phone").value = urlParams.get("phone");
    document.getElementById("address").value = urlParams.get("address");
    document.getElementById("city").value = urlParams.get("city");
    document.getElementById("state").value = urlParams.get("state");
    document.getElementById("terms").checked =
      urlParams.get("terms") === "true";
  }

  const cadastroForm = document.getElementById("cadastroForm");
  const customAlert = window.parent.document.getElementById("customAlert");
  const alertMessage = window.parent.document.getElementById("alertMessage");
  const closeAlert = window.parent.document.getElementById("closeAlert");

if(closeAlert){
  closeAlert.addEventListener("click", function () {
    customAlert.style.display = "none";
  });
}

function showAlert(message) {
  if (alertMessage && customAlert) {
    alertMessage.textContent = message;
    customAlert.style.display = "block";
  } else {
    console.error("Elementos de alerta não encontrados.");
  }
}

  if(cadastroForm){
    cadastroForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const formData = new FormData(cadastroForm);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
  
      let users = JSON.parse(localStorage.getItem("usuarios")) || [];
  
      if (index !== null) {
        users[index] = data;
      } else {
        users.push(data);
      }
  
      localStorage.setItem("usuarios", JSON.stringify(users));
  
      // Mostrar o alerta personalizado
      showAlert("Cadastro realizado com sucesso!");
      cadastroForm.reset();
    });
  }

});

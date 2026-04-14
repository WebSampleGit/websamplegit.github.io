// ==========================
// CONFIG
// ==========================
const ORS_API_KEY = 'eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjNmMTlmNGM2OGU3ZjRkOGJhNGJkMGZlMjg3ZGExZTM1IiwiaCI6Im11cm11cjY0In0=';

function openMenuMobile() {
    $("#menu-mobile-id").css("display", "flex");
}

function closeMenuMobile() {
    $("#menu-mobile-id").css("display", "none");
}

function exibeDuvidaFrequente(duv) {

    for (i = 1; i < 6; i++) {
        if (i != duv) {
            ocutaDuvidaFrequente(i);
        }
    }

    var duvida = "#resp-" + duv;
    var duvIcon = "#duv-icon-" + duv;
    var duvEsc = "#duv-esc-icon-" + duv;

    $(duvida).css("display", "flex");
    $(duvIcon).css("display", "none");
    $(duvEsc).css("display", "flex");

    $(duvida)[0].scrollIntoView({ behavior: 'smooth', block: 'start' });

}

function ocutaDuvidaFrequente(duv) {
    var duvida = "#resp-" + duv;
    var duvIcon = "#duv-icon-" + duv;
    var duvEsc = "#duv-esc-icon-" + duv;

    $(duvida).css("display", "none");
    $(duvIcon).css("display", "flex");
    $(duvEsc).css("display", "none");

}

function lerMenosNossaHist() {
    $('#esc-nossa-hist').css("display", "none");
    $('#esc-ler-menos').css("display", "none");
    $('#esc-ler-mais').css("display", "block");
}

function lerMaisNossaHist() {
    $('#esc-nossa-hist').css("display", "block");
    $('#esc-ler-menos').css("display", "block");
    $('#esc-ler-mais').css("display", "none");
}

function lerMenosMvv() {
    $('#esc-mvv').css("display", "none");
    $('#esc-ler-menos-mvv').css("display", "none");
    $('#esc-ler-mais-mvv').css("display", "block");
}

function lerMaisMvv() {
    $('#esc-mvv').css("display", "block");
    $('#esc-ler-menos-mvv').css("display", "block");
    $('#esc-ler-mais-mvv').css("display", "none");
}

function apenasNumeros(event) {
    const key = event.key;
    if (!/[\d\b]/.test(key)) {
        event.preventDefault();
    }
}

function exibeMsgRetorno(msg_exibicao, status) {

    $("#msg_retorno").modal('hide');
    $('#msg_exibicao').html("");

    var svgIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-diamond-fill" viewBox="0 0 16 16">' +
        '<path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>' +
        '</svg>';

    $('#msg_exibicao').html(svgIcon + "&nbsp;" + msg_exibicao);

    if (status == "sucesso") {
        var msg_retorno = document.getElementById('msg_retorno');
        msg_retorno.style.backgroundColor = '#225ec3';

        $('html, body').animate({
            scrollTop: $('#msg_exibicao').offset().top
        }, 1000);

        $("#msg_retorno").fadeIn('slow');

        setTimeout(function () {
            $("#msg_retorno").fadeOut('slow');
        }, 3500);

    } else {
        var msg_retorno = document.getElementById('msg_retorno');
        msg_retorno.style.backgroundColor = '#931010';

        $('html, body').animate({
            scrollTop: $('#msg_exibicao').offset().top
        }, 1000);

        $("#msg_retorno").fadeIn('slow');

        setTimeout(function () {
            $("#msg_retorno").fadeOut('slow');
        }, 3500);
    }


}

function calcularSimularCotacao() {

    var estado = $('#Estado').val();
    var categoria = $('#TipoCarga').val();
    var pesoCarga = $('#Peso').val();
    var valorCarga = $('#valor_carga').val();


    if (estado == null || estado == "") {
        exibeMsgRetorno("Destino é obrigatório", "sucesso");
        $('#Peso').focus();
        return false;
    }

    if (categoria == null || categoria == "") {
        exibeMsgRetorno("Categoria da Carga é obrigatório", "sucesso");
        $('#TipoCarga').focus();
        return false;
    }

    if (pesoCarga == "" || pesoCarga == null || pesoCarga == 0) {
        exibeMsgRetorno("Insira um peso para realizar uma cotação", "sucesso");
        return false;
    }

    //Precos por KG dos Estados
    var acre_pesoMinimo = 4;
    var acre_precoFixo = 127.80;
    var acre_precoKG = 22.35;

    var alagoas_pesoMinimo = 9;
    var alagoas_precoFixo = 127.80;
    var alagoas_precoKG = 11.66;

    var amapa_pesoMinimo = 3;
    var amapa_precoFixo = 127.80;
    var amapa_precoKG = 30.12;

    var amazonas_pesoMinimo = 7;
    var amazonas_precoFixo = 127.80;
    var amazonas_precoKG = 14.23;

    var bahia_pesoMinimo = 9;
    var bahia_precoFixo = 127.80;
    var bahia_precoKG = 11.66;

    var ceara_pesoMinimo = 12;
    var ceara_precoFixo = 127.80;
    var ceara_precoKG = 8.58;

    var distritoFederal_pesoMinimo = 11;
    var distritoFederal_precoFixo = 127.80;
    var distritoFederal_precoKG = 7.09;

    var espiritoSanto_pesoMinimo = 12;
    var espiritoSanto_precoFixo = 127.80;
    var espiritoSanto_precoKG = 9.21;

    var goias_pesoMinimo = 12;
    var goias_precoFixo = 127.80;
    var goias_precoKG = 8.31;

    var maranhao_pesoMinimo = 8;
    var maranhao_precoFixo = 127.80;
    var maranhao_precoKG = 12.56;

    var matoGrosso_pesoMinimo = 9;
    var matoGrosso_precoFixo = 127.80;
    var matoGrosso_precoKG = 11.66;

    var matoGrossoDoSul_pesoMinimo = 10;
    var matoGrossoDoSul_precoFixo = 127.80;
    var matoGrossoDoSul_precoKG = 10.64;

    var minasGerais_pesoMinimo = 13;
    var minasGerais_precoFixo = 127.80;
    var minasGerais_precoKG = 8.36;

    var para_pesoMinimo = 13;
    var para_precoFixo = 127.80;
    var para_precoKG = 7.83;

    var paraiba_pesoMinimo = 11;
    var paraiba_precoFixo = 127.80;
    var paraiba_precoKG = 9.71;

    var parana_pesoMinimo = 13;
    var parana_precoFixo = 127.80;
    var parana_precoKG = 7.83;

    var pernambuco_pesoMinimo = 8;
    var pernambuco_precoFixo = 127.80;
    var pernambuco_precoKG = 13.60;

    var piaui_pesoMinimo = 7;
    var piaui_precoFixo = 127.80;
    var piaui_precoKG = 14.39;

    var rioDeJaneiro_pesoMinimo = 13;
    var rioDeJaneiro_precoFixo = 127.80;
    var rioDeJaneiro_precoKG = 7.55;

    var rioGrandeDoNorte_pesoMinimo = 14;
    var rioGrandeDoNorte_precoFixo = 127.80;
    var rioGrandeDoNorte_precoKG = 7.77;

    var rioGrandeDoSul_pesoMinimo = 19;
    var rioGrandeDoSul_precoFixo = 127.80;
    var rioGrandeDoSul_precoKG = 5.83;

    var rondonia_pesoMinimo = 3;
    var rondonia_precoFixo = 127.80;
    var rondonia_precoKG = 31.25;

    var roraima_pesoMinimo = 3;
    var roraima_precoFixo = 127.80;
    var roraima_precoKG = 34.67;

    var santaCatarina_pesoMinimo = 13;
    var santaCatarina_precoFixo = 127.80;
    var santaCatarina_precoKG = 7.83;

    var saoPaulo_pesoMinimo = 8;
    var saoPaulo_precoFixo = 127.80;
    var saoPaulo_precoKG = 12.56;

    var sergipe_pesoMinimo = 3;
    var sergipe_precoFixo = 127.80;
    var sergipe_precoKG = 31.45;

    var tocantins_pesoMinimo = 7;
    var tocantins_precoFixo = 127.80;
    var tocantins_precoKG = 15.58;


    var precoMedio = 0;
    if (pesoCarga != 0 && pesoCarga != "" && pesoCarga != null) {

        switch (estado) {
            case "ac":
                estado = "Acre";
                if (pesoCarga <= acre_pesoMinimo) {
                    precoMedio = acre_precoFixo;
                } else {
                    precoMedio = acre_precoFixo + (acre_precoKG * (pesoCarga - acre_pesoMinimo));
                }
                break;
            case "al":
                estado = "Alagoas";
                if (pesoCarga <= alagoas_pesoMinimo) {
                    precoMedio = alagoas_precoFixo;
                } else {
                    precoMedio = alagoas_precoFixo + (alagoas_precoKG * (pesoCarga - alagoas_pesoMinimo));
                }
                break;
            case "ap":
                estado = "Amapá";
                if (pesoCarga <= amapa_pesoMinimo) {
                    precoMedio = amapa_precoFixo;
                } else {
                    precoMedio = amapa_precoFixo + (amapa_precoKG * (pesoCarga - amapa_pesoMinimo));
                }
                break;
            case "am":
                estado = "Amazonas";
                if (pesoCarga <= amazonas_pesoMinimo) {
                    precoMedio = amazonas_precoFixo;
                } else {
                    precoMedio = amazonas_precoFixo + (amazonas_precoKG * (pesoCarga - amazonas_pesoMinimo));
                }
                break;
            case "ba":
                estado = "Bahia";
                if (pesoCarga <= bahia_pesoMinimo) {
                    precoMedio = bahia_precoFixo;
                } else {
                    precoMedio = bahia_precoFixo + (bahia_precoKG * (pesoCarga - bahia_pesoMinimo));
                }
                break;
            case "ce":
                estado = "Ceará";
                if (pesoCarga <= ceara_pesoMinimo) {
                    precoMedio = ceara_precoFixo;
                } else {
                    precoMedio = ceara_precoFixo + (ceara_precoKG * (pesoCarga - ceara_pesoMinimo));
                }
                break;
            case "df":
                estado = "Distrito Federal";
                if (pesoCarga <= distritoFederal_pesoMinimo) {
                    precoMedio = distritoFederal_precoFixo;
                } else {
                    precoMedio = distritoFederal_precoFixo + (distritoFederal_precoKG * (pesoCarga - distritoFederal_pesoMinimo));
                }
                break;
            case "es":
                estado = "Espírito Santo";
                if (pesoCarga <= espiritoSanto_pesoMinimo) {
                    precoMedio = espiritoSanto_precoFixo;
                } else {
                    precoMedio = espiritoSanto_precoFixo + (espiritoSanto_precoKG * (pesoCarga - espiritoSanto_pesoMinimo));
                }
                break;
            case "go":
                estado = "Goiás";
                if (pesoCarga <= goias_pesoMinimo) {
                    precoMedio = goias_precoFixo;
                } else {
                    precoMedio = goias_precoFixo + (goias_precoKG * (pesoCarga - goias_pesoMinimo));
                }
                break;
            case "ma":
                estado = "Maranhão";
                if (pesoCarga <= maranhao_pesoMinimo) {
                    precoMedio = maranhao_precoFixo;
                } else {
                    precoMedio = maranhao_precoFixo + (maranhao_precoKG * (pesoCarga - maranhao_pesoMinimo));
                }
                break;
            case "mt":
                estado = "Mato Grosso";
                if (pesoCarga <= matoGrosso_pesoMinimo) {
                    precoMedio = matoGrosso_precoFixo;
                } else {
                    precoMedio = matoGrosso_precoFixo + (matoGrosso_precoKG * (pesoCarga - matoGrosso_pesoMinimo));
                }
                break;
            case "ms":
                estado = "Mato Grosso do Sul";
                if (pesoCarga <= matoGrossoDoSul_pesoMinimo) {
                    precoMedio = matoGrossoDoSul_precoFixo;
                } else {
                    precoMedio = matoGrossoDoSul_precoFixo + (matoGrossoDoSul_precoKG * (pesoCarga - matoGrossoDoSul_pesoMinimo));
                }
                break;
            case "mg":
                estado = "Minas Gerais";
                if (pesoCarga <= minasGerais_pesoMinimo) {
                    precoMedio = minasGerais_precoFixo;
                } else {
                    precoMedio = minasGerais_precoFixo + (minasGerais_precoKG * (pesoCarga - minasGerais_pesoMinimo));
                }
                break;
            case "pa":
                estado = "Pará";
                if (pesoCarga <= para_pesoMinimo) {
                    precoMedio = para_precoFixo;
                } else {
                    precoMedio = para_precoFixo + (para_precoKG * (pesoCarga - para_pesoMinimo));
                }
                break;
            case "pb":
                estado = "Paraíba";
                if (pesoCarga <= paraiba_pesoMinimo) {
                    precoMedio = paraiba_precoFixo;
                } else {
                    precoMedio = paraiba_precoFixo + (paraiba_precoKG * (pesoCarga - paraiba_pesoMinimo));
                }
                break;
            case "pr":
                estado = "Paraná";
                if (pesoCarga <= parana_pesoMinimo) {
                    precoMedio = parana_precoFixo;
                } else {
                    precoMedio = parana_precoFixo + (parana_precoKG * (pesoCarga - parana_pesoMinimo));
                }
                break;
            case "pe":
                estado = "Pernambuco";
                if (pesoCarga <= pernambuco_pesoMinimo) {
                    precoMedio = pernambuco_precoFixo;
                } else {
                    precoMedio = pernambuco_precoFixo + (pernambuco_precoKG * (pesoCarga - pernambuco_pesoMinimo));
                }
                break;
            case "pi":
                estado = "Piauí";
                if (pesoCarga <= piaui_pesoMinimo) {
                    precoMedio = piaui_precoFixo;
                } else {
                    precoMedio = piaui_precoFixo + (piaui_precoKG * (pesoCarga - piaui_pesoMinimo));
                }
                break;
            case "rj":
                estado = "Rio de Janeiro";
                if (pesoCarga <= rioDeJaneiro_pesoMinimo) {
                    precoMedio = rioDeJaneiro_precoFixo;
                } else {
                    precoMedio = rioDeJaneiro_precoFixo + (rioDeJaneiro_precoKG * (pesoCarga - rioDeJaneiro_pesoMinimo));
                }
                break;
            case "rn":
                estado = "Rio Grande do Norte";
                if (pesoCarga <= rioGrandeDoNorte_pesoMinimo) {
                    precoMedio = rioGrandeDoNorte_precoFixo;
                } else {
                    precoMedio = rioGrandeDoNorte_precoFixo + (rioGrandeDoNorte_precoKG * (pesoCarga - rioGrandeDoNorte_pesoMinimo));
                }
                break;
            case "rs":
                estado = "Rio Grande do Sul";
                if (pesoCarga <= rioGrandeDoSul_pesoMinimo) {
                    precoMedio = rioGrandeDoSul_precoFixo;
                } else {
                    precoMedio = rioGrandeDoSul_precoFixo + (rioGrandeDoSul_precoKG * (pesoCarga - rioGrandeDoSul_pesoMinimo));
                }
                break;
            case "ro":
                estado = "Rondônia";
                if (pesoCarga <= rondonia_pesoMinimo) {
                    precoMedio = rondonia_precoFixo;
                } else {
                    precoMedio = rondonia_precoFixo + (rondonia_precoKG * (pesoCarga - rondonia_pesoMinimo));
                }
                break;
            case "rr":
                estado = "Roraima";
                if (pesoCarga <= roraima_pesoMinimo) {
                    precoMedio = roraima_precoFixo;
                } else {
                    precoMedio = roraima_precoFixo + (roraima_precoKG * (pesoCarga - roraima_pesoMinimo));
                }
                break;
            case "sc":
                estado = "Santa Catarina";
                if (pesoCarga <= santaCatarina_pesoMinimo) {
                    precoMedio = santaCatarina_precoFixo;
                } else {
                    precoMedio = santaCatarina_precoFixo + (santaCatarina_precoKG * (pesoCarga - santaCatarina_pesoMinimo));
                }
                break;
            case "sp":
                estado = "São Paulo";
                if (pesoCarga <= saoPaulo_pesoMinimo) {
                    precoMedio = saoPaulo_precoFixo;
                } else {
                    precoMedio = saoPaulo_precoFixo + (saoPaulo_precoKG * (pesoCarga - saoPaulo_pesoMinimo));
                }
                break;
            case "se":
                estado = "Sergipe";
                if (pesoCarga <= sergipe_pesoMinimo) {
                    precoMedio = sergipe_precoFixo;
                } else {
                    precoMedio = sergipe_precoFixo + (sergipe_precoKG * (pesoCarga - sergipe_pesoMinimo));
                }
                break;
            case "to":
                estado = "Tocantins";
                if (pesoCarga <= tocantins_pesoMinimo) {
                    precoMedio = tocantins_precoFixo;
                } else {
                    precoMedio = tocantins_precoFixo + (tocantins_precoKG * (pesoCarga - tocantins_pesoMinimo));
                }
                break;
            default:
                console.log("Estado não encontrado");
        }
    }


    switch (categoria) {
        case "Pereciveis":
            precoMedio += precoMedio * 0.20;
            break;
        default:
            var nd = "nada a se fazer";
    }



    var roundedPrice = precoMedio.toFixed(2);
    var formattedPrice = roundedPrice.replace('.', ',');
    precoMedio = formattedPrice;


    $('#valorCotSimularCotacao').text("R$ " + precoMedio);
    $('#simularCotacao').fadeIn('slow');

}

function limparSimularCotacao() {
    $('#Estado').val("");
    $('#TipoCarga').val("");
    $('#Peso').val("");
    $('#Altura').val("");
    $('#Largura').val("");
    $('#Diametro').val("");
    $('#Volume').val("");
    $('#qtd_fardos').val("");
    $('#media_peso_fardo').val("");

    $('#simularCotacao').fadeOut(250);
}

function zerarCampos() {
    $('#Peso').val("");
    $('#Altura').val("");
    $('#Largura').val("");
    $('#Diametro').val("");
    $('#Volume').val("");
    $('#simularCotacao').fadeOut(250);
}

async function mascaraCEP() {
  
    var cep = $('#cep_dest_buscabusca').val();
    var cepFormat = $('#cep_dest_buscabusca').val().replace(/\D/g, '');

    cep = cep.replace(/\D/g, "")
    cep = cep.replace(/^(\d{3})(\d)/, "$1.$2");
    cep = cep.replace(/^(\d{3}\.\d{2})(\d)/, "$1-$2");

    $('#cep_dest_buscabusca').val(cep);
    await validaCeps(cepFormat);
}

async function showDetaisLog(show){
  
  if (show == true){
    $('#endereco_log_buscabusca').prop('hidden', false);
    $('#num_entrega_buscabusca').focus();
  }
  else
  {
    $('#endereco_log_buscabusca').prop('hidden', true);
  }
}

async function validaCeps(cep) {
    
    cep = cep.replace(/\D/g, '');
    const digits = cep.split('').map(Number);

    try 
    { 
      var end = await getEnderecoObj(cep); 
      $('#end_entrega_buscabusca').val(end.logradouro || '');
      $('#bairro_entrega_buscabusca').val(end.bairro || '');
      $('#num_entrega_buscabusca').focus();

    }
    catch 
    { 
      $('#end_entrega_buscabusca').val("");
      $('#bairro_entrega_buscabusca').val("");
      exibeMsgRetorno("CEP não encontrado!"); 
      showDetaisLog(false);
      return false; 
    }
    
    // Verifica se o CPF não esta vazio
    if (cep == '' || cep == null) {
        exibeMsgRetorno("CEP destino é obrigatório!");
        showDetaisLog(false);
        return false;
    }

    // Verifica se o Cep possui 8 dígitos
    if (cep.length !== 8) {
        exibeMsgRetorno("CEP Invalido!");
        showDetaisLog(false);
        return false;
    }

    // Verifica se todos os dígitos são iguais
    if (new Set(digits).size === 1) {
        exibeMsgRetorno("CEP Invalido!");
        showDetaisLog(false);
        return false;
    }

    showDetaisLog(true);
    return true;
}

async function validaNomeCompleto(nome) {

    try {

        // remove espaços extras nas pontas
        nome = (nome || '').trim();

        // Verifica se está vazio
        if (nome == '' || nome == null) {
            exibeMsgRetorno("Nome completo é obrigatório!");
            showDetaisLog(false);
            return false;
        }

        // Verifica tamanho mínimo
        if (nome.length < 10) {
            exibeMsgRetorno("Nome muito curto! Digite o nome completo.");
            showDetaisLog(false);
            return false;
        }

        // Verifica se tem pelo menos 2 palavras (nome + sobrenome)
        const partes = nome.split(/\s+/);
        if (partes.length < 2) {
            exibeMsgRetorno("Digite nome e sobrenome!");
            showDetaisLog(false);
            return false;
        }

        showDetaisLog(true);
        return true;

    } catch (err) {
        exibeMsgRetorno("Erro ao validar nome!");
        showDetaisLog(false);
        return false;
    }
}

async function validaNumeroResidencia(nome) {

    try {
        nome = (nome || '').trim();
        // Verifica se está vazio
        if (nome == '' || nome == null) {
            exibeMsgRetorno("Numero é obrigatório!");
            return false;
        }
        return true;

    } catch (err) {
        exibeMsgRetorno("Erro ao validar n°!");
        showDetaisLog(false);
        return false;
    }
}



// Cotação padrão
async function getEnderecoObj(cep) {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data = await response.json();

  if (data.erro) throw new Error("CEP inválido");

  return data; // retorna objeto completo
}

async function getEndereco(cep) {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data = await response.json();

  if (data.erro) throw new Error("CEP inválido");

  return `${data.logradouro}, ${data.localidade}, ${data.uf}, Brasil`;
}

async function getCoordenadas(endereco) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(endereco)}`;
  
  const response = await fetch(url);
  const data = await response.json();

  if (!data.length) throw new Error("Endereço não encontrado");

  return {
    lat: parseFloat(data[0].lat),
    lon: parseFloat(data[0].lon)
  };
}

function calcularDistancia(coord1, coord2) {
  const R = 6371; // km
  const toRad = (deg) => deg * (Math.PI / 180);

  const dLat = toRad(coord2.lat - coord1.lat);
  const dLon = toRad(coord2.lon - coord1.lon);

  const lat1 = toRad(coord1.lat);
  const lat2 = toRad(coord2.lat);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.sin(dLon / 2) ** 2 *
    Math.cos(lat1) *
    Math.cos(lat2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

async function calcularDistanciaPorCEP() {
  try {

    //sé 01001-000
    var cep1 = "03571120"; //fixed base
    var cep2 = $('#cep_dest_buscabusca').val().replace(/\D/g, '');

    var valid = validaCeps(cep2);

    if(valid){
      const endereco1 = await getEndereco(cep1);
      const endereco2 = await getEndereco(cep2);

      const coord1 = await getCoordenadas(endereco1);
      const coord2 = await getCoordenadas(endereco2);

      const distancia = calcularDistancia(coord1, coord2);

      var d = distancia.toFixed(2) + " km";
      exibeMsgRetorno(d,"sucesso")
      return distancia.toFixed(2) + " km";
    }

    
  } 
  catch (error) {
    console.error(error);
    return null;
  }
}



// Cotação atualizada

// BASE DE PEDÁGIOS (LOCAL)
// ==========================
const PEDAGIOS_BR = [
    { nome: "Pedágio Imigrantes", rodovia: "SP-160", lat: -23.9827, lng: -46.3765, valorPorEixo: 10.00 },
    { nome: "Pedágio Anchieta", rodovia: "SP-150", lat: -23.9376, lng: -46.4068, valorPorEixo: 10.00 },
    { nome: "Jacareí", rodovia: "BR-116", lat: -23.3053, lng: -45.9658, valorPorEixo: 8.40 },
    { nome: "Moreira César", rodovia: "BR-116", lat: -22.8381, lng: -45.2315, valorPorEixo: 8.40 },
    { nome: "Itatiaia", rodovia: "BR-116", lat: -22.4898, lng: -44.5636, valorPorEixo: 8.40 },
    { nome: "Seropédica", rodovia: "BR-116", lat: -22.7465, lng: -43.7072, valorPorEixo: 8.40 },
    { nome: "Mairiporã", rodovia: "BR-381", lat: -23.3182, lng: -46.5863, valorPorEixo: 2.80 },
    { nome: "Vargem", rodovia: "BR-381", lat: -22.8891, lng: -46.4125, valorPorEixo: 2.80 },
    { nome: "Cambuí", rodovia: "BR-381", lat: -22.6112, lng: -46.0623, valorPorEixo: 3.20 },
    { nome: "Miracatu", rodovia: "BR-116", lat: -24.2752, lng: -47.4621, valorPorEixo: 4.50 },
    { nome: "Cajati", rodovia: "BR-116", lat: -24.7364, lng: -48.1223, valorPorEixo: 4.50 },
    { nome: "Ourinhos", rodovia: "BR-153", lat: -22.9797, lng: -49.8700, valorPorEixo: 6.50 },
    { nome: "Marília", rodovia: "BR-153", lat: -22.2139, lng: -49.9458, valorPorEixo: 6.50 },
    { nome: "Araras", rodovia: "BR-050", lat: -22.3572, lng: -47.3840, valorPorEixo: 8.00 },
    { nome: "Campos", rodovia: "BR-101", lat: -21.7532, lng: -41.3235, valorPorEixo: 6.00 },
    { nome: "Juiz de Fora", rodovia: "BR-040", lat: -21.7605, lng: -43.3503, valorPorEixo: 7.50 },
    { nome: "Jundiaí", rodovia: "SP-330", lat: -23.1864, lng: -46.8842, valorPorEixo: 5.90 },
    { nome: "Limeira", rodovia: "SP-330", lat: -22.5646, lng: -47.4017, valorPorEixo: 6.20 },
    { nome: "Araras", rodovia: "SP-330", lat: -22.3569, lng: -47.3842, valorPorEixo: 6.20 },
    { nome: "Caieiras", rodovia: "SP-348", lat: -23.3642, lng: -46.7401, valorPorEixo: 5.20 },
    { nome: "Itupeva", rodovia: "SP-348", lat: -23.1526, lng: -47.0572, valorPorEixo: 5.20 },
    { nome: "Barueri", rodovia: "SP-280", lat: -23.5111, lng: -46.8765, valorPorEixo: 4.80 },
    { nome: "Itu", rodovia: "SP-280", lat: -23.2642, lng: -47.2992, valorPorEixo: 5.50 },
    { nome: "Itaquaquecetuba", rodovia: "SP-070", lat: -23.4660, lng: -46.3687, valorPorEixo: 3.90 },
    { nome: "Guarulhos", rodovia: "SP-070", lat: -23.4442, lng: -46.4740, valorPorEixo: 3.90 },
    { nome: "São Bernardo", rodovia: "SP-160", lat: -23.7523, lng: -46.5646, valorPorEixo: 4.50 },
    { nome: "Cubatão", rodovia: "SP-160", lat: -23.8911, lng: -46.4252, valorPorEixo: 4.50 },
    { nome: "Riacho Grande", rodovia: "SP-150", lat: -23.7452, lng: -46.5881, valorPorEixo: 4.00 },
    { nome: "Tietê", rodovia: "SP-300", lat: -23.1011, lng: -47.7143, valorPorEixo: 7.00 },
    { nome: "Bauru", rodovia: "SP-300", lat: -22.3246, lng: -49.0800, valorPorEixo: 7.00 },
    { nome: "Rio Claro", rodovia: "SP-310", lat: -22.4112, lng: -47.5613, valorPorEixo: 6.50 },
    { nome: "São Carlos", rodovia: "SP-310", lat: -22.0104, lng: -47.8900, valorPorEixo: 6.50 },
    { nome: "Teresópolis", rodovia: "BR-116", lat: -22.4150, lng: -42.9641, valorPorEixo: 10.00 },
    { nome: "Petrópolis", rodovia: "BR-040", lat: -22.5014, lng: -43.1789, valorPorEixo: 9.20 },
    { nome: "Duque de Caxias", rodovia: "BR-040", lat: -22.7854, lng: -43.3042, valorPorEixo: 8.50 },
    { nome: "Guarapari", rodovia: "BR-101", lat: -20.6539, lng: -40.5116, valorPorEixo: 7.00 },
    { nome: "Vitória", rodovia: "BR-101", lat: -20.3155, lng: -40.3128, valorPorEixo: 6.50 },
    { nome: "Florianópolis", rodovia: "BR-101", lat: -27.5954, lng: -48.5480, valorPorEixo: 7.80 },
    { nome: "Joinville", rodovia: "BR-101", lat: -26.3054, lng: -48.8462, valorPorEixo: 6.40 },
    { nome: "Balneário Camboriú", rodovia: "BR-101", lat: -26.9921, lng: -48.6361, valorPorEixo: 7.20 },
    { nome: "Manaus", rodovia: "BR-319", lat: -3.1190, lng: -60.0217, valorPorEixo: 5.00 },
    { nome: "Itacoatiara", rodovia: "BR-319", lat: -3.1315, lng: -58.4471, valorPorEixo: 4.50 },
    { nome: "São Paulo", rodovia: "SP-280", lat: -23.5505, lng: -46.6333, valorPorEixo: 5.50 },
    { nome: "São José dos Campos", rodovia: "BR-116", lat: -23.2237, lng: -45.9009, valorPorEixo: 8.70 },
    { nome: "Sorocaba", rodovia: "SP-280", lat: -23.5013, lng: -47.4603, valorPorEixo: 5.80 },
    { nome: "Bauru", rodovia: "SP-300", lat: -23.3136, lng: -49.0582, valorPorEixo: 7.10 },
    { nome: "Ribeirão Preto", rodovia: "SP-330", lat: -21.1721, lng: -47.8113, valorPorEixo: 6.30 },
    { nome: "Campinas", rodovia: "SP-340", lat: -22.9056, lng: -47.0626, valorPorEixo: 5.70 },
    { nome: "São Vicente", rodovia: "SP-055", lat: -23.9658, lng: -46.3864, valorPorEixo: 4.20 },
    { nome: "Cubatão", rodovia: "BR-040", lat: -23.8832, lng: -46.4162, valorPorEixo: 6.00 },
    { nome: "Rio de Janeiro", rodovia: "BR-116", lat: -22.9068, lng: -43.1729, valorPorEixo: 9.00 },
    { nome: "Niterói", rodovia: "BR-101", lat: -22.8833, lng: -43.1037, valorPorEixo: 6.80 },
    { nome: "Cabo Frio", rodovia: "BR-101", lat: -22.8847, lng: -42.0280, valorPorEixo: 5.90 },
    { nome: "Angra dos Reis", rodovia: "BR-101", lat: -23.0087, lng: -44.3184, valorPorEixo: 7.50 },
    { nome: "São Sebastião", rodovia: "SP-55", lat: -23.7715, lng: -45.4136, valorPorEixo: 5.40 },
    { nome: "Caraguatatuba", rodovia: "SP-55", lat: -23.6238, lng: -45.4201, valorPorEixo: 5.60 },
    { nome: "Ilhabela", rodovia: "SP-55", lat: -23.7743, lng: -45.3662, valorPorEixo: 6.20 },
    { nome: "Lages", rodovia: "BR-116", lat: -27.8153, lng: -50.3253, valorPorEixo: 8.30 },
    { nome: "Chapecó", rodovia: "BR-282", lat: -27.1005, lng: -52.6154, valorPorEixo: 7.40 },
    { nome: "Criciúma", rodovia: "BR-101", lat: -28.6763, lng: -49.3713, valorPorEixo: 6.80 },
    { nome: "Ponta Grossa", rodovia: "BR-376", lat: -25.0944, lng: -50.1706, valorPorEixo: 7.80 },
    { nome: "Curitiba", rodovia: "BR-376", lat: -25.4284, lng: -49.2733, valorPorEixo: 8.00 },
    { nome: "Maceió", rodovia: "BR-104", lat: -9.6659, lng: -35.7350, valorPorEixo: 6.90 },
    { nome: "Recife", rodovia: "BR-101", lat: -8.0476, lng: -34.8772, valorPorEixo: 7.00 },
    { nome: "Santo André", rodovia: "SP-150", lat: -23.6632, lng: -46.5333, valorPorEixo: 4.00 },
    { nome: "São Caetano", rodovia: "SP-150", lat: -23.6171, lng: -46.5689, valorPorEixo: 4.20 },
    { nome: "São João de Meriti", rodovia: "BR-040", lat: -22.8119, lng: -43.3654, valorPorEixo: 8.70 },
    { nome: "Terra Boa", rodovia: "BR-369", lat: -23.6263, lng: -51.6353, valorPorEixo: 6.10 },
    { nome: "Londrina", rodovia: "BR-369", lat: -23.3045, lng: -51.1622, valorPorEixo: 7.20 },
    { nome: "Cascavel", rodovia: "BR-277", lat: -24.9554, lng: -53.4604, valorPorEixo: 8.50 },
    { nome: "Maringá", rodovia: "BR-376", lat: -23.4254, lng: -51.9383, valorPorEixo: 7.80 },
    { nome: "Foz do Iguaçu", rodovia: "BR-277", lat: -25.5475, lng: -54.5882, valorPorEixo: 9.00 },
    { nome: "Paranaguá", rodovia: "BR-277", lat: -25.5043, lng: -48.5215, valorPorEixo: 8.90 },
    { nome: "Cambé", rodovia: "BR-369", lat: -23.2649, lng: -51.1860, valorPorEixo: 6.40 },
    { nome: "São Miguel do Iguaçu", rodovia: "BR-277", lat: -25.2986, lng: -54.6358, valorPorEixo: 8.10 },
    { nome: "Petrópolis", rodovia: "BR-040", lat: -22.5014, lng: -43.1789, valorPorEixo: 9.20 },
    { nome: "Barra Mansa", rodovia: "BR-393", lat: -22.4805, lng: -44.1720, valorPorEixo: 7.50 },
    { nome: "Volta Redonda", rodovia: "BR-393", lat: -22.5168, lng: -44.1009, valorPorEixo: 7.80 },
    { nome: "Pato Branco", rodovia: "BR-280", lat: -26.2194, lng: -52.6709, valorPorEixo: 8.20 },
    { nome: "Caxias do Sul", rodovia: "BR-116", lat: -29.1945, lng: -51.1793, valorPorEixo: 8.00 },
    { nome: "Bento Gonçalves", rodovia: "BR-470", lat: -29.1655, lng: -51.5169, valorPorEixo: 7.70 },
    { nome: "Porto Alegre", rodovia: "BR-290", lat: -30.0346, lng: -51.2177, valorPorEixo: 8.50 },
    { nome: "Santa Maria", rodovia: "BR-158", lat: -29.6855, lng: -53.8052, valorPorEixo: 7.60 },
    { nome: "Canoas", rodovia: "BR-116", lat: -29.9171, lng: -51.1830, valorPorEixo: 8.70 },
    { nome: "Osório", rodovia: "BR-101", lat: -29.9145, lng: -50.2531, valorPorEixo: 6.90 },
    { nome: "Ijuí", rodovia: "BR-285", lat: -28.3916, lng: -54.1060, valorPorEixo: 8.40 },
    { nome: "Ponte Serrada", rodovia: "BR-153", lat: -27.3017, lng: -51.2778, valorPorEixo: 8.20 }
];

// ==========================
// CACHE
// ==========================
const cacheCep = {};
const cacheRotas = {};

// ==========================
// CEP → COORDENADAS
// ==========================
async function cepParaCoordenadas(cep) {
  if (cacheCep[cep]) return cacheCep[cep];

  const viaCepResp = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const viaCepData = await viaCepResp.json();

  if (viaCepData.erro) {
    throw new Error(`CEP não encontrado: ${cep}`);
  }

  const endereco = `${viaCepData.logradouro}, ${viaCepData.localidade}, ${viaCepData.uf}, Brazil`;

  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(endereco)}&format=json`;

  const response = await fetch(url, {
    headers: { 'User-Agent': 'sua-aplicacao' }
  });

  const data = await response.json();

  if (!data || data.length === 0) {
    throw new Error(`Endereço não encontrado: ${endereco}`);
  }

  const coords = {
    lat: parseFloat(data[0].lat),
    lng: parseFloat(data[0].lon)
  };

  cacheCep[cep] = coords;
  return coords;
}

// ==========================
// ROTA (OpenRouteService)
// ==========================
async function calcularRota(origem, destino) {
  const url = 'https://api.openrouteservice.org/v2/directions/driving-car';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': ORS_API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      coordinates: [
        [origem.lng, origem.lat],
        [destino.lng, destino.lat]
      ]
    })
  });

  if (!response.ok) throw new Error('Erro ao calcular rota');

  const data = await response.json();
  const rota = data.routes[0];

  return {
    distanciaKm: rota.summary.distance / 1000,
    duracaoMin: rota.summary.duration / 60,
    geometry: rota.geometry
  };
}

// ==========================
// CACHE DE ROTA
// ==========================
function gerarChave(origem, destino) {
  return `${origem.lat},${origem.lng}-${destino.lat},${destino.lng}`;
}

async function obterRotaComCache(origem, destino) {
  const chave = gerarChave(origem, destino);

  if (cacheRotas[chave]) return cacheRotas[chave];

  const rota = await calcularRota(origem, destino);
  cacheRotas[chave] = rota;

  return rota;
}

// ==========================
// DECODIFICAR ROTA
// ==========================
function decodificarRota(geometry) {
  const pontos = polyline.decode(geometry);

  return pontos.map(p => ({
    lat: p[0],
    lng: p[1]
  }));
}

// ==========================
// DISTÂNCIA (HAVERSINE)
// ==========================
function calcularDistanciaKm(lat1, lon1, lat2, lon2) {
  const R = 6371;

  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2;

  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

// ==========================
// BUSCAR PEDÁGIOS NA BASE
// ==========================
function buscarPedagiosNaBase(pontosRota) {
  const encontrados = [];

const raio_km_pedagio = 2; // 🔥 AJUSTE PRINCIPAL
  for (const pedagio of PEDAGIOS_BR) {
    for (const ponto of pontosRota) {
      const distancia = calcularDistanciaKm(
        ponto.lat,
        ponto.lng,
        pedagio.lat,
        pedagio.lng
      );

      if (distancia < raio_km_pedagio) {
        encontrados.push(pedagio);
        break;
      }
    }
  }

  return encontrados;
}

// ==========================
// REMOVER DUPLICADOS
// ==========================
function removerPedagiosDuplicados(pedagios) {
  const resultado = [];

  for (const p of pedagios) {
    if (!resultado.some(r => calcularDistanciaKm(p.lat, p.lng, r.lat, r.lng) < 1)) {
      resultado.push(p);
    }
  }

  return resultado;
}

// ==========================
// CALCULAR VALOR PEDÁGIOS
// ==========================
function calcularValorPedagios(pedagios, eixos) {
  return pedagios.map(p => ({
    ...p,
    valor: p.valorPorEixo * eixos
  }));
}

// ==========================
// FUNÇÃO PRINCIPAL
// ==========================
async function calcularCotacao(cepOrigem, cepDestino, valorPorKm = 2.5, eixos = 2) {
  try {
    const origem = await cepParaCoordenadas(cepOrigem);
    const destino = await cepParaCoordenadas(cepDestino);

    const rota = await obterRotaComCache(origem, destino);
    const pontosRota = decodificarRota(rota.geometry);

    // 🚧 PEDÁGIOS (BASE LOCAL)
    let pedagios = buscarPedagiosNaBase(pontosRota);
    pedagios = removerPedagiosDuplicados(pedagios);
    pedagios = calcularValorPedagios(pedagios, eixos);

    const valorPedagios = pedagios.reduce((t, p) => t + p.valor, 0);

    const valorFrete = (rota.distanciaKm * valorPorKm);

    return {
      distanciaKm: rota.distanciaKm,
      duracaoMin: rota.duracaoMin,
      valorFrete,
      valorPedagios,
      pedagios
    };

  } catch (error) {
    console.error("Erro na cotação:", error);
    throw error;
  }
}

// (async () => {
//   try {
//     console.log("🚀 Iniciando teste de cotação...\n");

//     const cepOrigem = "01001000";   // SP (Zona Leste) 03571120
//     const cepDestino = "20040030";  // Santos  11713115

//     const valorPorKm = 2.5;
//     const eixos = 2;

//     const inicio = Date.now();

//     const resultado = await calcularCotacao(
//       cepOrigem,
//       cepDestino,
//       valorPorKm,
//       eixos
//     );

//     const tempoExecucao = ((Date.now() - inicio) / 1000).toFixed(2);

//     console.log("\n📦 RESULTADO DA COTAÇÃO:");
//     console.log("----------------------------");
//     console.log("📍 Origem:", cepOrigem);
//     console.log("📍 Destino:", cepDestino);
//     console.log("📏 Distância (km):", resultado.distanciaKm.toFixed(2));
//     console.log("⏱️ Duração (min):", resultado.duracaoMin.toFixed(0));
//     console.log("💰 Valor Frete:", resultado.valorFrete.toFixed(2));
//     console.log("🚧 Pedágios:", resultado.valorPedagios.toFixed(2));
//     console.log("⚙️ Tempo execução:", tempoExecucao, "s");

//     console.log("\n🛣️ Pedágios encontrados:");

//     if (!resultado.pedagios || resultado.pedagios.length === 0) {
//       console.log("Nenhum pedágio encontrado");
//     } else {
//       resultado.pedagios.forEach((p, i) => {
//         const origemValor = p.valorOriginal ? "OSM" : "ESTIMADO";

//         console.log(
//           `${i + 1}. ${p.nome} - R$ ${p.valor.toFixed(2)} (${origemValor})`
//         );
//       });
//     }

//     console.log("\n📊 RESUMO:");
//     console.log(`Total pedágios: ${resultado.pedagios.length}`);
//     console.log(`Valor médio por pedágio: ${
//       resultado.pedagios.length > 0
//         ? (resultado.valorPedagios / resultado.pedagios.length).toFixed(2)
//         : 0
//     }`);

//     console.log("\n✅ Teste finalizado com sucesso!");

//   } catch (error) {
//     console.error("\n❌ Erro no teste:");
//     console.error(error.message || error);
//   }
// })();

async function buscabusca(){
    const cepOrigem = "03010000"; // (Fixed) Shopping Mega Polo Moda - Brás
    const cepDestino = $('#cep_dest_buscabusca').val().replace(/\D/g, ''); // (client)
    let tipoCarga = $('#BuscaBuscaTipoCarga').val();
    let fullName = $('#fullNameBuscaBusca').val();
    const numRes = $('#num_entrega_buscabusca').val();

    const valorPorKm = 2.1;
    const eixos = 2; // Van

    const inicio = Date.now();
    const resultado = await calcularCotacao(
      cepOrigem,
      cepDestino,
      valorPorKm,
      eixos
    );


    let origem = cepOrigem;
    let destino = cepDestino;
    let distanciaKm = resultado.distanciaKm.toFixed(2);
    let tempoViagem = resultado.duracaoMin.toFixed(0);
    let valorFrete =  resultado.valorFrete.toFixed(2);
    let valorPedagios = resultado.valorPedagios.toFixed(2);
    const listaPedagios = formatarPedagios(resultado.pedagios);
    let totalPed = resultado.pedagios.length;
    let bairro_entrega_buscabusca = $('#bairro_entrega_buscabusca').val();

    let frete = 0;

    if (resultado.distanciaKm <= 10){
        frete = 45;
    }else if (resultado.distanciaKm > 10 && resultado.distanciaKm <= 25){
        frete = 110;
    }else if (resultado.distanciaKm > 25 && resultado.distanciaKm <= 50){
        frete = 140;
    }else if (resultado.distanciaKm > 50){
        let horaMotor = (resultado.duracaoMin * 0.31);
        frete = valorFrete + horaMotor + resultado.valorPedagios;
    }

    let margem = calculaMargemLucro();

    
    // meu lucro
    debugger
    let freteNum = parseFloat(frete);
    let margemNum = parseFloat(margem);
    frete = freteNum * (1 + margemNum / 100);


    // 🧾 Monta mensagem
    let mensagem = `
    🤝 *Obrigado por escolher a Vegas Transportes Aéreo* ✈️📦

    Estamos felizes em atender você neste momento especial 👨‍✈️

    ━━━━━━━━━━━━━━━━━━
    🚚 *CÁLCULO DE FRETE*
    ━━━━━━━━━━━━━━━━━━

    👤 *Cliente:* ${fullName}

    📍 *Destino:* ${destino}, Nº ${numRes}
    🏘️ *Bairro:* ${bairro_entrega_buscabusca}

    📏 *Distância:* ${distanciaKm} km
    ⏱️ *Tempo estimado:* ${tempoViagem} min

    🕒 *Prazo de entrega:* 24 a 72h úteis

    ━━━━━━━━━━━━━━━━━━
    💰 *VALORES*
    ━━━━━━━━━━━━━━━━━━

    🚚 Frete: R$ ${valorFrete}
    🛣️ Pedágios: R$ ${valorPedagios}
    🔢 Total de pedágios: ${totalPed}

    💵 *Valor total estimado:* R$ ${(Number(valorFrete) + Number(valorPedagios)).toFixed(2)}

    ━━━━━━━━━━━━━━━━━━
    🛣️ *DETALHES DA ROTA*
    ━━━━━━━━━━━━━━━━━━

    📋 Lista de pedágios:
    ${listaPedagios || "Nenhum pedágio na rota"}

    ━━━━━━━━━━━━━━━━━━
    📦 *TIPOS DE SERVIÇO*
    ━━━━━━━━━━━━━━━━━━

    • Carga Agrupada (Interna)  
    • Fracionada (Interestadual)  
    • Carro Exclusivo  
    • Carga Fechada  

    ━━━━━━━━━━━━━━━━━━

    📞 Em caso de dúvidas, estamos à disposição!
    `;

    // 🔗 Cria link
    let link = "https://api.whatsapp.com/send?phone=5511913188606&text=" + encodeURIComponent(mensagem);

    // 🎯 Atualiza botão
    $('#btnWhats_bb').attr('href', link);

    
    $('#origem_modal_buscabusca').text("Shopping Mega Polo Moda - Brás");
    $('#destino_modal_buscabusca').text(bairro_entrega_buscabusca); 
    $('#categoria_mer_buscabusca').text(tipoCarga);
    $('#km_modal_buscabusca').text(distanciaKm + "Km");
    $('#valorFrete_modal_buscabusca').text(parseFloat(frete).toFixed(2));

}

function formatarPedagios(pedagios) {
  if (!pedagios || pedagios.length === 0) {
    return ["Nenhum pedágio encontrado"];
  }
  return pedagios.map((p, i) => {
    const origemValor = p.valorOriginal ? "OSM" : "ESTIMADO";
    return `${i + 1}. ${p.nome} - R$ ${p.valor.toFixed(2)} (${origemValor})`;
  });
}

async function openModal() {

    const cep = $('#cep_dest_buscabusca').val().replace(/\D/g, '');
    const fullName = $('#fullNameBuscaBusca').val();
    const num = $('#num_entrega_buscabusca').val();

    let name = await validaNomeCompleto(fullName);
    let ceps = await validaCeps(cep);
    let numero = await validaNumeroResidencia(num);

    if (ceps == true && name == true && numero == true){
        buscabusca();
        $('#modalRes').modal('show');

        $('#cont-mod').hide();
        $('#loaderDaquiPrali').show();
        
        await sleep(1500); 
        $('#loaderDaquiPrali').hide();
        $('#cont-mod').show();
    }

}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function calculaMargemLucro(){

    const feriados = [
        "2026-01-01", // Ano Novo
        "2026-04-03", // Sexta-feira Santa (exemplo)
        "2026-04-21", // Tiradentes
        "2026-05-01", // Dia do Trabalhador
        "2026-09-07", // Independência
        "2026-12-25"  // Natal
    ];


    function formatarData(data) {
        return data.toISOString().split('T')[0];
    }

    const hoje = new Date();
    const diaSemana = hoje.getDay();
    const dataHoje = formatarData(hoje);
    const Feriado = feriados.includes(dataHoje);
    let margem = 80;

    if (Feriado) {
        margem = 80;
    }
    else if (diaSemana >= 1 && diaSemana <= 4) {
        margem = 60;
    }
    else if (diaSemana === 5) {
        margem = 70;
    }
    else if (diaSemana === 0 || diaSemana === 6) {
        margem = 80;
    }

    return margem;

}


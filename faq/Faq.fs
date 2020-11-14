module Faq

open Feliz
open Feliz.Router
open Browser.Dom
open Elmish
open Elmish.React

type Lang = Fr | En

type Page =
  | Faq
  | Assembly
  | GameStores
  | Variants
  | Videos

let parsePage url =
  match url with
  | [] -> Some Fr, Some Faq
  | ["en"] -> Some En, Some Faq
  | ["assembly"] -> Some Fr, Some Assembly
  | ["en";"assembly"] -> Some En, Some Assembly
  | ["boutiques"] -> Some Fr, Some GameStores
  | ["videos"] -> Some Fr, Some Videos
  | [ "en"; "gamestores"] -> Some En, Some GameStores
  | [ "variantes"] -> Some Fr, Some Variants
  | [ "en"; "variants"] -> Some En, Some Variants
  | [ "en"; "videos"] -> Some En, Some Videos
  | "en":: _ -> Some En, None
  | _ -> None, None

let pageLink lang page =
  match lang, page with
  | Fr, Faq -> Router.format("")
  | Fr, Assembly -> Router.format("assembly")
  | Fr, Variants -> Router.format("variantes")
  | Fr, GameStores -> Router.format("boutiques")
  | Fr, Videos -> Router.format("videos")
  | En, Faq -> Router.format("en")
  | En, Assembly -> Router.format("en","assembly")
  | En, Variants -> Router.format("en","variants")
  | En, GameStores -> Router.format("en", "gamestores")
  | En, Videos -> Router.format("en", "videos")

type Question =
    { Q: ReactElement list
      A: ReactElement list }

let question = React.functionComponent(fun (props: Question) ->
    Html.div [
        Html.h3 props.Q 
        Html.div [
            prop.className "answer"
            prop.children props.A
        ]
    ])

type Section =
    { Title: string
      Qs: Question list }

let section = React.functionComponent(fun (props: Section) ->
    Html.div [
        Html.h2 props.Title
        Html.div [
            prop.children [ for q in props.Qs -> question q ]
        ]
    ])

let intro = 
    Html.div [
        prop.classes ["intro"]
        prop.children [
            Html.h1 "Foire Agricole aux Questions"
            Html.p "2042… Sale temps pour les subventions à l’agriculture qui ont pratiquement disparu. Pour mettre du fuel dans les tracteur, les fermiers ont inventé une compétition télévisée. Mélange improbable de Monster Truck, catch mexicain et foire agricole, l’Ultimate Farming Championship (UFC pour les intimes), ce nouveau sport a rapidement trouvé sa place dans un paysage audiovisuel tout aussi dévasté."
            Html.p "En 2043, pour fêter cette première saison de l'UFC, les producteurs ont organisé cette grande Foire Agricole aux Questions\xa0!"
            Html.p "Vous trouverez ci dessous\xa0:"
            Html.ul [
                Html.li "Des rappels des règles et des points de précisions"
                Html.li "Des précisions sur les Crazy Bonus" 
                Html.li "Vos questions (la Faq sera mise à jour régulièrement)"
                //Html.li "Des anecdotes tracteurissimes"
                //Html.li "Des variantes totalement Crazy et bien plus\xa0!"
            ]
            Html.p "mais d’abord quelques liens utiles"
            Html.ul [
                      Html.li [ Html.a [ prop.text "VIDEO RÈGLES EN 6'42\""; prop.href (pageLink Fr Videos) ]
                                Html.text " (Nouvelle Version 2020\xa0!)"  ]
                      Html.li [ Html.a [ prop.text "RÈGLES OFFICIELLES en pdf"; prop.href "http://www.thefreaky42.com/crazyfarmers/RulesOPEN/FR-CrazyFarmers2k20RULES_v5.2.pdf"] ]
                      Html.li [ Html.a [ prop.text "LES VARIANTES"; prop.href "#variantes"] ]
                      Html.li [ Html.a [ prop.text "LA LISTE DES BOUTIQUES"; prop.href "#boutiques"] ]
                      Html.li [ Html.a [ prop.text "LES INSTRUCTIONS DE MONTAGE"; prop.href "#assembly"] ]
                      Html.li [ Html.a [ prop.text "LA PAGE FACEBOOK DES AUTEURS"; prop.href "https://www.facebook.com/CrazyFarmersLeJeu"];
                                Html.text " (sur laquelle vous pouvez nous envoyer vos questions, remarques, photos rigolotes… en MP ou directement sur la page)" ]
                      Html.li [ Html.a [ prop.text "LA PAGE FACEBOOK DE THE FREAKY 42"; prop.href "https://www.facebook.com/TheFreaky42"] 
                                Html.text " (pour ne rien rater des futurs projets)"]
                      Html.li [ Html.a [ prop.text "CRAZY FARMERS SUR BOARDGAMEARENA"; prop.href "https://boardgamearena.com/gamepanel?game=crazyfarmers"];
                                Html.text " pour jouer en ligne (cherchez iquentin et thinkb4coding pour nous défier personnellement\xa0!)" ]
            ]

        ]
    ]

let introEn = 
    Html.div [
        prop.classes ["intro"]
        prop.children [
            Html.h1 "Fair of the Agricultural Questions"
            Html.p "2042… Bad time for agricultural subsidies... To fuel up their tractors, farmers invented a new trash TV competition. Improbable mix of Monster Truck, mexican wrestling and agricultural fair, the Ultimate Farming Championship (UFC for connoisseurs). This new sport quickly found its place in this devastated  audiovisual landscape."
            Html.p "In 2043, to celebrate the first UFC season, the productors have organised this Faire of the Agricultural Questions!"
            Html.p "You'll find thereafter\xa0:"
            Html.ul [
                Html.li "Rules reminders and clarifications"
                Html.li "Precisions about Crazy Bonus" 
                Html.li "Your questions (this Faq will be updated on a regular basis)"
                //Html.li "Des anecdotes tracteurissimes"
                //Html.li "Des variantes totalement Crazy et bien plus\xa0!"
            ]
            Html.p "First some useful links:"
            Html.ul [
                      Html.li [ Html.a [ prop.text "VIDEO RULES IN 6'42\""; prop.href (pageLink En Videos) ]
                                Html.text " (New version 2020! In french but you can activate subtitles)"  ]
                      Html.li [ Html.a [ prop.text "OFFICIAL RULES in pdf"; prop.href "http://www.thefreaky42.com/crazyfarmers/RulesOPEN/EN-CrazyFarmers2k20RULES_v3.2.pdf"] ]
                      Html.li [ Html.a [ prop.text "VARIANTES"; prop.href "#en/variants"] ]
                      Html.li [ Html.a [ prop.text "GAME STORES"; prop.href "#en/gamestores"] ]
                      Html.li [ Html.a [ prop.text "ASSEMBLY INSTRUCTIONS"; prop.href "#en/assembly"] ]
                      Html.li [ Html.a [ prop.text "AUTHORS' FACEBOOK PAGE"; prop.href "https://www.facebook.com/CrazyFarmersLeJeu"];
                                Html.text " (where you can send your questions, remarks, crazy pictures… PM or directly on the page)" ]
                      Html.li [ Html.a [ prop.text "THE FREAKY 42'S FACEBOOK PAGE"; prop.href "https://www.facebook.com/TheFreaky42"] 
                                Html.text " (don't miss future projects)"]
                      Html.li [ Html.a [ prop.text "CRAZY FARMERS ON BOARDGAMEARENA"; prop.href "https://boardgamearena.com/gamepanel?game=crazyfarmers"];
                                Html.text " to play online (look for iquentin and thinkb4coding to play with us!)" ]
            ]

        ]
    ]

let field =
    { Title = "Champ"
      Qs = [ { Q = [ Html.text "Peut-on reprendre des parcelles appartenant à un adversaire\xa0?"]
               A = [ Html.text "Oui, c’est même fortement conseillé. On peut tout à fait tirer une clôture " 
                     Html.u "à travers un champ adverse"
                     Html.text " et prendre ou reprendre des parcelles."]}
             { Q = [ Html.text "La parcelle initiale a-t-elle une importance particulière\xa0? "]
               A = [ Html.text "Non, aucune."] }
      ]
    }

let fieldEn =
    { Title = "Field"
      Qs = [ { Q = [ Html.text "Can I take back plots from an opponent?"]
               A = [ Html.text "Yes, it's even highly advised. You can pull a fence " 
                     Html.u "through an opponent's field"
                     Html.text " and take or take back plots."]}
             { Q = [ Html.text "Does the initial plot have anything special? "]
               A = [ Html.text "No, nothing special."] }
      ]
    }

let fence =
    { Title = "Clôture"
      Qs = [
        { Q = [ Html.text "Comment ça pas de clôtures sur les bords de mon champ\xa0?" ]
          A = [ Html.text "Effectivement, les clôtures sont inutiles sur les bords (et à l’intérieur) de votre champ (sauf dans sa jachère bien sûr\xa0!). D’ailleurs, dès que vous faites une annexion, la clôture devient le bord et donc elle disparaît."] }
        { Q = [ Html.text "Que faire si on arrive à court de barrières pour sa clôture\xa0?" ]
          A = [ Html.text "Il y a officiellement 24 barrières de clôtures maximum (20 à 3 ou 4 joueurs). Au-delà, on ne peut plus continuer sa clôture. Il faut revenir en arrière et trouver un chemin plus court. Mais rien ne vous empêche, si vous le décidez en début de partie, de jouer avec un nombre (virtuellement) infini de barrières, comme sur BoardGameArena."] }
        { Q = [ Html.text "Si ma clôture ne fait que 1 ou 2 de barrières de long, est-ce que sa base est protégée quand même\xa0?" ]
          A = [ Html.text "Oui, la protection de clôture (2 clôtures sur 3 croisements) s’applique y compris sur la base (le croisement d’où part la clôture) si celle-ci est comprise dedans, ce qui est forcément le cas pour une clôture de longueur 1 ou 2." ] }
        { Q = [ Html.text "Et si je tire une clôture qui fait le tour de mon propre champ et finit par se toucher elle-même avant de rentrer dans mon champ\xa0?"]
          A = [ Html.text "C’est comme une boucle simple, la partie de la clôture qui fait boucle est retirée. Il n’y a pas d’annexion."]}
        { Q = [ Html.text "Au secours\xa0! L'adversaire m'a pris la parcelle d'où partait ma clôture\xa0! Je me retrouve avec une clôture attachée à rien\xa0!" ]
          A = [ Html.text "Oui, c'est dommage. Votre clôture disparaît, comme si elle avait été coupée, et ce même si vous aviez joué une Surcharge."] }
      ] }

let fenceEn =
    { Title = "Fence"
      Qs = [
        { Q = [ Html.text "No fence on the border of my field?" ]
          A = [ Html.text "Exactly, fences are useless on the border (as well as inside) your field (except for fallow lands of course!). Besides, as soon as you take over plots, the fence becomes the border and is therefore removed."] }
        { Q = [ Html.text "What should I do when I have no fence left?" ]
          A = [ Html.text "There are officially 24 fences max (20 for 3 or 4 players). Beyond that, you cannot pull more fences. You have to go back and find a shorter path. But you can, if you wish and decide before starting the game, play with a (virtually) infinite number of fences, like on BoardGameArena."] }
        { Q = [ Html.text "When I have only 1 or 2 fences behind me, is the starting point protected?" ]
          A = [ Html.text "Yes, Fence protection (2 fences on 3 crossroads) also protects the starting point if included, which is always the case when you have 1 or 2 fences." ] }
        { Q = [ Html.text "What if I pull a fence all around my field and connect it back to itself before going back to my field?"]
          A = [ Html.text "It's like for a simple loop, the part that makes a loop is removed. There is no annexation."]}
        { Q = [ Html.text "Help! An opponent took the plot where my fence was connected! My fence is now dangling!" ]
          A = [ Html.text "Yes, that's sad. Your fence is removed, as if it had been cut, even if you had played High Voltage."] }
      ] }

let move =
    { Title = "Déplacement"
      Qs = [
          { Q = [ Html.text "Cas pratique de déplacement\xa0: Que se passe-t-il si j’utilise, à mon tour de jeu, un bonus Nitro+2 et une accélération de clôture de 1 pour rentrer chez moi (à une distance de 4)\xa0? Puis-je effectuer encore 2 déplacements une fois rentré\xa0?"]
            A = [ Html.text "Premièrement, la limite de 5 s'applique, donc le Nitro+2 ne vaut que +1. Par contre, les 5 déplacements cumulés (3 de base + 1 accélération + 1 de Nitro) sont à utiliser. Donc même une fois rentré après 4 déplacements, il reste encore 1 déplacement à faire."] }
          { Q = [ Html.text "Et si je n’ai pas envie de faire mes 3 déplacements\xa0?"]
            A = [ Html.text "Les déplacements de base et d’accélération sont obligatoires\xa0! Par contre on peut revenir en arrière. Donc, si l’on a par exemple 5 déplacements on peut virtuellement en faire 1 ou 3, mais pas 2 ou 4."]}
          { Q = [ Html.text "Puis-je me déplacer à l’intérieur (ou sur le bord) de mon champ\xa0?"]
            A = [ Html.text "Oui, c’est juste qu’on ne tire pas de clôture dans son champ, uniquement quand on en sort."]}
          { Q = [ Html.text "Que se passe-t-il si l’on répète indéfiniment les mêmes déplacements en boucle et que personne ne veut céder\xa0?"]
            A = [ Html.text "À l’image des Échecs, si une position est répétée 3 fois, la partie se termine sur une égalité. Nous appellerons cela la règle du nul par répétition de positions."] }
          { Q = [ Html.text "Les déplacements sont obligatoires, d’accord. Mais alors que faire quand aucun déplacement n’est possible\xa0?" ]
            A = [ Html.text "Effectivement, il est possible qu’aucun déplacement ne soit possible. Si vous êtes complètement bloqué par\xa0: une botte de foin, une partie de clôture protégée, un tracteur adverse… alors vos déplacements sont perdus et vous restez sur place." ]}
          { Q = [ Html.text "Si j’en suis déjà à 4 déplacements, est-ce que j’ai le droit de prendre un Nitro+2, quitte à n’avoir qu’un déplacement en plus\xa0?"]
            A = [ Html.text "Oui, 4+2 = 6, mais 5 max donc 1 déplacement perdu."] }
          { Q = [ Html.text "Si on joue contre moi 2 bonus Ornière, j’ai 0 déplacement\xa0?"]
            A = [ Html.text "Oui, 3 - 4 = -1, mais je ne peux pas faire -1 alors je ne bouge pas. Et si je joue une Nitro+2 pour m’en sortir quand même\xa0? → Je fais 3 - 4 + 2 = 1 déplacement."]}
          { Q = [ Html.text "Je peux aller sur le même croisement qu’un autre tracteur\xa0?" ]
            A = [ Html.text "Non. Jamais 2 tracteurs au même endroit."] }
          { Q = [ Html.text "Si on repart en arrière juste après avoir annexé, dans le même tour, ça annule l’annexion\xa0?"]
            A = [ Html.text "Non. L'annexion est acquise au moment même où le tracteur revient au contact de son champ."] }
      ]
    }
let moveEn =
    { Title = "Moves"
      Qs = [
          { Q = [ Html.text "Practical case: What happens if I use, during my turn, A Nitro+2 bonus and a fence acceleration to go back in my field (with a distance of 4)? Can I make 2 more moves once back home?"]
            A = [ Html.text "First, the limit of 5 moves applies, so the Nitro+2 is worth only +1. However, the 5 moves (3 basic moves + 1 acceleration + 1 for the Nitro) have to be done. So after 4 moves to go back in the field, there is 1 move left to be done."] }
          { Q = [ Html.text "And what if I don't want to make my 3 moves?"]
            A = [ Html.text "All moves are mandatory! However you can go back. Si, if you have for instance 5 moves, you can virtually make 1 or 3 moves, but not 2 or 4."]}
          { Q = [ Html.text "Can I move inside (or on the border of) my field?"]
            A = [ Html.text "Yes, you just don't pull fences. Place fences only when you get out."]}
          { Q = [ Html.text "What if we repeat endlessly the same moves and nobody wants to concede?"]
            A = [ Html.text "Like in chess, when a position is repeated 3 times, the game ends in a tie. This rule is called tie by repetition."] }
          { Q = [ Html.text "Ok, moves are mandatory. But what if no move is possible?" ]
            A = [ Html.text "Right, it can happen that no move is possible. When you're blocked by: a hay bale, a protected fence, an opponent's tractor… Then your moves are lost and you stay where you are." ]}
          { Q = [ Html.text "When I already used 4 moves, can I play a Nitro+2 bonus, even if it gives only one extra move?"]
            A = [ Html.text "Yes, 4+2 = 6, but 5 max so 1 move is lost."] }
          { Q = [ Html.text "When someone plays 2 Rut bonus against me, do I have 0 moves?"]
            A = [ Html.text "Yes, 3 - 4 = -1, but I cannot do -1 move so I don't move. And if I play Nitro+2 bonus to move nonetheless? → I do 3 - 4 + 2 = 1 move."]}
          { Q = [ Html.text "Can I go on the same crossroad as another tractor?" ]
            A = [ Html.text "No. Never 2 tractors in the same place."] }
          { Q = [ Html.text "When I go back on the same path just after an annexation, in the same turn, does it cancel the annexation?"]
            A = [ Html.text "No. Annexation is acquired at the very moment when the tractor is in contact with the field."] }
      ]
    }

let powerless =
    { Title = "Hors tension"
      Qs = [
          { Q = [ Html.text "Comment rentrer chez moi après une coupure si l’adversaire me barre la route avec sa clôture\xa0?"]
            A = [ Html.text "Lorsqu’on est hors tension, on ne peut plus couper les clôtures adverses, mais on a le droit de passer dessus ou même de s’y arrêter, sauf sur les 2 clôtures protégées derrière le tracteur adverse. On peut aussi rentrer chez soi directement en utilisant un Hélicoptère."
                  Html.br []
                  Html.text "Remarque\xa0: dès qu’on rentre chez soi, on a de nouveau le droit de couper les adversaires, ainsi, si l’on rentre chez soi sur un croisement occupé par une clôture adverse, cette dernière est coupée immédiatement."] }
          { Q = [ Html.text "Que se passe-t-il si le jeu se termine juste quand je viens de me faire couper ma clôture\xa0?"]
            A = [ Html.text "Très bonne question\xa0! Lorsqu’on vient de se faire couper, on est généralement déconnecté de son champ. Du coup, on est momentanément sans champ principal (voir Jachère). Or le score est à tout moment la taille du champ principal, c’est-à-dire ici\xa0: "
                  Html.strong "ZÉRO"
                  Html.text "\xa0! Attention, c’est un moyen pour le joueur qui est mené de gagner sur un coup de Tra(cteur)falgar."] }
      ] }
let powerlessEn =
    { Title = "Powerless"
      Qs = [
          { Q = [ Html.text "How can I go back in my field when the opponent's fence is on the way?"]
            A = [ Html.text "When powerless, you cannot cut opponents' fences, but you can cross or stay on them, except for the last 2 protected fences behind the opponent's tractors. You can also go back instantly using an Helicopter."
                  Html.br []
                  Html.text "Remark: as soon as you reach your field, you can cut opponents' fence again, hence, when you reconnect to your field at a crossroad occupied by an opponent's fence, it's cut instantly."] }
          { Q = [ Html.text "What happens when the game ends just after my fence has been cut?"]
            A = [ Html.text "Excellent question! When your fence is cut, you're most often disconnected from your field. So, you're momentarily without a main field (see Fallow land). Now, the score is at all time equal to the size of the main field, which means: "
                  Html.strong "ZERO"
                  Html.text "! Be careful, this is a way for a player that has a lower score to win on a nasty trick."] }
      ] }
let concepts =
    { Title = "Concepts"
      Qs = [
          { Q = [ Html.text "La pile de parcelles commune pour 2 joueurs, comment ça marche\xa0?"]
            A = [ Html.text "À 2 joueurs, on partage la même pile de parcelles (réversibles). Il y a donc un système de vases communicants\xa0: les cases vides annexées rapprochent les 2 joueurs de la fin de la partie."] }
      ] }
let conceptsEn =
    { Title = "Concepts"
      Qs = [
          { Q = [ Html.text "The common plot stack for 2 players, How does it work?"]
            A = [ Html.text "In a 2 players game, you share a single stack of (reversible) plots. There is a communicating vessels mechanism: annexing empty plots leads BOTH players nearer the end of the game."] }
      ] }
let rare =
    { Title = "Cas rares"
      Qs = [
          { Q = [ Html.text "Que se passe-t-il\xa0? Je suis DANS une partie en jachère de mon champ avec une clôture qui part de mon champ principal."]
            A = [ Html.text "Ah\xa0! Voilà un cas intéressant. Effectivement, la jachère vous appartient toujours, mais elle ne sert à rien tant que vous n’avez pas réussi à reprendre les cases qui font la jonction. Elle est inactive et se comporte pour vous comme une case vide ( = “en friche”). Vous pouvez donc passer sur le bord ou à travers si cela vous chante. C’est d’ailleurs le seul cas où vous aurez une clôture dans votre propre champ. Quoi qu’il arrive, il faudra revenir au contact de votre champ principal pour conclure une annexion."] }
          { Q = [ Html.text "Encore plus incroyable\xa0: et si j’ai une clôture qui passe au contact de ma jachère et qu’un adversaire me coupe, est-ce que je peux garder la partie de ma clôture qui repart de ma Jachère (qui se transforme donc en champ principal à l’occasion)\xa0?"]
            A = [ Html.text "Non, la clôture est coupée, elle disparaît entièrement. Cela peut effectivement entraîner un changement de champ principal/jachère, mais la clôture est perdue quoi qu’il arrive."] }
      ] }
let rareEn =
    { Title = "Rares cases"
      Qs = [
          { Q = [ Html.text "What happens? I'm INSIDE one of my fallow land with a fence that starts from my main field."]
            A = [ Html.text "Ah! This is an interesting case. Actually, the fallow land still belongs to you, but is useless as long as you did not take back the plots that connect it to your main field. It is inactive and behaves for you as an empty plot. You can move on the border or inside if you want. This is the only case where you can have a fence bordering your own plots. Whatever happens, you'll have to go back in contact to your main field to finish an annexation."] }
          { Q = [ Html.text "Even more involved: what if my fence goes through my fallow land and an opponent cuts it? Can I keep a part of my fence that now starts from the fallow land (that becomes a main field in the process)?"]
            A = [ Html.text "No, the fence is cut, it disappears  totally. It can lead to a main field/fallow land switch, but the fence is lost anyway."] }
      ] }

let card (name: string) =
  Html.span [
    prop.className "bonus"
    prop.text name 
  ]



let bonus =
    { Title = "Les Bonus"
      Qs = [
          { Q = [ Html.text "Puis-je jouer un bonus dès que je le pioche\xa0?"]
            A = [ Html.text "Oui."] }
          { Q = [ Html.text "Peut-on poser 2 "; card "Bottes de Foin"; Html.text " sur le même chemin\xa0?"]
            A = [ Html.text "Non."] }
          { Q = [ Html.text "Puis-je utiliser 2, voire 3 "; card "Hélicoptères"; Html.text " dans le même tour\xa0?"]
            A = [ Html.text "Autant que vous voulez. Et combinés avec d'autres bonus si bon vous semble."] }
          { Q = [ Html.text "Un déplacement en "; card "Hélicoptère"; Html.text " coûte-t-il un déplacement\xa0?"]
            A = [ Html.text "Non, c’est gratuit." ]}
          { Q = [ Html.text "Peut-on traverser (sans la couper) une clôture après un "; card  "Hélicoptère" ; Html.text "\xa0?"]
            A = [ Html.text "Non, après un Hélicoptère, on peut considérer que toutes les clôtures adverses sont indestructibles et infranchissables sur toute leur longueur jusqu’à la fin de son tour."] }
          { Q = [ Html.text "La "; card "Surcharge"; Html.text " protège-t-elle aussi le point de départ de ma clôture\xa0?"]
            A = [ Html.text "Oui. Mais il reste un moyen de couper une clôture en Surcharge\xa0: prendre la parcelle de départ de cette clôture."] }
          { Q = [ Html.text "Je ne comprends pas bien sur quelles parcelles adverses exactement je peux utiliser un "; card "Pot de Vin"; Html.text "\xa0?"]
            A = [ Html.text "Le Pot de Vin a beaucoup de restrictions car la corruption, c’est mal, donc on se doit de rester discrets. Voici les conditions pour l’utiliser\xa0:"
                  Html.ul [
                      Html.li "La parcelle visée doit toucher une parcelle de votre propre champ (principal ou jachère),"
                      Html.li "La parcelle visée ne doit pas avoir de grange,"
                      Html.li "La parcelle visée ne doit pas être la parcelle de départ de la clôture de son propriétaire,"
                      Html.li "Le propriétaire ne doit pas être sur le bord de la parcelle visée,"
                      Html.li "et enfin, la partie ne peut être gagnée par l’effet immédiat d’un Pot de Vin (ou de toute autre carte bonus d’ailleurs)."
                  ]
                  Html.text "Par “effet immédiat”, nous voulons dire que si le Pot de Vin est utilisé pour prendre directement la dernière parcelle qui nous manquait pour gagner, il n’est pas autorisé. Par contre, si le Pot de Vin entraîne (par exemple) une fermeture de clôture qui produit une annexion permettant de gagner, ce n’est pas l’effet immédiat du Pot de Vin qui a permis la victoire. Il y avait des effets intermédiaires et donc le Pot de Vin est autorisé."
                  ] }
          { Q = [ Html.text "Est-ce que le "; card "Chien de Garde"; Html.text " protège les champs en jachère\xa0? Et est-ce qu’il peut empêcher un Pot de Vin\xa0?"]
            A = [ Html.text "Oui et oui."] }
      ] }

let bonusEn =
    { Title = "Bonus cards"
      Qs = [
          { Q = [ Html.text "Can I play a bonus card as soon as I draw it?"]
            A = [ Html.text "Yes."] }
          { Q = [ Html.text "Can I place 2 "; card "Hay Bales"; Html.text " on the same path?"]
            A = [ Html.text "No."] }
          { Q = [ Html.text "Can I use 2, or 3 "; card "Helicopters"; Html.text " in a single turn?"]
            A = [ Html.text "As much as you wish. And combined with other bonus cards if you want."] }
          { Q = [ Html.text "Does an "; card "Helicopter"; Html.text " move cost one standard move?"]
            A = [ Html.text "No, it's free." ]}
          { Q = [ Html.text "Can I cross a fence (without cutting) just after an "; card  "Helicopter" ; Html.text " card?"]
            A = [ Html.text "No, after an Helicopter, you can assume that opponents fences are indestructible and uncrossable on their full length until the end of your turn."] }
          { Q = [ Html.text "Does the "; card "High Voltage"; Html.text " protect also the starting point of my fence?"]
            A = [ Html.text "Yes. But there is still a way to cut it: when an opponent takes the plot where your fence starts."] }
          { Q = [ Html.text "I don't understand well which plots can be taken with a "; card "Bribe"; Html.text " card?"]
            A = [ Html.text "The Bribe has many restrictions because corruption is bad, and must remain discreet. Here are the conditions to use it:"
                  Html.ul [
                      Html.li "The target plot must be in contact with your own field (main field or fallow land),"
                      Html.li "The target plot must not contain a barn,"
                      Html.li "The target plot must not be the starting point of the owners fence,"
                      Html.li "The owner must not be on the border the target plot,"
                      Html.li "and finally, the game cannot be over by the immediate effect of the bribe (or any other bonus card by the way)."
                  ]
                  Html.text "By “immediate effect”, we mean when the Bribe is used to take directly the last plot needed to win, this is forbidden. However, if the Bribe is used to take a plot that closes a fence, which then causes an annexation which ends the game, the Bribe did not cause the end of the game by immediate effect. There were intermediate effects, thus the Bribe is allowed."
                  ] }
          { Q = [ Html.text "Does the "; card "Watchdog"; Html.text " protect fallow lands? And does it protect against Bribe?"]
            A = [ Html.text "Yes and yes. Good dog."] }
      ] }

let crazyBonus =
  { Title = "Crazy Bonus"
    Qs = 
      [
      { Q = [Html.text "Peut on poser la botte de foin d'un "; card "Blocus"; Html.text " sur un croisement du bord du terrain\xa0?"]
        A = [Html.text "Oui, n'importe où et même sur le bord. Il est même permis d'enfermer un adversaire, c'est que pour un tour\xa0!" ]}
    ]
  }

let crazyBonusEn =
  { Title = "Crazy Bonus"
    Qs = 
      [
      { Q = [Html.text "Can I place the hay bale for a "; card "Blockade"; Html.text " on a crossroad on the border of the board\xa0?"]
        A = [Html.text "Yes, wherever you want, even the border. It's even allowed to lock an opponent, it's for one turn only!" ]}
    ]
  }
let stadiumEvent =
  { Title = "Evenements de Stade"
    Qs = 
      [
      { Q = [Html.text "Avec le "; card "Verglas"; Html.text " que se passe-t-il si je ne peux plus avancer\xa0?"]
        A = [Html.text "Tant qu'un chemin est possible vous devez avancer, mais si vous êtes bloqué, vous perdez les mouvements restant\xa0!" ]}
    ]
  }

let stadiumEventEn =
  { Title = "Stadium Events"
    Qs = 
      [
      { Q = [Html.text "Peut on poser la botte de foin d'un "; card "Blocus"; Html.text " sur un croisement du bord du terrain\xa0?"]
        A = [Html.text "Oui, n'importe où et même sur le bord. Il est même permis d'enfermer un adversaire, c'est que pour un tour\xa0!" ]}
    ]
  }
let cow =
    { Title = "Mode Vache folle"
      Qs = [
          { Q = [ Html.text "Y a-t-il un nombre de parcelles limité en mode Vache Folle\xa0?"]
            A = [ Html.text "Non. Cela n’a pas beaucoup d’importance car, on n’y arrive pratiquement jamais. Si cela vous arrive quand même utilisez les parcelles d’une autre couleur pour finir la partie (et envoyez nous votre score, il sera probablement fameux\xa0!)."] }
          { Q = [ Html.text "La vache, quand elle se déplace, elle doit exactement suivre le tracé de la flèche ou elle doit juste aller sur la case d'arrivée et en adopter l'orientation ?"]
            A = [ Html.text "La vache prend la case de destination uniquement. Sur un demi tour elle prend la case derrière elle et se retrouve dans la direction opposée."
                  Html.p "En partant de la position suivante:"
                  Html.figure [ Html.img [ prop.src "img/madcow-0-start.jpg"; prop.style [ style.width (length.em 10) ]] ]
                  Html.p "Voici pour chaque type de carte la position et l'orientation finale:" 
                  Html.figure [ 
                     Html.img [ prop.className "madcow"; prop.src "img/madcow-1-forward.jpg" ] 
                     Html.legend "en avant"
                  ]
                  Html.figure [
                    Html.div [ 
                     Html.img [ prop.className "madcow"; prop.src "img/madcow-2-slide-left.jpg" ] 
                     Html.legend "glisser à gauche"
                    ]
                    Html.div [
                     Html.img [ prop.className "madcow"; prop.src "img/madcow-3-slide-right.jpg" ] 
                     Html.legend "glisser à droite"
                    ]
                  ]
                  Html.figure [
                    Html.div [
                     Html.img [ prop.className "madcow"; prop.src "img/madcow-4-turn-left.jpg" ] 
                     Html.legend "tourner à gauche"
                    ]
                    Html.div [
                     Html.img [ prop.className "madcow"; prop.src "img/madcow-5-turn-right.jpg" ] 
                     Html.legend "tourner à droite"
                    ]
                  ]
                  Html.figure [
                      Html.div [
                       Html.img [ prop.className "madcow"; prop.src "img/madcow-6-rear-left.jpg" ] 
                       Html.legend "arrière gauche"
                      ]
                      Html.div [
                       Html.img [ prop.className "madcow"; prop.src "img/madcow-7-rear-right.jpg" ] 
                       Html.legend "arrère droite"
                      ]
                  ]
                  Html.figure [
                     Html.img [ prop.className "madcow"; prop.src "img/madcow-8-uturn.jpg" ] 
                     Html.legend "demi tour"
                  ]
                  Html.p "Si le chemin entre la parcelle de départ de la vache et celle d'arrivée contient un obstacle, la vache doit se réorienter. Si il contient une clôture non protégée, celle-ci est coupée."
            ]}
          { Q = [ Html.text "Je n’ai pas bien compris comment la Vache Folle place ses Bottes de foin."]
            A = [ Html.text "Voici un schema pour vous aider, il complète l’explication de la règle."
                  Html.figure [

                      Html.img [ prop.src "./img/solo-bottes-fr.png"
                                 prop.style [ style.width (length.em 20)] ] ] ]}
          { Q = [ Html.text "En co-op, c’est quelle clôture qui compte pour déterminer le retour de bâton\xa0?"]
            A = [ Html.text "C’est le total de toutes les clôtures des joueurs."] }
          { Q = [ Html.text "La Vache Folle peut-elle gagner la partie sur un Pot de Vin\xa0?" ]
            A = [ Html.text "Non, elle est soumise à la même contrainte que celle des joueurs. Par contre, si elle ne parvient pas à joueur son Pot de Vin, elle perd la carte."] }
          { Q = [ Html.text "La Vache folle prend l’Hélicoptère, a-t-elle le droit de couper ma clôture juste après\xa0?"]
            A = [ Html.text "Oui, c’est une vache."] }
      ] }

let cowEn =
    { Title = "Mad Cow mode"
      Qs = [
          { Q = [ Html.text "Is there a limited number of plots for the Mad Cow mode?"]
            A = [ Html.text "No. It's not a problem since it's really hard to reach. But if it happens to you, use plots of other colors to end the game (and send us your score, it should be impressive!)."] }
          { Q = [ Html.text "When the mad cow moves, does she follow the path of the arrow on the card or does she just go on the destination tile with a new orientation?"]
            A = [ Html.text "The mad cow only takes the destination parcel. On a U-Turn, she takes the parcel behind her and is now in the opposit direction."
                  Html.p "Starting from the following position:"
                  Html.figure [ Html.img [ prop.src "img/madcow-0-start.jpg"; prop.style [ style.width (length.em 10) ]] ]
                  Html.p "Here is for each move type the final position and orientation:" 
                  Html.figure [ 
                     Html.img [ prop.className "madcow"; prop.src "img/madcow-1-forward.jpg" ] 
                     Html.legend "forward"
                  ]
                  Html.figure [
                    Html.div [ 
                     Html.img [ prop.className "madcow"; prop.src "img/madcow-2-slide-left.jpg" ] 
                     Html.legend "slide left"
                    ]
                    Html.div [
                     Html.img [ prop.className "madcow"; prop.src "img/madcow-3-slide-right.jpg" ] 
                     Html.legend "slide right"
                    ]
                  ]
                  Html.figure [
                    Html.div [
                     Html.img [ prop.className "madcow"; prop.src "img/madcow-4-turn-left.jpg" ] 
                     Html.legend "turn left"
                    ]
                    Html.div [
                     Html.img [ prop.className "madcow"; prop.src "img/madcow-5-turn-right.jpg" ] 
                     Html.legend "turn right"
                    ]
                  ]
                  Html.figure [
                      Html.div [
                       Html.img [ prop.className "madcow"; prop.src "img/madcow-6-rear-left.jpg" ] 
                       Html.legend "rear left"
                      ]
                      Html.div [
                       Html.img [ prop.className "madcow"; prop.src "img/madcow-7-rear-right.jpg" ] 
                       Html.legend "rear right"
                      ]
                  ]
                  Html.figure [
                     Html.img [ prop.className "madcow"; prop.src "img/madcow-8-uturn.jpg" ] 
                     Html.legend "u-turn"
                  ]
                  Html.p "When the path between the starting tile and the destination tile contains an obstacle, the mad cow has to be reoriented. If it contains a fence that is not protected, the fence is cut."
            ]}
          { Q = [ Html.text "I didn't really get how the Mad Cow places their Hay Bales."]
            A = [ Html.text "Here is a picture to help you, it should make it more obvious."
                  Html.figure [
                      Html.img [ prop.src "./img/solo-bottes-en.png"
                                 prop.style [ style.width (length.em 20)] ] ] ]}
          { Q = [ Html.text "In co-op mode, which fence should we take into account to determine bonus backlash mode?"]
            A = [ Html.text "Use the total length of all players' fences."] }
          { Q = [ Html.text "Can the Mad Cow win with a Bribe?" ]
            A = [ Html.text "No, the cow is limited to the same constraints as players. Moreover, if it cannot play a Bribe, the card is discarded."] }
          { Q = [ Html.text "The Mad Cow uses an Helicopter. Can it cut my fence just after?"]
            A = [ Html.text "Yes, it's a cow."] }
      ] } 

let boutique name link =
  Html.li [
    Html.a [
      prop.text (name: string)
      prop.href link
    ]
  ]

let team = 
  Html.div [
    prop.className "variant"
    prop.children [
      Html.h2 "2 contre 2"
      Html.p "À 4 joueurs, vous pouvez jouer Rouge et Jaune contre Bleu et Violet. Faites la même mise en place que pour 2 joueurs. Les partenaires démarrent de la même parcelle et jouent avec la même couleur de clôtures et de parcelles\xa0: les Rouge contre les Bleu. Jouez en alternant\xa0: Rouge→Bleu→Jaune→Violet→… Les règles normales s’appliquent avec quelques précisions\xa0:"
      Html.p [ Html.strong "Annexion"; Html.text ". Lorsque vous touchez la clôture de votre partenaire, vous réalisez une annexion “en équipe” des cases entourées par votre champ et les deux clôtures. Enlevez seulement les portions de clôture qui ne servent plus."]
      Html.p [ Html.strong "Clôture"; Html.text ". La protection de clôture n’affecte pas les partenaires entre eux. Cependant il est toujours interdit de mettre deux tracteurs sur le même croisement, mais aussi de se déplacer le long d’une clôture de son partenaire si ce déplacement entraîne normalement la pose d’une clôture à soi." ]
      Html.p [ Html.strong "Bonus"; Html.text ". Les partenaires mettent leurs bonus en commun, la limite de 6 s’applique par équipe." ]
      Html.p [ Html.strong "Jachère"; Html.text ". En cas de jachère, des tracteurs partenaires peuvent avoir des champs principaux différents. Dans ce cas, un croisement entre leurs clôtures ne provoque pas forcément une annexion. En effet, si des cases ne sont pas totalement entourées, il ne peut y avoir d’annexion. Il y a alors coupure entre partenaires\xa0!"]
      Html.p "Vous pouvez jouer les bonus pour votre partenaire comme indiqué dans la variante Solidarité Agricole."
    ]
  ]
let teamEn = 
  Html.div [
    prop.className "variant"
    prop.children [
      Html.h2 "2 VS 2"
      Html.p "With 4 players, you can play Red and Yellow against Blue and Purple. Use the same setup as for 2 players. Partners start from the same plot and play with the same plot and fence color: Red vs Blue. Play alternatively: Red→Blue→Yellow→Purple→… Standard rules apply with a few precisions:"
      Html.p [ Html.strong "Annexation"; Html.text ". When you touch your partner's fence, you make a “team” annexation of the plots surrounded by your field and the two fences. Remove only part of the fences that are on the border of the new field."]
      Html.p [ Html.strong "Fence"; Html.text ". Fence protection doesn't apply between partners. However it's still forbidden to place two tractors on the same crossroad. It is also forbidden to move along a partner fence if the move should normally pull a fence for you." ]
      Html.p [ Html.strong "Bonus"; Html.text ". Partners share their bonus. The limit of 6 applies to the team." ]
      Html.p [ Html.strong "Fallow land"; Html.text ". In case of fallow land, partners' tractors can be connected to different main fields. In this case, touching a partner fence does not necessarily lead to an annexation. If plots are not totally surrounded, there can be no annexation. The partner's fence is then cut!"]
      Html.p "You can play bonus for your partner like indicated in the Agricultural Solidarity variant."
    ]
  ]

let bonusforothers =
  Html.div [
    prop.className "variant"
    prop.children [
      Html.h2 "Solidarité Agricole"
      Html.p "Vous pouvez jouer un bonus au profit d’un autre joueur avec son accord. Surcharges, Chien de garde et Hélicoptère prennent effet immédiatement et terminent au début du prochain tour du joueur qui a joué la carte bonus."
      Html.p "Si un joueur joue un pot de vin au cadastre pour un autre joueur, et que ca lui fait faire une annexion en dehors de son tour.. L’annexion est faite tout de suite. Le joueur prend les cases et les bonus (sans pouvoir les jouer)."
    ]
  ]
let bonusforothersEn =
  Html.div [
    prop.className "variant"
    prop.children [
      Html.h2 "Agricultural Solidarity"
      Html.p "You can play a bonus for another player's profit if this player agrees. High Voltage, Watchdog and Helicopter take effect immediately and end at the beginning  of the next turn of the player who played the bonus card."
      Html.p "When a player plays a Bribe for another player, and causes an annexation out of their turn, the annexation is resolved immediately. The player takes the plots and the cards (but cannot play them until it's their turn)."
    ]
  ]
  
let river =
  Html.div [
    prop.className "variant"
    prop.children [
      Html.h2 "Rivière de Bonus"
      Html.p "Piochez 5 bonus et mettez-les face visible à côté de la pioche. Chaque fois que vous récoltez des bonus, choisissez parmi les 5, et remplacez-les ensuite pour compléter la rivière de Bonus."
    ]
  ]
let riverEn =
  Html.div [
    prop.className "variant"
    prop.children [
      Html.h2 "Bonus River"
      Html.p "Draw 5 bonus and place them face up next to the draw pile. Each time you take some bonuses, choose between the 5 available, and replace them to complete the Bonus River once done."
    ]
  ]

let variantes =
  Html.div [
    prop.children [
      Html.h1 [ prop.text "Les variantes"; prop.id "variantes" ]
      team
      bonusforothers
      river
    ]
  ]

let variantesEn =
  Html.div [
    prop.children [
      Html.h1 [ prop.text "Variants"; prop.id "en/variants" ]
      teamEn
      bonusforothersEn
      riverEn
    ]
  ]

let boutiques =
  Html.div [
    prop.classes ["intro"]
    prop.children [
      Html.h1 [ prop.text "Les boutiques"; prop.id "boutiques" ]
      Html.p "Les boutiques ci-dessous nous ont fait confiance en participant comme vous à la campagne, vous avez la possibilité de voir avec eux s’ils sont ok pour vous réserver un exemplaire avec l’ensemble des bonus débloqués pendant la campagne\xa0:"
      Html.ul [
        boutique "BCD Jeux" "https://www.facebook.com/BCDJeux/"
        boutique "Le Troll à 2 Têtes" "https://www.facebook.com/Trolla2Tetes/"
        boutique "Esprit Jeu" "https://www.facebook.com/espritjeu/"
        boutique "Thylgames" "https://www.facebook.com/Thylgames-510835646046348/"
        boutique "Troll2jeux" "https://www.facebook.com/Troll2jeux/"
        boutique "Cinegoodies" "https://www.facebook.com/cinegoodiesleblog/"
        boutique "Le Gobelin" "https://www.facebook.com/LeGobelin.fr/"
      ]
    ]
  ]

let boutiquesEn =
  Html.div [
    prop.classes ["intro"]
    prop.children [
      Html.h1 [ prop.text "Game Stores"; prop.id "en/gamestores" ]
      Html.p "The following game stores trusted us by pledging like you during the Kickstarter campaign. You can contact them to check whether they can send you a box with all the bonus unlocked during the KS:"
      Html.ul [
        boutique "BCD Jeux" "https://www.facebook.com/BCDJeux/"
        boutique "Le Troll à 2 Têtes" "https://www.facebook.com/Trolla2Tetes/"
        boutique "Esprit Jeu" "https://www.facebook.com/espritjeu/"
        boutique "Thylgames" "https://www.facebook.com/Thylgames-510835646046348/"
        boutique "Troll2jeux" "https://www.facebook.com/Troll2jeux/"
        boutique "Cinegoodies" "https://www.facebook.com/cinegoodiesleblog/"
        boutique "Le Gobelin" "https://www.facebook.com/LeGobelin.fr/"
      ]
    ]
  ]

let montageFr =
  Html.div [
    prop.children [
      Html.h1 [ prop.text "Intstructions de montage"; prop.id "assembly" ]
      Html.p [
        prop.children [
         Html.text "Votre boite de Crazy Farmers contients des pieces en bois qui demandent un peu de montage:"
         Html.ul [
           Html.li [ prop.text "les clôtures" ]
           Html.li [ prop.text "Les tracteurs" ]
           Html.li [ prop.text "La vache folle" ]
           Html.li [ prop.text "Les granges (Super Nitro uniquement)" ]
           Html.li [ prop.text "Les bottes de foin (Super Nitro uniquement)" ]
           ]
         ]
        ]
      Html.h2 [ prop.text "Clôtures"]
      Html.p [
        prop.text "Pour les clôtures c'est simple, il suffit de les détacher de leur support:"
      ]
      Html.figure [
          Html.img [ prop.src "./img/assembly0.png"
                     prop.style [ style.width (length.em 20)] ]
        ]
      Html.h2 [ prop.text "Tracteurs"]
      Html.p [
        prop.children [
          Html.text "Détachez les deux moitiées du tracteur de leur support et utilisez le socle de la même couleur (celui qui n'est pas sur le support tient mieux). Mettez les deux moitiées de tracteur dos à dos en prenant soin à mettre les parties décorées à l'extérieur. "
          Html.text "Placez l'extrémité des deux pièces dans le socle et appuez fermement."
        ]
      ]
      Html.figure [
          Html.img [ prop.src "./img/assembly1.png"
                     prop.style [ style.width (length.em 20)] ]
          Html.img [ prop.src "./img/assembly2.png"
                     prop.style [ style.width (length.em 20)] ]
        ]
      Html.h2 [ prop.text "Vache folle"]
      Html.p [
        prop.children [
          Html.text "Procedez de même pour la vache folle en utilisant le socle en forme de goutte. Fait attention à placer la partie pointue de la forme vers l'avant. "
          Html.text "Celle-ci sert à indiquer clairement la direction de la vache folle dans le mode solo."
        ]
      ]
      Html.figure [
          Html.img [ prop.src "./img/assembly3.png"
                     prop.style [ style.width (length.em 20)] ]
        ]

      Html.h2 [ prop.text "Granges et Bottes de foin"]
      Html.p [
        prop.children [
          Html.text "Pour les granges, prenez une moitié avec une porte et une sans porte, ainsi qu'un socle. Pour les bottes de foin, les motifs des deux cotés sont identiques. "
          Html.text "Procedez comme pour les tracteurs en faisant bien attention à ce que les faces décorées soit visibles."
        ]
      ]
      Html.figure [
          Html.img [ prop.src "./img/assembly4.png"
                     prop.style [ style.width (length.em 20)] ]
          Html.img [ prop.src "./img/assembly5.png"
                     prop.style [ style.width (length.em 20)] ]
        ]
    ]
  ]

let montageEn =
  Html.div [
    prop.children [
      Html.h1 [ prop.text "Assembly instructions"; prop.id "en/assembly" ]
      Html.p [
        prop.children [
         Html.text "Your Crazy Farmers box contains wooden tokens that require some DIY:"
         Html.ul [
           Html.li [ prop.text "Fences" ]
           Html.li [ prop.text "Tractors" ]
           Html.li [ prop.text "Mad cow" ]
           Html.li [ prop.text "Barns (Super Nitro only)" ]
           Html.li [ prop.text "Hay bales (Super Nitro only)" ]
           ]
         ]
        ]
      Html.h2 [ prop.text "Fences"]
      Html.p [
        prop.text "For fences, you only have to detach them:"
      ]
      Html.figure [
          Html.img [ prop.src "./img/assembly0.png"
                     prop.style [ style.width (length.em 20)] ]
        ]
      Html.h2 [ prop.text "Tractors"]
      Html.p [
        prop.children [
          Html.text "Detach both halves of the tractor from their frame and use the base of the same color (the one that is not in the frame should fit better). Put the two halves of the tractor back to back and take care that the decorated sides remain visible. "
          Html.text "Put the extremity of the two pieces in the base and press firmly."
        ]
      ]
      Html.figure [
          Html.img [ prop.src "./img/assembly1.png"
                     prop.style [ style.width (length.em 20)] ]
          Html.img [ prop.src "./img/assembly2.png"
                     prop.style [ style.width (length.em 20)] ]
        ]
      Html.h2 [ prop.text "Mad Cow"]
      Html.p [
        prop.children [
          Html.text "Proceed for the mad cow as you did for the tractor, using the drop shaped base. Place the tip of the drop toward the head of the cow. "
          Html.text "It's used to indicate clearly the direction of the cow in the solo mode. "
          Html.i "You won't need the cardboard cow token if you use the wooden one."
        ]
      ]
      Html.figure [
          Html.img [ prop.src "./img/assembly3.png"
                     prop.style [ style.width (length.em 20)] ]
        ]

      Html.h2 [ prop.text "Barns and Hay bales"]
      Html.p [
        prop.children [
          Html.text "For barns, take an half with a door and one without, as well as a base. For hay bales, drawings are identical on both sides. "
          Html.text "Proceed like for tractors and take care to let decorated sides visible. "
          Html.i "You won't need the cardboard barns and hay bales if you use the wooden ones."
        ]
      ]
      Html.figure [
          Html.img [ prop.src "./img/assembly4.png"
                     prop.style [ style.width (length.em 20)] ]
          Html.img [ prop.src "./img/assembly5.png"
                     prop.style [ style.width (length.em 20)] ]
        ]
    ]
    
    
  ]
module prop =
  let frameborder (value: int) =
        prop.custom("frameborder", value)
  let allow (value: string) =
        prop.custom("allow", value)
  let allowfullscreen =
      prop.custom("allowfullscreen","")

let youtube url =
  Html.div [
      prop.className "video"
      prop.children [
        Html.div [
          prop.className "youtube"
          prop.children [
            Html.iframe [
              // prop.width 560.
              // prop.height 315.
              prop.src url
              prop.frameborder 0
              prop.allow "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              prop.allowfullscreen ] ] ] ] ]

let videos =
  Html.div [
    prop.classes ["intro"]
    prop.children [
      Html.h1 [ prop.text "Vidéos"]

      Html.h2 [ prop.text "Trailer"]
      Html.p ""
      youtube "https://www.youtube.com/embed/P0_UYCBJytw"

      Html.h2 [ prop.text "Règles de base"]
      Html.p "Vous n'aimez pas lire les règles, ou vous voulez juste vous assurer que vous avec bien compris\xa0?" 
      Html.p "Voici toutes les règles de base en 6'42\""
      youtube "https://www.youtube.com/embed/TEV-ssCFjtg"


      Html.h2 [ prop.text "Bonus de base"]
      Html.p "Dans cette vidéo on vous dit tout sur les bonus de base."
      youtube "https://www.youtube.com/embed/ytZSqPop-h0"

      Html.h2 [ prop.text "Jachère"]
      Html.p "Votre champ est coupé en plusieurs morceaux façon puzzle\xa0? Pas de panique, c'est une jachère."
      youtube "https://www.youtube.com/embed/gh9WXtQ9-Dk"

      Html.h2 [ prop.text "Mode solo"]
      Html.p [ Html.text "Aperçu du mode solo contre la vache folle. "
               Html.i "(Matériel Proto, règles finales)" ]
      youtube "https://www.youtube.com/embed/kQF0SveGmLo"
    ]
  ]

let videosEn =
  Html.div [
    prop.classes ["intro"]
    prop.children [
      Html.h1 [ prop.text "Videos" ]
      Html.h2 [ prop.text "Trailer"]
      youtube "https://www.youtube.com/embed/rKIPQbl7Ojk"
      Html.h2 [ prop.text "Basic Rules"]
      Html.p "You don't like to read the rules, or you'd just like to check you got it right?" 
      Html.p [ Html.text "Learn all the basic rules in 6'42\". "
               Html.i "(Fr / Activate subtitles)" ]
      youtube "https://www.youtube.com/embed/TEV-ssCFjtg"


      Html.h2 [ prop.text "Basic bonus cards"]
      Html.p [ Html.text "Everything you need to know about basic bonus cards. "
               Html.i "(Fr / Activate subtitles)" ]
      youtube "https://www.youtube.com/embed/ytZSqPop-h0"

      Html.h2 [ prop.text "Fallow land"]
      Html.p [ Html.text "Your field is shattered in several pieces, puzzle style? Don't panic, it's just a fallow land. "
               Html.i "(Fr / Activate subtitles)" ]
      youtube "https://www.youtube.com/embed/gh9WXtQ9-Dk"

      Html.h2 [ prop.text "Solo mode"]
      Html.p [ Html.text "Overview of the solo mode against the mad cow. "
               Html.i "(En / Prototype tokens, final rules)" ]
      youtube "https://www.youtube.com/embed/S-CRZTObWFs"
    ]
  ]
let root (content: ReactElement list) = 
    Html.main [
      Html.div [
          prop.className "content"
          prop.children content
      ]
    ]


type Msg = UrlChanged of string list


type State = { Lang : Lang; Page : Page }



let init() = 
  let lang, page = parsePage (Router.currentUrl())
  { Lang =  lang |> Option.defaultValue Fr
    Page = page |> Option.defaultValue Faq  }

let update (UrlChanged segments) state =
  let lang, page = parsePage segments
  let newLang =
    match lang with
    | Some lang -> { state with Lang = lang }
    | None -> state

  match page with
  | Some page -> { newLang with Page = page }
  | None -> newLang
  

let frIcon = Html.img [ prop.src "./img/fr.png" ]
let enIcon = Html.img [ prop.src "./img/en.png"]


let menuItem state (text: string) page =
  Html.div [
    Html.a [ 
      prop.href (pageLink state.Lang page)
      prop.text text
    ]
  ]
let render state dispatch =
  React.router [
        router.onUrlChanged (UrlChanged >> dispatch)
        router.children [
           Html.header [
             prop.className "closed"
             prop.children [
               Html.div [
                  prop.className "bars"
                  prop.onClick (fun e ->
                    let header= 
                      (document.getElementsByTagName "header").[0]
                    header.classList.toggle("closed") |> ignore
                  
                  )
                 ]
               Html.div [
                 match state.Lang with
                 | Fr ->
                   Html.nav [ prop.children [
                     menuItem state "FAQ" Faq
                     menuItem state "Vidéos" Videos
                     menuItem state "Variantes" Variants
                     menuItem state "Boutiques" GameStores
                     menuItem state "Montage" Assembly
                   ]]
                 | En ->
                    Html.nav [ prop.children [
                     menuItem state "FAQ" Faq
                     menuItem state "Videos" Videos
                     menuItem state "Variants" Variants
                     menuItem state "Game Stores" GameStores
                     menuItem state "Assembly" Assembly
                   ]]
               ]
               Html.div [
                  prop.className "lang"
                  prop.children [
                     match state.Lang with
                     | Fr -> 
                       frIcon
                       Html.a [ prop.href (pageLink En state.Page); prop.children [ enIcon ] ]
                     | En ->
                       Html.a [ prop.href (pageLink Fr state.Page); prop.children [frIcon]]
                       enIcon
                  ]
               ]
            ]
           ]


           root [
             match state.Lang, state.Page with
             | Fr, Faq ->
                  intro
                  section field
                  section fence
                  section move
                  section powerless
                  section concepts
                  section rare
                  section bonus
                  section crazyBonus
                  section cow
             | Fr, Videos -> videos
             | Fr, Variants -> variantes
             | Fr, GameStores -> boutiques
             | Fr, Assembly -> montageFr
             | En, Faq ->
                  introEn
                  section fieldEn
                  section fenceEn
                  section moveEn
                  section powerlessEn
                  section conceptsEn
                  section rareEn
                  section bonusEn
                  section crazyBonusEn
                  section cowEn
             | En, Videos -> videosEn
             | En, Variants -> variantesEn
             | En, GameStores -> boutiquesEn
             | En, Assembly -> montageEn
          ]
        ]
    ]
 


Program.mkSimple init update render
|> Program.withReactSynchronous "root"
|> Program.run
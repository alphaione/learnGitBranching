exports.level = {
  "goalTreeString": "%7B%22branches%22%3A%7B%22main%22%3A%7B%22target%22%3A%22C3%27%22%2C%22id%22%3A%22main%22%2C%22remoteTrackingBranchID%22%3A%22o/main%22%2C%22localBranchesThatTrackThis%22%3Anull%7D%2C%22o/main%22%3A%7B%22target%22%3A%22C3%27%22%2C%22id%22%3A%22o/main%22%2C%22remoteTrackingBranchID%22%3Anull%2C%22localBranchesThatTrackThis%22%3A%5B%22main%22%5D%7D%7D%2C%22commits%22%3A%7B%22C0%22%3A%7B%22parents%22%3A%5B%5D%2C%22id%22%3A%22C0%22%2C%22rootCommit%22%3Atrue%7D%2C%22C1%22%3A%7B%22parents%22%3A%5B%22C0%22%5D%2C%22id%22%3A%22C1%22%7D%2C%22C3%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C3%22%7D%2C%22C2%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C2%22%7D%2C%22C3%27%22%3A%7B%22parents%22%3A%5B%22C2%22%5D%2C%22id%22%3A%22C3%27%22%7D%7D%2C%22HEAD%22%3A%7B%22target%22%3A%22main%22%2C%22id%22%3A%22HEAD%22%7D%2C%22originTree%22%3A%7B%22branches%22%3A%7B%22main%22%3A%7B%22target%22%3A%22C3%27%22%2C%22id%22%3A%22main%22%2C%22remoteTrackingBranchID%22%3Anull%2C%22localBranchesThatTrackThis%22%3Anull%7D%7D%2C%22commits%22%3A%7B%22C0%22%3A%7B%22parents%22%3A%5B%5D%2C%22id%22%3A%22C0%22%2C%22rootCommit%22%3Atrue%7D%2C%22C1%22%3A%7B%22parents%22%3A%5B%22C0%22%5D%2C%22id%22%3A%22C1%22%7D%2C%22C2%22%3A%7B%22parents%22%3A%5B%22C1%22%5D%2C%22id%22%3A%22C2%22%7D%2C%22C3%27%22%3A%7B%22parents%22%3A%5B%22C2%22%5D%2C%22id%22%3A%22C3%27%22%7D%7D%2C%22HEAD%22%3A%7B%22target%22%3A%22main%22%2C%22id%22%3A%22HEAD%22%7D%7D%7D",
  "solutionCommand": "git clone;git fakeTeamwork;git commit;git pull --rebase;git push",
  "startTree": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\",\"remoteTrackingBranchID\":null,\"localBranchesThatTrackThis\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"}},\"HEAD\":{\"target\":\"main\",\"id\":\"HEAD\"}}",
  "name": {
    "en_US": "Diverged History",
    "zh_CN": "偏离的提交历史",
    "zh_TW": "Diverged history",
    "es_AR": "Historia divergente",
    "es_ES": "Historia divergente",
    "pt_BR": "Histórico divergente",
    "gl": "Histórico diverxente",
    "de_DE": "Abweichende Historie",
    "fr_FR": "Historique divergent",
    "ja": "履歴の分岐",
    "ro": "Istorie divergentă",
    "ru_RU": "Расхождение в истории",
    "uk": "Розбіжності в історії",
    "ko": "엇갈린 히스토리",
    "vi": "Dị biệt lịch sử",
    "sl_SI": "Razdeljena Zgodovina",
    "pl": "Rozbieżna  historia",
    "it_IT": "Storico divergente",
    "tr_TR": "Sapmış Tarihçe"
  },
  "hint": {
    "en_US": "Check out the ordering from the goal visualization",
    "zh_CN": "按照目标中的提交树的顺序进行切换",
    "zh_TW": "確認視覺化的目標中的順序",
    "es_AR": "Prestá atención al orden del objetivo",
    "es_ES": "Presta atención al orden del objetivo",
    "pt_BR": "Preste atenção na ordem da visualização do objetivo",
    "gl": "Presta atención ó orixe do obxectivo",
    "de_DE": "Beachte die Reihenfolge in der Zieldarstellung",
    "ja": "ゴールのツリーの順番を参考にすること",
    "fr_FR": "Regardez l'ordre dans la fenêtre de visualisation d'objectif",
    "ro": "Verifică ordinea din vizualizarea obiectivului",
    "ru_RU": "проверьте сортировку в визуализации цели",
    "uk": "перевірте порядок в візуалізації цілі",
    "ko": "순서는 goal을 참고하세요",
    "vi": "Kiểm tra kỹ thứ tự trên mô hình mục tiêu",
    "sl_SI": "Preveri vrstni red iz ciljne vizualizacije.",
    "pl": "Przyjrzyj się kolejności na wizualizacji celu",
    "it_IT": "Controlla l'ordinamento dalla schermata dell'obiettivo",
    "tr_TR": "Hedef görselleştirmesindeki sıralamaya dikkat edin"
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Diverged Work",
              "",
              "So far we've seen how to `pull` down commits from others and how to `push` up our own changes. It seems pretty simple, so how can people get so confused?",
              "",
              "The difficulty comes in when the history of the repository *diverges*. Before discussing the details of this, let's see an example...",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Imagine you clone a repository on Monday and start dabbling on a side feature. By Friday you are ready to publish your feature -- but oh no! Your coworkers have written a bunch of code during the week that's made your feature out of date (and obsolete). They've also published these commits to the shared remote repository, so now *your* work is based on an *old* version of the project that's no longer relevant.",
              "",
              "In this case, the command `git push` is ambiguous. If you run `git push`, should git change the remote repository back to what it was on Monday? Should it try to add your code in while not removing the new code? Or should it totally ignore your changes since they are totally out of date?",
              "",
              "Because there is so much ambiguity in this situation (where history has diverged), git doesn't allow you to `push` your changes. It actually forces you to incorporate the latest state of the remote before being able to share your work."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "So much talking! Let's see this situation in action."
            ],
            "afterMarkdowns": [
              "See? Nothing happened because the command fails. `git push` fails because your most recent commit `C3` is based off of the remote at `C1`. The remote has since been updated to `C2` though, so git rejects your push."
            ],
            "command": "git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "How do you resolve this situation? It's easy, all you need to do is base your work off of the most recent version of the remote branch.",
              "",
              "There are a few ways to do this, but the most straightforward is to move your work via rebasing. Let's go ahead and see what that looks like."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Now if we rebase before pushing instead..."
            ],
            "afterMarkdowns": [
              "Boom! We updated our local representation of the remote with `git fetch`, rebased our work to reflect the new changes in the remote, and then pushed them with `git push`."
            ],
            "command": "git fetch; git rebase o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Are there other ways to update my work when the remote repository has been updated? Of course! Let's check out the same thing but with `merge` instead.",
              "",
              "Although `git merge` doesn't move your work (and instead just creates a merge commit), it's a way to tell git that you have incorporated all the changes from the remote. This is because the remote branch is now an *ancestor* of your own branch, meaning your commit reflects all commits in the remote branch.",
              "",
              "Lets see this demonstrated..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Now if we merge instead of rebasing..."
            ],
            "afterMarkdowns": [
              "Boom! We updated our local representation of the remote with `git fetch`, *merged* the new work into our work (to reflect the new changes in the remote), and then pushed them with `git push`."
            ],
            "command": "git fetch; git merge o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Awesome! Is there any way I can do this without typing so many commands?",
              "",
              "Of course -- you already know `git pull` is just shorthand for a fetch and a merge. Conveniently enough, `git pull --rebase` is shorthand for a fetch and a rebase!",
              "",
              "Let's see these shorthand commands at work."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "First with `--rebase`..."
            ],
            "afterMarkdowns": [
              "Same as before! Just a lot shorter."
            ],
            "command": "git pull --rebase; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "And now with regular `pull`."
            ],
            "afterMarkdowns": [
              "Again, exact same as before!"
            ],
            "command": "git pull; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "This workflow of fetching, rebase/merging, and pushing is quite common. In future lessons we will examine more complicated versions of these workflows, but for now let's try this out.",
              "",
              "In order to solve this level, take the following steps:",
              "",
              "* Clone your repo",
              "* Fake some teamwork (1 commit)",
              "* Commit some work yourself (1 commit)",
              "* Publish your work via *rebasing*"
            ]
          }
        }
      ]
    },
    "fr_FR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Travail divergent",
              "",
              "Jusqu'à présent nous avons vu comment rapatrier (`pull`) les commits de nos collaborateurs et comment envoyer les nôtres (`push`). Cela a l'air simple, alors comment se fait-il que certains puissent trouver le sujet aussi confus ?",
              "",
              "La difficulté apparaît lorsque l'historique du dépôt *diverge*. Avant d'aborder les détails de cette situation, voyons un exemple...",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Imaginez que vous clonez un dépôt le lundi et commencez à bidouiller une nouvelle fonctionnalité. Le vendredi vous êtes prêt à publier votre fonctionnalité -- mais oh non ! Vos collègues ont écrit une floppée de code durant la semaine, ce qui rend votre fonctionnalité désuète (et obsolète). Ils ont aussi publié sur le dépôt distant partagé, donc maintenant *votre* travail est basé sur une *vieille* version du projet qui n'est plus viable.",
              "",
              "Dans ce cas, la commande `git push` est ambiguë. Si vous exécutez `git push`, Git devrait-il remettre le dépôt distant tel qu'il était lundi ? Doit-il essayer d'ajouter votre code sans supprimer le nouveau code ? Ou doit-il totalement ignorer vos changements puisqu'ils ne sont plus à jour ?",
              "",
              "Comme il y a trop d'ambiguïté dans cette situation (où l'historique a divergé), Git ne vous autorise pas à faire un `push` de vos changements. Cela vous force en fait à rapatrier chez vous le dernier état du dépôt distant avant de pouvoir partager votre travail."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Assez parlé ! Observons cette situation en action :"
            ],
            "afterMarkdowns": [
              "Vous voyez ? Rien ne s'est produit car la commande a échoué. `git push` a échoué car votre commit le plus récent `C3` est basé sur `C1` sur le dépôt distant. Le dépôt distant a été mis à jour depuis avec `C2`, donc Git rejette votre push."
            ],
            "command": "git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Comment allez-vous résoudre cette situation ? C'est facile, tout ce que vous avez à faire est de baser votre travail sur la dernière version de la branche distante.",
              "",
              "Il y a plusieurs façons de faire cela, mais la plus directe est de déplacer votre travail avec rebase. Regardons à quoi cela ressemble."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Maintenant si nous rebasons avant de push..."
            ],
            "afterMarkdowns": [
              "Boum ! Nous avons mis à jour notre représentation locale du dépôt avec `git fetch`, rebasé notre travail pour refléter les nouveaux changements, et enfin les avons envoyés avec `git push`."
            ],
            "command": "git fetch; git rebase o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Existe-t-il d'autres façons de mettre à jour notre travail quand le répertoire distant a été mis à jour ? Bien sûr ! Faisons la même chose, mais cette fois avec `merge`.",
              "",
              "Bien que `git merge` ne déplace pas votre travail (et crée à la place un commit de fusion), cette commande est également une façon de dire à Git que vous avez incorporé tous les changements du dépôt distant. En effet la branche distante est maintenant une *ancêtre* de votre propre branche, ce qui signifie que vos commits contiennent tous les changements faits sur la branche distante.",
              "",
              "Voyons une démonstration..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Maintenant si nous mergeons au lieu de rebaser..."
            ],
            "afterMarkdowns": [
              "Boum ! Nous avons mis à jour notre représentation locale du dépôt distant avec `git fetch`, *fusionné* les nouveaux commits dans notre copie de travail (pour refléter les nouveaux changements du dépôt distant), et les avons ensuite envoyés avec `git push`."
            ],
            "command": "git fetch; git merge o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Impressionnant ! Existe-t-il une façon de faire tout cela sans taper autant de commandes ?",
              "",
              "Bien sûr : vous savez déjà que `git pull` est simplement un raccourci pour un fetch puis un merge. De manière assez pratique, `git pull --rebase` est un raccourci pour un fetch puis un rebase !",
              "",
              "Voyons ce raccourci au travail."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Premièrement avec  `--rebase`..."
            ],
            "afterMarkdowns": [
              "Comme avant ! Juste un peu plus court."
            ],
            "command": "git pull --rebase; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Et maintenant avec un `pull` normal :"
            ],
            "afterMarkdowns": [
              "Encore une fois, c'est exactement la même chose qu'auparavant !"
            ],
            "command": "git pull; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Cette succession de fetch, rebase/merge, et push est assez commune. Dans les leçons suivantes, nous explorerons cette façon d'enchaîner les commandes dans des conditions plus complexes, mais pour le moment appliquons ce principe de façon classique.",
              "",
              "Pour finir ce niveau, réalisez les étapes suivantes :",
              "",
              "* Clonez votre dépôt",
              "* Simulez un travail d'équipe (1 commit)",
              "* Commitez un peu de votre travail (1 commit)",
              "* Publiez votre travail avec *rebase*"
            ]
          }
        }
      ]
    },
    "es_AR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Trabajo divergente",
              "",
              "Hasta acá vimos cómo pullear commits de otros y cómo pushear los nuestros. Parece bastante simple, así que ¿cómo puede confundirse tanto la gente?",
              "",
              "La dificultad viene cuando la historia de los repositorios *diverge*. Antes de entrar en detalles, veamos un ejemplo...",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Imaginate que clonás un repositorio el lunes y empezás a desarrollar algo. Para el viernes tenés todo listo para publicar tu trabajo, pero, ¡oh, oh! Tus colegas también escribieron código durante la semana, haciendo que tu trabajo quede desactualizado (y obsoleto). Además, publicaron esos commits en el repositorio remoto, así que ahora *tu* trabajo está basado en una versión *vieja* del proyecto, que ya no le interesa a nadie.",
              "",
              "En este caso, el comando `git push` es ambiguo. Si corrés `git push`, ¿git debería cambiar el repositorio a como estaba el lunes? ¿Debería tratar de agregar tu código sin eliminar el código nuevo? ¿O debería ignorar completamente tus cambios porque están desactualizados?",
              "",
              "Como hay tanta ambiguedad en esta situación (en que la historia divirgió), git no te permite pushear tus cambios. En cambio, te fuerza a integrar el último estado del repositorio remoto antes de poder compartir tu trabajo."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "¡Demasiada charla, veámoslo en acción!"
            ],
            "afterMarkdowns": [
              "¿Ves? No pasó nada, porque el comando falla. `git push` falla porque `C3`, tu commit más reciente, está basado en el remoto sobre `C1`. El remoto fue actualizado a `C2` desde entonces, por lo que git rechaza tu push."
            ],
            "command": "git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "¿Cómo resolvés esta situación? Es fácil, todo lo que tenés que hacer es basar tu trabajo en la versión más reciente de la rama remota.",
              "",
              "Hay un par de maneras de hacer esto, pero la más simple es mover tu trabajo haciendo un rebase. Probémoslo a ver cómo se ve."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Ahora, si mejor rebaseamos antes de pushear..."
            ],
            "afterMarkdowns": [
              "¡Boom! Actualizamos nuestra representación local del remoto con `git fetch`, rebaseamos nuestro trabajo para reflejar los nuevos cambios del remoto, y después los pusheamos con `git push`."
            ],
            "command": "git fetch; git rebase o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "¿Hay otra manera de actualizar mi trabajo si actualizaron el repositorio remoto? ¡Claro que sí! Veamos cómo hacer lo mismo pero usando `merge`.",
              "",
              "Por más que `git merge` no mueva tu trabajo (sólo crea un commit de merge), es un modo de decirle a git que integraste todos los cambios del remoto. Esto es porque ahora una rama remota pasó a ser un *ancestro* de tu propia rama, lo que significa que tu commit refleja los cambios de todos los commits de la rama remota.",
              "",
              "Veamos una muestra..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Si en lugar de rebasear hacemos un merge..."
            ],
            "afterMarkdowns": [
              "¡Boom! Actualizamos nuestra representación local del remoto usando `git fetch`, *mergeamos* el nuevo trabajo junto con el nuestro (para reflejar los nuevos cambios en el remoto), y después los pusheamos usando `git push`."
            ],
            "command": "git fetch; git merge o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "¡Asombroso! ¿Hay forma de hacer esto sin tipear tantos comandos?",
              "",
              "¡Claro que sí! Ya sabés que `git pull` es simplemente un atajo para hacer fetch y merge. Convenientemente, ¡`git pull --rebase` es un atajo para hacer fetch y rebase!",
              "",
              "Veamos estos atajos funcionando."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Primero con `--rebase`..."
            ],
            "afterMarkdowns": [
              "¡Igual que antes! Sólo que bastante más corto."
            ],
            "command": "git pull --rebase; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Y ahora un `pull` común"
            ],
            "afterMarkdowns": [
              "Otra vez, ¡exactamente lo mismo que antes!"
            ],
            "command": "git pull; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Toda esta movida de fetchear, rebasear/mergear y pushear es bastante común. En lecciones futuras vamos a ver formas más complejas de estos flujos de trabajo, pero por ahora probemos esto que vimos.",
              "",
              "Para resolver este nivel, hacé lo siguiente:",
              "",
              "* Cloná tu repositorio",
              "* Simulá algo de trabajo de un colega (1 commit)",
              "* Commiteá algo de trabajo propio (1 commit)",
              "* Publicá tu trabajo *rebaseando*"
            ]
          }
        }
      ]
    },
    "es_ES": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Trabajo divergente",
              "",
              "Hasta ahora hemos visto cómo hacer pull a commits de otros y cómo hacer push a los nuestros. Parece bastante simple, así que ¿cómo puede confundirse tanto la gente?",
              "",
              "La dificultad viene cuando la historia de los repositorios *diverge*. Antes de entrar en detalles, veamos un ejemplo...",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Imagínate que clonas un repositorio el lunes y empiezas a desarrollar algo. Para el viernes ya estás listo para publicar tu trabajo, pero, ¡vaya! Tus colegas también han estado escribiendo código durante la semana, haciendo que tu trabajo quede desactualizado (y obsoleto). Además, ellos publicaron esos commits en el repositorio remoto, así que ahora *tu* trabajo está basado en una versión *vieja* del proyecto, que ya no le interesa a nadie.",
              "",
              "En este caso, el comando `git push` es ambiguo. Si ejecutas `git push`, ¿git debería cambiar el repositorio a como estaba el lunes? ¿Debería tratar de agregar tu código sin eliminar el código nuevo? ¿O debería ignorar completamente tus cambios porque están desactualizados?",
              "",
              "Como hay tanta ambiguedad en esta situación (en la que la historia divirgió), git no te permite hacer push de tus cambios. En cambio, te fuerza a integrar el último estado del repositorio remoto antes de poder compartir tu trabajo."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "¡Demasiada charla, veámoslo en acción!"
            ],
            "afterMarkdowns": [
              "¿Ves? No pasó nada, porque el comando falla. `git push` falla porque `C3`, tu commit más reciente, está basado en el remoto sobre `C1`. El remoto fue actualizado a `C2` desde entonces, por lo que git rechaza tu push."
            ],
            "command": "git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "¿Cómo puedes resolver esta situación? Es fácil, todo lo que tienes que hacer es basar tu trabajo en la versión más reciente de la rama remota.",
              "",
              "Hay un par de maneras de hacer esto, pero la más simple es mover tu trabajo haciendo un rebase. Probémoslo a ver cómo se ve."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Ahora, si hacemos rebase antes de hacer push..."
            ],
            "afterMarkdowns": [
              "¡Zas! Actualizamos nuestra representación local del remoto con `git fetch`, hacemos rebase de nuestro trabajo para reflejar los nuevos cambios del remoto, y después los subimos con `git push`."
            ],
            "command": "git fetch; git rebase o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "¿Hay otra manera de actualizar mi trabajo si actualizaron el repositorio remoto? ¡Claro que sí! Veamos cómo hacer lo mismo pero usando `merge`.",
              "",
              "Por más que `git merge` no mueva tu trabajo (sólo crea un commit de merge), es un modo de decirle a git que integraste todos los cambios del remoto. Esto es porque ahora una rama remota pasó a ser un *ancestro* de tu propia rama, lo que significa que tu commit refleja los cambios de todos los commits de la rama remota.",
              "",
              "Veamos una muestra..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Si en lugar de hacer rebase hacemos un merge..."
            ],
            "afterMarkdowns": [
              "¡Zas! Actualizamos nuestra representación local del remoto usando `git fetch`, *mergeamos* el nuevo trabajo junto con el nuestro (para reflejar los nuevos cambios en el remoto), y después los subimos usando `git push`."
            ],
            "command": "git fetch; git merge o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "¡Asombroso! ¿Hay forma de hacer esto sin escribir tantos comandos?",
              "",
              "¡Claro que sí! Ya sabes que `git pull` es simplemente un atajo para hacer fetch y merge. Convenientemente, ¡`git pull --rebase` es un atajo para hacer fetch y rebase!",
              "",
              "Veamos estos atajos funcionando."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Primero con `--rebase`..."
            ],
            "afterMarkdowns": [
              "¡Igual que antes! Sólo que bastante más corto."
            ],
            "command": "git pull --rebase; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Y ahora un `pull` común"
            ],
            "afterMarkdowns": [
              "Otra vez, ¡exactamente lo mismo que antes!"
            ],
            "command": "git pull; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Toda este tinglado de hacer fetch, rebase/merge y push es bastante común. En lecciones futuras vamos a ver formas más complejas de estos flujos de trabajo, pero por ahora vamos a probar esto que acabamos de ver.",
              "",
              "Para resolver este nivel, haz lo siguiente:",
              "",
              "* Clona tu repositorio",
              "* Simula algo de trabajo de un colega (1 commit)",
              "* Haz commit de algún cambio tuyo (1 commit)",
              "* Publica tu trabajo *rebaseando*"
            ]
          }
        }
      ]
    },
    "pt_BR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Histórico Divergente",
              "",
              "Até o momento vimos como fazer `pull` de commits dos outros e como fazer `push` de nossas próprias mudanças. Parece ser tão simples, como será que as pessoas ficam tão confusas?",
              "",
              "A dificuldade aparece quando o histórico do repositório *diverge*. Antes de discutir os detalhes disso, vejamos um exemplo...",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Imagine que você clonou um repositório na segunda-feira e começou a trabalhar em uma funcionalidade nova. Na sexta-feira você está pronto para publicar a funcionalidade -- mas, ah não! Seus colegas escreveram um bocado de código durante a semana, tornando a sua funcionalidade obsoleta. Eles também publicaram esses commits no repositório remoto que vocês compartilham, então agora o *seu* trabalho é baseado em uma versão *antiga* do projeto, que não é mais relevante.",
              "",
              "Neste caso, o comando `git push` é ambíguo. Se você executar `git push`, será que o Git deveria tratar o repositório remoto como se ele ainda estivesse no estado da segunda-feira? Será que ele deveria tentar adicionar seu código dentro do repositório sem tentar remover o código novo? Ou será que ele deveria simplesmente ignorar suas mudanças totalmente, já que elas estão obsoletas?",
              "",
              "Devido à grande ambiguidade que surge neste tipo de situação (quando a história divergiu), o Git não permite que você faça `push` das suas mudanças. Ele, de fato, força você a incorporar o último estado do repositório remoto antes de conseguir compartilhar o seu trabalho."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Chega de conversa! Vejamos essa situação na prática."
            ],
            "afterMarkdowns": [
              "Viu? Nada aconteceu porque o comando falhou. O `git push` falha porque o commit mais recente (`C3`) é baseado no remoto em `C1`. Como o remoto foi atualizado no meio tempo, o Git rejeita o push."
            ],
            "command": "git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Como resolver essa situação? É fácil, tudo que você precisa fazer é basear seu trabalho na versão mais recente do ramo remoto.",
              "",
              "Existem algumas maneiras de fazer isso, mas a mais direta é mover o seu trabalho usando rebase. Vamos em frente, ver como isso é feito."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Agora se nós fizermos um rebase antes do push..."
            ],
            "afterMarkdowns": [
              "Boom! Nós atualizamos a representação local do repositório remoto com `git fetch`, fizemos rebase do nosso trabalho para refletir as novas mudanças no repositório remoto, e então enviamos nossas mudanças com `git push`."
            ],
            "command": "git fetch; git rebase o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Será que existem outras formas de compartilhar meu trabalho quando o repositório remoto tiver sido atualizado? Claro! Vamos fazer a mesma tarefa usando `merge` em vez de `rebase`.",
              "",
              "Embora o `git merge` não mova o seu trabalho (em vez disso, ele cria um commit de merge), ele é uma forma de contar ao Git que você incorporou todas as mudanças do repositório remoto. Isso acontece porque o ramo remoto passa a ser um *ancestral* do seu próprio ramo, significando que o seu commit reflete todos os commits contidos no ramo remoto.",
              "",
              "Vejamos uma demonstração..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Agora se fizermos merge em vez de rebase ..."
            ],
            "afterMarkdowns": [
              "Boom! Atualizamos nossa representação local do repositório remoto com `git fetch`, fizemos *merge* do novo trabalho com o nosso (para refletir as novas mudanças no repositório remoto), e então fizemos push deles com `git push`."
            ],
            "command": "git fetch; git merge o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Incrível! Existe alguma forma de fazer isso sem digitar tantos comandos?",
              "",
              "É claro -- você já conhece o `git pull` e ele é simplesmente um atalho para um fetch e um merge. Convenientemente, entretanto, o comando `git pull --rebase` é uma abreviação para um fetch e um rebase!",
              "",
              "Vejamos esses dois comandos em ação."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Primeiro com `--rebase`..."
            ],
            "afterMarkdowns": [
              "Mesma coisa que antes! Porém muito mais curto."
            ],
            "command": "git pull --rebase; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "E agora com o `pull` normal."
            ],
            "afterMarkdowns": [
              "De novo, exatamente como antes!"
            ],
            "command": "git pull; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Esse fluxo de trabalho de fazer fetch, rebase/merge, e push é bastante comum. Em lições futuras vamos examinar versões mais complicadas desses fluxos de trabalho, mas por enquanto vamos tentar o seguinte.",
              "",
              "Para resolver este nível, faça o seguinte:",
              "",
              "* Clone o repositório",
              "* Simule trabalho de seus colegas (1 commit)",
              "* Faça um commit seu (1 commit)",
              "* Publique seu trabalho usando *rebase*"
            ]
          }
        }
      ]
    },
    "gl": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Traballo diverxente",
              "",
              "Ata agora vimos cómo descargar e mesturar os commits de outros e como empurrar os nosos. Parece bastante sinxelo, así que ¿cómo pode confundirse tanto a xente?",
              "",
              "A dificultade ven cando a historia dos repositorios *diverxe*. Antes de entrar nos detalles, vexamos un examplo...",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Imaxínate que clonas un repositorio o luns e comezas a desenvolver algo. Para o venres, xa estás listo para publicar o teu traballo, pero, ¡oh, oh! Os teus colegas tamén fixeron código durante a semana, facendo que o teu traballo quede desactualizado (e obsoleto). Ademáis, eles publicaron eses commits no repositorio remoto, así que agora o *teu* traballo está baseado nunha versión *vella* do proxecto, que xa non lle interesa a ninguén.",
              "",
              "Neste caso, o comando `git push` é ambiguo. Se executas `git push`, ¿git debería mudar o repositorio para como estaba o luns? ¿Deberías arranxar o teu código sen eliminar o código novo? ¿Ou debería ignorar completamente os teus cambio porque xa están desactualizados?",
              "",
              "Como hai tanta ambiguedade nesta situación (na que a historia diverxeu), git non che permite empurrar os teus cambios. En cambio, fórzate a integrar o último estado do respositorio remoto antes de poder compartir o teu traballo."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "¡Demasiada charla, vexámolo en acción!"
            ],
            "afterMarkdowns": [
              "¿Ves? Non pasou nada, porque o comando falla. `git push` falla porque `C3`, o teu commit máis recente, está baseado no remoto sobre `C1`. O remoto foi actualizado a `C2` dende entonces, polo que git rechaza o teu push."
            ],
            "command": "git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "¿Cómo resolves esta situación? É sinxelo, todo o que tes que facer é basear o teu traballo na versión máis recente da rama remota.",
              "",
              "Hai un par de formas de facer esto, pero a máis sinxela é mover o teu traballo facendo un rebase. Probémolo a ver  cómo se ve."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Agora, se facemos rebase antes de empurrar..."
            ],
            "afterMarkdowns": [
              "¡Boom! Actualizamos a nosa representación local do remoto con `git fetch`, rebasamos o noso traballo para reflexar os novos cambios do remoto, e despois os empurramos con `git push`."
            ],
            "command": "git fetch; git rebase o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "¿Hai outra forma de actualizar o meu traballo se actualizaran o repositorio remoto? ¡Pois claro! Vexamos cómo facer o mesmo pero empregando `merge`.",
              "",
              "Por máis que `git merge` non mova o teu traballo (só crea un commit de merge), é un modo de decirlle a git que integrase tódolos cambios do remoto. Esto é porque agora unha rama remota pasou a ser un *ancestro* da tua propia rama, o que significa que o teu commit reflexa os cambios de tódolos commits da rama remota.",
              "",
              "Vexamos unha mostra..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Si no lugar de rebasar facemos un merge..."
            ],
            "afterMarkdowns": [
              "¡Boom! Actualizamos a nosa representación local do remoto usando `git fetch`, *mesturamos* ou *mergeamos* o novo traballo xunto co noso (para reflexar os novos cambios no remoto), e despois os empurramos empregando `git push`."
            ],
            "command": "git fetch; git merge o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "¡Asombroso! ¿Hai forma de facer esto sen escreber tantos comandos?",
              "",
              "¡Claro que sí! Xa sabes que `git pull` é sinxelamente un atallo para facer fetch e merge. Ademáis, ¡`git pull --rebase` é un atallo para facer fetch e rebase!",
              "",
              "Vexamos estos atallos funcionando."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Primeiro con `--rebase`..."
            ],
            "afterMarkdowns": [
              "¡Igual que antes! Só que máis corto."
            ],
            "command": "git pull --rebase; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "E agora un `pull` común"
            ],
            "afterMarkdowns": [
              "Outra vez, ¡exactamente o mesmo que antes!"
            ],
            "command": "git pull; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Toda esta movida de fetchear, rebasear/mergear e pushear é bastante común. Nas seguintes leccións imos ver formas máis complexas de estes fluxos de traballo, pero por agora probemos o que vimos.",
              "",
              "Para resolver este nivel, fai o siguiente:",
              "",
              "* Clona o teu repositorio",
              "* Simula algo de trabajo dun colega (1 commit)",
              "* Commitea algo de traballo propio (1 commit)",
              "* Publica o teu traballo *rebasando*"
            ]
          }
        }
      ]
    },
    "zh_TW": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Diverged Work",
              "",
              "到目前為止我們已經知道如何 `pull` 其他人所送的 commit，而且也知道如何 `push` 我們自己的 commit，感覺很簡單，但是為什麼有人看起來很困惑？",
              "",
              "當 repo 的歷史紀錄是 *diverge（branch 走向不同）* 的狀態時就會很棘手，在討論這個之前，讓我們先來看一個例子...",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "想像一下你在星期一的時候 clone 了一個 repo，並且開始在設計一個功能，在星期五的時候你準備好要發佈你的新功能，但是非常不幸地，你的同事已經寫了一連串的程式碼並且已經將 commit 發佈到 remote，所以現在*你的*進度是在一個比較*舊*的版本的後面（如果與 remote 比較的話啦！）。",
              "",
              "在這種情況底下，使用 `git push` 會有問題，如果你使用 `git push`，那麼 git 應該要把 remote 退回到星期一的狀態？它應該要把你所寫好的程式碼一起更新進去，同時不會影響你的同事寫好的程式碼？或者是他應該要因為版本比較舊而完全忽略你的程式碼？",
              "",
              "因為在這種情況下會很麻煩（當 git 歷史紀錄被 diverge 了），所以 git 不會允許你 `push` 你的 commit。在你上傳你的 commit 之前，它實際上會先強迫你先跟 remote 同步。"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "講太多了啦！讓我們實際看一下這個情況。"
            ],
            "afterMarkdowns": [
              "看到了沒？因為指令失敗了，所以沒有任何事情發生。 `git push` 失敗的原因是因為你最近的 commit `C3` 是在 `C1` 的後面，但是 remote 那邊是 `C2` 在 `C1` 的後面，所以 git 才會拒絕你的 push。"
            ],
            "command": "git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "你要如何解決這種情況？很簡單，你只需要把 `C3` 接在 remote 最新的版本 `C2` 的後面就可以了。",
              "",
              "有一些方法可以做到，但是最直接的方式是用 rebase，我們來做看看。"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "在我們 push 之前，先來做 rebase..."
            ],
            "afterMarkdowns": [
              "看吧！我們利用 `git fetch` 下載了 remote 上面的 commit，並且 rebase 我們的 commit，使得我們的 commit 可以接在 remote 上面最新的版本的後面，接著透過 `git push` 就可以上傳更新了。"
            ],
            "command": "git fetch; git rebase o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "在 remote 已經率先更新之後，還有沒有其它方法可以上傳我們的 commit？當然有阿！我們這次利用 `merge` 來做看看！",
              "",
              "雖然 `git merge` 並不會去移動你的 commit（反而會產生一個 merge commit），這是一個告訴 git 你已經下載了 remote 上面的 commit 並且在 local repo 中已經做完 merge，而因為 remote branch 上的最新的 commit 現在已經是 merge commit 的一個 *ancestor*，這就表示你的 commit 已經包含了在 remote branch 上的所有 commit。",
              "",
              "讓我們來看一下這種情況..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "現在假設我們不是用 rebase，而是用 merge..."
            ],
            "afterMarkdowns": [
              "看吧！我們藉由 `git fetch` 把 remote 上的 commit 下載下來，並且 *merged* 該 commit 到我們目前的 branch（這樣就表示我們產生的 merge commit 有包含了 remote　上的 commit），接著再透過 `git push` 上傳到 remote。"
            ],
            "command": "git fetch; git merge o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "太棒了! 有沒有其它可以不用打這麼多指令的方法？",
              "",
              "當然有阿！你已經知道 `git pull` 就是表示一個 fetch 跟一個 merge。 有一個指令非常方便，那就是 `git pull --rebase`，它表示的是一個 fetch 以及一個 rebase。",
              "",
              "我們來看如何使用這個簡化後的指令。"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "首先 `--rebase`..."
            ],
            "afterMarkdowns": [
              "跟之前一樣！只是少打了很多指令。"
            ],
            "command": "git pull --rebase; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "現在用一般的 `pull`"
            ],
            "afterMarkdowns": [
              "又來了，剛好跟之前的一樣！"
            ],
            "command": "git pull; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "fetch，rebase/merge，以及 push 的流程是幾乎一樣的。在之後的教學中我們會看到比這些流程更複雜的版本。但是現在讓我們先牛刀小試一下。",
              "",
              "為了要完成這一關，請按照下面的步驟：",
              "",
              "* clone 你的 repo",
              "* 假裝送一個 commit 給 remote",
              "* 送一個 commit 給 local repo",
              "* 透過 *rebase* 送自己的 commit"
            ]
          }
        }
      ]
    },
    "zh_CN": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 偏离的工作",
              "",
              "现在我们已经知道了如何从其它地方 `pull` 提交记录，以及如何 `push` 我们自己的变更。看起来似乎没什么难度，但是为何还会让人们如此困惑呢？",
              "",
              "困难来自于远程库提交历史的**偏离**。在讨论这个问题的细节前，我们先来看一个例子……",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "假设你周一克隆了一个仓库，然后开始研发某个新功能。到周五时，你新功能开发测试完毕，可以发布了。但是 —— 天啊！你的同事这周写了一堆代码，还改了许多你的功能中使用的 API，这些变动会导致你新开发的功能变得不可用。但是他们已经将那些提交推送到远程仓库了，因此你的工作就变成了基于项目**旧版**的代码，与远程仓库最新的代码不匹配了。",
              "",
              "这种情况下, `git push` 就不知道该如何操作了。如果你执行 `git push`，Git 应该让远程仓库回到星期一那天的状态吗？还是直接在新代码的基础上添加你的代码，亦或由于你的提交已经过时而直接忽略你的提交？",
              "",
              "因为这情况（历史偏离）有许多的不确定性，Git 是不会允许你 `push` 变更的。实际上它会强制你先合并远程最新的代码，然后才能分享你的工作。"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "说了这么多，咱们还是看看实际案例吧！"
            ],
            "afterMarkdowns": [
              "看见了吧？什么都没有变，因为命令失败了！`git push` 失败是因为你最新提交的 `C3` 基于远程分支中的 `C1`。而远程仓库中该分支已经更新到 `C2` 了，所以 Git 拒绝了你的推送请求。"
            ],
            "command": "git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "那该如何解决这个问题呢？很简单，你需要做的就是使你的工作基于最新的远程分支。",
              "",
              "有许多方法做到这一点呢，不过最直接的方法就是通过 rebase 调整你的工作。咱们继续，看看怎么 rebase！"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "如果我们在 push 之前做 rebase 呢？"
            ],
            "afterMarkdowns": [
              "我们用 `git fetch` 更新了本地仓库中的远程分支，然后用 rebase 将我们的工作移动到最新的提交记录下，最后再用 `git push` 推送到远程仓库。"
            ],
            "command": "git fetch; git rebase o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "还有其它的方法可以在远程仓库变更了以后更新我的工作吗? 当然有，我们还可以使用 `merge`",
              "",
              "尽管 `git merge` 不会移动你的工作（它会创建新的合并提交），但是它会告诉 Git 你已经合并了远程仓库的所有变更。这是因为远程分支现在是你本地分支的祖先，也就是说你的提交已经包含了远程分支的所有变化。",
              "",
              "看下演示..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "咱们们用 merge 替换 rebase 来试一下……"
            ],
            "afterMarkdowns": [
              "我们用 `git fetch` 更新了本地仓库中的远程分支，然后**合并**了新变更到我们的本地分支（为了包含远程仓库的变更），最后我们用 `git push` 把工作推送到远程仓库"
            ],
            "command": "git fetch; git merge o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "很好！但是要敲那么多命令，有没有更简单一点的？",
              "",
              "当然 —— 前面已经介绍过 `git pull` 就是 fetch 和 merge 的简写，类似的 `git pull --rebase` 就是 fetch 和 rebase 的简写！",
              "",
              "让我们看看简写命令是如何工作的。"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "这次用 `--rebase`……"
            ],
            "afterMarkdowns": [
              "跟之前结果一样，但是命令更短了。"
            ],
            "command": "git pull --rebase; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "换用常规的 `pull`"
            ],
            "afterMarkdowns": [
              "还是跟以前一样! "
            ],
            "command": "git pull; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "由 fetch、rebase/merge 和 push 组成的工作流很普遍。后续课程我们会讲解更复杂的工作流，不过现在我们先解决这个关卡吧。",
              "",
              "要完成本关，你需要完成以下几步：",
              "",
              "* 克隆你的仓库",
              "* 模拟一次远程提交（fakeTeamwork）",
              "* 完成一次本地提交",
              "* 用 *rebase* 发布你的工作"
            ]
          }
        }
      ]
    },
    "de_DE": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Abweichende Inhalte",
              "",
              "Bisher haben wir gesehen wie man per `pull` Commits von Anderen ins lokale Repository holt und die eigenen Änderungen in ein entferntes `push`t. Ist doch ziemlich einfach, wie kann man da durcheinander kommen?",
              "",
              "Die Schwierigkeiten entstehen, wenn die Historien der beiden Repositorys *divergieren*, also voneinander abweichen. Bevor wir die Einzelheiten besprechen, schauen wir uns ein Beispiel an ...",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Stell dir vor du holst dir Montags ein Repository per `clone` und fängst an, an einem Feature zu arbeiten. Bis Freitag soll es fertig und veröffentlicht sein -- doch, oh je! Deine Kollegen haben eine Menge Code während der Woche geschrieben, der dein Feature hat veralten lassen (und überflüssig gemacht hat). Sie haben diesen Code außerdem zum entfernten Repository gepusht, und dadurch basiert *deine* harte Arbeit jetzt auf einer *alten* Version des Projektes, die nicht länger relevant ist.",
              "",
              "In diesem Fall ist ein `git push` problematisch. Wenn du es ausführst, soll Git das entfernte Repository in den Zustand von Montag zurückversetzen? Soll es versuchen deinen Code auf die aktuelle Version zu packen? Oder soll es deine Änderungen einfach ignorieren, weil sie total veraltet sind?",
              "",
              "Da es in dieser Situation so viele Mehrdeutigkeiten gibt (da die Historien divergieren), erlaubt Git dir nicht, deine Änderungen einfach zu `push`en. Es zwingt dich, zuerst die neuesten Änderungen vom Server zu holen und in deine zu integrieren, bevor du deine Arbeit mit anderen teilen kannst."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Bla bla bla. Schauen wir uns das lieber in Aktion an:"
            ],
            "afterMarkdowns": [
              "Siehst du? Nichts passiert, weil der Befehl fehlschlägt. `git push` schlägt fehl, weil der neueste Commit `C3` auf dem Commit `C1` des Remotes basiert. Der entfernte Server hat mittlerweile jedoch `C2` gepusht bekommen, also lässt Git deinen Push jetzt nicht mehr zu."
            ],
            "command": "git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Wie sollen wir das auflösen? Es ist ganz einfach, du musst deinen Commit nur von der aktuellsten Version des Remotes ableiten.",
              "",
              "Es gibt verschiedene Möglichkeiten, wie man das erreichen kann, aber die offensichtlichste ist, deine Commits per Rebase zu verschieben. Schauen wir mal wie das abläuft:"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Also wenn wir vor dem Push erst mal einen Rebase machen ..."
            ],
            "afterMarkdowns": [
              "Bämm! Wir haben unsere lokale Abbildung des entfernten Repositorys mit `git fetch` auf den neuesten Stand gebracht, unsere Arbeit auf die neueste Version des Remotes drauf gepackt und dann mit `git push` auf den Server geschoben."
            ],
            "command": "git fetch; git rebase o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Gibt es noch weitere Möglichkeiten deine Arbeit zu aktualisieren, wenn das entfernte Repository neue Commits bekommen hat? Klar! Schauen wir uns dasselbe an, aber diesmal arbeiten wir mit `merge`.",
              "",
              "Obwohl `git merge` deine Arbeit nicht verschiebt (und stattdessen einen Merge Commit erzeugt) ist es eine Möglichkeit Git dazu zu bringen, alle Änderungen vom Remote in deine Sachen zu integrieren. Denn durch den Merge wird der Remote Branch zu einem *Vorgänger* deines Branches, was bedeutet, dass dein Commit alle Commits des entfernten Branches beinhaltet.",
              "",
              "Zur Demonstration ..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Wenn wir nun also mergen anstatt einen Rebase zu machen ..."
            ],
            "afterMarkdowns": [
              "Ok. Wir haben die lokale Abbildung des entfernen Repositorys mit `git fetch` aktualisiert, die neuen Änderungen per *Merge* in deine integriert, und letztere dann mit `git push` auf den Server gebracht."
            ],
            "command": "git fetch; git merge o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Wahnsinn! Kann ich das auch irgendwie machen ohne soviel zu tippen?",
              "",
              "Na klar -- du kennst ja schon `git pull` als Zusammenfassung von `fetch` und `merge`. Praktischerweise bringt man es mit der Option `--rebase` dazu, anstatt des Merge einen Rebase zu machen.",
              "",
              "Gucken wir uns das mal an."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Zunächst `git pull --rebase` ..."
            ],
            "afterMarkdowns": [
              "Genau wie vorher! Nur viel kürzer."
            ],
            "command": "git pull --rebase; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Und nun das normale `git pull` ..."
            ],
            "afterMarkdowns": [
              "Und wieder, genau wie zuvor!"
            ],
            "command": "git pull; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Dieser Ablauf von `fetch`, `rebase` / `merge` und `push` ist sehr verbreitet. In zukünftigen Leveln werden wir uns kompliziertere Varianten dieses Workflows ansehen, aber jetzt probieren wir erst mal diesen aus.",
              "",
              "Um diesen Level zu lösen, gehe folgende Schritte durch:",
              "",
              "* Clone dein Repository",
              "* Simuliere einen entfernten Commit mit `git fakeTeamwork`",
              "* Erzeuge einen lokalen Commit",
              "* Benutze *Rebase*, um deine Arbeit schließlich pushen zu können."
            ]
          }
        }
      ]
    },
    "ro": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Lucru Divergent",
              "",
              "Până acum am văzut cum să facem `pull`la commit-uri de la alții și cum să facem `push` modificărilor noastre. Pare destul de simplu, așa că de ce se confundă oamenii?",
              "",
              "Dificultatea apare atunci când istoria repozitoriului *diverge*. Înainte de a discuta detaliile, să vedem un exemplu...",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Imaginează-ți că clonezi un repozitoriu luni și începi să lucrezi la o funcționalitate. Până vineri ești gata să publici funcționalitatea ta -- dar oh nu! Colegii tăi au scris o grămadă de cod în timpul săptămânii care a făcut ca funcționalitatea ta să fie învechită. Ei au publicat aceste commit-uri în repozitoriul remote, așa că *munca ta* este acum bazată pe o versiune *veche* a proiectului care nu mai este relevantă.",
              "",
              "În acest caz, comanda `git push` este ambiguă. Dacă rulezi `git push`, ar trebui git să schimbe repozitoriul remote înapoi la starea de luni? Ar trebui să încerce să adauge codul tău fără a elimina noul cod? Sau ar trebui să ignore complet modificările tale deoarece sunt complet învechite?",
              "",
              "Fiindcă există atât de multă ambiguitate în această situație (unde istoria diverge), git nu îți permite să faci `push` modificărilor tale. De fapt, te forțează să integrezi starea cea mai recentă a remote-ului înainte de a putea împărtăși munca ta."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Atâtea vorbe! Să vedem asta în acțiune."
            ],
            "afterMarkdowns": [
              "Vezi? Nu s-a întâmplat nimic pentru că comanda a eșuat. `git push` eșuează deoarece ultimul tău commit `C3` este bazat pe remote-ul de la `C1`. Între timp, remote-ul a fost actualizat la `C2`, așa că git respinge push-ul tău."
            ],
            "command": "git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Cum rezolvi această situație? E simplu, tot ce trebuie să faci este să îți bazezi munca pe cea mai recentă versiune a ramurii remote.",
              "",
              "Există câteva moduri de a face asta, dar cel mai direct este să îți muți munca prin rebase. Să vedem cum arată asta."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Acum dacă facem rebase înainte de a face push..."
            ],
            "afterMarkdowns": [
              "Boom! Am actualizat reprezentarea locală a remote-ului cu `git fetch`, am făcut rebase muncii noastre pentru a reflecta noile modificări din remote și apoi le-am partajat cu `git push`."
            ],
            "command": "git fetch; git rebase o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Există alte moduri de a actualiza munca mea atunci când repozitoriul remote a fost actualizat? Desigur! Să vedem același lucru, dar cu `merge`.",
              "",
              "Deși `git merge` nu mută munca ta (ci creează un commit de merge), este o modalitate de a spune git că ai integrat toate modificările din remote. Acest lucru se datorează faptului că ramura remote este acum un *strămoș* al ramurii tale, ceea ce înseamnă că commit-ul tău reflectă toate commit-urile din ramura remote.",
              "",
              "Să vedem asta în acțiune..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Și acum dacă în loc de rebase facem merge..."
            ],
            "afterMarkdowns": [
              "Boom! Am actualizat reprezentarea locală a remote-ului cu `git fetch`, *am îmbinat* noile modificări în munca noastră (pentru a reflecta noile modificări din remote) și apoi le-am împins cu `git push`."
            ],
            "command": "git fetch; git merge o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Minunat! Există vreo modalitate de a face asta fără să tastez atât de multe comenzi?",
              "",
              "Desigur -- deja știi că `git pull` este doar o scurtătură pentru un fetch și un merge. Din fericire, `git pull --rebase` este o scurtătură pentru un fetch și un rebase!",
              "",
              "Să vedem aceste comenzi scurtate în acțiune."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Prima dată cu `--rebase`..."
            ],
            "afterMarkdowns": [
              "Exact ca înainte! Doar că mult mai scurt."
            ],
            "command": "git pull --rebase; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Și acum cu `pull` obișnuit"
            ],
            "afterMarkdowns": [
              "Din nou, exact ca înainte!"
            ],
            "command": "git pull; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Această secvență de `fetch`, `rebase`/`merge` și `push` este foarte comună. În lecțiile viitoare vom explora variante mai complicate ale acestui flux de lucru, dar pentru acum hai să încercăm asta.",
              "",
              "Pentru a rezolva acest nivel, urmează acești pași:",
              "",
              "* Clonează repozitoriul tău",
              "* Simulează o muncă a cuiva din echipă (1 commit)",
              "* Crează un commit cu munca ta (1 commit)",
              "* Publică munca ta prin *rebase*"
            ]
          }
        }
      ]
    },
    "ru_RU": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Когда наработки расходятся",
              "",
              "Вот мы и познакомились с тем, как забирать (`pull`) чужие коммиты и как закачивать (`push`) свои наработки и изменения. Выглядит всё довольно просто, и не ясно какие же могут возникать у людей трудности со всем этим?",
              "",
              "Сложности возникают тогда, когда история репозитория *расходится*. Прежде чем идти дальше, давайте посмотрим на пример...",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Представьте себе, вы склонировали репозиторий в понедельник и начали разрабатывать какую-то новую и уникальную часть приложения (на сленге разработчиков - `фича`). В пятницу вечером вы наконец-то готовы опубликовать вашу фичу. Но, о нет! Ваш коллега в течение недели написал кучу кода, который делает все ваши наработки устарелыми. Этот код был также закоммичен и опубликован на общедоступном удалённом репозитории, поэтому теперь *ваш* код базируется на *устаревшей* версии проекта и более не уместен.",
              "",
              "В этом случае использование команды `git push` является сомнительным. Как поведёт себя команда `git push`, если вы её выполните? Может быть, она изменит удалённый репозиторий и вернёт всё к тому состоянию, которое было в понедельник? А может, команда попробует добавить ваш код, не удаляя при этом новый? Или же она проигнорирует ваши изменения, так как они уже устарели?",
              "",
              "По причине того, что в данной ситуации (когда история расходится) слишком много двусмысленностей и неопределённостей, git не даст вам закачать (`push`) ваши изменения. Он будет принуждать вас включить в состав своей работы все те последние наработки и изменения, которые находятся на удалённом репозитории."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Слишком много болтовни! Давайте посмотрим, как всё работает на живом примере"
            ],
            "afterMarkdowns": [
              "Видите? Ничего не произошло. Всё потому, что команда `git push` не выполнилась успешно. Дело в том, что ваш последний коммит `C3` основан на удалённом коммите `C1`. В свою очередь, удалённый репозиторий уже изменился под воздействием `C2`. Вот почему git отклонил ваш push."
            ],
            "command": "git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Как же разрешить данную ситуацию? Всё очень просто! Всё, что вам нужно - перебазировать свою работу на самую последнюю версию удалённой ветки.",
              "",
              "Существует множество способов сделать это, но наиболее простой способ 'сдвинуть' свои наработки - через перебазировку или rebasing. Давайте посмотрим, как это выглядит."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Теперь, когда мы сперва перебазируемся прежде чем публиковать изменения..."
            ],
            "afterMarkdowns": [
              "Опа! Мы только что обновили наш локальный образ удалённого репозитория средствами `git fetch`. Ещё мы перебазировали наши наработки, чтобы они отражали все изменения с удалённого репозитория, и опубликовали их с помощью `git push`."
            ],
            "command": "git fetch; git rebase o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "А есть ещё какие-либо варианты обновить мои наработки к тому моменту, как удалённый репозиторий был обновлён? Конечно есть! Давайте ознакомимся с парочкой новых штучек, но в этот раз с помощью команды `merge`.",
              "",
              "Несмотря на то, что `git merge` не передвигает ваши наработки (а всего лишь создаёт новый коммит, в котором Ваши и удалённые изменения объединены), этот способ помогает указать git-у на то, что вы собираетесь включить в состав ваших наработок все изменения с удалённого репозитория. Это значит, что ваш коммит отразится на всех коммитах удалённой ветки, поскольку удалённая ветка является *предком* вашей собственной локальной ветки.",
              "",
              "Давайте взглянем на демонстрацию..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Таким образом, если мы объединим (merge) вместо перебазирования (rebase)..."
            ],
            "afterMarkdowns": [
              "Опа! Мы обновили наше локальное представление удалённого репозитория с помощью `git fetch`, *объединили* ваши новые наработки с нашими наработками (чтобы отразить изменения в удалённом репозитории) и затем опубликовали их с помощью `git push`."
            ],
            "command": "git fetch; git merge o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Здорово! А можно ли как-то сделать всё то же самое, но с меньшим количеством команд?",
              "",
              "Конечно - ведь вы уже знаете команду `git pull`, которая является аналогом и более кратким аналогом для совместных fetch и merge. А команда `git pull --rebase` - аналог для совместно вызванных fetch и rebase!",
              "",
              "Давайте взглянем на эти оба варианта."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Сперва - с флагом `--rebase`..."
            ],
            "afterMarkdowns": [
              "Тот же результат, как и ранее, но намного короче вызов команд."
            ],
            "command": "git pull --rebase; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "А теперь с обычным `pull`."
            ],
            "afterMarkdowns": [
              "И снова - результат такой же, как и ранее!"
            ],
            "command": "git pull; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Рабочий процесс получения изменений (fetching), перебазирования/объединения (rebase/merging) и публикации изменений (pushing) используется довольно часто. В последующих уроках мы изучим более сложные варианты этих рабочих процессов, но пока что давайте остановимся на том, что есть.",
              "",
              "Чтобы выполнить задание уровня, сделайте следующее:",
              "",
              "* Склонируйте репозиторий",
              "* Сфабрикуйте командную работу (1 коммит)",
              "* Сделайте свой собственный коммит (1 коммит)",
              "* Опубликуйте свои наработки посредством *перебазировки (rebasing)*"
            ]
          }
        }
      ]
    },
    "ja": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 分かれた作業",
              "",
              "これまでは、どのようにして`pull`でコミットを取り込み、`push`で自身の変更を反映するかを見てきました。単純なようにみえます。では何故人々は混乱するのでしょうか？",
              "",
              "その難しさは、リポジトリの履歴が*分岐*することに起因します。この詳細について説明する前に、まずは例を見てみましょう。",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "月曜日にリポジトリをクローンし、ある表面の機能をちょっと弄ることを想像してみてください。金曜日までに、あなたはその機能を公開する準備ができる -- しかし、ああなんということでしょう！あなたの同僚達は、あなたの機能が依存していた（そして、廃れた）コードの束をその週の内に書き換えていました。彼らはリモートリポジトリにコミットを共有して公開し、今や*あなたの*作業は*古い*バージョンのもはや適切でないプロジェクトに基づいていることになります。",
              "",
              "この場合、`git push`コマンドは曖昧になってしまいます。あなたが`git push`を走らせたとき、gitはリモートリポジトリは月曜の状態に変更を戻すべきでしょうか？それとも、新しいコードを取り除かないで追加しようとしてみるべきでしょうか？または、あなたの変更が完全に古いものになってしまったため、全て無視するべきなのでしょうか？",
              "",
              "この状況（履歴が分岐をしているとき）ではまったくもって曖昧なので、gitはあなたの変更を`push`することを許可しません。実際には、あなたの作業を共有する前に最新のリモートの状態を取り込むことを強制します。"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "話しすぎましたね！この状況での動作をみてみましょう！"
            ],
            "afterMarkdowns": [
              "見ましたか？コマンドが失敗して、何も起こりませんでした。あなたの最近の`C3`コミットはリモートの`C1`コミットに依存しているため、`git push`は失敗しました。リモートには`C2`が更新されているので、gitはあなたのプッシュを拒否します。"
            ],
            "command": "git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "ではこの状況を解決するにはどうしたらいいでしょう？簡単です、リモートブランチの最新の状態にあなたの作業が基づくようにすればいいのです。",
              "",
              "いくつか方法はありますが、最も簡単なのはあなたの作業をリベースで移動させることです。それがどのようなものか、さあみてみましょう。"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "今、プッシュをする前に代わりにリベースをしてみましょう。"
            ],
            "afterMarkdowns": [
              "わお！私たちは`git fetch`でローカルのリモートブランチを更新し、私たちの作業をリベースさせてリモートの新しい変更に適用させ、`git push`でそれをプッシュしました。"
            ],
            "command": "git fetch; git rebase o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "リモートリポジトリが更新されたとき、他に自身の作業を更新する方法はあるでしょうか？もちろん、あります！今度は同じことを`merge`を代わりに使ってやってみましょう。",
              "",
              "`git merge`はあなたの作業を移動しませんが（代わりにマージコミットを作ります）、リモートの変更を全て取り込みgitに通知する方法なのです。この通知とは、リモートブランチが今やあなた自身のブランチの*親*を指していることになるため、あなたのリモートブランチの全ての変更を反映しているコミットを指します。",
              "",
              "この状況の例を見てみましょう。"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "リベースの代わりに今度はマージを用います。"
            ],
            "afterMarkdowns": [
              "わお！私たちは`git fetch`でローカルのリモートブランチを更新し、私たちの作業を*マージ*して（リモートの新しい変更を反映するために）、`git push`でそれをプッシュしました。"
            ],
            "command": "git fetch; git merge o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "素晴らしい！多くのコマンドを打たないでこれを実現する方法はあるでしょうか？",
              "",
              "もちろん -- あなたが既に知っているコマンドです。`git pull`は、`fetch`して`merge`するためのより短い書き方です。さらに便利なことに、`git pull --rebase`は`fetch`して`rebase`することの省略形です！",
              "",
              "コマンドを省略した場合を見てみましょう。"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "まずは、`--rebase`から"
            ],
            "afterMarkdowns": [
              "前と一緒です！そしてとても短いです。"
            ],
            "command": "git pull --rebase; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "そして通常使う`pull`で試してみましょう"
            ],
            "afterMarkdowns": [
              "ここでも、前と同じです！"
            ],
            "command": "git pull; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "この取り込み作業の流れ、リベースとマージ、そしてプッシュはとてもよく行います。次回以降のレッスンではより複雑なパターンの作業を学びますが、今は習ったことをとりあえず試してみましょう。",
              "",
              "このレベルをクリアするには、以下のステップを踏みます:",
              "",
              "* あなたのリポジトリをクローン",
              "* 擬似的に幾つかの同僚の変更を真似る（1コミット）",
              "* あなた自身の作業をコミット（1コミット）",
              "* あなたの作業を*リベース*で公開"
            ]
          }
        }
      ]
    },
    "uk": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Розбіжності в історії",
              "",
              "Ми розглянули як витягувати (`pull`) коміти інших та як завантажувати (`push`) свої власні коміти. Це виявилось не надто складно, то як же так, що в людей дуже часто виникають з цим труднощі?",
              "",
              "Основна складність полягає в тому, що історія різних репозиторіїв *розбігається*. Перед тим, як вдатися в деталі, подивімося як це виглядає на прикладі...",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Уяви, що ти склонував репозиторій в понеділок і почав працювати над якоюсь фічею. В пятницю фіча готова і ти хочеш повернути її назад (в апстрім) -- але що це? Твої колеги, грець їм, вже встигли вкомітити купу коду що робить твою фічу застарілою (і не дуже доречною). Вони вже запушили ці коміти в публічний репозиторій, й тепер *твоя* робота базується на *старій* версії продукту, що вже не актуальна.",
              "",
              "В цьому випадку команда `git push` неоднозначна. Коли ти виконаєш `git push`, гіт повинен змінити віддалений репозиторій до того стану, на якому він знаходився в понеділок? Чи він має додати твій код і залишити код твоїх колег? Чи він має повністю проігнорувати твої зміни, оскільки вони застаріли?",
              "",
              "Через такі неоднозначності в цій ситуації (коли історія розійшлася), git не дозволить тобі запушити твої зміни. Він фактично змушує тебе інтегрувати останні зміни з віддаленого репозиторію перед тим як ти зможеш завантажити на нього свої напрацювання."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Але, забагато розмов! Подивімось на ділі!"
            ],
            "afterMarkdowns": [
              "Бачиш? Нічого не сталося тому що остання команда не виконалася. `git push` не спрацював тому що твій недавній коміт `C3` базується на коміті `C1`. Але віддалений репо вже прейшов на`C2`, тому git відхилив твій push."
            ],
            "command": "git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Як вийти з цієї ситуації? Дуже просто! Все, що треба -- це оновити свої напрацювання так, щоб вони базувалися на останніх змінах з віддаленої гілки.",
              "",
              "Є кілька шляхів як цього досягнути, але найпростіший -- це перемістити свою роботу 'вперед' за допомогою rebase. Спробуймо і погляньмо як це виглядає."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Тепер якщо виконати rebase перед push..."
            ],
            "afterMarkdowns": [
              "Ка-бум! Ми оновили наш локальний образ віддаленого репозиторію за допомогою `git fetch`, заребейсили наші напрацювання відповідно до змін у віддаленому репо, й завантажили їх за допомогою `git push`."
            ],
            "command": "git fetch; git rebase o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Чи є якийсь інший спосіб оновити свої напрацювання, коли віддалений репозиторій пішов вперед? Звісно! Спробуймо зробити те ж саме, але натомість за допомогою `merge` (злиття).",
              "",
              "Хоча `git merge` і не переміщує твою роботу (а просто створює натомість коміт злиття чи merge commit), це -- ще один спосіб сказати git, що ти інтегрував останній стан віддаленого репозиторію в свої зміни. Це працює тому, що тепер віддалена гілка є *предком* твоєї гілки, а отже твої останні коміти інтегрують в собі всі коміти з віддаленої гілки.",
              "",
              "Невелика демонстрація..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Тепер ми зробимо merge замість rebase..."
            ],
            "afterMarkdowns": [
              "Ка-бум! Ми оновили наш локальний образ віддаленої гілки за допомогою `git fetch`, *змерджили* нові напрацювання з власними (щоб відобразити останні зміни у віддаленій гілці), й відіслали їх за допомогою `git push`."
            ],
            "command": "git fetch; git merge o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Чудово! Чи можу я це зробити, використовуючи меншу кількість команд?",
              "",
              "Звісно -- ти ж знаєш, що `git pull` це просто коротша форма для git fetch а потім git merge. Натомість, `git pull --rebase` це коротка форма для git fetch а потім git rebase!",
              "",
              "Спробуймо використати ці коротші команди."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Спочатку з `--rebase`..."
            ],
            "afterMarkdowns": [
              "Те саме, що й раніше! Просто трохи коротше."
            ],
            "command": "git pull --rebase; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "А тепер просто з `pull`."
            ],
            "afterMarkdowns": [
              "Знову, так як і було!"
            ],
            "command": "git pull; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Робочий процес, що складається з fetch, rebase/merge і push є дуже широковживаним. В наступних уроках ми розглянемо складніші версії цього процесу, а наразі спробуймо його виконати.",
              "",
              "Щоб пройти цей рівень, виконай наступні кроки:",
              "",
              "* Склонуй свій репозиторій",
              "* Зроби симуляцію командної роботи (1 коміт)",
              "* Зроби власний коміт (1 коміт)",
              "* Опублікуй свої напрацювання за допомогою *rebasе*"
            ]
          }
        }
      ]
    },
    "ko": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 엇갈린 작업",
              "",
              "지금까지 우리는 다른곳에서 커밋을 `pull`해서 내려받고 우리가 만든 변경들을 `push`하는 방법을 배웠습니다. 간단해보이는데, 왜 사람들이 이것 때문에 곤란해 할까요?",
              "",
              "어려움은 저장소의 히스토리가 *엇갈릴 때* 찾아옵니다. 자세히 살펴보기 전에 예제를 확인해봅시다...",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "상상을 해봅시다. 여러분은 월요일에 저장소를 clone해서 부가기능을 만들기 시작했습니다. 금요일쯤 기능을 공개할 준비가 되었습니다 -- 그런데 오 이런! 동료들이 주중에 코딩을 잔뜩해서 여러분이 만든 기능은 프로젝트에 뒤떨어져서 무용지물이 되었습니다. 이 사람들이 그 커밋들을 공유하고있는 원격 저장소에도 공개했습니다, 이제 *여러분의* 작업은 이제 의미가 없는 *구*버전의 프로젝트를 기반으로한 작업이 되어버렸습니다.",
              "",
              "이런 경우, 명령어 `git push`가 할 일이 애매해집니다. `git push`를 수행했을때, git은 원격 저장소를 여러분이 작업했던 월요일의 상태로 되돌려야 할까요? 아니면 새 코드를 건들지 않고 여러분의 코드만 추가해야 되나요? 아니면 여러분의 작업은 뒤 떨어졌기 때문에 완전히 무시해야되나요?",
              "",
              "이렇게 상황이 애매모호하기 때문에(히스토리가 엇갈렸기 때문이죠), git은 여러분이 `push`하지 못하게 합니다. 사실 여러분이 작업을 공유하기전에 원격 저장소의 최신 상태를 합치도록 강제합니다."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "너무 떠든거같습니다! 이 상황을 직접 눈으로 확인해봅시다"
            ],
            "afterMarkdowns": [
              "보이죠? 명령어가 실행되지 않아서 아무것도 잃어나지 않습니다. 여러분의 최근 커밋 `C3`가 원격저장소의 `C1`을 기반으로 하기 때문에 `git push`가 실패합니다. 원격 저장소는 `C2`까지 갱신된 상태기때문에 git은 여러분의 push를 거부하게됩니다."
            ],
            "command": "git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "그러면 이 상황을 어떻게 해결할까요? 쉽습니다, 여러분의 작업을 원격 브랜치의 최신상태를 기반으로 하게 만들면 됩니다.",
              "",
              "이렇게 하기위한 방법이 여러가지가 있는데, 가장 간결한 방법은 리베이스를 통해 작업을 옮기는 방법입니다. 예제를 통해 눈으로 확인해 봅시다."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "push를 하기전에 리베이스를 하면..."
            ],
            "afterMarkdowns": [
              "Boom! `git fetch`로 원격 저장소의 변경정보를 가져오고, 새 변경들로 우리 작업을 리베이스 했습니다, 이제 `git push`하면 끝!"
            ],
            "command": "git fetch; git rebase o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "다른 방법은 없냐고요? 당연히 있습니다! 같은것을 `merge`로 대신 해봅시다.",
              "",
              "`git merge`가 여러분의 작업을 옮기지는 않지만(merge 커밋을 생성합니다). git에게 원격 저장소의 변경을 합쳤다고 알려주는 방법중에 하나입니다. 이제 원격 브랜치가 여러분 브랜치의 *부모*가 되었기때문입니다, 여러분의 커밋이 원격 브랜치의 모든 커밋을 반영했다는 뜻이죠.",
              "",
              "눈으로 확인해봅시다..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "리베이스대신 병합을하면..."
            ],
            "afterMarkdowns": [
              "Boom! `git fetch`로 원격 저장소의 변경정보를 가져오고, 새 작업을 우리 작업으로 *병합*했습니다 (원격 저장소의 변경을 반영하기 위해서죠), 이제 `git push`하면 끝!"
            ],
            "command": "git fetch; git merge o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "멋집니다! 명령어를 좀더 적게써서 하는 방법은 없나요?",
              "",
              "물론 있습니다 -- 여러분은 `git pull`이 fetch와 merge의 줄임 명령어라는 것은 이미 알고 있을 것입니다. 아주 간단하게, `git pull --rebase`를 하면 fetch와 리베이스를 하는 작업의 줄임 명령어 입니다",
              "",
              "이 줄임 명령어가 잘 작동하는지 확인해 봅시다"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "먼저 `--rebase`와 함께하면..."
            ],
            "afterMarkdowns": [
              "이전과 같습니다! 간결하고요."
            ],
            "command": "git pull --rebase; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "일반의 `pull`과 사용했을 때는"
            ],
            "afterMarkdowns": [
              "또다시, 이전과 같습니다!"
            ],
            "command": "git pull; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "fetch를 하고 리베이스/병합을 하고 push를 하는 이런 작업흐름은 꽤 흔합니다. 앞으로의 레슨에서는 이런 작업흐름의 복잡한 버전들을 확인해볼 것입니다. 일단은 이것부터 연습해 보죠.",
              "",
              "이번 레벨을 통과하려면, 다음의 단계를 거쳐야 합니다:",
              "",
              "* 여러분의 저장소를 clone 하세요",
              "* 가짜 팀워크를 만드세요 (1개의 커밋)",
              "* 여러분의 작업도 커밋하세요 (1개의 커밋)",
              "* 여러분의 작업을 *리베이스*를 통해 공유하세요"
            ]
          }
        }
      ]
    },
    "vi": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Diverged Work",
              "",
              "Cho đến giờ ta đã biết cách `kéo` (`pull`) commit từ nơi khác về và cách `đẩy` (`push`) lên những thay đổi của ta. Chúng nhìn có vẻ khá đơn giản, vậy tại sao người ta lại thấy lúng túng về chúng?",
              "",
              "Khó khăn đến từ sự *dị biệt* của cây lịch sử trên kho chứa từ xa. Trước khi đi vào thảo luận chi tiết vấn đề này, hãy xem qua một ví dụ...",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Tưởng tượng bạn sao chép một kho chứa vào thứ Hai và bắt đầu phát triển một tính năng mới. Đến thứ Sáu thì bạn đã sẵn sàng để xuất bản thành quả của mình -- nhưng không! Đồng nghiệp của bạn đã viết thêm hàng loạt mã trong một tuần vừa rồi và điều này làm cho chức năng của bạn trở nên lỗi thời. Và họ cũng đã xuất bản những commit này lên kho chứa từ xa chung, vậy giờ thành quả của *bạn* lại dựa trên phiên bản *cũ* của dự án mà nó không còn thích đáng nữa.",
              "",
              "Trong trường hợp này, lệnh `git push` trở lên khá nhập nhằng. Nếu bạn dùng `git push`, liệu git nên thay đổi kho chứa từ xa trở về trạng thái ngày thứ Hai? Hay nó nên cố gắng thêm mã của bạn vào trong khi không xóa mã mới? Hay là nó sẽ bỏ qua hoàn toàn mã của bạn vì nó đã lỗi thời?",
              "",
              "Vì có quá nhiều tình huống mơ hồ (dị biệt lịch sử), Git sẽ không cho phép bạn `đẩy` (`push`) thay đổi của mình. Nó sẽ ép bạn phải sát nhập trạng thái mới nhất của kho chứa từ xa vào thành phẩm của mình trước khi chia sẻ chúng."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Nói quá nhiều rồi! Đi vào hành động thôi"
            ],
            "afterMarkdowns": [
              "Thấy chứ? Không có gì xảy ra cả vì lệnh bị thất bại. `git push` thất bại vì commit mới nhất của bạn: `C3` dựa trên commit `C1` ở nhánh từ xa. Nhánh đó đã được cập nhật lên commit `C2`, nên Git từ chối lệnh đẩy của bạn"
            ],
            "command": "git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Vậy thì giải quyết tình huống này sao giờ? Đơn giản thôi, tất cả những gì bạn cần làm là khiến cho thành quả của mình dựa trên phiên bản mới nhất của nhánh từ xa.",
              "",
              "Có vài cách để làm điều này, nhưng cách trực tiếp nhất là bố trí lại (dùng rebase) để di chuyển thành quả của bạn. Cùng xem cách nó hoạt động nào."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Nào bây giờ trước push ta dùng rebase thì..."
            ],
            "afterMarkdowns": [
              "Bùùm! Ta đã cập nhật nhánh từ xa trong kho chứa cục bộ với `git fetch`, dịch chuyển thành quả của mình để phản ánh thay đổi mới của kho chứa từ xa, sau đó đẩy chúng lên với `git push`."
            ],
            "command": "git fetch; git rebase o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Có cách nào khác để cập nhật thành quả của mình khi kho chứa từ xa được cập nhật không? Tất nhiên rồi! Hãy xem xét điều tương tự với `merge`.",
              "",
              "Mặc dù `git merge` không dịch chuyển commit của bạn (thay vì đó nó tạo ra một commit hợp nhất), đó là cách để nói với Git rằng bạn đã kết hợp tất cả thay đổi từ nhánh từ xa. Đó là bởi vì bây giờ nhánh từ xa đã trở thành một *tổ tiên* của nhánh cục bộ của bạn, nghĩa là commit của bạn có thể tham chiếu đến tất cả commit có ở nhánh từ xa.",
              "",
              "Hãy xem qua bản biểu diễn sau..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Giờ nếu ta dùng merge thay vày rebase thì..."
            ],
            "afterMarkdowns": [
              "Bùùm! Ta đã cập nhật đại diện nhánh từ xa tại kho chứa cục bộ với `git fetch`, *hợp nhất* (*merge*) thành quả mới vào thành quả của ta (để phản ánh thay đổi ở nhánh từ xa), sau đó đẩy chúng lên với `git push`."
            ],
            "command": "git fetch; git merge o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Tuyệt vời! Có cách nào để làm việc này mà không phải gõ nhiều lệnh thế không nhỉ?",
              "",
              "Tất nhiên rồi -- bạn đã biết rằng `git pull` là lệnh tắt của fetch và merge. Tương tự như vậy, `git pull --rebase` là lệnh tắt của fetch và rebase!",
              "",
              "Hãy xem thử cách lệnh tắt này hoạt động ra sao."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Trước tiên với `--rebase`..."
            ],
            "afterMarkdowns": [
              "Giống hệt như trước! Chỉ là lệnh ngắn hơn."
            ],
            "command": "git pull --rebase; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Và giờ với lệnh `pull` thông thường."
            ],
            "afterMarkdowns": [
              "Lại một lần nữa, chính xác y hệt như trước!"
            ],
            "command": "git pull; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Quy trình tìm nạp (fetch), bố trí lại/hợp nhất (rebase/merge), và đẩy (push) là khá phổ biết. Ta sẽ xem xét các phiên bản phức tạp hơn của những quy trình này ở các bài học sau, còn bây giờ thì hãy tập trung vào bài này đã.",
              "",
              "Để giải quyết cấp độ này, hãy làm các bước sau:",
              "",
              "* Nhân bản kho chứa của bạn",
              "* Giả lập làm việc nhóm (1 commit)",
              "* Tạo ra 1 commit cục bộ",
              "* Xuất bản thành quả của bạn dùng *rebase*"
            ]
          }
        }
      ]
    },
    "sl_SI": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Razdeljeno Delo",
              "",
              "Zaenkrat smo videli kako `pullat` dol commite od ostalih in kako `pushat` naše spremembe. Izgleda dokaj preprosto, vendar kako lahko vseeno to mede ljudi?",
              "",
              "Težave nastopijo, ko se zgodovina repozitorijev *razdeli*. Preden se lotimo podrobnosti si poglejmo primer ...",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Predstavljaj si, da skloniraš repozitorij v ponedeljek in začneš delati na novi funkcionalnosti. V petek si pripravljen, da objaviš svoje spremembe -- ampak o ne! Tvoji sodelavci so napisali goro kode med tednom in tvoja funkcionalnost je postala zastarela. Prav tako so objavili te commite v skupen repozitorij, tako da sedaj *tvoje* delo izhaja iz *stare* verzije projekta, ki ni več taprava.",
              "",
              "V tem primeru je ukaz `git push` dvoumen. Če bi pognal `git push`, bi git moral spremeniti oddaljeni repozitorij nazaj na stanje iz ponedeljka? Bi moral poizkusiti dodati tvoje delo, brez da odstarani novo kodo? Ali bi moral povsem ignorirati tvoje spremembe, ker so zastarele?",
              "",
              "Ker je toliko dvomov v tej situaciji (kjer se je zgodovina razdelila), ti git ne pusti, da bi `pushal` svoje spremembe. V bistvu te prisili, da vključiš zadnje stanje oddaljenega repozitorija, preden lahko deliš svoje delo."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Toliko govorjenja! Poglejmo stvar v praksi."
            ],
            "afterMarkdowns": [
              "Vidiš? Nič se ni spremenilo, ker je ukaz spodeletel. `git push` spodleti, ker tvoj zadnji commit `C3` izhaja iz oddaljenega `C1`. Oddaljen repozitorij se je med tem posodobil na `C2`, zato git zavrne tvoj push."
            ],
            "command": "git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Kako rešiti to zagato? Enostavno je, vse kar moraš narediti je, da spremeniš, da tvoje delo izhaja iz zadnje verzije oddaljenega brancha.",
              "",
              "Obstaja nekaj načinov, da to narediš, ampak najnaravnejši način je, da to narediš z rebaseom. Poglejmo, kako to izgleda."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Če sedaj rebaseamo, namesto da pushamo ..."
            ],
            "afterMarkdowns": [
              "Boom! Posodobili smo našo lokalno reprezentacijo oddaljenega repozitorija z `git fetch`, rebaseali naše delo, da vsebuje nove spremembe iz oddaljenega repota, nato pa naložili svoje delo z `git push`."
            ],
            "command": "git fetch; git rebase o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "So še drugi načini, da posodobim svoj delo, ko je bil oddaljen repozitorij posodobljen? Seveda! Poglejmo isto stvar, vendar tokrat z `mergeom`.",
              "",
              "Čeprav `git merge` ne premakne tvojega dela (ampak naredi samo merge commit), je to način da sporočiš gitu, da si vključil vse spremembe iz oddaljenega repota. To je zato, ker je oddaljen branch sedaj *prednik* tvojega brancha, kar pomeni, da tvoj commit sedaj vsebuje vse commite iz oddaljenega brancha.",
              "",
              "Poglejmo predstavitev tega ..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Če sedaj uporabimo merge namesto rebasea ..."
            ],
            "afterMarkdowns": [
              "Boom! Posodobili smo našo lokalno sliko oddaljenega repozitorija z `git fetch`, *zmergali* novo delo v naše delo (kot odraz novih sprememb na oddaljenem branchu) in jih nato naložili z `git push`."
            ],
            "command": "git fetch; git merge o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Super! A obstaja način, da naredim vse to brez tipkanja toliko ukazov?",
              "",
              "Seveda -- `git pull` že poznaš in je bližnjica za fetch ter merge. Prikladno je tudi `git pull --rebase` bližnjica za fetch in rebase!",
              "",
              "Poglejmo te kratke ukaze na delu."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Najprej z `--rebase` ..."
            ],
            "afterMarkdowns": [
              "Enako kot prej! Le dosti krajše."
            ],
            "command": "git pull --rebase; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "In sedaj z navadnim `pullom` ..."
            ],
            "afterMarkdowns": [
              "Zopet enako kot prej!"
            ],
            "command": "git pull; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Vse to fetchanje, rebasanje/merganje in pushanje je kar pogosto. V prihodnjih lekcijah bomo preučili težje različice teh postopkov, ampak najprej preizkusimo tega.",
              "",
              "Da rešiš to stopnjo, izvedi sledeče korake:",
              "",
              "* Kloniraj svoj repozitorij",
              "* Naredi lažni commit ostale ekipe (1 commit)",
              "* Commitaj nekaj svojega dela (1 commit)",
              "* Objavi svoje delo z *rebaseom*"
            ]
          }
        }
      ]
    },
    "pl": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Rozbieżna praca",
              "",
              "Widzieliśmy wcześniej, jak `pull` pobiera commity od innych i jak `push` wysyła nasze własne zmiany. Wydaje się to całkiem proste, więc jak ludzie mogą być tak zdezorientowani?",
              "",
              "Trudności pojawiają się, gdy historia repozytorium zaczyna się *rozbiegać*. Zanim omówimy szczegóły tego rozwiązania, zobaczmy przykład...",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Wyobraźmy sobie, że klonujesz repozytorium w poniedziałek i zaczynasz pracować nad dodatkową funkcjonalnością. W piątek chcesz opublikować swoje zmiany -- ale, o nie! Współpracownicy napisali w ciągu tygodnia mnóstwo kodu, który sprawił, że twoja praca stała się nieaktualna (przestarzała). Opublikowali również te poprawki we wspólnym zdalnym repozytorium, więc teraz *twoja* praca jest oparta na *starej* wersji projektu, która nie jest już aktualna.",
              "",
              "W tym przypadku komenda `git push` jest niejednoznaczna. Jeśli uruchomisz `git push`, to czy Git powinien zmienić zdalne repozytorium z powrotem na takie, jakie było w poniedziałek? Czy może powinien próbować dodać twój kod, nie usuwając jednocześnie nowego kodu? Czy może też ma całkowicie zignorować twoje zmiany, ponieważ są one zupełnie przestarzałe?",
              "",
              "Ponieważ w tej sytuacji (gdzie historia się rozbiegła) jest tak wiele niejasności, Git nie pozwala ci na `push` twoich zmian. W rzeczywistości zmusza cię do połączenia najnowszego stanu remote'a, zanim pozwoli ci udostępnić swoją pracę."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Dość gadania! Zobaczmy tę sytuację w działaniu."
            ],
            "afterMarkdowns": [
              "Spójrz, nic się nie zmieniło, ponieważ wykonanie polecenia nie powiodło się. Polecenie `git push` nie powiedzie się, ponieważ twój najnowszy commit `C3` jest oparty na zdalnym `C1`. Zdalny został jednak zaktualizowany do `C2`, więc Git odrzuca twojego pusha."
            ],
            "command": "git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Jak rozwiążesz tę sytuację? To proste. Wszystko, co musisz zrobić, to oprzeć swoją pracę na najnowszej wersji remote'a.",
              "",
              "Jest kilka sposobów, aby to zrobić, ale najprostszym jest przeniesienie pracy poprzez rebase. Zobaczmy, jak to wygląda."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Zróbmy teraz inaczej: rebase przed wypchnięciem..."
            ],
            "afterMarkdowns": [
              "Tadam! Zaktualizowaliśmy naszą lokalną reprezentację remote'a za pomocą `git fetch`, przebazowaliśmy naszą pracę, aby odzwierciedlić nowe zmiany na zdalnej gałęzi, a następnie wypchnęliśmy je za pomocą `git push`."
            ],
            "command": "git fetch; git rebase o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Czy istnieją inne sposoby na aktualizację naszej pracy, gdy zdalne repozytorium zostało zaktualizowane? Oczywiście! Spróbujmy rozwiązać to również z użyciem `merge`.",
              "",
              "Chociaż `git merge` nie przenosi twojej pracy (a zamiast tego po prostu tworzy commit scalający), jest to sposób na powiedzenie Gitowi, że dołączasz wszystkie zmiany z remote'a. Dzieje się tak dlatego, że zdalna gałąź jest teraz *przodkiem* twojej własnej gałęzi, co oznacza, że twój commit odzwierciedla wszystkie commity w zdalnej gałęzi.",
              "",
              "Zobaczmy, jak to wygląda..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "A jeśli użyjemy `merge` zamiast `rebase`..."
            ],
            "afterMarkdowns": [
              "Tadam! Zaktualizowaliśmy naszą lokalną reprezentację remote'a za pomocą `git fetch`, git dołączył (*merge*) nową pracę do naszej pracy (aby odzwierciedlić nowe zmiany na zdalnej gałęzi), a następnie wypchnął je za pomocą `git push`."
            ],
            "command": "git fetch; git merge o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Wspaniale! Czy jest jakiś sposób, żeby zrobić to bez wpisywania tylu komend?",
              "",
              "Oczywiście -- znasz już `git pull ` - jest po prostu skrótem dla fetch i merge. `git pull --rebase` jest bardzo wygodnym skrótem dla fetch i rebase!",
              "",
              "Zobaczmy, jak działają te skrócone polecenia."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Na początku z `--rebase`..."
            ],
            "afterMarkdowns": [
              "Tak samo jak wcześniej! Tylko o wiele krócej."
            ],
            "command": "git pull --rebase; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "A teraz z klasycznym `pull`."
            ],
            "afterMarkdowns": [
              "Jeszcze raz, dokładnie tak samo jak wcześniej!"
            ],
            "command": "git pull; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Ta kolejność fetchowania, rebase/merge i push jest dość powszechna. W kolejnych lekcjach zajmiemy się bardziej skomplikowanymi możliwościami . Na razie wypróbujmy to, czego się nauczyliśmy.",
              "",
              "Aby ukończyć ten poziom, wykonaj następujące kroki:",
              "",
              "* Sklonuj swoje repozytorium",
              "* Zasymuluj pracę zespołową (1 commit)",
              "* Scommituj własną pracę (1 commit)",
              "* Opublikuj swoją pracę, korzystając z *rebase*"
            ]
          }
        }
      ]
    },
    "it_IT": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Storico divergente",
              "",
              "Fin'ora abbiamo visto come usare `pull` per scaricare commit di altri e come usare `push` per caricare le nostre modifiche. Sembra abbastanza semplice, come fanno le persone a confondersi?",
              "",
              "La difficoltà si presenta quando lo storico dei repository *diverge*. Prima di discuterne nel dettaglio, vediamo un esempio...",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Immagina di clonare un repository di lunedì e di iniziare a lavorare su una nuova funzionalità. È arrivato venerdì e sei pronto a pubblicare la tua nuova feature -- ma oh no! I tuoi colleghi hanno scritto del codice durante la settimana che ha resto la tua feature obsoleta. Inoltre, hanno pubblicato questi commit sul repository remoto, quindi ora il *tuo* lavoro è basato su una versione *vecchia* del progetto che non è più rilevante.",
              "",
              "In questo caso, il comando `git push` è ambiguo. Eseguendo `git push`, git dovrebbe far tornare il repository remoto a come si trovava di lunedì? Dovrebbe cercare di aggiungere le tue modifiche senza rimuovere quelle dei colleghi? O dovrebbe ignorare totalmente le tue modifiche in quanto obsolete?",
              "",
              "Per via di questa ambiguità (dove gli storici divergono), git non ti permette di usare `push` per caricare le tue modifiche. Ti obbliga a scaricare la versione più recente del repository remoto prima di permetterti di condividere il tuo lavoro."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Tutto questo parlare! Vediamo questa situazione dal vivo."
            ],
            "afterMarkdowns": [
              "Visto? Non è successo nulla in quanto il comando fallisce. `git push` fallisce in quanto il tuo commit più recente, `C3`, è basato sullo stato del repository remoto a `C1`. Nel mentre però il remoto è stato aggiornato a `C2`, quindi git non accetta il tuo push."
            ],
            "command": "git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Come puoi risolvere questa situazione? È facile, tutto ciò che devi fare è far sì che il tuo lavoro sia basato sulla versione più recente del ramo remoto.",
              "",
              "Ci sono più modi per fare ciò, il più diretto dei quali è lo spostare il tuo lavoro tramite rebase. Diamo un'occhiata a come si fa."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Ora se ribasiamo prima di caricare il nostro lavoro..."
            ],
            "afterMarkdowns": [
              "Boom! Abbiamo aggiornato la nostra rappresentazione del remoto tramite `git fetch`, ribasato il nostro lavoro affinché rifletta i nuovi cambiamenti del remoto, e poi li abbiamo caricati con `git push`."
            ],
            "command": "git fetch; git rebase o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Ci sono altri modi per aggiornare il mio lavoro quando il repository remoto è stato modificato? Certamente! Diamo un'occhiata alla stessa situazione sfruttando invece il `merge`.",
              "",
              "Nonostante `git merge` non sposti il tuo lavoro (in quanto va a creare un commit di merge), è un modo per far vedere a git che tutte le modifiche del repository remoto sono state incorporate. Questo in quanto il ramo remoto è ora un *antenato* del tuo ramo locale, per cui il tuo commit comprende tutti i cambiamenti presenti nel ramo remoto.",
              "",
              "Vediamolo in azione..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Ora se usiamo merge invece di ribasare..."
            ],
            "afterMarkdowns": [
              "Boom! Abbiamo aggiornato la nostra rappresentazione del remoto con `git fetch`, *fuso* le nuove modifiche al nostro lavoro (per riflettere i cambiamenti del remoto), e caricato quest'ultimo con `git push`."
            ],
            "command": "git fetch; git merge o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Fantastico! C'è per caso un modo per farlo senza dover digitare tutti questi comandi?",
              "",
              "Certamente -- sai già che `git pull` è una scorciatoria per fetch e merge. Possiamo digitare `git pull --rebase` come scorciatoia per un fetch e un rebase, molto comodo!",
              "",
              "Vediamo questi comandi al lavoro."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Prima con `--rebase`..."
            ],
            "afterMarkdowns": [
              "Identico a prima! Solo molto più breve."
            ],
            "command": "git pull --rebase; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "E ora con un normale `pull`."
            ],
            "afterMarkdowns": [
              "Di nuovo, esattamente uguale a prima!"
            ],
            "command": "git pull; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Questo flusso di lavoro di recuperare cambiamenti, ribasare/fondere, e caricare il proprio lavoro è molto comune. Nelle lezioni future esamineremo delle versioni più complicate di questi flussi di lavoro, ma per ora proviamo a fare questo.",
              "",
              "Per risolvere il livello, compi i seguenti passi:",
              "",
              "* Clona il tuo repository",
              "* Simula del lavoro da parte di altri (1 commit)",
              "* Effettua tu delle modifiche (1 commit)",
              "* Pubblica il tuo lavoro tramite *rebase*"
            ]
          }
        }
      ]
    },
    "tr_TR": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Çatışan Çalışma",
              "",
              "Şu ana kadar başkalarından nasıl `pull` yaparak commit alacağımızı ve kendi değişikliklerimizi nasıl `push` yapacağımızı gördük. Oldukça basit görünüyor, o zaman insanlar neden bu kadar karışabiliyor?",
              "",
              "Zorluk, depo geçmişi *çatıştığında* başlar. Bunun ayrıntılarını tartışmadan önce, bir örneğe göz atalım..."
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Pazartesi günü bir depo klonladığınızı ve yan bir özellik üzerinde çalışmaya başladığınızı hayal edin. Cuma günü özelliğinizi yayınlamaya hazır olduğunuzda, aman Tanrım! İş arkadaşlarınız hafta boyunca bir sürü kod yazmış ve özelliğiniz artık geçersiz ve güncel değil. Ayrıca bu commit'leri ortak uzak depoya da göndermişler, bu yüzden *sizin* çalışmanız artık eski bir proje sürümüne dayanıyor.",
              "",
              "Bu durumda, `git push` komutu belirsizdir. `git push` komutunu çalıştırırsanız, git uzak depoyu Pazartesi günkü haline mi döndürmeli? Kodunuzu yeni kodları silmeden mi eklemeli? Yoksa tamamen geçersiz olan değişikliklerinizi yok saymalı mı?",
              "",
              "Çünkü bu durumda çok fazla belirsizlik vardır (geçmiş çatıştığı için), git değişikliklerinizi `push` etmenize izin vermez. Gerçekten de, değişikliklerinizi paylaşmadan önce uzak deponun en son durumunu entegre etmenizi zorunlu kılar."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Çok konuştuk! Hadi bu durumu pratikte görelim."
            ],
            "afterMarkdowns": [
              "Görüyorsunuz değil mi? Hiçbir şey olmadı çünkü komut başarısız oldu. `git push` komutu başarısız oldu çünkü en son commit'iniz `C3`, `C1`'den alınan uzak depoya dayalıydı. Ancak uzak depo `C2`'ye güncellenmişti, bu yüzden git `push` işleminizi reddetti."
            ],
            "command": "git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Bu durumu nasıl çözebilirsiniz? Çok basit, tek yapmanız gereken çalışmanızı uzak dalın en son sürümüne dayandırmak.",
              "",
              "Bunu yapmanın birkaç yolu vardır, ancak en basit yöntem çalışmanızı rebase yaparak taşımaktır. Hadi bunu nasıl göründüğüne bakalım."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Şimdi eğer önce rebase yaparsak..."
            ],
            "afterMarkdowns": [
              "Vay! Uzak deponun yerel temsiline `git fetch` ile güncelleme yaptık, çalışmamızı uzak depodaki yeni değişiklikleri yansıtacak şekilde rebase ettik ve ardından `git push` ile gönderdik."
            ],
            "command": "git fetch; git rebase o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Uzak depo güncellendiyse, çalışmamı güncellemenin başka yolları var mı? Tabii ki! Aynı şeyi `merge` kullanarak da gözden geçirelim.",
              "",
              "`git merge` çalışmanızı taşımaz (sadece bir merge commit'i oluşturur), ancak git'e uzak deponun tüm değişikliklerini entegre ettiğinizi bildirmenin bir yoludur. Çünkü uzak dal artık kendi dalınızın *atası* haline gelir, yani commit'iniz uzak dalın tüm commit'lerini yansıtır.",
              "",
              "Bunu gösterelim..."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Şimdi rebase yerine merge yapalım..."
            ],
            "afterMarkdowns": [
              "Vay! Uzak deponun yerel temsiline `git fetch` ile güncelleme yaptık, yeni çalışmaları *merge* ederek çalışmamıza entegre ettik (yeni değişiklikleri yansıtmak için) ve ardından `git push` ile gönderdik."
            ],
            "command": "git fetch; git merge o/main; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Harika! Peki, bu işlemi bu kadar çok komut yazmadan yapmanın bir yolu var mı?",
              "",
              "Tabii ki -- zaten `git pull`'ün bir fetch ve merge kısaltması olduğunu biliyorsunuz. Ne kadar pratik, `git pull --rebase` ise fetch ve rebase için kısaltmadır!",
              "",
              "Hadi bu kısaltma komutlarını görelim."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "İlk olarak `--rebase` ile..."
            ],
            "afterMarkdowns": [
              "Tıpkı öncekiler gibi! Ama çok daha kısa."
            ],
            "command": "git pull --rebase; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Şimdi ise normal `pull` ile."
            ],
            "afterMarkdowns": [
              "Yine, tıpkı öncekiler gibi!"
            ],
            "command": "git pull; git push",
            "beforeCommand": "git clone; git fakeTeamwork; git commit"
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Bu fetch, rebase/merge ve push iş akışı oldukça yaygındır. Gelecek derslerde bu iş akışlarının daha karmaşık versiyonlarını inceleyeceğiz, ancak şimdilik bunu deneyelim.",
              "",
              "Bu seviyeyi çözmek için şu adımları takip etmeniz gerekiyor:",
              "",
              "* Depoyu klonlayın",
              "* Takım çalışması sahteleyin (1 commit)",
              "* Kendi çalışmanızı commit edin (1 commit)",
              "* Çalışmanızı *rebase* yaparak yayınlayın"
            ]
          }
        }
      ]
    }
  }
};
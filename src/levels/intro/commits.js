exports.level = {
  "name": {
    "en_US": "Introduction to Git Commits",
    "de_DE": "Einführung in Git Commits",
    "es_AR": "Introducción a los commits de Git",
    "es_MX": "Introducción a los commits de Git",
    "es_ES": "Introducción a los commits de Git",
    "pt_BR": "Introdução aos commits no Git",
    "gl": "Introducción ós commits de Git",
    "fr_FR": "Introduction aux commits avec Git",
    "ja": "Gitのコミット",
    "ko": "Git 커밋 소개",
    "zh_CN": "Git Commit",
    "zh_TW": "介紹 git commit ",
    "ro": "Introducere în Git Commit",
    "ru_RU": "Знакомство с Git Commit ",
    "uk": "Знайомство з комітами в Git",
    "vi": "Giới thiệu về Git Commit",
    "sl_SI": "Uvod v Git Commit",
    "pl": "Wprowadzenie do commitów Gita",
    "it_IT": "Introduzione ai commit in Git",
    "ta_IN": "கிட் கமிட்கள் ஒரு அறிமுகம்",
    "tr_TR": "Git Commit'e Giriş"
  },
  "goalTreeString": "{\"branches\":{\"main\":{\"target\":\"C3\",\"id\":\"main\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"}},\"HEAD\":{\"target\":\"main\",\"id\":\"HEAD\"}}",
  "solutionCommand": "git commit;git commit",
  "startTree": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"}},\"HEAD\":{\"target\":\"main\",\"id\":\"HEAD\"}}",
  "hint": {
    "en_US": "Just type in 'git commit' twice to finish!",
    "de_DE": "Gib einfach zweimal 'git commit' ein um den Level abzuschließen",
    "es_AR": "¡Simplemente tipeá 'git commit' dos veces para terminar!",
    "es_MX": "¡Simplemente escribe 'git commit' dos veces para terminar!",
    "es_ES": "¡Simplemente escribe 'git commit' dos veces para terminar!",
    "pt_BR": "Simplesmente digite 'git commit' duas vezes para concluir!",
    "gl": "Simplemente escribe 'git commit' dúas veces para terminar.",
    "fr_FR": "Il suffit de saisir 'git commit' deux fois pour réussir !",
    "zh_CN": "执行两次 'git commit' 就可以过关了！",
    "zh_TW": "輸入兩次 'git commit' 就可以完成！",
    "ja": "'git commit'コマンドを2回打てば完成!",
    "ko": "'git commit'이라고 두 번 치세요!",
    "ro": "Scrie 'git commit' de două ori pentru a termina!",
    "ru_RU": "Попробуй дважды выполнить команду 'git commit' ;)",
    "uk": "Спробуй двічі виконати команду 'git commit' ;)",
    "vi": "Đơn giản là cứ gõ 'git commit' 2 lần",
    "sl_SI": "Preprosto dvakrat vpiši 'git commit' in zaključi!",
    "pl": "Aby zakończyć, wystarczy dwukrotnie wpisać 'git commit'!",
    "it_IT": "Digita 'git commit' due volte per finire!",
    "ta_IN": "இந்த நிலையை நிரைவு செய்ய 'git commit' என்று இரண்டு முறை தட்டச்சு செய்க!",
    "tr_TR": "Bölümü bitirmek için sadece iki kere 'git commit' yazmanız yeterlidir."
  },
  "disabledMap": {
    "git revert": true
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Git Commits",
              "A commit in a git repository records a snapshot of all the (tracked) files in your directory. It's like a giant copy and paste, but even better!",
              "",
              "Git wants to keep commits as lightweight as possible though, so it doesn't just blindly copy the entire directory every time you commit. It can (when possible) compress a commit as a set of changes, or a \"delta\", from one version of the repository to the next.",
              "",
              "Git also maintains a history of which commits were made when. That's why most commits have ancestor commits above them -- we designate this with arrows in our visualization. Maintaining history is great for everyone working on the project!",
              "",
              "It's a lot to take in, but for now you can think of commits as snapshots of the project. Commits are very lightweight and switching between them is wicked fast!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Let's see what this looks like in practice. On the right we have a visualization of a (small) git repository. There are two commits right now -- the first initial commit, `C0`, and one commit after that `C1` that might have some meaningful changes.",
              "",
              "Hit the button below to make a new commit."
            ],
            "afterMarkdowns": [
              "There we go! Awesome. We just made changes to the repository and saved them as a commit. The commit we just made has a parent, `C1`, which references which commit it was based off of."
            ],
            "command": "git commit",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Go ahead and try it out on your own! After this window closes, make two commits to complete the level."
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
              "## Git Commits",
              "Ein Commit in einem Git-Repository speichert eine Abbildung aller Dateien in deinem Projektverzeichnis. Es ist wie ein riesiges Kopieren und Einfügen, nur besser.",
              "",
              "Allerdings will Git die Commits so schlank wie möglich halten, also kopiert es nicht einfach stur das ganze Verzeichnis jedes Mal wenn du committest. Es kann (wenn möglich) Commits als Menge von Änderungen zusammenpacken, von einer Version des Repositorys zur nächsten.",
              "",
              "Außerdem führt Git ein Protokoll darüber, welche Commits wann gemacht wurden, und welcher auf welchen folgt. Deshalb werden die Commits hier mit ihrem Vorgänger über sich gezeigt -- wir verwenden Pfeile zur Darstellung der Beziehung. Dieses Protokoll zu haben ist eine tolle Sache für jeden, der an einem Projekt arbeitet.",
              "",
              "Das war jetzt eine Menge Neues, aber vorerst kannst du dir Commits einfach als Abbildungen des Projekts vorstellen. Commits sind sehr ressourcenschonend, und zwischen ihnen wechseln geht superschnell!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Mal sehen wie das in der Praxis ist. Rechts sehen wir ein (kleines) Git-Repository. Es gibt aktuell zwei Commits -- den initialen, `C0`, und den danach, `C1`, der irgendwelche Änderungen enthält.",
              "",
              "Klick die Schaltfläche unten um einen neuen Commit zu erzeugen:"
            ],
            "afterMarkdowns": [
              "Fertig. Klasse! Wir haben gerade Änderungen gemacht und als Commit im Repository gespeichert. Der Commit, den wir gerade gemacht haben, hat den Vorgänger `C1`; der verweist wiederum auf den Commit, auf dem er basiert: `C0`."
            ],
            "command": "git commit",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Probier das Committen gleich mal aus! Mach zwei Commits um den Level abzuschließen."
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
              "## Gitのコミット",
              "コミットによって、ディレクトリ中の全てのファイルのスナップショットを記録します。巨大なコピー＆ペーストのようなものですが、実際にはそれよりずっと良いものです。",
              "",
              "Gitではコミットを可能な限り軽量に保つために、コミット毎にフォルダ全体をコピーしません。実際にはGitは、コミットを直前のバージョンから一つ先のバージョンへの「変更の固まり」あるいは「差分」として記録します。後で出てきますが、ほとんどのコミットが親を持っているのはそういう理由からです。",
              "",
              "リポジトリをcloneする時には、内部動作としてはコミットの差分をたどって全ての変更を取得しています。cloneした時に以下のような表示が出るのは：",
              "",
              "`resolving deltas`（訳：差分を解決中）",
              "",
              "このためです。",
              "",
              "もっと説明したいところですが、しばらくはコミットをスナップショットのようなものだと考えてください。コミットは非常に軽量であり、コミット間の移動も非常に高速です。"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "これがどういうことか、動きを見ていきましょう。図には（小さな）gitリポジトリが描かれています。コミットが2つあります -- `C0`という名前の初回のコミットがあり、`C1`という名前の次のコミットが続きます。これは何か意味のある変更かもしれません。",
              "",
              "下のボタンを押下して新しいコミットを作ってみましょう。"
            ],
            "afterMarkdowns": [
              "できました! 良いですね。いまリポジトリに新しい変更が加えられ、1つのコミットとして保存されました。作成したコミットには親がいて、このコミットの出発点となった`C1`を指しています。"
            ],
            "command": "git commit",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "実際に手を動かしてみましょう。このウィンドウを閉じたら、試しに2回コミットをしてみましょう。"
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
              "## Commits de Git",
              "Un commit en un repositorio git registra un snapshot de todos los archivos en tu directorio. Es como un _gran_ copy&paste, ¡pero incluso mejor!",
              "",
              "Git pretende mantener los commits tan livianos como sea posible, por lo que no copia ciegamente el directorio completo cada vez que commiteás. Puede (cuando sea posible) comprimir un commit como un conjunto de cambios (o un _\"delta\"_) entre una versión de tu repositorio y la siguiente.",
              "",
              "Git mantiene, también, un historial de qué commits se hicieron cuándo. Es por eso que la mayoría de los commits tienen commits ancestros arriba suyo -- designamos esto con flechas en nuestra visualización. ¡Mantener el historial es genial para todos los que trabajan en el proyecto!",
              "",
              "Hay un montón en lo que ahondar, pero por ahora podés pensar en los commits como snapshots de tu proyecto. Los commits son muy livianos, y ¡cambiar de uno a otro es terriblemente rápido!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Veamos cómo se ve esto en la práctica. A la derecha tenemos una visualización de un (pequeño) repositorio git. Hay dos commits ahora: el commit inicial, `C0`, y un commit que lo sigue, `C1`, que podría tener algunos cambios interesantes.",
              "",
              "Dale al botón de abajo para hacer un nuevo commit."
            ],
            "afterMarkdowns": [
              "¡Ahí va! Increíble. Acabamos de hacer cambios al repositorio y los guardamos como un commit. El commit que acabamos de crear tiene un padre, `C1`, que referencia al commit en que se basó este."
            ],
            "command": "git commit",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "¡Dale, intentalo vos ahora! Cuando se cierre esta ventana, hacé dos commits para completar el nivel."
            ]
          }
        }
      ]
    },
    "es_MX": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Commits de Git",
              "Un commit en un repositorio git registra un snapshot de todos los archivos en tu directorio. Es como un _gran_ copy&paste, ¡pero incluso mejor!",
              "",
              "Git pretende mantener los commits tan livianos como sea posible, por lo que no copia ciegamente el directorio completo cada vez que haces commit. Puede (cuando sea posible) comprimir un commit como un conjunto de cambios (o un _\"delta\"_) entre una versión de tu repositorio y la siguiente.",
              "",
              "Git mantiene, también, un historial de qué commits se hicieron cuándo. Es por eso que la mayoría de los commits tienen commits ancestros arriba suyo -- designamos esto con flechas en nuestra visualización. ¡Mantener el historial es genial para todos los que trabajan en el proyecto!",
              "",
              "Hay un montón en lo que ahondar, pero por ahora puedes pensar en los commits como snapshots de tu proyecto. Los commits son muy livianos, y ¡cambiar de uno a otro es terriblemente rápido!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Veamos cómo se ve esto en la práctica. A la derecha tenemos una visualización de un (pequeño) repositorio git. Hay dos commits ahora: el commit inicial, `C0`, y un commit que lo sigue, `C1`, que podría tener algunos cambios interesantes.",
              "",
              "Dale al botón de abajo para hacer un nuevo commit."
            ],
            "afterMarkdowns": [
              "¡Ahí va! Increíble. Acabamos de hacer cambios al repositorio y los guardamos como un commit. El commit que acabamos de crear tiene un padre, `C1`, que referencia al commit en que se basó este."
            ],
            "command": "git commit",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "¡Vamos, inténtalo ahora! Cuando se cierre esta ventana, haz dos commits para completar el nivel."
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
              "## Commits de Git",
              "Un commit en un repositorio git registra un snapshot de todos los archivos en tu directorio. Es como un _gran_ copy&paste, ¡pero incluso mejor!",
              "",
              "Git pretende mantener los commits tan livianos como sea posible, por lo que no copia ciegamente el directorio completo cada vez que haces un commit. Puede (cuando es posible) comprimir un commit como un conjunto de cambios (o un _\"delta\"_) entre una versión de tu repositorio y la siguiente.",
              "",
              "Git mantiene, también, un historial de qué commits se hicieron y cuándo. Es por eso que la mayoría de los commits tienen commits ancestros encima -- designamos esto con flechas en nuestra visualización. ¡Mantener el historial es genial para todos los que trabajan en el proyecto!",
              "",
              "Hay un montón en lo que ahondar, pero por ahora puedes pensar en los commits como snapshots de tu proyecto. Los commits son muy livianos, y ¡cambiar de uno a otro es terriblemente rápido!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Veamos cómo se ve esto en la práctica. A la derecha tenemos una visualización de un (pequeño) repositorio git. Hay dos commits: el commit inicial, `C0`, y un commit que lo sigue, `C1`, que podría tener algunos cambios interesantes.",
              "",
              "Dale al botón de abajo para crear un nuevo commit."
            ],
            "afterMarkdowns": [
              "¡Allá va! Increíble. Acabamos de hacer cambios al repositorio y los guardamos como un commit. El commit que acabamos de crear tiene un padre, `C1`, que referencia al commit en el que se basó este."
            ],
            "command": "git commit",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "¡Venga, inténtalo ahora! Cuando se cierre esta ventana, crea dos commits para completar el nivel."
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
              "## Commits no Git",
              "Um commit em um repositório git registra uma fotografia (snapshot) de todos os arquivos no seu diretório. É como um _grande_ copy&paste, mas ainda melhor!",
              "",
              "O Git tem por objetivo manter os commits tão leves quanto possível, de forma que ele não copia cegamente o diretório completo toda vez que você commita. Ele pode (quando possível) comprimir um commit como um conjunto de mudanças (ou um _\"delta\"_) entre uma versão do seu repositório e a seguinte.",
              "",
              "O Git também mantém um histórico de quando ocorreu cada commit. É por isso que a maioria dos commits tem ancestrais acima de si -- que indicamos usando setas na nossa visualização. Manter a história é ótimo para todos que trabalham no projeto!",
              "",
              "Há muito para aprender, mas por enquanto pense nos commits como snapshots do seu projeto. Os commits são muito leves, e mudar de um para outro é extremamente rápido!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Vejamos o que isso significa na prática. À direita, temos uma visualização de um (pequeno) repositório git. Há dois commits no momento: o commit inicial, `C0`, e um commit que se segue, `C1`, que poderia conter algumas mudanças interessantes.",
              "",
              "Clique no botão abaixo para fazer um novo commit."
            ],
            "afterMarkdowns": [
              "Aí vamos nós! Incrível. Acabamos de fazer mudanças no repositório e as guardamos como um commit. O commit que acabamos de criar tem um pai, `C1`, que referencia em qual commit ele se baseou."
            ],
            "command": "git commit",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Vamos lá, tente você agora! Quando esta janela se fechar, faça dois commits para completar o nível."
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
              "## Commits en Git",
              "Un commit nun repositorio de git rexistra unha fotografía (snapshot) de tódolos arquivos no seu directorio. É coma un copy&paste xigante, ¡pero todavía mellor!",
              "",
              "Git quere gardar os commits o máis pequenos posíbel, por iso non copia directamente o directorio completo sempre que fas un commit. El pode (cando é posíbel) comprimir nun commit un conxunto de cambios (ou un _\"delta\"_) entre unha versión do teu respositorio e o seguinte.",
              "",
              "Git tamén garda un histórico de cando se fixo cada cambio. Por iso a maioría dos commits teñen ancestros enriba deles, e nos indicámolos con frechas na nosa visualización. ¡Manter a historia é óptimo para tódolos que traballan no proxecto!",
              "",
              "Hai moito que aprender, pero por agora podes pensar que os commits son fotos do teu proxecto. Os commits son liviáns, e cambiar dun para o outro é extremadamente rápido!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Vexamos o que iso significa na práctica. Á dereita, temos unha visualización dun (pequeno) repositorio de git. Hai dous commits por agora: o commit inicial, `C0`, e un commit que lle segue, `C1`, que podería ter algúns cambios interesantes.",
              "",
              "Pincha no botón de abaixo para facer un novo commit."
            ],
            "afterMarkdowns": [
              "¡Alá imos! Mi ma!. Fixemos cambios no repositorio e gardámolos nun commit. O commit que creaches ten un pai, `C1`, que é unha referencia do commit no que se basea."
            ],
            "command": "git commit",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Alá imos. ¡Inténtao ti agora! Cando se peche a ventá, fai dous commits para completar o nivel."
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
              "## Commits Git",
              "Un commit dans un dépôt Git (repository) enregistre une image (snapshot) de tous les fichiers du répertoire. Comme un Copier-Coller géant, mais en bien mieux !",
              "",
              "Git fait en sorte que les commits soient aussi légers que possible donc il ne recopie pas tout le répertoire à chaque commit. En fait, Git n'enregistre que l'ensemble des changements (\"delta\") depuis la version précédente du dépôt. C'est pour cette raison que la plupart des commits ont un commit parent -- ainsi que nous le verrons plus tard.",
              "",
              "Pour cloner un dépôt, il faut décompresser (\"résoudre\") tous ces deltas. C'est la raison pour laquelle la commande écrit :",
              "",
              "`resolving deltas`",
              "",
              "lorsque l'on clone un dépôt.",
              "",
              "C'est beaucoup à absorber, mais pour l'instant vous pouvez considérer les commits comme des snapshots du projet. Les commits sont très légers et passer de l'un à l'autre est très rapide !"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Voyons à quoi cela ressemble en pratique. Sur la droite, on peut visualiser un (petit) dépôt Git. Il y a pour l'instant deux commits -- le premier commit initial, `C0`, et un commit suivant `C1` qui aurait des changements significatifs.",
              "",
              "Appuyez sur le bouton ci-dessous pour faire un nouveau commit."
            ],
            "afterMarkdowns": [
              "C'est parti ! Super. Nous venons de faire des modifications sur le dépôt et de sauvegarder celles-ci dans un commit. Ce commit que nous venons de faire a un parent, `C1`, qui référence le commit sur lequel il est basé."
            ],
            "command": "git commit",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Allez-y et essayez par vous-même ! Après la fermeture de cette fenêtre, faites deux commits pour terminer ce niveau."
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
              "## Git 커밋",
              "커밋은 Git 저장소에 여러분의 디렉토리에 있는 모든 파일에 대한 스냅샷을 기록하는 것입니다. 디렉토리 전체를 복사하여 붙여넣는것과 유사하지만, 훨씬 유용한 방법입니다!",
              "",
              "Git은 가능한 한 커밋을 가볍게 유지하고자 하기때문에, 커밋할 때마다 디렉토리 전체를 복사하진 않습니다. 각 커밋은 저장소의 이전 버전과 다음 버전의 변경내역(\"delta\"라고도 함)을 저장합니다. 그래서 대부분의 커밋이 그 커밋 위의 부모 커밋을 가리킵니다. -- 다음 화면에서 곧 살펴보게 될 것입니다.",
              "",
              "저장소를 복제(clone)하려면 모든 변경분(delta)를 풀어내야 하는데, 이 때문에 명령행 결과로 아래 문구를 볼 수 있습니다.",
              "",
              "`resolving deltas`",
              "",
              "알아야 할 것이 꽤 많습니다만, 일단은 커밋을 프로젝트의 스냅샷들로 생각하면 충분합니다. 커밋은 매우 가볍고 커밋 사이의 전환도 매우 빠르다는 것을 기억해주세요!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "연습할 때 어떻게 보이는지 확인해봅시다. 오른쪽 화면에 git 저장소를 그림으로 표현해 놓았습니다. 현재 두번 커밋한 상태입니다 -- 첫번째 커밋으로 `C0`, 그 다음으로 `C1`이라는 어떤 의미있는 변화가 있는 커밋이 있습니다.",
              "",
              "아래 버튼을 눌러 새로운 커밋을 만들어보세요."
            ],
            "afterMarkdowns": [
              "이렇게 보입니다! 멋지죠. 우리는 방금 저장소 내용을 변경해서 하나의 커밋으로 저장했습니다. 방금 만든 커밋은 부모는 `C1`이고, 어떤 커밋을 기반으로 변경된 것인지를 가리킵니다."
            ],
            "command": "git commit",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "계속해서 직접 한번 해보세요! 이 창을 닫고, 커밋을 두 번 하면 다음 레벨로 넘어갑니다."
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
              "## Git Commit",
              "Git 仓库中的提交记录保存的是你的目录下所有文件的快照，就像是把整个目录复制，然后再粘贴一样，但比复制粘贴优雅许多！",
              "",
              "Git 希望提交记录尽可能地轻量，因此在你每次进行提交时，它并不会盲目地复制整个目录。条件允许的情况下，它会将当前版本与仓库中的上一个版本进行对比，并把所有的差异打包到一起作为一个提交记录。",
              "",
              "Git 还保存了提交的历史记录。这也是为什么大多数提交记录的上面都有 parent 节点的原因 —— 我们会在图示中用箭头来表示这种关系。对于项目组的成员来说，维护提交历史对大家都有好处。",
              "",
              "关于提交记录太深入的东西咱们就不再继续探讨了，现在你可以把提交记录看作是项目的快照。提交记录非常轻量，可以快速地在这些提交记录之间切换！"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "咱们来实际操作一下，看看提交记录是怎样的。右边展示了一个（小型）Git 代码库。当前有两个提交记录 —— 初始提交 `C0` 和其后可能包含某些有用修改的提交 `C1`。",
              "",
              "点击下面的按钮创建一个新的提交记录。"
            ],
            "afterMarkdowns": [
              "好了！非常棒！我们刚才修改了代码库，并把这些修改保存成了一个提交记录 `C2`。`C2` 的 parent 节点是 `C1`， parent 节点是当前提交中变更的基础。"
            ],
            "command": "git commit",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "接下来自己试一试吧。当前窗口关闭后，完成两次提交就可以过关！"
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
              "## git commit",
              "一個 commit 在 git repo 中會記錄目錄下所有文件的快照。感覺像是大量的複製和貼上，但 git 的速度更快！",
              "",
              "git 希望 commit 儘可能地不占空間，所以每次進行 commit 的時候，它不會單純地複製整個目錄。實際上它把每次 commit 視為從目前的版本到下一個版本的變化量，或者說一個 \"（delta）\"。",
              "",
              "git 會保存 commit 的歷史紀錄，所以，絕大部分的 commit 的上面都會有 parent commit，在我們的圖形表示中，箭頭方向表示從 parent commit 到所對應的 child commit，保存這樣子的一個歷史紀錄是非常有用的。",
              "",
              "要學的東西有很多，但現在你可以把 commit 當作是當下的 project 的快照。commit 不佔空間且可以快速切換！"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "在實例中學習 commit。右邊是一個（小）git repository。當前有兩個 commit，一開始的 commit `C0` 以及 `C1` 這一個 commit 來表示之後可能的一些修改。",
              "",
              "點擊下面的按鈕生成新的 commit。"
            ],
            "command": "git commit",
            "afterMarkdowns": [
              "看吧！很厲害！我們對於文件做了一些修改，並且把這些修改表示成一個 commit。剛剛做的 commit `C2` 有一個 parent commit `C1`，代表此次修改是從那裡過來的。"
            ],
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "接下來你可以隨便測試。當目前的視窗關閉之後，輸入兩次 commit 就可以過關！"
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
              "## Git Commits",
              "Un commit într-un repozitoriu Git înregistrează o captură (snapshot) a tuturor fișierelor (urmărite) din directorul tău. E ca un copy&paste uriaș, dar mult mai bun!",
              "",
              "Git vrea să păstreze commit-urile cât mai simplu posibil, astfel că nu copiază pur și simplu întregul director de fiecare dată când faci un commit. Poate (dacă este posibil) să comprime un commit ca un set de modificări, sau un \"delta\", de la o versiune a repozitoriului la următoarea.",
              "",
              "Git, de asemenea, păstrează un istoric al commit-urilor, care și când au fost făcute. De aceea majoritatea commit-urilor au commit-uri anterioare deasupra lor -- afișăm acest lucru cu săgeți în vizualizarea noastră. Păstrarea istoricului este utilă pentru toți cei care lucrează la proiect!",
              "",
              "Este mult de învățat, dar pentru moment poți să te gândești la commit-uri ca la capturi/versiuni  ale proiectului. Commit-urile sunt foarte ușoare și schimbarea între ele este extrem de rapidă!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Dați să vedem cum arată asta în practică. În dreapta avem o vizualizare a unui (mic) repozitoriu Git. La moment avem două commit-uri -- primul commit inițial, `C0`, și un commit după acesta, `C1`, care ar putea avea unele modificări semnificative.",
              "",
              "Dați click pe butonul de mai jos pentru a face un nou commit."
            ],
            "afterMarkdowns": [
              "Super! Tocmai am făcut modificări în repozitoriu și le-am salvat ca un commit. Commit-ul pe care tocmai l-am făcut are un părinte, `C1`, care face referire la rândul său la commit-ul în baza căruia a fost făcut."
            ],
            "command": "git commit",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Acum, încearcă și tu! După ce această fereastră se va închide, fă două commit-uri pentru a termina nivelul."
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
              "## Коммиты в GIT",
              "Коммит в git репозитории хранит снимок всех файлов в директории. Почти как огромная копия, только лучше",
              "",
              "Git пытается быть лёгким и быстрым насколько это только возможно, так что он не просто слепо копирует всю директорию каждый раз, а ужимает (когда это возможно) коммит в набор изменений или «дельту» между текущей версией и предыдущей.",
              "",
              "Также Git хранит всю историю о том, когда какой коммит был сделан. Вот почему большинство коммитов имеют предков - мы указываем на предков стрелками при визуализации. Поддержка истории коммитов более чем важна для всех, кто работает над проектом!",
              "",
              "Можно ещё долго рассказывать о коммитах, но для простоты будем считать их полными снимками проекта. Коммиты очень легки, так что переключение между ними происходит предельно быстро!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Посмотрим, как это выглядит на практике. Справа расположена визуализация небольшого git репозитория. Сейчас в нём два коммита: первый, исходный коммит С0 и один коммит С1 после него, содержащий изменения.",
              "",
              "Нажми на кнопку, чтобы совершить коммит"
            ],
            "afterMarkdowns": [
              "Отлично. Мы только что внесли изменения в репозиторий и сохранили их как коммит. У коммита, который мы только что сделали, есть родитель, С1, который указывает на предыдущий коммит."
            ],
            "command": "git commit",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Пора попробовать! После того, как это окно закроется, сделай два коммита, чтобы пройти этот уровень."
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
              "## Коміти в Git",
              "Коміт в Git репозиторії зберігає моментальну копію всіх файлів в поточній директорії. Це як гігантська копіпаста, тільки краще.",
              "",
              "Git намагається зберігати коміти якнайпростіше й ефективніше, тому він не просто копіює всю директорію при кожному коміті. Він може стиснути коміт в набір правок чи \"дельту\" між двома версіями репозиторію.",
              "",
              "Git також зберігає історію коли і ким був створений той чи інший коміт. Тому більшість комітів мають комітів-предків, що знаходяться вище в ієрархії — ми це зображуємо стрілочками в нашій візуалізації. Історія — це необхідна річ для кожного, хто працює з конкретним проектом.",
              "",
              "Тут є багато над чим подумати, але наразі ти можеш уявляти коміти як моментальні знімки проекту. Коміти майже невагомі й перемикання між ними дуже швидке."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Давай подивимось, як це виглядає на практиці. Справа зображена візуалізація маленького Git-репозиторію. Наразі ми бачимо два коміти: початковий коміт `C0`, та наступний коміт `C1`, який містить якісь змістовні зміни.",
              "",
              "Натисни кнопку нижче, щоб створити новий коміт."
            ],
            "afterMarkdowns": [
              "Чудово. Ми щойно зробили деякі зміни з репозиторієм і зберегли їх як новий коміт. Цей коміт має предка `C1`, який вказує на коміт, з якого він був створений."
            ],
            "command": "git commit",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Спробуй сам. Після того як це вікно закриється, зроби два коміти, щоб пройти цей рівень."
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
              "## Git Commits",
              "Một commit trong một Git repository (kho chứa) lưu trữ một ảnh chụp của tất cả các file trong thư mục của bạn. Như kiểu copy và paste cỡ bự, thậm chí còn tốt hơn thế!",
              "",
              "Thế nhưng Git muốn giữ cho các commit nhẹ hết mức có thể, cho nên Git không copy tất cả thư mục một cách mù quáng mỗi khi bạn commit. Nó có thể (khi khả dĩ) nén commit như một tập hợp các thay đổi, hay là một \"bản so sánh\", giữa một phiên bản kho chứa Git với phiên bản tiếp theo.",
              "",
              "Đồng thời Git cũng lưu trữ lịch sử commit nào được tạo ra lúc nào. Đó là tại sao hầu hết các commit có commit tổ tiên phía trên nó -- chúng tôi đã hình tượng hóa mối quan hệ này bằng các mũi tên. Trong cộng tác nhóm thì việc gìn giữ lịch sử là rất có ích!",
              "",
              "Có vẻ là hơi nhiều lý thuyết rồi, bây giờ bạn chỉ cần hiểu các commit là các lát cắt của dự án. Các commit rất nhẹ nên việc chuyển qua lại giữa chúng thì nhanh vô cùng!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Thử thực hành chút nào. Ở bên phải chúng ta có mô tả một kho Git (nhỏ). Hiện tại đang có 2 commit, một là commit khởi nguyên `C0`, và một commit sau đó `C1` có thể đã có một vài thay đổi.",
              "",
              "Bấm nút bên dưới để tạo một commit mới."
            ],
            "afterMarkdowns": [
              "Đúng rồi! Tuyệt vời. Bạn vừa tạo thay đổi cho kho chứa và lưu vào commit. Cái commit bạn vừa tạo nó có cha, là `C1` đấy, có thể hiểu commit vừa được tạo dựa trên commit cũ hơn là C1."
            ],
            "command": "git commit",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Nào bây giờ thì thử tự làm bài tập nào! Sau khi đóng cửa sổ này, tạo ra 2 commit để hoàn thành cấp độ."
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
              "## Git Commits",
              "Commit v git repozitoriju zabeleži stanje vseh datotek v tvoji mapi. Deluje kot tak velik 'Izreži in Prilepi', vendar še bolje!",
              "",
              "Git hoče commite ohraniti majhne kot se le da, tako da ne skopira vsakič kar vseh datotek ob commitu. Lahko (kadar je možno) stisne commit le kot množico sprememb oziroma kot \"delto\" sprememb med eno in drugo različico v repozitoriju.",
              "",
              "Git vodi tudi zgodovino o tem, kdaj je bil kateri commit narejen. Zato ima večina commitov nad seboj svoje prednike -- to je v vizualizaciji predstavljeno s puščicami. Vzdrževanje zgodovine je uporabno za vse, ki delajo na projektu!",
              "",
              "Veliko je za dojeti na začetku, ampak za zdaj si lahko predstavljaš commite kot posnetek projekta v določenem času. Commiti so zelo majhni in prehajanje med njimi je noro hitro!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Poglejmo kako to izgleda v praksi. Na desni imamo vizualizacijo (majhnega) git repozitorija. Trenutno imamo dva commita -- prvi začetni commit, `C0`, in še en commit za tem, `C1`, ki ima lahko pomembne spremembe.",
              "",
              "Pritisni gumb spodaj, da narediš nov commit."
            ],
            "afterMarkdowns": [
              "Tako ja! Super. Pravkar smo naredili spremembe v repozitoriju in jih shranili kot commit. Commit, ki smo ga naredili ima starša, `C1`, ki nam pove iz katerega commita smo izhajali."
            ],
            "command": "git commit",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Čas je, da poizkusiš sam! Ko se to okno zapre, naredi dva commita, da dokončaš to stopnjo."
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
              "## Commity Gita",
              "`commit` w repozytorium Gita rejestruje migawkę wszystkich (śledzonych) plików w twoim katalogu. To jak gigantyczne kopiowanie i wklejanie, ale jeszcze lepsze!",
              "",
              "Git stara się, aby commity były tak lekkie, jak to tylko możliwe, więc nie kopiuje na ślepo całego katalogu za każdym razem, gdy zatwierdzasz zmiany. Możesz (jeśli to możliwe) skompresować commita jako zestaw zmian (lub _\"delta\"_) między jedną wersją w repozytorium a następną.",
              "",
              "Git przechowuje również całą historię, kiedy dokonano każdego zatwierdzenia. Dlatego większość commitów ma na sobie zmiany przodków -- oznaczamy to strzałkami w naszej wizualizacji. Zachowanie historii to świetna funkcja dla wszystkich, którzy pracują nad projektem!",
              "",
              "To sporo do zapamiętania, ale na razie możesz myśleć o commitach jako \"rewizjach\" albo migawkach projektu. Są bardzo lekkie, a przełączanie się między nimi jest niesamowicie szybkie!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Zobaczmy, jak to wygląda w praktyce. Po prawej stronie mamy wizualizację (małego) repozytorium Gita. Istnieją dwa zatwierdzenia:\n początkowy commit `C0`, a następnie po nim commit `C1`, który może mieć kilka interesujących zmian.",
              "",
              "Kliknij przycisk poniżej, aby dodać nowego commita."
            ],
            "afterMarkdowns": [
              "Gotowe! Niesamowite. Właśnie wprowadziliśmy zmiany w repozytorium i zapisaliśmy je jako commita. Commit, który właśnie wykonaliśmy, ma rodzica `C1`, który odnosi się do commitu, na którym się opierał."
            ],
            "command": "git commit",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Śmiało, wypróbuj to! Po zamknięciu tego okna wykonaj dwa commity, aby ukończyć poziom."
            ]
          }
        }
      ]
    },
    "ta_IN": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## கிட் கமிட்கள்",
              "கிட் கமிட் உங்கள் கோப்பகத்தில் உள்ள கண்காணிக்கப்பட்ட (tracked) கோப்புகளை கிட் களஞ்சியத்தில் ஒரு நகலாக பதிவு செய்கின்றது. ஆனால் இது முழு நகல் எடுத்து ஒட்டுவதை விட சிறந்தது!",
              "",
              "கிட் கமிட்களை முடிந்தவரை இலகுவாக இருக்கும்படி செய்கின்றது, எனவே நீங்கள் ஒவ்வொரு முறை கமிட் செய்யும் போதும் கிட் கோப்பகங்களை கண்மூடித்தனமாக நகலெடுக்காது. அது (முடிந்தால்) கமிட்களை சுருக்கப்பட்ட மாற்றங்களின் தொகுப்பாகவோ, அல்லது களஞ்சியத்தில் ஏற்க்கனவே உள்ள பதிப்பின் \"வேறுபாட்டை\" மட்டும் கண்க்கிட்டோ சேமிக்க செயிகிறது.",
              "",
              "மேலும் கிட் கமிட்கள் எப்போது செய்யப்படுகிறது என்பதன் வரலாற்றையும் பராமரிக்கிறது. அதனால் தான் பெரும்பான்மையான கமிட்கள் முன்பு பதிவிட்ட கமிட்களை பின் தொடருகின்றன -- நமது வரைபடங்கள் அதனை அம்பு குறியீடுகளாக காட்டு கின்றன. வரலாற்றைப் பராமரிப்பது கணினிதிட்டத்தில் பணிபுரியும் அனைவருக்கும் உதவியாக இருக்கும்!",
              "",
              "புரிந்து கொள்ள நிறைய இருக்கிறது, ஆனால் இப்போதைக்கு நீங்கள் கமிட்களை திட்டத்தின் பிரதியாக நினைக்கலாம். கமிட்டுகள் மிகவும் இலகுவானவை மேலும் அவற்றுக்கிடையே மாறுவது மிகவும் எளிமையானது!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "இது நடைமுறையில் எப்படி இருக்கும் என்று பார்ப்போம். இங்கு வலதுபுறத்தில் ஒரு (சிறிய) கிட் களஞ்சியத்தின் காட்சிப்படுத்தல் உள்ளது. இப்போது அதில் இரண்டு கமிட்கள் உள்ளன -- முதல் கமிட், `C0`, மற்றும் மேலும் இரண்டாவதாக `C1` அதில் சில பயண்னுள்ள மாற்றங்கள் இருக்கலாம்.",
              "",
              "புதிய கமிட் செய்ய கீழே உள்ள பொத்தானை அழுத்தவும்."
            ],
            "afterMarkdowns": [
              "அவ்வலவுதான்! அருமை. நாம் களஞ்சியத்தில் மாற்றங்களைச் செய்து கமிட்டாக சேமித்துள்ளோம். இப்போது செய்த கமிட்டிர்க்கு `C1` மூலமாக உள்ளது, அது அதனுடைய மூலத்தை தொடர்ந்து உள்ளது."
            ],
            "command": "git commit",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "இப்போது இந்த திரை மூடிய பிறகு நீங்கள் முயற்சி செய்யுங்கள்!, இந்த நிலையை நிரைவு செய்ய இரண்டு கமிட்டுகள் செய்யுங்கள்."
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
              "## Git Commits",
              "Un commit in git memorizza un'instantanea di tutti i file (tracciati) della cartella di lavoro. È come un enorme copia-incolla, ma migliore!",
              "",
              "Git conserva i commit nel modo più leggero possibile, perciò non copia ciecamente l'intera cartella per ogni commit. Può (ove possibile) comprimere un commit come un insieme di cambiamenti, o \"delta\", da una versione alla successiva del repository.",
              "",
              "Git memorizza anche la storia di tutti i commit effettuati. Questo è il motivo per cui molti commit hanno genitori sopra di essi -- questo viene rappresentato con delle frecce nelle nostre spiegazioni. Conoscere la storia è utilissimo per tutti quelli che collaborano ad un progetto!",
              "",
              "C'è tanto da imparare, ma per ora pensa ai commit come a delle instantanee del progetto. I commit sono leggerissimi e si può passare da uno all'altro in un battibaleno!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Vediamolo in pratica. Sulla destra abbiamo l'immagine di un (piccolo) repository git. Ci sono due commit -- il primo commit, `C0`, e un altro dopo, `C1`, che potrebbe avere modifiche importanti.",
              "",
              "Premi il pulsante qua sotto per eseguire un nuovo commit."
            ],
            "afterMarkdowns": [
              "Ecco qua! Fantastico. Abbiamo modificato il repository e salvato con un commit. Il commit che abbiamo creato ha un genitore, `C1`, che ci indica su chi è basato il nostro commit."
            ],
            "command": "git commit",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Vai avanti e prova da solo! Dopo che questa finestra si chiude, crea due commit per completare il livello."
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
              "## Git Commit'leri",
              "Git commit'leri, projenizin tüm (izlenen) dosyalarının anlık bir fotoğrafını çeker. Düşünün ki bu, büyük bir kopyala-yapıştır işlemi gibi, ama işte burada daha eğlenceli bir olay var!",
              "",
              "Git, commit'leri hafif tutmak ister, bu yüzden her seferinde sırf her şeyi körü körüne kopyalamaz. Mümkün olduğunda, bir commit'i değişikliklerin seti olarak sıkıştırabilir veya bir sürümün bir sonraki sürüme olan farkını, yani bir \"delta\"yı yakalayabilir.",
              "",
              "Git aynı zamanda hangi commit'lerin ne zaman yapıldığını da kayıt altında tutar. İşte bu yüzden çoğu commit, üstünde atası olan başka commit'lerle gelir - bu görselde oklarla belirtilir. Tarih tutmak, projede çalışan herkes için harika bir şeydir!",
              "",
              "İlk bakışta karmaşık gelebilir, ama şimdilik commit'leri projenizin anlık fotoğrafları gibi düşünün. Commit'ler hafiftir ve aralarında çok hızlı geçiş yapılabilir!"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Bakalım bu pratikte nasıl görünüyor. Sağ tarafta, (küçük) bir git deposunun görselleştirmesini görüyorsunuz. Şu anda iki commit var - ilk başlangıç commit'i, `C0`, ve ondan sonra gelen anlamlı değişiklikler içerebilecek bir commit olan `C1`.",
              "",
              "Yeni bir commit için aşağıdaki düğmeye tıklayın."
            ],
            "afterMarkdowns": [
              "İşte bu! Harika. Depoya değişiklikler yaptık ve onları bir commit olarak kaydettik. Yeni yaptığımız commit'in bir atası var, `C1`, bu da commit'imizin ne üzerine inşa edildiğini gösteren bir referans içerir."
            ],
            "command": "git commit",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "Şimdi sıra sende! Bu pencere kapanır kapanmaz, seviyeyi tamamlamak için iki commit yap."
            ]
          }
        }
      ]
    }
  }
};
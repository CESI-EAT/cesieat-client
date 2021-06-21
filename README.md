# Client du projet CESI'EAT

## Comment lancer le projet . 

### Intaller le projet
- Clone le projet !
```
git clone https://github.com/CESI-EAT/cesieat-client.git
```

- Installe les dépendances !
```
cd cesieat-client
npm install
```

### Commencer à développer
```
npm run serve
```

### Compiler une version de production
```
npm run build
```

## Comment contribuer au projet ?

### Créer la branche

Le nom de la branche doit toujours commencer par son type, c'est à dire :
  - feat/ : si c'est une nouvelle feature
  - bug/ : si c'est une correction de bug
  - hotfixe/ : si c'est une correction sur la dernière version stable
 
 Voir ce [lien](https://gist.github.com/digitaljhelms/4287848) pour plus d'informations.

### Envoyer la branche

- Vérifie tes changements !
```
npm run build
```
Si ca passe continue, sinon les corrections nécessaires.

- Ajoute tes changements !
```
git add .
```

- Sauvegarde tes changements !
```
npm run commit 
```
☣ Important ☣
Plusieurs questions vont t'être posées :
1. ``Select the type of change that you're committing``:
L’assistant te demande de préciser le type de ton commit : as-tu développé une nouvelle fonctionnalité, réparé un bug… ? Sers-toi des flèches de votre clavier pour choisir le type, et appuie sur la touche Entrée pour valider.
4. ``What is the scope of this change (e.g component of file name): (press enter to skip)``:
Ici tu peux aussi saisir le scope (la portée) de ta modification / création. C’est facultatif : appuie sur la touche Entrée sans rien noter, si tu préféres.
3. ``Write a short, imperative tense description of the change (max 85 chars):``
La troisième étape correspond à la saisie du message du commit. Celui-ci doit être court mais compréhensible. L’outil Commitizen calcule automatiquement le nombre de caractères disponibles pour rédiger ce fameux message.
4. ``Are there any breaking changes? (y/N)``:
Ensuite, Commitizen te demande si ton code implique des ‘Breaking changes’, c’est à dire des modifications que les utilisateurs finaux doivent prendre en compte. Par exemple : pour se connecter à l’API, l’identifiant / mot de passe ne fonctionnent plus et il faut se connecter directement avec un token.
5. ``Does this change affect any open issues? (y/N)``:
Pour finir, Commitizen te demande si ton code affecte un ticket déjà ouvert. Répond OBLIGATOIREMENT oui et renseigne le ticket sur lequel du travail !

- Envoie tes changements !
Si c'est la première fois que tu push cette branche :
```
git push origin <le nom de ta branch>
```
Sinon c'est juste :
```
git push
```

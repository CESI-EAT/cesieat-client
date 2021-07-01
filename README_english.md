 click here for the click here for the [original version of the documentation](docs/README.md)
 
## Client side of the project  CESI'EAT

## How to launch the project:

##install the project


- Clone the project !
```
git clone https://github.com/CESI-EAT/cesieat-client.git
```

- install the dependencies!
```
cd cesieat-client
npm install
```

### Start developing:
```
npm run serve
```

### Compile a version of what you've produced:
```
npm run build
```

## How to contribute to the project:

### Create the branch:

The name of the branch name must start with either "feature", "bug" or "hotfix" depending on the type of contribution you are trying to make: That is to say use 

 - feat/ : if the contribution is about a new feature
 - bug/ :  if the contribution is a correction of a bug
 - hotfixe/ : if the contribution is a correction  that was made on the stable vbersion

 
 See [lien](https://gist.github.com/digitaljhelms/4287848) for more information

#preparing the pull request

- first check and verify the changes you've made

```
npm run build

```
If all looks good continue, otherwise make the necessary corrections.

-  Add the changes !
```
git add .
```
- Save the changes!
```
npm run commit 
```
☣ Important ☣
Several questions will be asked:

1. ``Select the type of change that you're committing``:

The wizard asks you to specify the type of your commit: have you developed a new feature, fixed a bug ...? Use the arrows on your keyboard to choose the type, and press the Enter key to validate.
4. ``What is the scope of this change (e.g component of file name): (press enter to skip)``:
Here you can also enter the scope of your modification / creation. This is optional: press the Enter key without writing anything 
3. ``Write a short, imperative tense description of the change (max 85 chars):``
This is the commit message. It should be short but descriptive, and under 85 characters long.
4. ``Are there any breaking changes? (y/N)``:
Next, Commitizen asks if your code involves 'Breaking changes', which are changes that end users should take into account. For example: to connect to the API, the username / password no longer work and you have to connect directly with a token.
5. ``Does this change affect any open issues? (y/N)``:
Finally, Commitizen asks you if your code affects a ticket that is already open. You MUST answer yes and fill in the ticket on which to work!









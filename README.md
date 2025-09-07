
# 📖 Lecteur de très grands nombres en toutes lettres (français)

Ce projet est une implémentation en **JavaScript** qui permet de lire et convertir des nombres de **très grandes tailles** (au-delà de la limite des nombres classiques en JS) en toutes lettres en français.
Il utilise `BigInt` afin de gérer des valeurs énormes (jusqu’aux quadragintillions et au-delà).

---

## 🚀 Fonctionnalités

* Conversion de nombres entiers **positifs et négatifs** en toutes lettres.
* Support des très grands nombres (grâce à `BigInt`).
* Gestion des règles grammaticales françaises (pluriel de *cents*, exceptions comme *onze, douze, treize…*).
* Interface simple en HTML/JS pour tester directement dans un formulaire.
* Dictionnaire extensible jusqu’aux **novemquadragintillards** (10⁹⁷).

---

## 📦 Installation

Clonez ce dépôt :

```bash
git clone https://github.com/<ton-username>/<nom-du-repo>.git
cd <nom-du-repo>
```

---

## ▶️ Utilisation

1. Ouvrez le fichier `index.html` dans un navigateur.
2. Entrez un nombre (même très grand).
3. Cliquez sur **Convertir**.
4. Le résultat s’affichera en toutes lettres.

---

## 📝 Exemple

* **Entrée :**

```text
123456789
```

* **Sortie :**

```text
cent vingt-trois millions quatre cent cinquante-six mille sept cent quatre-vingt-neuf
```

---

## 🛠️ Technologies utilisées

* **JavaScript (ES6+)** – logique de conversion
* **BigInt** – support des entiers très grands
* **HTML/CSS** – interface utilisateur simple

---

## 📂 Structure du projet

```
├── index.html   # Interface utilisateur
├── script.js    # Logique principale (conversion)
├── style.css    # (optionnel) Styles
└── README.md    # Documentation
```

---

## 📌 Améliorations possibles

* Support des nombres décimaux (fractions).
* Internationalisation (anglais, espagnol, etc.).
* Publication en tant que package **npm** (`number-to-french-words`).
* Ajout de tests unitaires.

---

## 👨‍💻 Auteur

Projet développé par **\[Ton Nom]**.
N’hésitez pas à contribuer via des **issues** ou **pull requests** !

---


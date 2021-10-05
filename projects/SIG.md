## See It Grow
##### *WIP crafting and clicker game made in Unity*

<!-- <div class="technologies"><span>Unity</span><span>C#</span><div> -->

#### Clicker Game On Steroids
I like incremental/clicker games, what I don't like are meaningless clicker games. See It Grow aims to fix that, by giving the player crafts and quests that will make.

<img src="./media/SIG/wheatBucket.jpg" height="300px">
<img src="./media/SIG/notEnoughItems.jpg" height="300px">
<img src="./media/SIG/anvilCraft.jpg" height="300px">
<!-- ![JsonSerialization](./media/SIG/SGO.jpg) -->

#### User Experience
* To make tapping as enjoyable as possible, UX is key. Using custom made sounds, particles effects, and animations to enhance as much as possible player feedback.
* And as an incremental game where you'll manage many things, having clear en understandable UI is just as important to have the player fight with enemies not with the buttons. Again, using sounds and animation (specificaly tweening) to enhance player feedback.

<img src="./media/SIG/inventory.jpg" height="300px">
<img src="./media/SIG/selectionUI.jpg" height="300px">

#### Dynamic Content and Custom Serialization

Currently, most of the game's content is stored in **ScriptableObjects** loaded from the Resources folder. This makes is pretty easy for a developer having the Unity projet to add new content such as item, quest, recipes and more. But the end goals is to make the game as customizable / moddable as possible, without the need to install Unity.
![JsonSerialization](./media/SIG/CustomSerialiaation_0.cs.jpg)
To do achieve this, I have made a **custom JSON serialization** system allowing me to go back and forth from ANY ScriptableObject to JSON. And unlike Unity's built-in JSON serialization, it supports Lists, Dictionnaries and can handle serializing child references of abstract or inherited classes.
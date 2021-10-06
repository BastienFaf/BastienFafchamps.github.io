## See It Grow
##### *WIP crafting and clicker game made in Unity*

<!-- <div class="technologies"><span>Unity</span><span>C#</span><div> -->

#### Clicker Game On Steroids

See It Grow is an incremental game I am currently working on. It's a clicker crafting game but I'm aiming to make one with way more depth than your usual cookie clicker like. How ? By adding story, quests maybe building, exploration and more...

<img src="./media/SIG/wheatBucket.jpg" height="300px">
<img src="./media/SIG/notEnoughItems.jpg" height="300px">
<img src="./media/SIG/anvilCraft.jpg" height="300px">

#### Dynamic Content and Custom Serialization

Currently, most of the game's content is stored in **ScriptableObjects** loaded from the Resources folder. This makes it pretty easy for a developer having the Unity projet to add new content such as items, quests, recipes and more. But the end goals is to make the game as customizable / moddable as possible, without the need to install Unity.
(Editor customized with the Odin Inspector asset)

<img src="./media/SIG/SGO.jpg" height="300px">
<img src="./media/SIG/CustomSGO.jpg" height="300px">


To achieve this, I have made a **custom JSON serialization** system allowing me to go back and forth from ANY ScriptableObject to JSON. And unlike Unity's built-in JSON serialization, it supports Lists, Dictionnaries and can handle serializing child references of abstract or inherited classes.

<img src="./media/SIG/CustomSerialiaation_0.jpg" height="600px">

#### User Experience

* To make tapping as enjoyable as possible, UX is key. Using custom made sounds, particles effects, and animations to enhance as much as possible player feedback.
* And as an incremental game where you'll manage many things, having clear en understandable UI is just as important to have the player fight with enemies not with the buttons. Again, using sounds and animation (specificaly tweening) to enhance player feedback.

<img src="./media/SIG/inventory.jpg" height="300px">
<img src="./media/SIG/selectionUI.jpg" height="300px">
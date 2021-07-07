# Korean-Grammar-Syntax

note: I recently ported this from c# to pyton, and removed the GUI and dotnet code.
The GUI I mentioned below is not included currenrtly, but I am planing on implmenting a new GUI.

The I use this project to validate Korean sentances that I write in the course of my Korean studies.

At it's core, this KGS is a simple merge tool, but it also has the capability to conjugate Korean verbs and adjectives, and determine the correct variant of a particle to use. 


Basic fields
For example, let's say  we have a variable verb, that is equal to "공부하다" (to study)
If we just wanted the dictionary form of Verb to be inserted into the text, we would write
{verb} 
If that was out whole templet, and verb was "공부하다" the output would be 
공부하다

Verb spacific fields
To list just the stem of a verb/adjective
{verb.stem}
공부하

If we wanted stem of verb/adjective to be congigated, (fcs stands for full congigated stem)
{verb.fcs}
공부해

I also have one more verb/adjective specific property that later will be needed to irregular verbs
{verb.special}
공부해
This is special mostly the same as fcs, except 으 irregular verbs are left as the stem

For example, lets say verb is "기쁘다" (to be happy) 
{verb.fcs}
기뻐

{verb.special}
기쁘

Todo, add a section for the unit and number specific fields

Particles,

Korean has severl markers that can be added to certian words in a sentance to indicate it's role in the sentace.
For example topic, subject, object

Topic for example is either "은" or "는". If the word we are marking as the topic ends with a final vowel, then we would need to use "은"
otherwise "는".

Let's say the topic is "저" Me/I
{topic}[은/는]
저는

Let's say the topic is "형" Older brother
{topic}[은/는]
형은

This Wikipidia page was main source for working with korean characters, recomended reading this first before reading the code.
https://en.wikipedia.org/wiki/Korean_language_and_computers

Currently I have a cli and gui interface for the core merge tool.

The command line takes the templet as the first sentance, and then the reset of the arguments are interprated as key value pairs. with odd values as the keys,
and even values as the values.

The gui version has a field to enter a templet, and a value to type the expected output. The box with the expected output turns green when the 
expected output and the sentance match. It also has a table to enter the values to go with the keys, presets to load into the templet field, and a button
that displays the output in a message box. The presets a defened in text file.



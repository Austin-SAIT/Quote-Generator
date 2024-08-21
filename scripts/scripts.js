const quotes = ["The true soldier fights not because he hates what is in front of him, but because he loves what is behind him. ― G.K. Chesterton",


    "Poets have been mysteriously silent on the subject of cheese. ― G.K. Chesterton, Alarms and Discursions",


    "Fairy tales do not tell children the dragons exist. Children already know that dragons exist. Fairy tales tell children the dragons can be killed. ― G.K. Chesterton",


    "Literature is a luxury; fiction is a necessity. ― G.K. Chesterton",


    "Without education, we are in a horrible and deadly danger of taking educated people seriously. ― G.K. Chesterton",


    "I am not absentminded. It is the presence of mind that makes me unaware of everything else. ― G.K. Chesterton",


    "There are no uninteresting things, only uninterested people. ― G.K. Chesterton",


    "There is the great lesson of 'Beauty and the Beast,' that a thing must be loved before it is lovable. ― G.K. Chesterton",


    "The traveler sees what he sees. The tourist sees what he has come to see. ― G.K. Chesterton",


    "The way to love anything is to realize that it may be lost. ― G.K. Chesterton",


    "There are two ways to get enough. One is to continue to accumulate more and more. The other is to desire less. ― G.K. Chesterton",


    "The Bible tells us to love our neighbors, and also to love our enemies; probably because generally they are the same people. ― G.K. Chesterton",


    "Because children have abounding vitality, because they are in spirit fierce and free, therefore they want things repeated and unchanged. They always say, 'Do it again'; and the grown-up person does it again until he is nearly dead. For grown-up people are not strong enough to exult in monotony. But perhaps God is strong enough to exult in monotony. It is possible that God says every morning, 'Do it again' to the sun; and every evening, 'Do it again' to the moon. It may not be automatic necessity that makes all daisies alike; it may be that God makes every daisy separately, but has never got tired of making them. It may be that He has the eternal appetite of infancy; for we have sinned and grown old, and our Father is younger than we. ― G.K. Chesterton, Orthodoxy",


    "The Christian ideal has not been tried and found wanting. It has been found difficult; and left untried. ― G.K. Chesterton, What's Wrong with the World",


    "I would maintain that thanks are the highest form of thought; and that gratitude is happiness doubled by wonder. ― G.K. Chesterton",


    "To love means loving the unlovable. To forgive means pardoning the unpardonable. Faith means believing the unbelievable. Hope means hoping when everything seems hopeless. ― G.K. Chesterton",


    "A good novel tells us the truth about its hero; but a bad novel tells us the truth about its author. ― G.K. Chesterton, Heretics",


    "Do not be so open-minded that your brains fall out. ― G.K. Chesterton",


    "An adventure is only an inconvenience rightly considered. An inconvenience is only an adventure wrongly considered. ― G.K. Chesterton",


    "To have a right to do a thing is not at all the same as to be right in doing it. ― G.K. Chesterton",


    "It [feminism] is mixed up with a muddled idea that women are free when they serve their employers but slaves when they help their husbands. ― G.K. Chesterton",


    "If there were no God, there would be no atheists. ― G.K. Chesterton",


    "Drink because you are happy, but never because you are miserable. ― G.K. Chesterton, Heretics: The Annotated",


    "The word 'good' has many meanings. For example, if a man were to shoot his grandmother at a range of five hundred yards, I should call him a good shot, but not necessarily a good man. ― G.K. Chesterton",


    "Art, like morality, consists of drawing the line somewhere. ― G.K. Chesterton, Orthodoxy",

    "Religious liberty might be supposed to mean that everybody is free to discuss religion. In practice it means that hardly anybody is allowed to mention it. ― G.K. Chesterton",

    "Fallacies do not cease to be fallacies because they become fashions. ― G.K. Chesterton",
    "'It is absurd for the Evolutionist to complain that it is unthinkable for an admittedly unthinkable God to make everything out of nothing, and then pretend that it is more thinkable that nothing should turn itself into everything. ― G.K. Chesterton",
    "Dear Sir: Regarding your article 'What's Wrong with the World?' I am. Yours truly, ― G.K. Chesterton",
    "People wonder why the novel is the most popular form of literature; people wonder why it is read more than books of science or books of metaphysics. The reason is very simple; it is merely that the novel is more true than they are. ― G.K. Chesterton"
];

const usedIndexes = new Set();
const quoteTag = document.getElementById("quote");

function genQuote() {
    if (usedIndexes.size >= quotes.length) { //use 'size' for SETS && use 'length' for ARRAYS
        usedIndexes.clear() // REMOVES all values from set
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length); //Math.floor ALWAYS rounds down -- this is to avoid hitting index [10], which does NOT exist

        if (usedIndexes.has(randomIdx)) continue //if the current randomIdx quote exists in Set(), then skip. If not, go to next lines
    
        const quote= quotes[randomIdx] // a random quote index
        quoteTag.innerHTML= quote;
        usedIndexes.add(randomIdx) // the spec random quote index is added to the Set()
        break
    }
}

let btn = document.getElementById("btn")
btn.addEventListener("click", function() {
    genQuote();
})
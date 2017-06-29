'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined;
var SKILL_NAME = "Unofficial Android Facts";
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = "You can say tell me an Android fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

var data = [
    'There is an Android running device in space!! NASA equipped Floating space robots with Nexus S handsets. These devices run on Android Gingerbread.',
    'One of the best parts of being an Android owner is its apps, Android app store Google play has more than 48 billion app installs, of which most of them are free.',
    'HTC Dream or T_Mobile G1 is the first ever smartphone to run on the Android operating system, this mobile phone was released in the year 2008.',
    'Except Android 1.0 and 1.1, all the other Android versions are named after sweet treats like Jelly Bean, Ice Cream Sandwich, Honeycomb to name a few.',
    'Android operating system, was developed as a platform for digital cameras. But the makers later changed their focus to smart phones as they saw its potential.',
    'Android operating system has powered hundreds of millions of mobile devices in more than 190 countries around the world.',
    'Android is used to power devices like Google Glass, Smart fridges, Watches and so on.',
    'Android is Andy Rubin who is the co-creator of Android, it was the name given to him at Apple before joining Google, for his obsession and love for robots.',
    'In 2004, the Android OS was developed with the backing of Google by Android Inc. In 2005, Google paid $50 million for the OS.',
    'In November 2007, Google launched the Linux-based software system; Android OS.',
    'Android has over a billion activations on devices including tablets and of course smartphones.',
    'Android releases are alphabetical; Astro, Bender, Cupcake, Donut, Eclair, Froyo, Gingerbread, Honeycomb, Ice Cream Sandwich, Jelly Bean, KitKat, Lollypop and Marshmallow.',
    'Android is actually open-source which means that individuals have the option to modify source code of the OS and manufacturers can add features.',
    'The word Android means a human with a male robot appearance.',
    'In 2010 Sony Ericsson’s LiveView watch was released, the device linked to Android phones to show and control things like the Twitter feeds, texts and media player.',
    'Phandroid is a website dedicated to anything Android including news, reviews and forums. They were the first dedicated Android website and their first post came the same day as Google officially announced Android in 2007.',
    'In California in 2003, Andy Rubin, Nick Sears and Chris White founded Android Inc.',
    'NASA even uses Android. They sent 2 Nexus S handsets running Android Gingerbread into space to test their sensors in orbit aboard the International Space Station.',
    'Android is available in around 46 languages, this also means apps can be produced in different languages to cover a wider audience.',
    'Android’s app store Google Play has over 48 billion app installs.',
    'Android has branched out to other devices like Google Glass and Watches.',
    'At CES 2011 Android 3.0 Honeycomb was debuted on the Motorola XOOM. It was completely redesigned for tablets and never ran on smartphones. Honeycomb was a huge failure.',
    'Android’s significance in the mobile market was perfectly realized in 2009 when Eric Schmidt, Google CEO, was forced to resign from Apple’s board of directors due to a conflict of interest and his inability to be involved in Apple’s developments and future plans.',
    'Irina Blok designed the android logo in 2007, the general idea came from the man on toilet doors.',
    'In 2015, Android’s OS was on 81.61% of all Smartphones sold.',
    'In 2015 there were around 98.5 million Android smartphone users in the US and in 2016 there are 107.7 million.',
    'There is an average of 42.38 million unique users a month who use the Android Facebook app.',
    'As all Android users know, most apps are usually free but the average price seems to be just $0.06.',
    'Android’s logo isn’t actually called Android, Google unofficially call him Bugdroid.'
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};
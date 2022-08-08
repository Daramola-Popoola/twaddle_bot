import { NlpManager } from "node-nlp";

const manager = new NlpManager({languages: ['en'], forceNER: 'true'});


//adding specific utterance to the file
manager.addDocument('en', 'goodbye for now', 'greetings.bye');
manager.addDocument('en', 'bye bye take care', 'greetings.bye');
manager.addDocument('en', 'okay see you later', 'greetings.bye');
manager.addDocument('en', 'bye for now', 'greetings.bye');
manager.addDocument('en', 'i must go', 'greetings.bye');
manager.addDocument('en', 'hello', 'greetings.hello');
manager.addDocument('en', 'hi', 'greetings.hello');
manager.addDocument('en', 'howdy', 'greetings.hello');

//training section to train Natural language generator

manager.addAnswer('en', 'greetings.bye', 'Till next time');
manager.addAnswer('en', 'greetings.bye', 'see you soon!');
manager.addAnswer('en', 'greetings.hello', 'Hey there!');
manager.addAnswer('en', 'greetings.hello', 'Greetings!');
manager.addAnswer('en', 'greetings.hello', 'Hi! good morning, hpw cam i help?');

//train ans save the model

(async () => {
   await manager.train();
   manager.save();
   
   const botResponse = await manager.process('en', 'goodbye');
   
   console.log(botResponse);
})()
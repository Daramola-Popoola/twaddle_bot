import { NlpManager } from "node-nlp";
import fs from 'fs';
import path from 'path';

const manager = new NlpManager({languages: ['en'], forceNER: 'true'});


const FilePath = path.join(process.cwd(), './src/working.json');
try{
    
    let jsonData = JSON.parse(fs.readFileSync(FilePath, 'utf-8'));
    jsonData.intents.forEach(dataSection => {
        for(let i = 0; i < dataSection.patterns.length; i++){
            manager.addDocument('en', dataSection.patterns[i], dataSection.intent);
            
        }
        
        //for the responses
        for(let i = 0; i < dataSection.responses.length; i++){
            manager.addAnswer('en', dataSection.intent, dataSection.responses[i]);
            
        }
    })
}catch(err){
    console.log(err);
}

//train ans save the model

(async () => {
   await manager.train();
   manager.save();
   
   const botResponse = await manager.process('en', 'can i get a car loan');
   
   console.log(botResponse);
})()
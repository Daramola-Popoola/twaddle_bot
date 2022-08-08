import fs from 'fs';
import path from 'path';

const FilePath = path.join(process.cwd(), './src/working.json');
try{
    
    let jsonData = JSON.parse(fs.readFileSync(FilePath, 'utf-8'));
    jsonData.intents.forEach(dataSection => {
        for(let i = 0; i < dataSection.patterns.length; i++){
            manager.addDocument('en', dataSection.patterns[i], dataSection.intent);
            
        }
        
        //for the responses
        for(let i = 0; i < dataSection.responses.length; i++){
            manager.addDocument('en', dataSection.responses[i], dataSection.intent);
            
        }
    })
}catch(err){
    console.log(err);
}


// 1.Find documents that have awards.
Answer:
db.bios.find({'awards': {$exists: 'true'} }).pretty();

// Find documents that don't have awards.
Answer:
db.bios.find({'awards': {$exists: 'false'} }).pretty();

// Find documents that have contribs for OOP or UNIX
Answer:
db.bios.find({contribs:{$in:["OOP", "UNIX"]}}).pretty();

// Find documents with "Turing Award" awards.
Answer:
 db.bios.find( {"awards.award": "Turing Award"}).pretty();


// Find documents with IDs between 3 and 7.
Answer:
 db.bios.find({_id:{$gt: 3, $lt: 7}}).pretty();


// Find documents with awards that were awarded before the year 2000.
Answer:
db.bios.find( {"awards.year": { $lte: 2000 } } );


// Find documents with birth dates, but no death dates.
Answer:
 db.bios.find({$and:[{birth: {$exists: true}}, {death: {$exists: false}}]}).pretty();


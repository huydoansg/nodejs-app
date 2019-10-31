const uuid = require('uuid/v4');
const {
  connect,
  disconnect
} = require('./repository/connection');
const PersonalRanking = require('./repository/models/personal-ranking.model');
const dbUri = process.env.MONGO_URL || 'mongodb://localhost:27017/zooo';
const DefaultInterval = 10;

const AmountRecords = 40000;

const bulk = async () => {
  let idx = 0;
  const batch = PersonalRanking.collection.initializeUnorderedBulkOp();
  while (idx < AmountRecords) {
    const profileId = uuid();

    const userName = `${idx} - ${profileId}`
    const p = {
      profileId,
      userName,
      avatarUrl: 'temp',
      countryAlpha3Code: 'SGD',
      goldMedal: 0,
      silverMedal: 0,
      bronzeMedal: 0
    };
    batch.insert(p);
    // batch.find({
    //     profileId
    //   })
    //   .upsert()
    //   .update({
    //     $set: {
    //       ...p,
    //       ranking: idx + 1
    //     }
    //   })
    idx++;
  }
  console.log('what is batch : ', batch.length);
  return batch.execute();
}

const perfDbTest = async () => {
  try {
    await connect(dbUri);
    await bulk();

    await disconnect();
  } catch (e) {
    console.error(e);
  }
}

perfDbTest();
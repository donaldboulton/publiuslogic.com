import Neardb from 'neardb'

const config = {
  database: 'bucketName',
  //...
}

nearDB.collection('states').doc('ny').set({
  name: 'New York',
  population: 19849399,
  largestCity: 'New York City',
})
nearDB.collection('states').add({
  name: 'New York',
  population: 19849399,
  largestCity: 'New York City',
})
nearDB.collection('states').doc('ny').update({
  eastCoast: true,
})
nearDB.collection('states').doc('ny').delete()
nearDB.collection('states').doc('ny').get()

nearDB.collection('states').doc('ny').get(options)

const options = {
  // Google Cloud Storage Bucket
  database: 'publiuslogic',
  storage: {
    endpoint: 'https://storage.googleapis.com',
    useSSL: true,
    s3ForcePathStyle: true,
    signatureVersion: 'v4',
    accessKeyId:
      'v1.0-baaeb3584b375603fa86f972-49ebdcc4934f3ee6fc8a35cea44d1acc6bbfdf496d49d47e11aec00fa8bd83b22e89933ac178237568114ea7318d8a8599436a7c270cded0bc37bbd5d5b80aa3fb44d61420cc9b',
    secretAccessKey: 'db9bb336c88d1d660e9fb06c98b098e2aeccf',
  },
}

const neardb = NearDB.database(config)

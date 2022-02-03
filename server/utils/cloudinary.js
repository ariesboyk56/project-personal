const cloudinary = require('cloudinary').v2;


cloudinary.config({
    cloud_name: 'dckog8uj3',
    api_key: '496362287488639',
    api_secret: 'loupZL5074uqoPgH0rqlKgxG9Pk',
    // secure: true
});

module.exports = {cloudinary}
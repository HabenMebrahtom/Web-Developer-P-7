const Profile = require('../models/profile');


//create a new post
exports.createProfile = async (req, res) => {
    const { id } = req.params;
    const { dateOfBirth, jobTitle, userId } = req.body;
    const url = req.protocol + '://' + 'localhost:4000';

    try {
        if (req.file) {
            const profile = new Profile({
            dateOfBirth: dateOfBirth,
            jobTitle: jobTitle,
                profileImageUrl: url + '/images/' + req.file.filename,
            userId: id
            });
             const newProfile = await profile.save();
             console.log(newProfile)
             res.status(201).send(newProfile);
        } else {
           const profile = new Profile({
            dateOfBirth: dateOfBirth,
            jobTitle: jobTitle
            });
             const newProfile = await profile.save();
             console.log(newProfile)
             res.status(201).send(newProfile);
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message);
    }
}

//updating a post
exports.updateProfile = async (req, res) => {
    const { id } = req.params;
    const { dateOfBirth, jobTitle, profileImageUrl } = req.body;
    let profile = new Profile({ where: { id: req.params.id } });

    if (req.file) {
        const url = req.protocol + '://' + 'localhost:4000';
        profile = {
            id: id,
            dateOfBirth: dateOfBirth,
            jobTitle: jobTitle,
            profileImageUrl: url + '/images/' + req.file.filename,
        }
    } else {
        profile = {
            id: id,
            dateOfBirth: dateOfBirth,
            jobTitle: jobTitle,
            profileImageUrl: profileImageUrl
         }
    }
    
    try {
        const updatedProfile = await Profile.update(profile, { where: { id: id} });
        res.status(201).json(updatedProfile);

    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);

    }
}
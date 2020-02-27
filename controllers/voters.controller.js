const Voter = require("../models/Voter.model");

/****** GET ALL VOTERS ********/

exports.getAll = async (req, res) => {
  try {
    console.log(req.ip);
    res.json(await Voter.find());
  } catch (err) {
    res.status(500).json(err);
  }
};

/****** ADD VOTERS IP ********/

exports.add = async (req, res) => {
  try {
    const user = "STOL";
    const votes = req.params.id;

    const userExists = await Voter.findOne({ user: user });
    if (userExists) {
      const photoExists = await Voter.exists({
        $and: [{ user: user }, { votes: votes }]
      });
      if (photoExists) {
        return res.json("alredy exists in dbs");
      } else {
        userExists.votes.push(votes);
        userExists.save();
        return res.json("added vote");
      }
    }

    newVoter = new Voter({ user, votes });
    await newVoter.save();
    console.log("added");
    res.json("added");
  } catch (err) {
    res.status(500).json(err);
  }
};

/****** SUBMIT PHOTO ********/

// exports.add = async (req, res) => {

//   try {
//     let { title, author, email } = req.fields;
//     const file = req.files.file;

//     if(title && author && email && file) { // if fields are not empty...

//       const fileName = file.path.split('/').slice(-1)[0]; // cut only filename from full path, e.g. C:/test/abc.jpg -> abc.jpg
//       const fileExt = fileName.path.split('/').slice(-1)[0]; // cut only file extension from full path
//       const validFileExtensions = [".jpg", ".jpeg", ".bmp", ".gif", ".png"];

//       escape = (html) => {
//         return html.replace(/&/g, "&amp;")
//                    .replace(/</g, "&lt;")
//                    .replace(/>/g, "&gt;")
//                    .replace(/"/g, "&quot;")
//                    .replace(/'/g, "&#039;");
//       }

//       title = escape(title);
//       author = escape(author);
//       email = escape(email);

//       if (validFileExtensions.indexOf(fileExt) === -1 || author.length > 50 || title.length > 25) {
//         throw new Error('Wrong input!');
//       }
//       const newPhoto = new Photo({ title, author, email, src: fileName, votes: 0 });
//       await newPhoto.save(); // ...save new photo in DB
//       res.json(newPhoto);

//     } else {
//       throw new Error('Wrong input!');
//     }

//   } catch(err) {
//     res.status(500).json(err);
//   }

// };

// /****** VOTE FOR PHOTO ********/

// exports.vote = async (req, res) => {

//   try {
//     const photoToUpdate = await Photo.findOne({ _id: req.params.id });
//     if(!photoToUpdate) res.status(404).json({ message: 'Not found' });
//     else {
//       photoToUpdate.votes++;
//       photoToUpdate.save();
//       res.send({ message: 'OK' });
//     }
//   } catch(err) {
//     res.status(500).json(err);
//   }

// };

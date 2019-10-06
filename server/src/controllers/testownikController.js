const path = require("path")
const unzip = require("unzip")
const fs = require("fs")


function getRandom(arr, n) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

async function uploadTestownik  (req, res) {

    const inputFileName = req.file.path
    const extractToDirectory = "public/uploads";

    fs.createReadStream(inputFileName)
        .pipe(unzip.Extract({
            path: extractToDirectory
        }));

    console.log('storage location is ', req.hostname + '\\' + req.file.path);

    return res.send(req.file);
}

async function getTestownik (req, res){
    const amount = req.query.amount || 10

    const questionPaths = getRandom(fs.readdirSync("src/public/uploads/qdb"), amount)
    const questionData = questionPaths.map(path => {

        let encodedAnswers = null;
        let question;
        let correctAnswers = null;
        let incorrectAnswers = [];
        const lines = require('fs').readFileSync(`src/public/uploads/qdb/${path}`, 'utf-8')
            .split('\n')
            .filter(Boolean)
            .map(line => line.replace('\t', ""))
        for (let i = 0; i < lines.length; i++) {
            if (i === 0) {
                encodedAnswers = lines[i].match(/\d/g);
            } else if (i === 1) {
                question = lines[i]
            } else {
                if (encodedAnswers[i - 2] == 1) {
                    correctAnswers = lines[i]
                } else {
                    incorrectAnswers.push(lines[i])
                }
            }
        }

        return {
            question,
            correctAnswers,
            incorrectAnswers,
        }
    });

    const questions = questionData.map(({
        question,
        correctAnswers,
        incorrectAnswers
    }) => ({
        category: "Testownik",
        type: "multiple",
        difficulty: "Idzie wykuć w jedną noc",
        question,
        correct_answer: correctAnswers,
        incorrect_answers: incorrectAnswers
    }))

    res.send({
        response_code: 0,
        results: questions
    })

}



module.exports.uploadTestownik = uploadTestownik
module.exports.getTestownik = getTestownik
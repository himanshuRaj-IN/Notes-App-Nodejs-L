const fs = require('fs')
const chalk = require('chalk')

const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.find((note) => note.title === title)
    if (!duplicateNotes) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse.bold('Notes Added Sucessfully !!'))
    } else {
        console.log(chalk.inverse.red.bold('Duplicate Title found !!'))
    }

}
const removeNotes = (title) => {
    const notes = loadNotes()
    const toKeepNotes = notes.filter((note) => note.title !== title)
    if (notes.length == toKeepNotes.length) {
        console.log(chalk.inverse.red('No Notes Found'))
    } else {
        saveNotes(toKeepNotes)
        console.log(chalk.green.inverse.bold('Notes Removed Sucessfully !!'))
    }
}

const readNotes = (title) => {
    const notes = loadNotes()

    const readNote = notes.find((note) => note.title === title)
    if (readNote) {
        console.log(chalk.white.inverse(title))
        console.log(readNote.body)
    } else {
        console.log(chalk.red('Not Found !! check title :)'))
    }
}
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blueBright.inverse(''))
    notes.forEach((element, index) => {
        console.log(chalk.yellow(index + 1) + "  " + chalk.blue(element.title))
    });
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('data.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('data.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch {
        return []
    }

}

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}   
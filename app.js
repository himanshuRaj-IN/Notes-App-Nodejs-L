const yargs = require('yargs');
const notes = require('./notes.js')

yargs.command({
    command:'add',
    describe : 'Add is used to add otes ',
    builder:{
        title:{
            describe:'Note title',
            demandOption:'ture',
            type:'string'
        },
        body:{
            describe:'Body content of Note',
            demandOption:'ture',
            type:'string'
        }

    },
    handler(argv){
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove notes from data ',
    builder:{
        title:{
            describe :'Note title',
            demandOption : true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'List down the notes',
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    describe: 'Use this is used to read paricular noted by passing title',
    handler(argv){
        notes.readNotes(argv.title)
    }
})

yargs.argv
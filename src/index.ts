import {getInput} from '@actions/core'

const inputName = getInput("name")

function start(name: string){
  console.log(`Hello ${name}`)
}

start(inputName)
import core from '@actions/core'

const inputName = core.getInput("name")

start(inputName)

function start(name: string){
  console.log(`Hello ${name}`)
}
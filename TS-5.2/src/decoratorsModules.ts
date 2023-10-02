type PropOptions = {
  selector: string
}

function Component(options: PropOptions) {
  return (constructor: Function) => {
    console.log("Component Decorator Called")
    constructor.prototype.uniqueId = Date.now()
    constructor.prototype.insertInDom = () => {
      console.log("Inserting the comp in Dom")
    }
    constructor.prototype.props = options
  }
}

function Pipe(constructor: Function) {
  console.log("Pipe Decorator Called")
  constructor.prototype.pipe = true
}

@Component({ selector: "#my-profile" })
@Pipe
class ProfileComponent {}

// ! Importing modules

import { Square, Circle } from "./shapes"

import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// @ponicode
describe("addTodo", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Edmond", "Jean-Philippe", "Edmond"], ["George", "Michael", "Michael"], ["Edmond", "George", "Pierre Edouard"]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.addTodo("Lights")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.addTodo("Expressway")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.addTodo("Port")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.addTodo("Extensions")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.addTodo("Harbors")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.addTodo(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("resetTodo", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Edmond", "Jean-Philippe", "Pierre Edouard"], ["Jean-Philippe", "Michael", "Edmond"], ["Jean-Philippe", "Pierre Edouard", "Anas"]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.resetTodo("George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.resetTodo("Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.resetTodo("Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.resetTodo("Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.resetTodo("Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.resetTodo(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("removeTodo", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Jean-Philippe", "Pierre Edouard", "Michael"], ["Edmond", "Edmond", "Pierre Edouard"], ["George", "George", "Anas"]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.removeTodo("a85a8e6b-348b-4011-a1ec-1e78e9620782", "Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.removeTodo("03ea49f8-1d96-4cd0-b279-0684e3eec3a9", "Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.removeTodo("7289708e-b17a-477c-8a77-9ab575c4b4d8", "This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.removeTodo("7289708e-b17a-477c-8a77-9ab575c4b4d8", "foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.removeTodo("a85a8e6b-348b-4011-a1ec-1e78e9620782", "This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.removeTodo(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

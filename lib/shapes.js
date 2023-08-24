class Shape {
    constructor(color, text, textColor) {
        this.color = color
        this.text = text
        this.textColor = textColor
    }

}

class Triangle {
    constructor(color, text, textColor) {
        this.color = color
        this.text = text
        this.textColor = textColor
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="0,200 300,200 150,0" fill="${this.color}" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Square {
    constructor(color, text, textColor) {
        this.color = color
        this.text = text
        this.textColor = textColor
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="50" width="200" height="200" stroke="black" fill="${this.color}"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Circle {
    constructor(color, text, textColor) {
        this.color = color
        this.text = text
        this.textColor = textColor
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="50%" cy="50%" r="100" stroke="black" fill="${this.color}"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

module.exports = { Triangle, Square, Circle }
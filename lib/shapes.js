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
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> 

</svg>`
    }
}

class Square {
    constructor(color, text, textColor) {
        this.color = color
        this.text = text
        this.textColor = textColor
    }

    render() {
        return `
        
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="100" y="100" width="100" height="100" stroke="black" fill="${this.color}"/>

        <text x="150" y="165" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
    }
}

class Circle {
    constructor(color, text, textColor) {
        this.color = color
        this.text = text
        this.textColor = textColor
    }

    render() {
        return `
        
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="25" cy="75" r="20" stroke="red" fill="${this.color}"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`
    }
}

module.exports = { Triangle, Square, Circle }
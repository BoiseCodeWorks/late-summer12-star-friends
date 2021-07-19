export default class Person {
  constructor({ name, height, birth_year, eye_color }) {
    this.name = name
    this.height = height
    this.birthYear = birth_year
    this.eyeColor = eye_color
  }


  get Template() {
    return `<li>${this.name} - ${this.height} GU - DOB: ${this.birthYear}</li>`
  }
}



class Question {
  constructor({ correct_answer, incorrect_answers, type }) {
    this.correct = correct_answer
    this.answers = ["True", "False"]
    if (type == 'multiple') {
      this.answers = incorrect_answers
      let randIndex = Math.floor(Math.random() * 3)
      this.answers.splice(randIndex, 0, this.correct)
    }
  }
}

/**
 * {
      "category": "Science: Mathematics",
      "type": "multiple",
      "difficulty": "medium",
      "question": "In the hexadecimal system, what number comes after 9?",
      "correct_answer": "The Letter A",
      "incorrect_answers": [
        "10",
        "The Number 0",
        "16"
      ]
    },**/
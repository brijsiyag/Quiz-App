const Data = [
  {
    question:
      "Which of the following are correct about Activation Functions in neural network?",
    options: [
      " Derivative of a sigmoid activation function g(z) is g(z)[1-g(z)]",
      "Derivative of a hyperbolic tangent activation k(z) function is 1-(k(z))2",
      "Derivative of a leaky RELU Activation function h(z) is 1",
      "Derivative of RELU activation function l(z) is 0 for z<0",
    ],
    answer: [1, 2, 4],
    explaination:
      "The derivative of Leaky RELU activation function h(z) is 1 only for z>0, while for z<0, it has a very small value.",
    hint: null,
    type: "MCQ",
  },
  {
    question: "Choose the correct option for residuals in linear regression?",
    options: [
      "Residuals are horizontal offset, and the sum of residuals varies between [0,1]",
      "Residuals are horizontal offset, and the sum of residuals can be unity",
      "Residuals are vertical offset, and the sum of residuals is always unity",
      "Residuals are vertical offset, and the sum of residuals is always zero",
    ],
    answer: [4],
    explaination:
      " Residuals are vertical offset and the sum of residuals is always zero.",
    hint: null,
    type: "MCQ",
  },
  {
    question:
      " In two-category classification, according to the minimum risk decision rule, when will be decided w1 if:[ where, R- Risk Function, α1, and α2 are the actions corresponding to class w1 and w2 ] ",
    options: [
      "R(x/α1) < R(x/α2)",
      "R(α1/x) < R(α2/x)",
      "R(x/α1) > R(x/α2)",
      " R(α1/x) > R(α2/x)",
    ],
    answer: [2],
    explaination:
      "For deciding class w1, the conditional Risk for w1 is smaller than w2.",
    hint: null,
    type: "MCQ",
  },
  {
    question:
      "Which of the following are correct about the Hyperbolic tangent activation function?",
    options: [
      "Its output is zero centered",
      "Its value ranges between 0 to 1",
      "Its derivative value lies between 0 to 1",
      "Its output lies between -1 to 1",
    ],
    answer: [1, 3, 4],
    explaination:
      "The output range for the Hyperbolic Tangent activation function is between [-1,1].",
    hint: null,
    type: "MCQ",
  },
  {
    question:
      "True or False: A teacher uses the following Strategy for evaluation of multiple-choice questions(4 options) having a single correct option- //n For each correct question assign 4 marks and for an incorrect question deduct 1 mark. If the probability of opting for each question correctly is uniform, is the strategy fair?",
    options: ["TRUE", "FALSE"],
    answer: [2],
    explaination: null,
    hint: "Calculate the overall expectation value and then observe whether it’s zero or not.",
    type: "SCQ",
  },
];

export default Data;

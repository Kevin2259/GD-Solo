import React, { useState } from 'react';
import './quiz.css'

export default function Quiz() {
	const questions = [
		{
			questionText: 'What is a Direct Subsidized Loan?',
			answerOptions: [
				{ answerText: 'A student loan that the federal government pays interest on as long as the student is in school at least half-time', isCorrect: true },
				{ answerText: 'A loan that combines two or more education loans into a single loan, allowing the borrower to make a single monthly payment', isCorrect: false },
				{ answerText: 'A student loan where the student is responsible for the interest during the time they are in school, which means they must pay that interest while studying or have it rolled into their loan', isCorrect: false },
				{ answerText: 'A loan in which the interest rate is determined before loan is granted and remains constant as long as ontime payments are being made', isCorrect: false },
			],
		},
		{
			questionText: 'What does CSS stand for in the college application process?',
			answerOptions: [
				{ answerText: 'CSS for styling', isCorrect: false },
				{ answerText: 'College Scholarship Service', isCorrect: true },
				{ answerText: 'Cascading Style Sheet', isCorrect: false },
				{ answerText: 'College Sorority Service', isCorrect: false },
			],
		},
		{
			questionText: 'What does EFC stand for in the Fafsa Application Process?',
			answerOptions: [
				{ answerText: 'Expected Family Contribution', isCorrect: true },
				{ answerText: 'Extreme Fighting Championship ', isCorrect: false},
				{ answerText: 'Event Funding Contribution', isCorrect: false },
				{ answerText: 'Event Filiing Cleaning', isCorrect: false },
			],
		},
		{
			questionText: 'When does the Fafsa Application process start?',
			answerOptions: [
				{ answerText: 'December 7th', isCorrect: false },
				{ answerText: 'April 9th', isCorrect: false },
				{ answerText: 'July 27th', isCorrect: false },
				{ answerText: 'October 1st', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div id='layout-quiz'>
            <div className="quiz-app">
                {showScore ? (
                    <div className='score-section'>
                        You scored {score} out of {questions.length}
                    </div>
                ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            ))}
                        </div>
                    </>
                )}
            </div>
		</div>
	);
}
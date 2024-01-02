import React, { useState } from 'react'

const SelfReliance = () => {
    const [showFinalResult, setShowFinalResult] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);


    const questions = [
        {
            text: "Kendimi başarılı bir insan olarak görüyorum.",
            options: [
                { id: 0, text: "asla", isCorrect: false },
                { id: 1, text: "nadiren", isCorrect: true },
                { id: 3, text: "her zaman", isCorrect: true },

            ],
        },
        {
            text: "Diğer insanların yanında heyecanımı kontrol edebilirim",
            options: [
                { id: 0, text: "asla", isCorrect: false },
                { id: 1, text: "nadiren", isCorrect: true },
                { id: 2, text: "her zaman", isCorrect: true },
            ],
        },
        {
            text: "Hayattaki zorluklarla başa çıkabilirim.",
            options: [
                { id: 0, text: "asla", isCorrect: false },
                { id: 1, text: "nadiren", isCorrect: true },
                { id: 3, text: "her zaman", isCorrect: true },
            ],
        },
        {
            text: "Sosyal etkinliklere katılmaktan çekinmem.",
            options: [
                { id: 0, text: "asla", isCorrect: false },
                { id: 1, text: "nadiren", isCorrect: true },
                { id: 2, text: "her zaman", isCorrect: true },
            ],
        },
        {
            text: "Kendimi rahatça ifade edebiliyorum.",
            options: [
                { id: 0, text: "asla", isCorrect: false },
                { id: 1, text: "nadiren", isCorrect: true },
                { id: 3, text: "her zaman", isCorrect: true },
            ],
        },
        {
            text: "Sorumluluk almaktan çekinmem.",
            options: [
                { id: 0, text: "asla", isCorrect: false },
                { id: 2, text: "nadiren", isCorrect: true },
                { id: 4, text: "her zaman", isCorrect: true },
            ],
        },
        {
            text: "Ben kendimi seviyorum.",
            options: [
                { id: 0, text: "asla", isCorrect: false },
                { id: 1, text: "nadiren", isCorrect: true },
                { id: 2, text: "her zaman", isCorrect: true },
            ],
        },
    ];

    const optionClicked =(isCorrect)=>{
        if(isCorrect){
            setScore(score+1);
        }
        if(currentQuestion + 1 < questions.length){
            setCurrentQuestion(currentQuestion + 1);
        }else{
            setShowFinalResult(true);
        }
    }
    const restartGame = ()=>{
        setScore(0);
        setCurrentQuestion(0)
        setShowFinalResult(false);
    }

    return (
        <div className='App'>
            <div className="container">
                <h1>Öz Güven Testi</h1>
                <h2>Geçerli Puan: {score}</h2>
                {
                    showFinalResult ?
                        <div className="result">
                            <h1>Sonuç</h1>
                            <h2>
                                {questions.length} sorudan {score} sen kendine: {(score/questions.length)*100}%   güveniyorsun
                            </h2>
                            <button onClick={()=> restartGame()}>Testi Yeniden Başlat</button>
                        </div>
                        :
                        <div className="question-card">
                            <h2>{questions.length  } soru üzerinden {currentQuestion + 1}. soru</h2>
                            <h3>{questions[currentQuestion].text  }</h3>
                            <ul>
                                {questions[currentQuestion].options.map((option) =>{
                                    return(
                                        <li onClick={()=> optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
                                    )
                                })}
                            </ul>
                        </div>
                }


            </div>
        </div>
    )
}

export default SelfReliance
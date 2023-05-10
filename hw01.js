

var grade;
var studentScore;

function finalGrade(studentScore) {
    
    switch (studentScore) {
        case studentScore >= 90:
            grade = 'A';
            console.log(`당신의 점수는 ${studentScore}점이고, 학점은 ${grade}입니다.`);
            break;

        case studentScore >= 70 && studentScore < 90:
            grade = 'B';
            console.log(`당신의 점수는 ${studentScore}점이고, 학점은 ${grade}입니다.`);
            break;

        case studentScore >= 60 && studentScore < 70:
            grade = 'C';
            console.log(`당신의 점수는 ${studentScore}점이고, 학점은 ${grade}입니다.`);
            break;

        case studentScore >= 50 && studentScore < 60:
            grade = 'D';
            console.log(`당신의 점수는 ${studentScore}점이고, 학점은 ${grade}입니다.`);
            break;

        case studentScore < 50:
            grade = 'F';
            console.log(`당신의 점수는 ${studentScore}점이고, 학점은 ${grade}입니다.`);
            break;

        default:
            console.log("입력값이 올바르지 않습니다.")
    }
}


document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let score = 0;
    const totalQuestions = 5;

    // Clear all previous feedback
    document.querySelectorAll('.feedback').forEach(feedback => {
        feedback.textContent = '';
    });

    // Correct answers for each question
    const correctAnswers = {
        q1: 'B',
        q2: 'B',
        q3: 'C',
        q4: 'B',
        q5: 'C'
    };

    // Check each question
    for (let i = 1; i <= totalQuestions; i++) {
        const questionName = 'q' + i;
        const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);
        const feedbackElement = document.getElementById(`feedback${i}`);

        if (selectedOption) {
            if (selectedOption.value === correctAnswers[questionName]) {
                feedbackElement.textContent = '✔ Correct!';
                feedbackElement.style.color = 'green';
                score++;
            } else {
                feedbackElement.textContent = '✖ Incorrect!';
                feedbackElement.style.color = 'red';
            }
        } else {
            feedbackElement.textContent = '✖ No answer selected!';
            feedbackElement.style.color = 'red';
        }
    }

    alert(`Your score is ${score} out of ${totalQuestions}`);
});

function submitAssignment() {
    const assignmentText = document.getElementById('assignmentInput').value;
    if (assignmentText.trim() === "") {
        alert("Please write something before submitting!");
    } else {
        alert("Your assignment has been submitted. Please send it to the email provided.");
        document.getElementById('assignmentInput').value = ''; // Clear the textarea
    }
}